<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :allowFiltering = 'true' :splitterSettings = "splitterSettings" :showColumnMenu = 'true' :allowSorting = 'true' :columnMenuOpen='columnMenuOpen'></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Sort, Filter, ColumnMenu } from "@syncfusion/ej2-vue-gantt";
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
            position: '100%'
          },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
      };
  },
    provide: {
      gantt: [ Sort, Filter, ColumnMenu ]
  },
   methods: {
      columnMenuOpen: function (args) {
        for (let item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'TaskName') {
                item.hide = true;
            } else {
                item.hide = false;
            }
        }
    }
  },
};
</script>