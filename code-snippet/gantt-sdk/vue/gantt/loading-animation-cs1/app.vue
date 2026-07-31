<template>
    <div>
      <ejs-gantt
        ref="gantt"
        :dataSource="data"
        :taskFields="taskFields"
        :allowSelection="true"
        :allowSorting="true"
        :allowFiltering="true"
        :enableVirtualization="true"
        :labelSettings="labelSettings"
        :height="height"
        :treeColumnIndex="1"
        :highlightWeekends="true"
        :columns="columns"
        :splitterSettings="splitterSettings">
      </ejs-gantt>
    </div>
    </template>
    
    <script>
    import { ref } from "vue";
    import { GanttComponent, Selection, VirtualScroll, Sort, Filter } from "@syncfusion/ej2-vue-gantt";
    import { tempData } from "./datasource.js";
    
    export default {
    name: "App",
    components: {
      "ejs-gantt": GanttComponent,
    },
    setup() {
      const virtualData = ref([]);
      let projId = 1;
    
      for (let i = 0; i < 50; i++) {
        const x = virtualData.value.length + 1;
        const parentTask = {
          TaskID: x,
          TaskName: `Project ${projId++}`,
        };
        virtualData.value.push(parentTask);
    
        for (const task of tempData) {
          virtualData.value.push({
            TaskID: task.TaskID + x,
            TaskName: task.TaskName,
            StartDate: task.StartDate,
            Duration: task.Duration,
            Progress: task.Progress,
            parentID: task.parentID + x,
          });
        }
      }
    
      const data = virtualData.value;
      const taskFields = ref({
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "parentID",
      });
    
      const columns = ref([
        { field: "TaskID", headerText: "Task ID", width: 100 },
        { field: "TaskName", headerText: "Task Name", width: 200 },
        { field: "StartDate", headerText: "Start Date", width: 150 },
        { field: "Duration", headerText: "Duration", width: 100 },
        { field: "Progress", headerText: "Progress", width: 100 },
      ]);
    
      const height = ref("450px");
      const labelSettings = ref({
        taskLabel: "Progress",
      });
    
      const splitterSettings = ref({
        columnIndex: 2,
      });
    
      return {
        data,
        taskFields,
        columns,
        height,
        labelSettings,
        splitterSettings,
      };
    },
    provide() {
      return {
        gantt: [Selection, VirtualScroll, Sort, Filter],
      };
    },
    };
    </script>
    