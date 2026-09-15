<template>
    <div>
        <ejs-gantt ref="gantt" id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height" :columns="columns" :allowedDependencyTypes="allowedDependencyTypes" :allowParentDependency="allowParentDependency"></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { data } from './data-source.js';

const height = '550px';
const allowedDependencyTypes = ['SF'];
const allowParentDependency = true;
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
};
const columns = [
    { field: 'TaskID', headerText: 'Task ID', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' }
];
</script>
