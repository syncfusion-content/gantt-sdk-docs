<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :highlightWeekends='true' :splitterSettings= "splitterSettings" :dayWorkingTime="dayWorkingTime" :timelineSettings="timelineSettings"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Edit, DayMarkers } from "@syncfusion/ej2-vue-gantt";
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
            child: 'subtasks'
        },
            splitterSettings: {
                columnIndex: 1
                },
            dayWorkingTime: [
                {from: 9,
                to: 18 }
             ],
             timelineSettings:{
           timelineViewMode:'Day'
           }
           };
  },
  provide: {
      gantt: [ DayMarkers, Edit ]
  },
};
</script>