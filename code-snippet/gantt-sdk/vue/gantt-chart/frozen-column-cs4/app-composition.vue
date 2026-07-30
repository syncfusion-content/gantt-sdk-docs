
<template>
  <div>
    <ejs-gantt
      id="GanttContainer"
      :dataSource="data"
      :taskFields="taskFields"
      :height="height"
      :treeColumnIndex="treeColumnIndex"
      :splitterSettings="splitterSettings"
      :allowSelection="allowSelection"
      :gridLines="gridLines"
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
const allowSelection = false;
const gridLines = "Both";

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

const splitterSettings = { position: "65%" };

const columns = [
  { field: "TaskID", headerText: "Task ID", freeze: "Left" },
  { field: "TaskName", headerText: "Task Name", width: 200, freeze: "Left" },
  { field: "StartDate", headerText: "Start Date" },
  { field: "Duration", headerText: "Duration" },
  { field: "EndDate", headerText: "End Date" },
  { field: "Progress", headerText: "Progress", freeze: "Right" },
  { field: "Status", headerText: "Status" }
];
</script>