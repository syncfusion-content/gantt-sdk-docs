<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :highlightWeekends='true' :splitterSettings= "splitterSettings" :dayWorkingTime="dayWorkingTime" :timelineSettings="timelineSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Edit, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
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
const splitterSettings = {
    columnIndex: 1
};
const dayWorkingTime = [
    {from: 9,
    to: 18 }
 ];
 const timelineSettings={
timelineViewMode:'Day'
}
provide('gantt',  [ DayMarkers, Edit ]);
</script>