<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar"
        :editSettings= "editSettings" :enableImmutableMode='true'></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Edit, Selection, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
const data = projectNewData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const toolbar = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'Indent', 'Outdent'];
const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};
provide('gantt',  [ Edit, Selection, Toolbar]);
</script>