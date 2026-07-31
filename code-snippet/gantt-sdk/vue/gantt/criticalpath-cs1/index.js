
import Vue from "vue";
import { GanttPlugin, CriticalPath,Edit,Toolbar } from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :enableCriticalPath="true" :editSettings="editSettings"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
        data: projectNewData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
            },
        toolbar: ['CriticalPath'],
      };
  },
  provide: {
      gantt: [CriticalPath, Edit, Toolbar]
  }

});