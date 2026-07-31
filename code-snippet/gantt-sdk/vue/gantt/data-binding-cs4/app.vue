<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :actionFailure= "actionFailure"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { DataManager } from '@syncfusion/ej2-data';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: new DataManager({
                url: 'http://some.com/invalidUrl',
            }),
            height: '450px',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                progress: 'Progress',
                duration: 'Duration',
                dependency: 'Predecessor',
                parentID: 'parentID'
            },
      
        actionFailure: function(args){
            let gantt = document.getElementsByClassName("e-gantt")[0].ej2_instances[0]; // Gantt instance
            let span = document.createElement('span');
            this.element.parentNode.insertBefore(span, gantt.element);
            span.style.color = '#FF0000'
            span.innerHTML = 'Server exception: 404 Not found';
    },  };
  }
};
</script>