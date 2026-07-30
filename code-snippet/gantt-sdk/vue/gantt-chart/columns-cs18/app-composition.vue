<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :columns="columns" :splitterSettings="splitterSettings" :allowResizing='true'></ejs-gantt>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Resize } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks',
}
const height = '450px';
const splitterSettings = {
  columnIndex: 4
};
const columns = [
  { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
  { field: 'TaskName', headerText: 'Task Name', width: '200', hideAtMedia: '(min-width: 700px)' },
  { field: 'StartDate', headerText: 'Start Date', width: '150' },
  { field: 'Duration', headerText: 'Duration', width: '100', hideAtMedia: '(max-width: 500px)' },
  { field: 'Progress', headerText: 'Progress', width: '150' },
];
provide('gantt', [Resize]);
</script>