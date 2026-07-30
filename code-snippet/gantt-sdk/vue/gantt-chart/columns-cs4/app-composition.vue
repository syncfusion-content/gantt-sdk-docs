<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :columns="columns" :allowFiltering='true' :splitterSettings="splitterSettings" :showColumnMenu='true'
      :allowSorting='true' :columnMenuClick='columnMenuClick' :columnMenuOpen='columnMenuOpen'></ejs-gantt>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Sort, Filter, ColumnMenu } from "@syncfusion/ej2-vue-gantt";
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
  position: '100%'
};
const columns = [
  { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
  { field: 'TaskName', headerText: 'Task Name', width: '150' },
  { field: 'StartDate', headerText: 'Start Date', width: '150' },
  { field: 'Duration', headerText: 'Duration', width: '150' },
  { field: 'Progress', headerText: 'Progress', width: '150' },
];
const columnMenuOpen = function () {
  alert('columnMenuOpen event is Triggered');
}
const columnMenuClick = function () {
  alert('columnMenuClick event is Triggered');
}
provide('gantt', [Sort, Filter, ColumnMenu]);
</script>