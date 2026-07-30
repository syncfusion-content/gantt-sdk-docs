<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :columns="columns" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :beforePdfExport="beforePdfExport" :height="height"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, PdfExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import {editingData  } from './data-source.js';
const gantt = ref(null);
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentId',
};
const columns = [
    { field: 'TaskId', headerText:  'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText:  'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150'},
    { field: 'Duration',headerText: 'Duration', width: '150', visible: false },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
const toolbar = ['PdfExport'];
const toolbarClick = (args) => {
    if (args.item.id === 'GanttContainer_pdfexport') {
        var ganttChart = gantt.value.ej2Instances;
        ganttChart.pdfExport();
    }
};
const beforePdfExport = (args) => {
    var obj = gantt.value.ej2Instances;
    obj.treeGrid.columns[3].visible = true;
    obj.treeGrid.columns[2].visible = false;
}
provide('gantt', [Toolbar, PdfExport]);
</script>