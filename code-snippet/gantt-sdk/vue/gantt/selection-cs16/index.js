
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";

import { GanttData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :enableHover="true" :taskFields = "taskFields" :height = "height" :selectionSettings="selectionSettings"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: GanttData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentID'
            },
            selectionSettings: {
                mode: 'Row',
                type: 'Multiple',
            }
      };
  },
  provide: {
      gantt: [ Selection ]
  }

});