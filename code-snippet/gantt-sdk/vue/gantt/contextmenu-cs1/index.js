
import Vue from "vue";
import { GanttPlugin, ContextMenu, Edit, Sort, Resize, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="contextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :enableContextMenu="true" :allowSorting="true" :allowResizing= "true"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
        data: editingData,
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
        editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
        }
    };
  },
  provide: {
      gantt: [ ContextMenu, Edit, Sort, Resize, Selection]
  }

});