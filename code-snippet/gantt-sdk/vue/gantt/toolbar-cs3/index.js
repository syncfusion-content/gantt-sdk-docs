
import Vue from "vue";
import { GanttPlugin, Toolbar, Filter  } from "@syncfusion/ej2-vue-gantt";
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :toolbarClick="toolbarClick" :toolbar="toolbar" :allowFiltering='true'></ejs-gantt>
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
            toolbarClick:  (args: ClickEventArgs) => {
                if (args.item.text === 'Click') {
                    alert("Custom toolbar click...");
                }
            },
            toolbar: ['ExpandAll', 'CollapseAll', { text: 'Click', tooltipText: 'Click',id: 'Click' }],
            };
  },
  provide: {
      gantt: [ Toolbar, Filter ]
  },

});