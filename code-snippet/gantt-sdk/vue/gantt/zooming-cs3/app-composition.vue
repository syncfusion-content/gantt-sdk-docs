<template>
     <div>
       <ejs-button id="zoomIn" cssClass="e-info" v-on:click="zoomIn">ZoomIn</ejs-button>
       <ejs-button id="zoomOut" cssClass="e-info" v-on:click="zoomOut">ZoomOut</ejs-button>
       <ejs-button id="fitToProject" cssClass="e-info" v-on:click="fitToProject">FitToProject</ejs-button>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { projectNewData } from './data-source.js';
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
const zoomIn = function(){
  gantt.value.zoomIn();
};
const zoomOut = function(){
   gantt.value.zoomOut();
};
const fitToProject = function(){
   gantt.value.fitToProject();
};
</script>