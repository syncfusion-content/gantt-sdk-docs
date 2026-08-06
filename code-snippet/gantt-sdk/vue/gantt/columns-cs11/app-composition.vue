<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :columns="columns" :splitterSettings="splitterSettings" :allowResizing='true'></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Resize } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
};
const height = '450px';
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '200', minWidth: '150', maxWidth: '250', },
    { field: 'Duration', headerText: 'Duration', width: '100', minWidth: '50', maxWidth: '200' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
const splitterSettings = {
    columnIndex: 4
}
provide('gantt', [Resize]);
</script>