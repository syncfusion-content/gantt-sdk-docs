<template>
     <div>
        <ejs-gantt ref='gantt' id="contextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :toolbar="toolbar" :enableContextMenu="true" :allowSorting="true" :allowResizing= "true"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, ContextMenu, Edit, Toolbar, Selection } from "@syncfusion/ej2-vue-gantt";
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
        allowAdding: true
        },
        toolbar: ['Add']
    };
  },
  provide: {
      gantt: [ ContextMenu, Edit, Toolbar, Selection]
  }
};
</script>