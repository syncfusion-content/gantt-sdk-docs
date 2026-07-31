<template>
     <div>
        <ejs-button id="scrolldate" cssClass="e-info" v-on:click.native="changep">Scroll To Date</ejs-button>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :splitterSettings="splitterSettings"></ejs-gantt>
        <br><br><br>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { projectNewData  } from './data-source.js';
const gantt = ref(null);
const data = projectNewData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const splitterSettings={
    position: "50%"
    }
const changep = function(e){
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.scrollToDate('04/26/2019');
};
</script>
