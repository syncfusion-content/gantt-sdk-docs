<template>
  <div class="content-wrapper">
    <ejs-gantt
      ref="gantt"
      id="ConstraintGantt"
      :dataSource="data"
      :dateFormat="dateFormat"
      :taskFields="taskFields"
      :toolbar="toolbar"
      :editSettings="editSettings"
      :allowSelection="true"
      :gridLines="gridLines"
      :height="height"
      :treeColumnIndex="1"
      :highlightWeekends="true"
      :timelineSettings="timelineSettings"
      :labelSettings="labelSettings"
      :projectStartDate="projectStartDate"
      :projectEndDate="projectEndDate"
      :columns="columns"
      :eventMarkers="eventMarkers"
      :splitterSettings="splitterSettings"
      @actionBegin="actionBegin"
    >
      <template #rightLabel="{ data }">
        <div>{{ getConstraintText(data.ganttProperties.constraintType) }}</div>
      </template>
    </ejs-gantt>
  </div>
</template>

<script setup>
import { provide } from 'vue';
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
import { constraintData } from './data-source';

provide('gantt', [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]);

const data = constraintData;
const dateFormat = 'MMM dd, y';
const height = '450px';

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
  duration: 'Duration',
  progress: 'Progress',
  constraintDate: 'ConstraintDate',
  constraintType: 'ConstraintType',
  dependency: 'Predecessor',
  parentID: 'ParentID',
  notes: 'info'
};

const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
};

const toolbar = [
  'Add', 'Edit', 'Update', 'Delete', 'Cancel',
  'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'
];

const gridLines = 'Both';

const timelineSettings = {
  topTier: { unit: 'Week', format: 'MMM dd, y' },
  bottomTier: { unit: 'Day' }
};

const columns = [
  { field: 'TaskID', width: 80 },
  { field: 'TaskName', headerText: 'Job Name', width: 250, clipMode: 'EllipsisWithTooltip' },
  { field: 'ConstraintType', width: 180 },
  { field: 'ConstraintDate' },
  { field: 'StartDate' },
  { field: 'EndDate' },
  { field: 'Duration' },
  { field: 'Progress' },
  { field: 'Predecessor' }
];

const labelSettings = {
  leftLabel: 'TaskName',
  rightLabel: 'rightLabel'
};

const splitterSettings = {
  columnIndex: 4
};

const eventMarkers = [
  { day: new Date('03/25/2025'), label: 'Project StartDate' },
  { day: new Date('08/28/2025'), label: 'Project EndDate' }
];

const projectStartDate = new Date('03/25/2025');
const projectEndDate = new Date('09/28/2025');

function getConstraintText(type) {
  const map = {
    0: 'As Soon As Possible',
    1: 'As Late As Possible',
    2: 'Must Start On',
    3: 'Must Finish On',
    4: 'Start No Earlier Than',
    5: 'Start No Later Than',
    6: 'Finish No Earlier Than',
    7: 'Finish No Later Than'
  };
  return map[type] || '';
}

function actionBegin(args) {
  if (args.requestType === 'validateTaskViolation') {
    args.validateMode.respectMustStartOn = true;
  }
}
</script>
