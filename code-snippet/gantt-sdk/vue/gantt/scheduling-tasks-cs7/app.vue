<template>
     <div>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :highlightWeekends='true' :workWeek="workWeek"></ejs-gantt>
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
            height: '450px',
                taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            },
            workWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
            };
    },
    provide: {
      gantt: [ DayMarkers ]
    }  
};
</script>