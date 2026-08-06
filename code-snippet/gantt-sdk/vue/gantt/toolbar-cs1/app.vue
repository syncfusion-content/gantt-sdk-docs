<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Edit, Selection, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
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
            toolbar: ['Add', 'Edit', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll','PrevTimeSpan','NextTimeSpan', 'Update', 'Indent', 'Outdent'],
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
      gantt: [ Edit, Selection, Toolbar ]
  }
};
</script>