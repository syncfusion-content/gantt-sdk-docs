<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :columns="columns" :allowFiltering='true' :splitterSettings="splitterSettings" :allowSorting='true'
      :allowReordering='true' :editSettings="editSettings"></ejs-gantt>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GanttComponent as EjsGantt, Sort, Filter, Reorder, Edit } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks',
};
const height = '450px';
const splitterSettings = {
  position: '80%'
};
const editSettings = {
  allowEditing: true
};
const columns = [
  { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
  { field: 'TaskName', headerText: 'Task Name', width: '150', allowSorting: false },
  { field: 'StartDate', headerText: 'Start Date', width: '150', allowEditing: false },
  { field: 'Duration', headerText: 'Duration', width: '150', allowFiltering: false },
  { field: 'Progress', headerText: 'Progress', width: '150', allowReordering: false },
];
provide('gantt', [Sort, Filter, Reorder, Edit]);
</script>