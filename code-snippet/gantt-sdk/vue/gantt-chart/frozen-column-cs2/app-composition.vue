<template>
  <div>
    <ejs-gantt
      id="GanttContainer"
      :dataSource="data"
      :taskFields="taskFields"
      :height="height"
      :treeColumnIndex="treeColumnIndex"
      :splitterSettings="splitterSettings"
      :gridLines="gridLines"
      :labelSettings="labelSettings"
      :columns="columns"
    ></ejs-gantt>
  </div>
</template>

<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from "./data-source.js";

const data = GanttData;
const height = "430px";
const treeColumnIndex = 1;
const gridLines = "Both";

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  endDate: 'EndDate',
  progress: 'Progress',
  parentID: 'ParentID',
};

const splitterSettings = { position: "65%" };
const labelSettings = { taskLabel: "Progress" };

const columns = [
  { field: 'TaskID', headerText: 'Task ID', isFrozen: true },
  { field: 'TaskName', headerText: 'Task Name', width: 220, isFrozen: true },
  { field: 'StartDate', headerText: 'Start Date' },
  { field: 'Duration', headerText: 'Duration' },
  { field: 'Progress', headerText: 'Progress' },
  { field: 'Status', headerText: 'Status', isFrozen: true }
];
</script>