<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :weekWorkingTime="weekWorkingTime" :dataSource="data" :taskFields = "taskFields" :height = "height" :highlightWeekends='true' :splitterSettings= "splitterSettings" :timelineSettings="timelineSettings"></ejs-gantt>
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
const weekWorkingTime = [{ dayOfWeek: 'Monday', timeRange: [{ from: 10, to: 18 }] },
                    { dayOfWeek: 'Tuesday', timeRange: [{ from: 10, to: 18 }] }];
 const timelineSettings={
timelineViewMode:'Day'
}
provide('gantt',  [ DayMarkers, Edit ]);
</script>