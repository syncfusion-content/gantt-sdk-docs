<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :eventMarkers = "eventMarkers"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';

export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
        data: editingData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            resourceInfo: 'resources',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        eventMarkers: [
            {
                day: '04/10/2019',
                cssClass: 'e-custom-event-marker',
                label: 'Project approval and kick-off'
            }
        ]
      };
  },
  provide: {
      gantt: [DayMarkers]
  }
};
</script>