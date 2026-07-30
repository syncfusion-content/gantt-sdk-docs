<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :columns="columns"
            :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryCellInfo="pdfQueryCellInfo"
            :height="height"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar, PdfExport } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { editingData } from './data-source.js';
import { PdfColor } from '@syncfusion/ej2-pdf-export';

export default {
    name: "App",
    components: {
        "ejs-gantt": GanttComponent
    },
    data: function () {
        return {
            data: editingData,
            height: '450px',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID:'ParentId'
            },
            columns: [
                { field: 'TaskId', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '150' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150', visible: false },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
            toolbar: ['PdfExport'],
            toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_pdfexport') {
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.pdfExport();
                }
            },
            pdfQueryCellInfo: (args) => {
                if (args.column.field == 'Progress') {
                    if (args.value < 50) {
                        args.style.backgroundColor = new PdfColor(240, 128, 128);
                    } else {
                        args.style.backgroundColor = new PdfColor(165, 105, 189);
                    }
                }
            }
        }
    },
    provide: {
        gantt: [Toolbar, PdfExport]
    }
};
</script>