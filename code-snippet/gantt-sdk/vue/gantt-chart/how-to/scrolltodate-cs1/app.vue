<template>
     <div>
        <ejs-button id="scrolldate" cssClass="e-info" v-on:click.native="changep">Scroll To Date</ejs-button>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :splitterSettings="splitterSettings"></ejs-gantt>
        <br><br><br>
    </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { projectNewData  } from './data-source.js';
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
                child: 'subtasks'
            },
            splitterSettings:{
                position: "50%"
                }
        };
    },
    methods: {
      changep: function(e){
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            ganttChart.scrollToDate('04/26/2019');
        }
    }  
};
</script>