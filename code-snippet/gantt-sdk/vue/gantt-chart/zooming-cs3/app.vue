<template>
     <div>
       <ejs-button id="zoomIn" cssClass="e-info" v-on:click="zoomIn">ZoomIn</ejs-button>
       <ejs-button id="zoomOut" cssClass="e-info" v-on:click="zoomOut">ZoomOut</ejs-button>
       <ejs-button id="fitToProject" cssClass="e-info" v-on:click="fitToProject">FitToProject</ejs-button>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { projectNewData } from './data-source.js';


export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: projectNewData,
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
 methods: {
        zoomIn: function(){
          this.$refs.gantt.zoomIn();
        },
        zoomOut: function(){
           this.$refs.gantt.zoomOut();
        },
        fitToProject: function(){
           this.$refs.gantt.fitToProject();
        }
  },
};
</script>