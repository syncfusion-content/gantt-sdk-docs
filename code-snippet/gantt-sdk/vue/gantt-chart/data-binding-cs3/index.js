
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: new DataManager({
                url: 'https://services.syncfusion.com/vue/production/api/GanttData',
                adaptor: new WebApiAdaptor,
                crossDomain: true
            }),
            height: '450px',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                progress: 'Progress',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'SubTasks'
            }
        };
  },

});