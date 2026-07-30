<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings" :actionComplete="actionComplete" :taskbarEdited="taskbarEdited"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
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
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            toolbar: ['Edit','ZoomToFit'],
            editSettings: {
              allowEditing: true,
              allowTaskbarEditing: true
            },
            actionComplete: function(args) {
              if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
                var obj = document.getElementById("GanttContainer").ej2_instances[0];
                obj.dataSource = projectNewData;
                obj.fitToProject();
              }
            },
            taskbarEdited: function(args) {
              if (args) {
                var obj = document.getElementById("GanttContainer").ej2_instances[0];
                obj.dataSource = projectNewData;
                obj.fitToProject();
              }
            }
        };
  },
  provide: {
      gantt: [Toolbar, Edit, Selection ]
  }
};
</script>