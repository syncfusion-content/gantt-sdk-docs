
import Vue from "vue";
import { GanttPlugin, Toolbar, Filter  } from "@syncfusion/ej2-vue-gantt";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
     <ejs-button id="enable" cssClass="e-info" v-on:click.native="enable">Enable</ejs-button>
     <ejs-button id="disable" cssClass="e-info" v-on:click.native="disable">Disable</ejs-button>
     <br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowFiltering='true'></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: editingData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            toolbar: ['QuickFilter', 'ClearFilter'],
            toolbarClick:  (args: ClickEventArgs) => {
                if (args.item.text === 'QuickFilter') {
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.filterByColumn('TaskName', 'startswith', 'Identify');
                }
                if (args.item.text === 'ClearFilter') {
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.clearFiltering();
                }
            },
      };
  },
  provide: {
      gantt: [ Toolbar, Filter ]
  },
   methods: {
      enable: function(e){
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
          ganttChart.toolbarModule.enableItems([ganttChart.element.id + '_QuickFilter', ganttChart.element.id + '_ClearFilter'], true);// enable toolbar items.
      },
      disable: function(e){
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
          ganttChart.toolbarModule.enableItems([ganttChart.element.id + '_QuickFilter', ganttChart.element.id + '_ClearFilter'], false);// disable toolbar items.
      },
  },

});