<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :eventMarkers = "eventMarkers"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { GanttComponent as EjsGantt, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    resourceInfo: 'resources',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const eventMarkers = [
    {
        day: '04/10/2019',
        cssClass: 'e-custom-event-marker',
        label: 'Project approval and kick-off'
    }
];
provide('gantt', [DayMarkers]);
</script>
