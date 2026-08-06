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
        :autoCalculateDateScheduling="false"
        :editSettings="editSettings"
        :projectStartDate="projectStartDate"
        :projectEndDate="projectEndDate"
        :enableTimelineVirtualization="true"
        :splitterSettings="splitterSettings"
      ></ejs-gantt>
    </div>
    </template>
    
    <script>
    import { GanttComponent, Selection, VirtualScroll, Edit } from "@syncfusion/ej2-vue-gantt";
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
        const parent_1 = {
          TaskID: x,
          TaskName: "Project" + projId++,
        };
        virtualData.push(parent_1);
        for (let j = 0; j < tempData.length; j++) {
          const subtasks = {
            TaskID: tempData[j].TaskID + x,
            TaskName: tempData[j].TaskName,
            StartDate: tempData[j].StartDate,
            Duration: tempData[j].Duration,
            Progress: tempData[j].Progress,
            parentID: tempData[j].parentID + x,
          };
          virtualData.push(subtasks);
        }
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
        editSettings: {
          allowAdding: true,
        },
        projectStartDate: new Date("04/01/2019"),
        projectEndDate: new Date("12/31/2025"),
      };
    },
    provide: {
      gantt: [Selection, VirtualScroll, Edit],
    },
    };
    </script>
    