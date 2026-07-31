<template>
     <div>
      <ejs-button id="dynamicDrag" cssClass="e-info" v-on:click="dynamicDrag">Drop records as child</ejs-button>
        <br><br>
        <ejs-gantt ref='gantt' :dataSource="data" :allowRowDragAndDrop='true' :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { ganttData } from "./data-source.js";

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
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
      dynamicDrag: function(e) {
          this.$refs.gantt.reorderRows([1,2,3], 4, 'child');
        }
    }
};
</script>