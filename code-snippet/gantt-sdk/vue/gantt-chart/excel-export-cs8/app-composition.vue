<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowExcelExport='true' :height = "height" :treeColumnIndex="1"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, ExcelExport, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ganttData } from './data-source.js';
const gantt = ref(null);
const data = ganttData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const toolbar = ['ExcelExport'];
const toolbarClick = (args) => {
        if (args.item.id === 'GanttContainer_excelexport') {
            var excelExportProperties = {
                theme:
                {
                    header: { fontName: 'Segoe UI', fontColor: '#666666' },
                    record: { fontName: 'Segoe UI', fontColor: '#666666' }
                }
            };
            var ganttObj = gantt.value.ej2Instances;
            ganttObj.excelExport(excelExportProperties);
        }
    };
provide('gantt',  [Toolbar, ExcelExport]);
</script>