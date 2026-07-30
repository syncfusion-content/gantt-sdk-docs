<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar } from "@syncfusion/ej2-vue-gantt";
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
            toolbar: ['ZoomIn','ZoomOut','ZoomToFit'],
        };
  },
  provide: {
      gantt: [Toolbar ]
  }
};
</script>