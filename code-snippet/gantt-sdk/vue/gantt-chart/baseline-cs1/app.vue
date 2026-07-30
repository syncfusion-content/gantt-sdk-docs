<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :renderBaseline="true" baselineColor='red' :taskFields="taskFields" :height="height"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { baselineData  } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: baselineData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                baselineStartDate:"BaselineStartDate",
                baselineEndDate:"BaselineEndDate",
                baselineDuration: "BaselineDuration",
                parentID: 'ParentID'
            },
            height: '430px',
        };
  },
  provide: {
      gantt: [ Selection ]
  }
};
</script>