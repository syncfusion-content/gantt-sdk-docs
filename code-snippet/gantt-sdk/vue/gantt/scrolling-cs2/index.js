
import Vue from "vue";
import { GanttPlugin, Edit} from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
    <div>
    <p class="e-text"> The parent container can be resizable by dragging the bottom-right corner.</p>
     <div class='e-ganttresize'>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :width = "width" :editSettings="editSettings"></ejs-gantt>
    </div>
    </div>
`,

  data: function() {
      return{
        data: projectNewData,
        height:'100%',
        width:'100%',
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
      };
  },
  provide: {
      gantt: [Edit]
  }

});