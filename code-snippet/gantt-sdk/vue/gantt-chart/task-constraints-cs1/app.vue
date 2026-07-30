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
    >
      <template v-slot:rightLabel="{ data }">
        <div>{{ getConstraintText(data.ganttProperties.constraintType) }}</div>
      </template>
    </ejs-gantt>
  </div>
</template>

<script>
import {
  GanttComponent,
  Selection,
  Toolbar,
  DayMarkers,
  Edit,
  Filter,
  Sort,
  ContextMenu
} from '@syncfusion/ej2-vue-gantt';
import { constraintData } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data() {
    return {
      data: constraintData,
      dateFormat: 'MMM dd, y',
      height: '450px',
      taskFields: {
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
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
      },
      toolbar: [
        'Add', 'Edit', 'Update', 'Delete', 'Cancel',
        'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'
      ],
      gridLines: 'Both',
      timelineSettings: {
        topTier: {
          unit: 'Week',
          format: 'MMM dd, y'
        },
        bottomTier: {
          unit: 'Day'
        }
      },
      columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', headerText: 'Job Name', width: 250, clipMode: 'EllipsisWithTooltip' },
        { field: 'ConstraintType', width: 180 },
        { field: 'ConstraintDate' },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Progress' },
        { field: 'Predecessor' }
      ],
      labelSettings: {
        leftLabel: 'TaskName',
        rightLabel: 'rightLabel'
      },
      splitterSettings: {
        columnIndex: 4
      },
      eventMarkers: [
        { day: new Date('03/25/2025'), label: 'Project StartDate' },
        { day: new Date('08/28/2025'), label: 'Project EndDate' }
      ],
      projectStartDate: new Date('03/25/2025'),
      projectEndDate: new Date('09/28/2025')
    };
  },
  methods: {
    getConstraintText(type) {
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
  },
  provide: {
    gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]
  }
};
</script>
