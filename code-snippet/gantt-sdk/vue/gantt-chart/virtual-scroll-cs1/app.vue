<template>
    <div>
      <ejs-gantt
        ref="gantt"
        :dataSource="data"
        :taskFields="taskFields"
        :allowSelection="true"
        :enableVirtualization="true"
        :labelSettings="labelSettings"
        :height="height"
        :treeColumnIndex="1"
        :highlightWeekends="true"
        :columns="columns"
        :splitterSettings="splitterSettings"
      >
      </ejs-gantt>
    </div>
    </template>
    
    <script>
    import { GanttComponent, Selection, VirtualScroll } from "@syncfusion/ej2-vue-gantt";
    import { tempData } from "./datasource.js";
    
    export default {
    name: "App",
    components: {
        "ejs-gantt": GanttComponent,
    },
    data() {
      const virtualData = [];
      let projId = 1;
    
      for (let i = 0; i < 50; i++) {
        const x = virtualData.length + 1;
        const parentTask = {
          TaskID: x,
          TaskName: `Project${projId++}`,
        };
        virtualData.push(parentTask);
    
        tempData.forEach((task) => {
          const subTask = {
            TaskID: task.TaskID + x,
            TaskName: task.TaskName,
            StartDate: task.StartDate,
            Duration: task.Duration,
            Progress: task.Progress,
            parentID: task.parentID + x,
          };
          virtualData.push(subTask);
        });
      }
    
      return {
        data: virtualData,
        taskFields: {
          id: "TaskID",
          name: "TaskName",
          startDate: "StartDate",
          endDate: "EndDate",
          duration: "Duration",
          progress: "Progress",
          parentID: "parentID",
        },
        columns: [
          { field: "TaskID" },
          { field: "TaskName" },
          { field: "StartDate" },
          { field: "Duration" },
          { field: "Progress" },
        ],
        height: "450px",
        labelSettings: {
          taskLabel: "Progress",
        },
        splitterSettings: {
          columnIndex: 2,
        },
      };
    },
    provide() {
      return {
        gantt: [Selection, VirtualScroll],
      };
    },
    };
    </script>
    