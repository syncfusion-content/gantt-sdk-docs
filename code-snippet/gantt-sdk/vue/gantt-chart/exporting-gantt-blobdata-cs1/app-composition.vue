<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :allowExcelExport='true' :excelExportComplete='excelExpComplete' :pdfExportComplete='pdfExportComplete'  :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :height="height"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, PdfExport, Selection,ExcelExport } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { projectNewData  } from './data-source.js';
const gantt = ref(null);
const data = projectNewData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const toolbar = ['PdfExport','ExcelExport'];
const toolbarClick = (args) => {
        var ganttChart = gantt.value.ej2Instances;
            if (args.item.id === 'GanttContainer_pdfexport') {
                ganttChart.pdfExport(null,null,null,true);
            }
            if (args.item.id === 'GanttContainer_excelexport') {
                ganttChart.ganttObj.excelExport(excelExportProperties);
            }
        };
const excelExpComplete = (args) => {
  //This event will be triggered when excel exporting.
  args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
    exportBlob(e.blobData);
  });
};
const pdfExportComplete = (args) => {
  //This event will be triggered when pdf exporting.
  args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
    exportBlob(e.blobData);
  });
};
const exportBlob = (blob) => {
  let a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = 'Export';
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
provide('gantt',  [Toolbar, PdfExport,Selection,ExcelExport]);
</script>