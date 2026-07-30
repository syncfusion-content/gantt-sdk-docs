
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';

Vue.use(GanttPlugin);

var headTemplate = Vue.component("header", {
    template: '<span class="e-icons e-header">Task Name</span>',
    data() {
    return {
        data: {}
    };
    }
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
       <button id="restore"  @click="clickRestore">Restore</button>
      <br /><br />
        <ejs-gantt ref="gantt" :dataSource='data' :enablePersistence='true' height='230px' id="Gantt" :taskFields = "taskFields">
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120></e-column>
                <e-column field='TaskName' headerText='Task Name' width=150 :headerTemplate="hTemplate"></e-column>
                <e-column field='StartDate' headerText='Start Date' width=150 ></e-column>
                <e-column field='Duration' headerText='Duration' width=150 ></e-column>
            </e-columns>
        </ejs-gantt>
    </div>
`,

  data() {
    return {
      data: projectNewData,
      taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
      hTemplate: function (e) {
          return {
              template: headTemplate
          };
      }
    };
  },
  methods: {
    clickRestore: function () {
        let savedProperties = JSON.parse(this.$refs.gantt.ej2Instances.getPersistData());
        let gridColumnsState = Object.assign([], this.$refs.gantt.ej2Instances.ganttColumns);
        savedProperties.columns.forEach((col: {
            field: any;
            headerText: any;
            template: any;
            headerTemplate  ;
        }) => {
            let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
            let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
            let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
            col.headerText = 'Text Changed';
            col.template = colTemplate;
            col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your wants.
        }
        );
       console.log(savedProperties);
       this.$refs.gantt.ej2Instances.treeGrid.setProperties(savedProperties);
    }
  }

});