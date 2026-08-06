<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :height="height" :taskFields="taskFields"
            :gridLines="gridLines"></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
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
const gridLines = 'Both';
</script>