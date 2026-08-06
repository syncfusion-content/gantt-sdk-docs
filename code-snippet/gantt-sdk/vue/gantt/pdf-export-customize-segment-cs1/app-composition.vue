<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :gridLines="gridLines" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryTaskbarInfo="pdfQueryTaskbarInfo" 
    :height="height" :editSettings= "editSettings" :queryTaskbarInfo="queryTaskbarInfo">
   
      <e-columns>
        <e-column field='TaskID' headerText='Task ID'></e-column>
        <e-column field='TaskName' headerText='Task Name'></e-column>
        <e-column field='StartDate' headerText='Start Date'></e-column>
        <e-column field='EndDate' headerText='End Date'></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport, Edit } from "@syncfusion/ej2-vue-gantt";
import { ganttData } from './data-source.js';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
const gantt = ref(null);
const data = ganttData;
const height = '450px';
const taskFields = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
  endDate: "EndDate",
  duration: "Duration",
  progress: "Progress",
  child: "subtasks",
  segments: "Segments"
};
const editSettings = {
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
};
const gridLines = 'Both';
const toolbar = ['PdfExport'];
const toolbarClick = (args) => {
  if (args.item.id === 'GanttContainer_pdfexport') {
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.pdfExport();
  }
};
const pdfQueryTaskbarInfo = (args) => {
  if (args.taskbar.taskSegmentStyles) {
    args.taskbar.taskSegmentStyles[1].taskColor = new PdfColor(255, 0, 0);
    args.taskbar.taskSegmentStyles[1].progressColor = new PdfColor(0, 128, 0);
    args.taskbar.taskSegmentStyles[1].taskBorderColor = new PdfColor(0, 0, 0);
  }
};
const queryTaskbarInfo = (args) => {
  if (args.data.taskData.Segments) {
    var segmentIndex = args.taskbarElement.dataset.segmentIndex;
    if (Number(segmentIndex) === 1) {
      args.taskbarBgColor = 'red';
      args.taskbarBorderColor = 'black';
      args.progressBarBgColor = "green";
    }
  }
}

provide('gantt', [Toolbar, PdfExport, Edit]);
</script>