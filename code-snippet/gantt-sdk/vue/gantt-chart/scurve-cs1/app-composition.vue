<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :treeColumnIndex="1" :columns="columns" :allowSelection="true" :splitterSettings="splitterSettings"
      :editSettings="editSettings" :toolbar="toolbar" :timelineSettings="timelineSettings"
      :sCurveSettings="sCurveSettings" :projectStartDate="projectStartDate"
      :projectEndDate="projectEndDate"></ejs-gantt>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, SCurve, Edit, Toolbar, Selection } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';
const data = GanttData;
const height = '450px';
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  parentID: 'ParentID'
}
const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
}
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const columns = [
  { field: 'TaskID', headerText: 'ID', width: 70 },
  { field: 'TaskName', headerText: 'Task Name', width: 220 },
  { field: 'StartDate', headerText: 'Start Date', width: 130, format: 'yMd' },
  { field: 'Duration', headerText: 'Duration', width: 100 },
  { field: 'Progress', headerText: 'Progress (%)', width: 120 }
];
const splitterSettings = { columnIndex: 2 };
const timelineSettings = {
  topTier: { unit: 'Week' },
  bottomTier: { unit: 'Day' }
};
const sCurveSettings = {
  visible: true,
  dataSet: [
    { field: 'Progress', color: '#4CAF50' },
    { field: 'Duration', color: '#2196F3' }
  ]
};
const projectStartDate = new Date(2025, 11, 28);
const projectEndDate = new Date(2026, 1, 15);
provide('gantt', [SCurve, Edit, Toolbar, Selection]);
</script>
