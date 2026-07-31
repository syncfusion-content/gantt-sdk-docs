<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :rowHeight="rowHeight" :splitterSettings="splitterSettings" :allowResizing='true' :resourceFields="resourceFields"
      :resources="resources">
      <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Left' width='100'></e-column>
        <e-column field='TaskName' headerText='Task Name' width='150'></e-column>
        <e-column field='resources' headerText='Resources' width='250' :template="'cTemplate'"></e-column>
        <e-column field='StartDate' headerText='Start Date' width='150'></e-column>
        <e-column field='Duration' headerText='Duration' width='150'></e-column>
        <e-column field='Progress' headerText='Progress' width='150'></e-column>
      </e-columns>
      <template v-slot:cTemplate="{ data }">
        <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
          <img
            :src="'https://ej2.syncfusion.com/vue/demos/source/gantt/images/' + data.ganttProperties.resourceNames + '.png'"
            height="40px" />
          <div style="display:inline-block;width:100%;position:relative;left:30px">
            {{ data.ganttProperties.resourceNames }}</div>
        </div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script setup>
import { GanttComponent as EjsGantt, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from './data-source.js';
const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      {
        TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0,
        Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
      },
      {
        TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
        resources: [2], info: 'Obtain an engineered soil test of lot where construction is planned.' +
          'From an engineer or company specializing in soil testing'
      },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30, resources: [3] },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
        Duration: 3, Predecessor: '4', Progress: 30, resources: [4],
        info: 'Develop floor plans and obtain a materials list for estimations'
      },
      {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
        Duration: 3, Predecessor: '6', resources: [8], info: ''
      },
      {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
        Duration: 0, Predecessor: '7', info: ''
      }
    ]
  },
];
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  resourceInfo: 'resources',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks',
};
const rowHeight = 50;
const splitterSettings = {
  columnIndex: 3
};
const height = '450px';
const resourceFields = {
  id: 'resourceId',
  name: 'resourceName',
};
const resources = editingResources;
</script>