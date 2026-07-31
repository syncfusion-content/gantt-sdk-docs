<template>
     <div>
     <ejs-numerictextbox id="inputEle" format='c2' value='1' width='150'></ejs-numerictextbox>
     <br>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { projectNewData } from './data-source.js';
export default {
name: "App",
components: {
"ejs-numerictextbox":NumericTextBoxComponent,
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
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
      };
  },
  provide: {
      gantt: [Toolbar ]
  }
};
</script>