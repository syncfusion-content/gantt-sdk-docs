<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" :allowRowDragAndDrop='true' :taskFields = "taskFields" :height = "height" :rowDrop="rowDrop"></ejs-gantt>
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
            }
        };
    },
    provide: {
      gantt: [ RowDD, Edit, Selection ]
    },
    methods: {
      rowDrop: function(args) {
            if (args.dropPosition == 'middleSegment') {
                args.cancel = true;
                this.$refs.gantt.reorderRows([args.fromIndex], args.dropIndex, 'above');
            }
        }
    }

};
</script>