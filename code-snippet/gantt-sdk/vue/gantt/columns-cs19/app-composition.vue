<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :treeColumnIndex='2' :splitterSettings="splitterSettings" :allowResizing='true'></ejs-gantt>
  </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
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
const splitterSettings = {
  columnIndex: 3
};
const height = '450px';
</script>