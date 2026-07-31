<template>
    <div>
        <ejs-button id="reorder" cssClass="e-info" v-on:click.native="change">Reorder</ejs-button>
        <br><br><br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :columns="columns" :allowReordering='true' :splitterSettings="splitterSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Reorder } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { editingData } from './data-source.js';
const gantt = ref(null); 
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
const change = function (e) {
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.reorderColumns(['TaskID', 'TaskName'], 'Progress');
}
provide('gantt', [Reorder]);
</script>