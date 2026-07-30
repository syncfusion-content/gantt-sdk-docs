<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar"
            :toolbarClick="toolbarClick" :allowPdfExport='true' :height="height"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, PdfExport, Selection, PdfExportProperties } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { editingData,image } from './data-source.js';
const gantt = ref(null);
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const toolbar = ['PdfExport'];
const toolbarClick = (args) => {
    if (args.item.id === 'GanttContainer_pdfexport') {
        var exportProperties = {
            header: {
                fromTop: 0,
                height: 150,
                contents: [
                    {
                        type: 'Text',
                        value: 'Welcome',
                        position: { x: 380, y: 0 },
                        style: { textBrushColor: '#C25050', fontSize: 25 },
                    },
                    {
                        type: 'Image',
                        src: image,
                        position: { x: 400, y: 70 },
                        size: { height: 50, width: 50 },
                    },
                ]
            },
            footer: {
                fromBottom: 160,
                height: 100,
                contents: [
                    {
                        type: 'Text',
                        value: 'Thank you!',
                        position: { x: 350, y: 40 },
                        style: { textBrushColor: '#C67878', fontSize: 14 }
                    },
                    {
                        type: 'PageNumber',
                        pageNumberType: 'Arabic',
                        format: 'Page {$current} of {$total}',
                        position: { x: 0, y: 25 },
                        size: { height: 50, width: 100 },
                        style: { textBrushColor: '#000000', hAlign: 'Center', vAlign: 'Bottom' }
                    }
                ]
            },
        };
        var ganttChart = gantt.value.ej2Instances;
        ganttChart.pdfExport(exportProperties);
    }
};
provide('gantt', [Toolbar, PdfExport]);
</script>