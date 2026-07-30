<template>
  <div>
    <ejs-gantt ref='gantt' id="contextMenu" :dataSource="data" :taskFields="taskFields" :height="height"
      :editSettings="editSettings" :enableContextMenu="true" :allowSorting="true" :allowResizing="true"></ejs-gantt>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, ContextMenu, Edit, Sort, Resize, Selection } from "@syncfusion/ej2-vue-gantt";
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
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true
};
provide('gantt', [ContextMenu, Edit, Sort, Resize, Selection]);
</script>