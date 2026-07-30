
import Vue from "vue";
import { GanttPlugin, Resize } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :splitterSettings="splitterSettings" :allowResizing = 'true'></ejs-gantt>
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
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '200',minWidth: '150' ,maxWidth: '250',},
            { field: 'Duration', headerText: 'Duration', width: '100',minWidth: '50' ,maxWidth: '200' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
        splitterSettings:{
            columnIndex:4
          },
          };
  },
  provide: {
      gantt: [Resize]
  }

});