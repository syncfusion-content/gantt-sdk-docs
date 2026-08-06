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
const splitterSettings = {
    columnIndex: 4
};
const height = '450px';
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
provide('gantt', [Resize]);
</script>