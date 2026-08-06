import Vue from "vue";
import { GanttPlugin, Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu } from "@syncfusion/ej2-vue-gantt";
import { WBSData } from './data-source.js';

Vue.use(GanttPlugin);

new Vue({
  el: '#app',
  template: `
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
        :enableAutoWbsUpdate="enableAutoWbsUpdate"
        :treeColumnIndex="2"
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
      ></ejs-gantt>
    </div>
  `,
  data: function () {
    return {
      enableWBS: true,
      enableAutoWbsUpdate: true,
      projectData: WBSData,
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId',
      },
      columns: [
        { field: 'TaskID', headerText: 'Task ID', visible: false },
        { field: 'WBSCode', headerText: 'WBS Code', width: '150px' },
        { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '260px' },
        { field: 'StartDate', headerText: 'Start Date', width: '140px' },
        { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190px' },
        { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
        { field: 'Progress', headerText: 'Progress' }
      ],
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true,
      },
      toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
      filterSettings: {
        type: 'Menu',
      },
      selectionSettings: {
        mode: 'Row',
        type: 'Single',
        enableToggle: false,
      },
      splitterSettings: {
        columnIndex: 4,
      },
      timelineSettings: {
        showTooltip: true,
        topTier: {
          unit: 'Week',
          format: 'dd/MM/yyyy',
        },
        bottomTier: {
          unit: 'Day',
          count: 1,
        },
      },
      labelSettings: {
        leftLabel: 'TaskID',
        rightLabel: 'Task Name: ${taskData.TaskName}',
        taskLabel: '${Progress}%',
      },
      eventMarkers: [
        {
          day: new Date('04/02/2024'),
          label: 'Project Initiation',
        },
      ],
      projectStartDate: new Date('03/31/2024'),
      projectEndDate: new Date('05/30/2024'),
    };
  },
  provide: {
    gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu],
  }
});
