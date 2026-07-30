
import Vue from "vue";
import { GanttPlugin, Toolbar, ExcelExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ganttData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowExcelExport='true' :height="height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
        data: ganttData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        toolbar: ['ExcelExport', 'CsvExport'],
        toolbarClick: (args: ClickEventArgs) => {
                if (args.item.id === 'GanttContainer_excelexport') {
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.excelExport();
                } else if(args.item.id === 'GanttContainer_csvexport') {
                    var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttObj.csvExport();
                }
            },
      };
  },
  provide: {
      gantt: [Toolbar, ExcelExport]
  }

});