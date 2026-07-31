
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { projectNewData } from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
       <ejs-button id="zoomIn" cssClass="e-info" v-on:click.native="zoomIn">ZoomIn</ejs-button>
       <ejs-button id="zoomOut" cssClass="e-info" v-on:click.native="zoomOut">ZoomOut</ejs-button>
       <ejs-button id="fitToProject" cssClass="e-info" v-on:click.native="fitToProject">FitToProject</ejs-button>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
`,

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

});