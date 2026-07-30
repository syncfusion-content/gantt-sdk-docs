import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { GanttData  } from "./data-source.js";
Vue.use(GanttPlugin);

new Vue({
    el: '#app',
    template: `
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
`,

    data: function () {
        return {
            data: GanttData,
            height: "430px",
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
            columns: [
                { field: 'TaskID', headerText: 'Task ID', isFrozen: true },
                { field: 'TaskName', headerText: 'Task Name', width: 220, isFrozen: true },
                { field: 'StartDate', headerText: 'Start Date' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'Progress', headerText: 'Progress' },
                { field: 'Status', headerText: 'Status', isFrozen: true }
            ],
        }
    },
    provide: {
        gantt: []
    },

});