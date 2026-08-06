
import Vue from "vue";
import { GanttPlugin, Reorder } from "@syncfusion/ej2-vue-gantt";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-button id="reorder" cssClass="e-info" v-on:click.native="change">Reorder</ejs-button>
        <br><br><br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height="height" :columns = "columns" :allowReordering = 'true' :splitterSettings = "splitterSettings"></ejs-gantt>
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
      change: function(e){
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            ganttChart.reorderColumns(['TaskID','TaskName'],'Progress');
        }
    },

});