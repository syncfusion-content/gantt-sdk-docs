
import Vue from "vue";
import { GanttPlugin, ContextMenu, Edit, Toolbar, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="contextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :toolbar="toolbar" :enableContextMenu="true" :allowSorting="true" :allowResizing= "true"></ejs-gantt>
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
        allowAdding: true
        },
        toolbar: ['Add']
    };
  },
  provide: {
      gantt: [ ContextMenu, Edit, Toolbar, Selection]
  }

});