
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
import { baselineData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :renderBaseline="true" baselineColor='red' :taskFields="taskFields" :height="height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: baselineData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                baselineStartDate:"BaselineStartDate",
                baselineEndDate:"BaselineEndDate",
                baselineDuration: "BaselineDuration",
                parentID: 'ParentID'
            },            
            height: '450px',
        };
  },
  provide: {
      gantt: [ Selection ]
  }

});