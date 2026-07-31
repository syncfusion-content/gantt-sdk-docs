<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :holidays = "holidays"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent,
},
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
        holidays: [{
            from: "04/04/2019",
            to:"04/05/2019",
            label: " Public holidays",
            cssClass:"e-custom-holiday"
        },
        {
            from: "04/12/2019",
            to:"04/12/2019",
            label: " LOcal holidays",
            cssClass:"e-custom-holiday"
            }]
      };
  },
  provide: {
      gantt: [DayMarkers]
  }
};
</script>