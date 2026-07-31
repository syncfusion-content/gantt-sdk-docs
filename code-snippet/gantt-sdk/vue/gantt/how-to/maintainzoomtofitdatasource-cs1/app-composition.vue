<template>
     <div>
        <ejs-button id="changeData" cssClass="e-info" v-on:click.native="changeData">Change Data</ejs-button>
        <br><br><br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :dataBound="dataBound"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { projectNewData, data } from './data-source.js';
const gantt = ref(null);
const data = projectNewData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const toolbar = ['ZoomToFit'];
const dataBound = function(args) {
  var obj = gantt.value.ej2Instances;
  obj.fitToProject();
};
provide('gantt',  [Toolbar]);
</script>