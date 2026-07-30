
import Vue from "vue";
import { GanttPlugin, Toolbar, Filter } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbarClick="toolbarClick" :columns="columns" :toolbar="toolbar" :allowFiltering='true'></ejs-gantt>
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
            columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
            toolbarClick: (args: ClickEventArgs) => {
                if (args.item.id === 'toolbarfilter') {
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.filterByColumn('TaskName', 'startswith', 'Identify');
                }
            },
            toolbar: [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter',align:'Right', prefixIcon: 'e-quickfilter' }],
      };
  },
  provide: {
      gantt: [ Toolbar, Filter  ]
  }

});