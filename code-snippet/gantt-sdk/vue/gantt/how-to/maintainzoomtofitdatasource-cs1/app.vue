<template>
     <div>
        <ejs-button id="changeData" cssClass="e-info" v-on:click.native="changeData">Change Data</ejs-button>
        <br><br><br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :dataBound="dataBound"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { projectNewData, data } from './data-source.js';


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
            },
            toolbar: ['ZoomToFit'],
            dataBound: function(args) {
              var obj = document.getElementById('GanttContainer').ej2_instances[0];
              obj.fitToProject();
            },
        };
  },
  methods: {
      changeData: function(e){
        var obj = document.getElementById('GanttContainer').ej2_instances[0];
        obj.dataSource = data;
      }
  },
  provide: {
      gantt: [Toolbar]
  }
};
</script>