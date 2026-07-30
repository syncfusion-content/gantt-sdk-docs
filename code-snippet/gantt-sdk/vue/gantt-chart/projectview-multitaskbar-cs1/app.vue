<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :treeColumnIndex="1" :allowSelection="true" :includeWeekend="true" :enableMultiTaskbar="true" :height="height" ></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectViewMultiTaskData  } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: projectViewMultiTaskData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                child: 'subtasks',
                expandState: 'isExpand'
            },
            height: '450px'
        };
  },
  provide: {
      gantt: [ Selection ]
  }
};
</script>