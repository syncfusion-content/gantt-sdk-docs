<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :columns="columns" :splitterSettings="splitterSettings" :rowDataBound="rowDataBound"
            :queryCellInfo='queryCellInfo'></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    progress: 'Progress',
    child: 'subtasks'
};
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
];
const splitterSettings = {
    columnIndex: 3
};
const queryCellInfo = function (args) {
    if (args.column.field == "Progress") {
        if (args.data.Progress < 25)
            args.cell.style.backgroundColor = "lightgreen"
        else
            args.cell.style.backgroundColor = "yellow"
    }
}
const rowDataBound = function (args) {
    if (args.data.TaskID == 4)
        args.row.style.backgroundColor = "red"
}
</script>