<template>
  <div id="app">
    <button id="restore" @click="clickRestore">Restore</button>
    <br /><br />
    <ejs-gantt ref="gantt" :dataSource='data' :enablePersistence='true' height='230px' id="Gantt"
      :taskFields="taskFields">
      <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120></e-column>
        <e-column field='TaskName' headerText='Task Name' width=150 :headerTemplate="hTemplate"></e-column>
        <e-column field='StartDate' headerText='Start Date' width=150></e-column>
        <e-column field='Duration' headerText='Duration' width=150></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
</template>
  
<script id="customertemplate" type="text/x-template">
<span class="e-icons e-header" ></span>
</script>
<script setup>
import { ref, createApp } from 'vue';
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
const gantt = ref(null);
const app = createApp();
var headTemplate = app.component("header", {
  template: '<span class="e-icons e-header">Task Name</span>',
  data() {
    return {
      data: {}
    };
  }
});
const data = projectNewData;
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks'
}
const hTemplate = function (e) {
  return {
    template: headTemplate
  };
}
const clickRestore = function () {
  const savedProperties = JSON.parse(gantt.value.ej2Instances.getPersistData());
  const gridColumnsState = [...gantt.value.ej2Instances.ganttColumns];

  savedProperties.columns.forEach(col => {
    const columnState = gridColumnsState.find(colState => colState.field === col.field);
    if (columnState) {
      col.headerText = 'Text Changed';
      col.template = columnState.template;
      col.headerTemplate = columnState.headerTemplate;
    }
  });

  console.log(savedProperties);
  gantt.value.ej2Instances.treeGrid.setProperties(savedProperties);
}
</script>
<style>
.e-column:before {
  content: '\e815';
}

.e-header:before {
  content: '\ea9a';
}
</style>