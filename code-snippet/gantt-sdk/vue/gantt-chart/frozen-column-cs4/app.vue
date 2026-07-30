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

<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from "./data-source.js";

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
      allowSelection: false,
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
      },
      splitterSettings: { position: "65%" },
      columns: [
        { field: "TaskID", headerText: "Task ID", freeze: "Left" },
        { field: "TaskName", headerText: "Task Name", width: 200, freeze: "Left" },
        { field: "StartDate", headerText: "Start Date" },
        { field: "Duration", headerText: "Duration" },
        { field: "EndDate", headerText: "End Date" },
        { field: "Progress", headerText: "Progress", freeze: "Right" },
        { field: "Status", headerText: "Status" },
      ],
    };
  },
  provide: {
    gantt: [],
  },
};
</script>