<template>
    <div>
        <ejs-button id="show" cssClass="e-info" v-on:click.native="show">Show</ejs-button>
        <ejs-button id="hide" cssClass="e-info" v-on:click.native="hide">Hide</ejs-button>
        <br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :columns="columns" :splitterSettings="splitterSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
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
    position: '80%'
};
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
];
const show = function (e) {
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.showColumn(["Duration"]);
}
const hide = function (e) {
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.hideColumn(["Duration"]);
}
</script>