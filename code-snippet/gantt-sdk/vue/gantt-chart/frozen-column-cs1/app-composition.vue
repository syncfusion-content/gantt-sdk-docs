<template>
  <div>
    <ejs-gantt
      id="GanttContainer"
      :dataSource="data"
      :taskFields="taskFields"
      :height="height"
      :gridLines="gridLines"
      :splitterSettings="splitterSettings"
      :labelSettings="labelSettings"
      :columns="columns"
      :frozenColumns="frozenColumns"
      :treeColumnIndex="treeColumnIndex"
      :allowSelection="allowSelection"
    ></ejs-gantt>
  </div>
</template>

<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from "./data-source.js";

const data = GanttData;
const height = "450px";

const columns = [
  { field: "TaskID", headerText: "Task ID", textAlign: "Right", width: 90 },
  { field: "TaskName", headerText: "Task Name", textAlign: "Left", width: 290 },
  { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 120, format: "yMd" },
  { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
  { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 120, format: "yMd" },
  { field: "Progress", headerText: "Progress", textAlign: "Left", width: 120 },
  { field: "Predecessor", headerText: "Predecessor", textAlign: "Left", width: 120 }
];

const taskFields = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
  endDate: "EndDate",
  duration: "Duration",
  dependency: "Predecessor",
  progress: "Progress",
  parentID: "ParentID"
};

const labelSettings = { taskLabel: "Progress" };
const splitterSettings = { position: "65%" };
const gridLines = "Both";
const frozenColumns = 2;
const treeColumnIndex = 1;
const allowSelection = false;
</script>