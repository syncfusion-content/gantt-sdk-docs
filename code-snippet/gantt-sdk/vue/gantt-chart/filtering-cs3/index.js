
import Vue from "vue";
import { GanttPlugin, Filter, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { projectNewData } from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(DropDownListPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
     <table>
            <tr>
                <td style="width: 70%">
                    <ejs-dropdownlist id="filter-type" value='Parent' :dataSource="dataSource" :fields = "fields" :change ="change"> Filter Hierarchy </ejs-dropdownlist>
                </td>
            </tr>
        </table>
         <br> <br>  
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height="height" :columns="columns" :splitterSettings = "splitterSettings" :allowFiltering= "true"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: projectNewData,
            height: '450px',
            columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        splitterSettings:{
            columnIndex:3
            },
        dataSource: [
            { id: 'Parent', mode: 'Parent' },
            { id: 'Child', mode: 'Child' },
            { id: 'Both', mode: 'Both' },
            { id: 'None', mode: 'None' },
        ],
        fields: { text: 'mode', value: 'id' },
      };
  },
  provide: {
      gantt: [ Filter ]
  },
  methods: {
        change: function (e) {
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            var mode = e.value;
            ganttChart.filterSettings.hierarchyMode = mode;
            ganttChart.clearFiltering();
        }
  },

});