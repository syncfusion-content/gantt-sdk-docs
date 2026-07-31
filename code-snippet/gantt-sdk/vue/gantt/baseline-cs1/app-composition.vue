<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :renderBaseline="true" baselineColor='red' :taskFields="taskFields" :height="height"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Selection } from "@syncfusion/ej2-vue-gantt";
import { baselineData } from './data-source.js';
const data = baselineData;

const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    baselineStartDate:"BaselineStartDate",
    baselineEndDate:"BaselineEndDate",
    baselineDuration: "BaselineDuration",
    parentID: 'ParentID'
}

const height = '430px';
provide('gantt', [Selection]);
</script>