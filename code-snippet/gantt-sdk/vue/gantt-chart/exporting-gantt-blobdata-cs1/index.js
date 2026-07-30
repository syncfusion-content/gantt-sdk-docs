
import Vue from "vue";
import { GanttPlugin, Toolbar, PdfExport, Selection,ExcelExport } from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
    <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :allowExcelExport='true' :excelExportComplete='excelExpComplete' :pdfExportComplete='pdfExportComplete'  :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :height="height"></ejs-gantt>
</div>
`,

data: function() {
    return{
      data: projectNewData,
      height:'450px',
      taskFields: {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          duration: 'Duration',
          progress: 'Progress',
          child: 'subtasks'
      },
      toolbar: ['PdfExport','ExcelExport'],
    
    };
},
methods: {
  toolbarClick: (args) => {
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
              if (args.item.id === 'GanttContainer_pdfexport') {
                  ganttChart.pdfExport(null,null,null,true);
              }
              if (args.item.id === 'GanttContainer_excelexport') {
                  ganttChart.excelExport(null,null,null,true);
              }
          },
      excelExpComplete: function (args) {
        //This event will be triggered when excel exporting.
        args.promise.then((e) => {
          //In this `then` function, we can get blob data through the arguments after promise resolved.
          this.exportBlob(e.blobData);
        });
      },
      pdfExportComplete: function (args) {
        //This event will be triggered when pdf exporting.
        args.promise.then((e) => {
          //In this `then` function, we can get blob data through the arguments after promise resolved.
          this.exportBlob(e.blobData);
        });
      },
      exportBlob: function (blob) {
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'Export';
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    },
provide: {
    gantt: [Toolbar, PdfExport,Selection,ExcelExport]
}

});