
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectViewMultiTaskData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :enableMultiTaskbar="true" :taskFields="taskFields" :treeColumnIndex="1" :allowSelection="true" :includeWeekend="true" :height="height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: projectViewMultiTaskData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                child: 'subtasks',
                expandState: 'isExpand'
            },
            height: '450px',
        };
  },
  provide: {
      gantt: [ Selection ]
  }

});