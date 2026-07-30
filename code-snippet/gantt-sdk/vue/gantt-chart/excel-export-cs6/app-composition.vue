<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :columns="columns"
        :toolbar="toolbar" :toolbarClick="toolbarClick" :excelExportComplete="excelExportComplete" :allowExcelExport='true'
        :height="height" :treeColumnIndex="1"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { ref } from "vue";
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
const columns = [
    { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText:  'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
    { field: 'Duration',headerText: 'Duration', width: '150'},
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
const toolbar = ['ExcelExport', 'CsvExport'];
const toolbarClick = (args) => {
        if (args.item.id === 'GanttContainer_excelexport') {
            var ganttObj = gantt.value.ej2Instances;
            ganttObj.treeGrid.grid.columns[0].visible = true;
            ganttObj.treeGrid.grid.columns[3].visible = false;
            ganttObj.excelExport();
        } else if(args.item.id === 'GanttContainer_csvexport') {
            var ganttObj = gantt.value.ej2Instances;
            ganttObj.treeGrid.grid.columns[0].visible = true;
            ganttObj.treeGrid.grid.columns[3].visible = false;
            ganttObj.csvExport();
        }
    };
const excelExportComplete = () => {
    var ganttObj = gantt.value.ej2Instances;
    ganttObj.treeGrid.grid.columns[0].visible = false;
    ganttObj.treeGrid.grid.columns[3].visible = true;
};
provide('gantt',  [Toolbar, ExcelExport]);
</script>
