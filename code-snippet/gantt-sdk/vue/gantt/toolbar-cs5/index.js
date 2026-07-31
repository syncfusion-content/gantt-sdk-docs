
import Vue from "vue";
import { GanttPlugin, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { projectNewData } from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(NumericTextBoxPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
     <ejs-numerictextbox id="inputEle" format='c2' value='1' width='150'></ejs-numerictextbox>
     <br>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: projectNewData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
      };
  },
  provide: {
      gantt: [Toolbar ]
  }

});