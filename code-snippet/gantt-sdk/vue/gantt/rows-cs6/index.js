
import Vue from "vue";
import { GanttPlugin, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ganttData } from "./data-source.js";
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt :dataSource="data" :allowRowDragAndDrop='true' :selectionSettings="selectionSettings" :taskFields = "taskFields" :height = "height"></ejs-gantt>
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
            selectionSettings: {
                type: 'Multiple'
            }
        };
    },
    provide: {
      gantt: [ RowDD, Edit, Selection ]
  }

});