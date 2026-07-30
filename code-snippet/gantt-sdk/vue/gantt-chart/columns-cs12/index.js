
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { colSpanData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :splitterSettings = "splitterSettings" :queryCellInfo='queryCellInfoEvent'  gridLines='Both'></ejs-gantt>
    </div>
`,

  data: function() {
      return{
         data: colSpanData,
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
        columns: [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'TaskName', headerText: 'Task Name' },
            { field: 'work1', headerText: 'Work 1' },
            { field: 'work2', headerText: 'Work 2' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress'}
        ],
      };
    }
    methods: {
       queryCellInfoEvent: function (args) {
        switch(args.data.TaskID) {
            case 1:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 2:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 3:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 4:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 5  :
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 7:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
        }
    }
   }

});