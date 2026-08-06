<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :splitterSettings = "splitterSettings" :allowResizing = 'true'></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Resize } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: editingData,
            taskFields: {
             id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            },
            height:'450px',
            splitterSettings:{
            columnIndex:4
          },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '200',hideAtMedia: '(min-width: 700px)'},
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '100', hideAtMedia: '(max-width: 500px)'},
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ]
      };
  },
  provide: {
      gantt: [ Resize ]
  }
};
</script>