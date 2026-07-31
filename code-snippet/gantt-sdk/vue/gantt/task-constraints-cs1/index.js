import Vue from 'vue';
import { GanttPlugin, Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu } from '@syncfusion/ej2-vue-gantt';
import { constraintData } from './data-source.js';

Vue.use(GanttPlugin);

new Vue({
  el: '#app',
  template: `
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
    </ejs-gantt>
  `,
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
  provide: {
    gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]
  }
});
