<template>
     <div>
        <ejs-gantt :dataSource="data" :allowRowDragAndDrop='true' :taskFields = "taskFields" :height = "height" :rowDrop="rowDrop"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ganttData } from "./data-source.js";

export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: ganttData,
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
            rowDrop: function(args) {
                if (args.dropPosition == "middleSegment") {
                    args.cancel = true;
                }
            }
        };
    },
    provide: {
      gantt: [ RowDD, Edit, Selection ]
  }
};
</script>