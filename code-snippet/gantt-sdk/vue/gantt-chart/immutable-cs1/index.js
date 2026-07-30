
import Vue from "vue";
import { GanttPlugin, Edit, Selection, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar"
        :editSettings= "editSettings" :enableImmutableMode='true'></ejs-gantt>
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
            toolbar: ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'Indent', 'Outdent'],
             editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
  
  provide: {
      gantt: [ Edit, Selection, Toolbar]
  }}}}

);