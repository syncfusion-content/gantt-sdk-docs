import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from "./data-source.js";
Vue.use(GanttPlugin);

new Vue({
    el: '#app',
    template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :gridLines= "gridLines" :splitterSettings = "splitterSettings" :labelSettings = "labelSettings" :columns="columns" :frozenColumns="frozenColumns"      :treeColumnIndex="treeColumnIndex" :allowSelection="allowSelection"></ejs-gantt>
    </div>
`,

    data: function () {
        return {
            data: GanttData,
            height: '450px',
            columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
                { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
                { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: 'yMd' },
                { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
                { field: 'EndDate', headerText: 'End Date', textAlign: 'Right', width: 120, format: 'yMd' },
                { field: 'Progress', headerText: 'Progress', textAlign: 'Left', width: 120 },
                { field: 'Predecessor', headerText: 'Predecessor', textAlign: 'Left', width: 120 }
            ],
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID: 'ParentID',
                endDate: 'EndDate',
                dependency: 'Predecessor'

            },
            labelSettings: {
                taskLabel: 'Progress'
            },
            splitterSettings: {
                position: '65%'
            },
            gridLines: 'Both',
            labelSettings: {
                taskLabel: 'Progress'
            },
            frozenColumns: 2,
            treeColumnIndex: 1,
            allowSelection: false,
        };
    },
    provide: {
        gantt: []
    },

});