
import Vue from "vue";
import { GanttPlugin, Reorder } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :allowReordering = 'true' :splitterSettings = "splitterSettings"
        :columnDrag='columnDrag' :columnDrop='columnDrop' :columnDragStart='columnDragStart'></ejs-gantt>
    </div>
`,

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
            columnIndex:3
            },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ]
      };
  },
    provide: {
        gantt: [Reorder]
    },
    methods: {
        columnDragStart: function() {
            alert('columnDragStart event is Triggered');
        },
        columnDrag: function() {
            alert('columnDrag event is Triggered');
        },
        columnDrop: function() {
            alert('columnDrop event is Triggered');
        }
    }

});