
import Vue from "vue";
import { GanttPlugin, Sort, Filter, ColumnMenu } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :splitterSettings = "splitterSettings" :showColumnMenu = 'true' :allowSorting = 'true' :columnMenuClick='columnMenuClick' :columnMenuItems='columnMenuItems'
        :sortSettings='sortSettings'></ejs-gantt>
    </div>
`,

  data: function() {
      return{
         data: editingData,
         columnMenuItems: [{text:'Clear Sorting', id:'ganttclearsorting'}],
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
        sortSettings: {columns:[{direction: "Ascending", field: "TaskName"}]}
      };
  },
    provide: {
      gantt: [ Sort, Filter, ColumnMenu ]
  },
  methods: {
      columnMenuClick: function(args) {
        if(args.item.id === 'ganttclearsorting'){
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            ganttChart.clearSorting();
        }
    }
  }

});