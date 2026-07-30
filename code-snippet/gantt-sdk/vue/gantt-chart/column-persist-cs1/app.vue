<template>
  <div id="app">
    <button id="restore" @click="clickRestore">Restore</button>
    <br /><br />
    <ejs-gantt ref="gantt" :dataSource="data" :enablePersistence="true" height="230px" id="Gantt" :taskFields="taskFields">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="120"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="150" :headerTemplate="hTemplate"></e-column>
        <e-column field="StartDate" headerText="Start Date" width="150"></e-column>
        <e-column field="Duration" headerText="Duration" width="150"></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
  </template>
  
  <script>
  import { GanttComponent ,ColumnsDirective,ColumnDirective} from "@syncfusion/ej2-vue-gantt";
  import { projectNewData } from './data-source.js';
  import { createApp } from 'vue';
  
  const app = createApp();
  
  const headerTemplate = {
  template: '<span class="e-icons e-header">Task Name</span>',
  };
  
  export default {
  name: "App",
  components: {
    "ejs-gantt": GanttComponent,
    "e-columns":ColumnsDirective,
    "e-column":ColumnDirective,  
  },
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
      hTemplate: headerTemplate,
    };
  },
  methods: {
    clickRestore: function () {
      let savedProperties = JSON.parse(this.$refs.gantt.ej2Instances.getPersistData());
      let gridColumnsState = Object.assign([], this.$refs.gantt.ej2Instances.ganttColumns);
      savedProperties.columns.forEach((col) => {
        let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
        let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
        let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
        col.headerText = 'Text Changed';
        col.template = colTemplate;
        col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your needs.
      });
      console.log(savedProperties);
      this.$refs.gantt.ej2Instances.treeGrid.setProperties(savedProperties);
    }
  }
  };
  </script>
  
  <style>
  .e-column:before {
  content: '\e815';
  }
  
  .e-header:before {
  content: '\ea9a';
  }
  </style>
  