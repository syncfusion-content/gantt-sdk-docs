
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { DataManager } from '@syncfusion/ej2-data';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :actionFailure= "actionFailure"></ejs-gantt>
    </div>
`,

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
            this.element.parentNode.insertBefore(span,gantt.element);
            span.style.color = '#FF0000'
            span.innerHTML = 'Server exception: 404 Not found';
    }, };
  }

});