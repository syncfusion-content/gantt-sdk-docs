
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';

Vue.use(GanttPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
       <button id="add"  @click="clickAdd">Add Columns</button>
       <button id="remove"  @click="clickRemove">Remove Columns</button>
      <br /><br />
        <ejs-gantt ref="gantt" :dataSource='data' :enablePersistence='true' height='230px' id="Gantt" :taskFields = "taskFields" :dataBound='dataBound'>
           <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120></e-column>
                <e-column field='TaskName' headerText='Task Name' width=150></e-column>
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
        }
    };
  },
  methods: {
    dataBound: function () {
        let cloned =  this.$refs.gantt.ej2Instances.addOnPersist;
        this.$refs.gantt.ej2Instances.addOnPersist = function (key) {
            key = key.filter((item)  => item !== "columns");
            return cloned.call(this, key);
        };
    },
     clickAdd: function () {
        let obj = { field: "Progress", headerText: 'Progress', width: 100 };
        this.$refs.gantt.ej2Instances.columns.push(obj); //you can add the columns by using the Gantt columns method
        this.$refs.gantt.ej2Instances.treeGrid.refreshColumns();
    },
     clickRemove: function () {
        this.$refs.gantt.ej2Instances.columns.pop();
        this.$refs.gantt.ej2Instances.treeGrid.refreshColumns();
    }
  }

});