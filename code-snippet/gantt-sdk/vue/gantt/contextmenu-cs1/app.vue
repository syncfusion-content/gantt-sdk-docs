<template>
     <div>
        <ejs-gantt ref='gantt' id="contextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :enableContextMenu="true" :allowSorting="true" :allowResizing= "true"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, ContextMenu, Edit, Sort, Resize, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
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
};
</script>