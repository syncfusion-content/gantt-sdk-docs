<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :columns="columns" :splitterSettings="splitterSettings" :showColumnMenu='true' :allowSorting='true'
      :columnMenuClick='columnMenuClick' :columnMenuItems='columnMenuItems' :sortSettings='sortSettings'></ejs-gantt>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Sort, Filter, ColumnMenu } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const gantt = ref(null);
const data = editingData;
const columnMenuItems = [{ text: 'Clear Sorting', id: 'ganttclearsorting' }];
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
  position: '100%'
};
const columns = [
  { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
  { field: 'TaskName', headerText: 'Task Name', width: '150' },
  { field: 'StartDate', headerText: 'Start Date', width: '150' },
  { field: 'Duration', headerText: 'Duration', width: '150' },
  { field: 'Progress', headerText: 'Progress', width: '150' },
];
const sortSettings = { columns: [{ direction: "Ascending", field: "TaskName" }] };
const columnMenuClick = function (args) {
  if (args.item.id === 'ganttclearsorting') {
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.clearSorting();
  }
}
provide('gantt', [Sort, Filter, ColumnMenu]);
</script>