<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :columns="columns" :allowReordering='true' :splitterSettings="splitterSettings" :columnDrag='columnDrag'
            :columnDrop='columnDrop' :columnDragStart='columnDragStart'></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Reorder } from "@syncfusion/ej2-vue-gantt";
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
const splitterSettings = {
    columnIndex: 3
};
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
]
const columnDragStart = function () {
    alert('columnDragStart event is Triggered');
}
const columnDrag = function () {
    alert('columnDrag event is Triggered');
}
const columnDrop = function () {
    alert('columnDrop event is Triggered');
}
provide('gantt', [Reorder]);
</script>