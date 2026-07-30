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
      data: GanttData,
      height: "430px",
      treeColumnIndex: 1,
      gridLines: "Both",
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        endDate: 'EndDate',
        progress: 'Progress',
        parentID: 'ParentID',
      },
      splitterSettings: { position: "65%" },
      labelSettings: { taskLabel: "Progress" },
      columns: [
        { field: 'TaskID', headerText: 'Task ID', isFrozen: true },
        { field: 'TaskName', headerText: 'Task Name', width: 220, isFrozen: true },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'Status', headerText: 'Status', isFrozen: true }
      ],
    };
  },
  provide: {
    gantt: [],
  },
};
</script>