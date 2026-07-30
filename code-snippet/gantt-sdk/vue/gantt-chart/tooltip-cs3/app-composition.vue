<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :columns="columns"></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
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
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '150', clipMode: 'EllipsisWithTooltip' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150',clipMode: 'Clip' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
</script>