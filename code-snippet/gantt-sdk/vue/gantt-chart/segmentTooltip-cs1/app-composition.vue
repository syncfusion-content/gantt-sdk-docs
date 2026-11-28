<template>
    <ejs-gantt
        :dataSource="data"
        :taskFields="taskFields"
        :tooltipSettings="tooltipSettings"
        :projectStartDate="projectStartDate"
        :projectEndDate="projectEndDate"
        height="450px">
    </ejs-gantt>
</template>
<script setup>
import { GanttComponent as EjsGantt } from '@syncfusion/ej2-vue-gantt';
import { GanttData } from './data-source.js';

const data = GanttData;
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    segments: 'Segments'
};
const tooltipSettings = { showTooltip: true, showSegmentTooltip: true };
const projectStartDate = new Date('04/05/2026');
const projectEndDate = new Date('04/10/2026');
</script>
