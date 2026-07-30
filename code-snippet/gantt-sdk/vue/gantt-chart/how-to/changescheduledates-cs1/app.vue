<template>
     <div>
        <ejs-button id="changedate" cssClass="e-info" v-on:click.native="change">Change Date</ejs-button>
         <br><br><br>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { editingData  } from './data-source.js';

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
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
        };
    },
    methods: {
      change: function(e){
            var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
            ganttObj.updateProjectDates(new Date('03/10/2019'),new Date('06/20/2019'),true);
        }
    },
};
</script>