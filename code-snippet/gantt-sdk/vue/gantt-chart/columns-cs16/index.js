
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :rowHeight = "rowHeight" :splitterSettings = "splitterSettings"></ejs-gantt>
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
            rowHeight:50,
        splitterSettings:{
            columnIndex:3
            },
            height:'450px',
            columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'Progress', headerText: 'Progress', width: '150',format: 'C' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' }
        ]
      };
  },

});