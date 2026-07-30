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

<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { GanttData, resourceCollection } from "./data-source.js";

export default {
  name: "App",
  components: {
    "ejs-gantt": GanttComponent,
  },
  data() {
    return {
      height: "430px",
      data: GanttData,
      treeColumnIndex: 1,
      gridLines: "Both",
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        dependency: "Predecessor",
        progress: "Progress",
        parentID: "ParentID",
        resourceInfo: "Resources",
      },
      splitterSettings: { position: "65%" },
      labelSettings: { taskLabel: "Progress" },
      resources: resourceCollection,
      resourceFields: {
        id: "resourceId",
        name: "resourceName",
      },
      columns: [
        { field: "TaskID", headerText: "Task ID", freeze: "Left" },
        { field: "TaskName", headerText: "Task Name", width: 200 },
        { field: "StartDate", headerText: "Start Date", width: 130 },
        { field: "Duration", headerText: "Duration", width: 110 },
        { field: "EndDate", headerText: "End Date", width: 130 },
        { field: "Progress", headerText: "Progress", width: 110, freeze: "Fixed" },
        { field: "Predecessor", headerText: "Dependency", width: 120 },
        { field: "Resources", headerText: "Assignee", freeze: "Right" },
      ],
    };
  },
  provide: {
    gantt: [],
  },
};
</script>