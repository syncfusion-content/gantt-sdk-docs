import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { GanttData } from "./data-source.js";

Vue.use(GanttPlugin);
Vue.use(SwitchPlugin);

new Vue({
    el: "#app",
    template: `
    <div>
      <div class="switch-container">
        <label>Auto Update Predecessor Offset</label>
        <ejs-switch 
          checked="true"
          @change="onToggleChange">
        </ejs-switch>
      </div>
      <ejs-gantt 
        ref='gantt'
        id="GanttContainer"
         :dataSource="data"
        :height="height"
        :taskFields="taskFields"
        :editSettings="editSettings"
        :columns="columns"
        :eventMarkers="eventMarkers"
        :holidays="holidays"
        :autoUpdatePredecessorOffset="autoUpdatePredecessorOffset"
      >
      </ejs-gantt>

    </div>
  `,

    data: function () {
        return {
            data: GanttData,
            autoUpdatePredecessorOffset: true,
            height: "420px",
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                baselineStartDate: 'BaselineStartDate',
                baselineEndDate: 'BaselineEndDate',
                child: 'subtasks'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            eventMarkers: [
                {
                    day: "04/10/2019",
                    cssClass: "e-custom-event-marker",
                    label: "Project approval and kick-off"
                }
            ],
            holidays: [
                {
                    from: "04/04/2019",
                    to: "04/05/2019",
                    label: "Public holidays",
                    cssClass: "e-custom-holiday"
                },
                {
                    from: "04/12/2019",
                    to: "04/12/2019",
                    label: "Public holiday",
                    cssClass: "e-custom-holiday"
                }
            ],
            columns: [
                { field: "TaskID", headerText: "Task ID", width: "100" },
                { field: "Predecessor", headerText: "Dependency", width: "150" },
                { field: "TaskName", headerText: "Task Name", width: "150" },
                { field: "StartDate", headerText: "Start Date", width: "150" },
                { field: "Duration", headerText: "Duration", width: "150" },
                { field: "Progress", headerText: "Progress", width: "150" }
            ]
        }
    },

    provide: {
        gantt: [Selection]
    },

    methods: {
        onToggleChange(args) {
            this.autoUpdatePredecessorOffset = args.checked;

            if (this.$refs.gantt) {
                this.$refs.gantt.ej2Instances.autoUpdatePredecessorOffset = args.checked;
            }
        }
    }
});