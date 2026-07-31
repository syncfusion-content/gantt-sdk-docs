<template>
     <div>
        <ejs-gantt :dataSource="data" :allowRowDragAndDrop='true' :selectionSettings="selectionSettings" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ganttData } from "./data-source.js";
const data = ganttData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const selectionSettings = {
    type: 'Multiple'
};
provide('gantt',  [ RowDD, Edit, Selection ]);
</script>