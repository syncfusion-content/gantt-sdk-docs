<template>
     <div>
        <ejs-button id="scrolltop" cssClass="e-info" v-on:click.native="changep">Set Scroll Top</ejs-button>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :splitterSettings="splitterSettings"></ejs-gantt>
        <br><br><br>
    </div>
</template>
<script setup>

import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { editingData  } from './data-source.js';
const data = editingData;
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
    ganttChart.ganttChartModule.scrollObject.setScrollTop(500);
};
</script>