<template>
  <div class="content-wrapper">
    <ejs-gantt
      ref="gantt"
      id="HierarchyProjectview"
      :dataSource="projectData"
      :taskFields="taskFields"
      :columns="columns"
      :editSettings="editSettings"
      :toolbar="toolbar"
      :allowSorting="true"
      :enableContextMenu="true"
      :enableWBS="enableWBS"
      :treeColumnIndex="2"
      :enableAutoWbsUpdate="enableAutoWbsUpdate"
      :allowFiltering="true"
      :filterSettings="filterSettings"
      :selectionSettings="selectionSettings"
      :splitterSettings="splitterSettings"
      :gridLines="'Both'"
      :highlightWeekends="true"
      :timelineSettings="timelineSettings"
      :labelSettings="labelSettings"
      :taskbarHeight="20"
      :rowHeight="40"
      :eventMarkers="eventMarkers"
      :height="'550px'"
      :allowUnscheduledTasks="true"
      :projectStartDate="projectStartDate"
      :projectEndDate="projectEndDate"
    />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import { GanttComponent as EjsGantt, Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu } from '@syncfusion/ej2-vue-gantt';
import { WBSData } from './data-source.js';

const gantt = ref(null);
provide('gantt', [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]);

const enableWBS = true;
const enableAutoWbsUpdate = true;
const projectData = WBSData;
const projectStartDate = new Date('03/31/2024');
const projectEndDate = new Date('05/30/2024');

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  dependency: 'Predecessor',
  parentID: 'ParentId',
};

const columns = [
  { field: 'TaskID', headerText: 'Task ID', visible: false },
  { field: 'WBSCode', headerText: 'WBS Code', width: '150px' },
  { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '260px' },
  { field: 'StartDate', headerText: 'Start Date', width: '140px' },
  { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190px' },
  { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
  { field: 'Progress', headerText: 'Progress' },
];

const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];

const filterSettings = { type: 'Menu' };
const selectionSettings = { mode: 'Row', type: 'Single', enableToggle: false };
const splitterSettings = { columnIndex: 4 };

const timelineSettings = {
  showTooltip: true,
  topTier: { unit: 'Week', format: 'dd/MM/yyyy' },
  bottomTier: { unit: 'Day', count: 1 },
};

const labelSettings = {
  leftLabel: 'TaskID',
  rightLabel: 'Task Name: ${taskData.TaskName}',
  taskLabel: '${Progress}%',
};

const eventMarkers = [{ day: new Date('04/02/2024'), label: 'Project Initiation' }];
</script>