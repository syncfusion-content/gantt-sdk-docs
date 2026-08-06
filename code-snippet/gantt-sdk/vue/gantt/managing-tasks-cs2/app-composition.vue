<template>
     <div>
        <ejs-gantt ref='gantt' id="contextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :toolbar="toolbar" :enableContextMenu="true" :allowSorting="true" :allowResizing= "true"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, ContextMenu, Edit, Toolbar, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
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
const editSettings = {
    allowAdding: true
};
const toolbar = ['Add'];
provide('gantt',  [ ContextMenu, Edit, Toolbar, Selection]);
</script>
