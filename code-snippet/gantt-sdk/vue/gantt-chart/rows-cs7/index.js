
import Vue from "vue";
import { GanttPlugin, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ganttData } from "./data-source.js";
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt :dataSource="data" :allowRowDragAndDrop='true' :taskFields = "taskFields" :height = "height" :rowDragStartHelper="rowDragStartHelper"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: ganttData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            rowDragStartHelper: function(args) {
                var record = args.data[0] ? args.data[0] : args.data;
                var taskId = record.ganttProperties.taskId;
                if (taskId <= 4) {
                    args.cancel = true;
                }
            }
        };
    },
    provide: {
      gantt: [ RowDD, Edit, Selection ]
  }

});