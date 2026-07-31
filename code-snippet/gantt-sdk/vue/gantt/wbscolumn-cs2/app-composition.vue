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
      :enableWBS="true"
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
      @actionBegin="actionBegin"
      @dataBound="dataBound"
    />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import {
  GanttComponent as EjsGantt,
  Selection,
  Toolbar,
  DayMarkers,
  Edit,
  Filter,
  Sort,
  ContextMenu
} from '@syncfusion/ej2-vue-gantt';
import { WBSData } from './data-source.js';

provide('gantt', [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]);

const gantt = ref(null);
const isRowDropped = ref(false);
const enableAutoWbsUpdate = ref(false);
const projectData = WBSData;

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
  { field: 'TaskID', visible: false },
  { field: 'WBSCode', headerText: 'WBS Code', width: '150px' },
  { field: 'TaskName', headerText: 'Task Name', width: '260px' },
  { field: 'StartDate', headerText: 'Start Date', width: '140px' },
  { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190px' },
  { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
  { field: 'Progress', headerText: 'Progress' }
];

const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
};

const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
const filterSettings = { type: 'Menu' };
const selectionSettings = { mode: 'Row', type: 'Single' };
const splitterSettings = { columnIndex: 4 };
const timelineSettings = {
  topTier: { unit: 'Week', format: 'dd/MM/yyyy' },
  bottomTier: { unit: 'Day', count: 1 },
  showTooltip: true
};

const labelSettings = {
  leftLabel: 'TaskID',
  rightLabel: 'Task Name: ${taskData.TaskName}',
  taskLabel: '${Progress}%'
};

const eventMarkers = [{ day: new Date('04/02/2024'), label: 'Project Initiation' }];
const projectStartDate = new Date('03/31/2024');
const projectEndDate = new Date('05/30/2024');

function actionBegin(args) {
  if (args.requestType === 'beforeDrop') {
    isRowDropped.value = true;
    gantt.value.ej2Instances.enableAutoWbsUpdate = true;
  }
}

function dataBound() {
  if (isRowDropped.value) {
    gantt.value.ej2Instances.enableAutoWbsUpdate = false;
    isRowDropped.value = false;
  }
}
</script>
