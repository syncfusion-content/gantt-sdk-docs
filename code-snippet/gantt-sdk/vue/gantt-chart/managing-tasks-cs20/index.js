
import Vue from "vue";
import { GanttPlugin, ContextMenu, Edit, Selection, Toolbar} from "@syncfusion/ej2-vue-gantt";
import {DropDownListPlugin,DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { editingData, editingResources} from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(DropDownListPlugin);
let elem;
let dropdownlistObj;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :resources="resources" :resourceFields="resourceFields":taskFields = "taskFields" :height = "height" :editSettings= "editSettings">
          <e-columns>
            <e-column field="TaskID"></e-column>
            <e-column
              field="TaskName"
              editType="dropdownedit"
              :edit="dpParams"
            ></e-column>
            <e-column field="StartDate"></e-column>
            <e-column field="Duration"></e-column>
            <e-column field="Progress"></e-column>
      </e-columns></ejs-gantt>
    </div>
`,

  data: function () {
    return {
      data: editingData,
      resources: editingResources,
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        resourceInfo: "resources",
        work: "work",
        child: "subtasks",
      },
      resourceFields: {
        id: "resourceId",
        name: "resourceName",
      },
      height: "450px",
      editSettings: {
        allowEditing: true,
      },
      dpParams: {
        create: () => {
          elem = document.createElement("input");
          return elem;
        },
        read: () => {
          return dropdownlistObj.text;
        },
        destroy: () => {
          dropdownlistObj.destroy();
        },
        write: () => {
          var ganttChart = document.getElementById("GanttContainer").ej2_instances[0];
          dropdownlistObj = new DropDownList({
            dataSource: ganttChart.treeGrid.grid.dataSource,
            fields: { value: "TaskName" },
            floatLabelType: "Auto",
          });
          dropdownlistObj.appendTo(elem);
        },
      },
    };
  },
  provide: {
    gantt: [ContextMenu, Edit, Selection, Toolbar]
  }

});