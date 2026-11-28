import Vue from "vue";
import { GanttPlugin, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from "./data-source.js";

Vue.use(GanttPlugin);

new Vue({
    el: "#app",
    data: function () {
        return {
            data: GanttData,
            height: "450px",
            taskFields: {
                id: "TaskID",
                name: "TaskName",
                startDate: "StartDate",
                duration: "Duration",
                progress: "Progress"
            },
            columns: [
                { field: "TaskID", headerText: "Task ID", width: 90 },
                { field: "TaskName", headerText: "Task Name", width: 200 },
                { field: "StartDate", headerText: "Start Date", width: 130 },
                { field: "Duration", headerText: "Duration", width: 110 },
                { field: "Progress", headerText: "Progress", width: 120 }
            ],
            selectionSettings: {
                mode: "Row",
                type: "Multiple"
            },
            editSettings: {
                allowAdding: true
            }
        };
    },
    provide: {
        gantt: [Edit, Selection]
    },
    template: `
        <ejs-gantt
            id="Gantt"
            :dataSource="data"
            :height="height"
            :allowTaskCopyPaste="true"
            :allowSelection="true"
            :taskFields="taskFields"
            :columns="columns"
            :selectionSettings="selectionSettings"
            :editSettings="editSettings">
        </ejs-gantt>
    `
});
