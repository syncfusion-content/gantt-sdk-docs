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
      :resources="resources"
      :resourceFields="resourceFields"
      :labelSettings="labelSettings"
      :columns="columns"
    ></ejs-gantt>
  </div>
</template>

<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { GanttData, resourceCollection } from "./data-source.js";

const data = GanttData;
const height = "430px";
const treeColumnIndex = 1;
const gridLines = "Both";

const taskFields = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
  endDate: "EndDate",
  duration: "Duration",
  dependency: "Predecessor",
  progress: "Progress",
  parentID: "ParentID",
  resourceInfo: "Resources"
};

const splitterSettings = { position: "65%" };
const labelSettings = { taskLabel: "Progress" };

const resources = resourceCollection;
const resourceFields = {
  id: "resourceId",
  name: "resourceName"
};

const columns = [
  { field: "TaskID", headerText: "Task ID", freeze: "Left" },
  { field: "TaskName", headerText: "Task Name", width: 200 },
  { field: "StartDate", headerText: "Start Date", width: 130 },
  { field: "Duration", headerText: "Duration", width: 110 },
  { field: "EndDate", headerText: "End Date", width: 130 },
  { field: "Progress", headerText: "Progress", width: 110, freeze: "Fixed" },
  { field: "Predecessor", headerText: "Dependency", width: 120 },
  { field: "Resources", headerText: "Assignee", freeze: "Right" }
];
</script>