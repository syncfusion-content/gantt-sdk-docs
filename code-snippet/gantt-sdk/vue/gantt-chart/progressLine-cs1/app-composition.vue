<template>
    <ejs-gantt
        :dataSource="data"
        :taskFields="taskFields"
        :editSettings="editSettings"
        :progressLine="progressLine"
        :projectStartDate="projectStartDate"
        :projectEndDate="projectEndDate"
        height="450px">
    </ejs-gantt>
</template>
<script setup>
import { provide } from 'vue';
import { GanttComponent as EjsGantt, Edit, ProgressLine } from '@syncfusion/ej2-vue-gantt';
import { GanttData } from './data-source.js';

const data = GanttData;
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};
const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowTaskbarEditing: true
};
const progressLine = {
    statusDate: new Date('04/07/2026'),
    lineColor: '#e3165b',
    lineWidth: 2
};
const projectStartDate = new Date('04/05/2026');
const projectEndDate = new Date('04/30/2026');
provide('gantt', [Edit, ProgressLine]);
</script>
