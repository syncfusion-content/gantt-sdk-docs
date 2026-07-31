<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :allowFiltering = 'true' :splitterSettings = "splitterSettings" :allowSorting = 'true' :allowReordering = 'true' :editSettings = "editSettings"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Sort, Filter, Reorder, Edit } from "@syncfusion/ej2-vue-gantt";
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
            position: '80%'
          },
        editSettings: {
            allowEditing: true
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150', allowSorting: false },
            { field: 'StartDate', headerText: 'Start Date', width: '150', allowEditing: false },
            { field: 'Duration', headerText: 'Duration', width: '150', allowFiltering: false },
            { field: 'Progress', headerText: 'Progress', width: '150', allowReordering: false },
        ],
      };
  },
    provide: {
      gantt: [ Sort, Filter, Reorder, Edit ]
  }
};
</script>