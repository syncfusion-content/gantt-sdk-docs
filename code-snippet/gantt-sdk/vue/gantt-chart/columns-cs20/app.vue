<template>
     <div>
        <ejs-button id="show" cssClass="e-info" v-on:click.native="show">Show</ejs-button>
        <ejs-button id="hide" cssClass="e-info" v-on:click.native="hide">Hide</ejs-button>
        <br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :splitterSettings = "splitterSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: editingData,
            taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            },
            height:'450px',
            splitterSettings:{
            position: '80%'
          },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ]
      };
  },
  methods: {
      show: function(e){
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
          ganttChart.showColumn(["Duration"]);
      },
      hide: function(e){
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
          ganttChart.hideColumn(["Duration"]);
      },
  },
};
</script>