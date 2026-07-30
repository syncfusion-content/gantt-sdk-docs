import Vue from "vue";
import { GanttPlugin, Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu } from "@syncfusion/ej2-vue-gantt";
import { WBSData } from './data-source.js';

Vue.use(GanttPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-gantt
        ref='gantt'
        id="GanttContainer"
        :dataSource="projectData"
        :taskFields="taskFields"
        :columns="columns"
        :editSettings="editSettings"
        :toolbar="toolbar"
        :enableWBS="true"
        :enableAutoWbsUpdate="enableAutoWbsUpdate"
        :treeColumnIndex="2"
        :timelineSettings="timelineSettings"
        :projectStartDate="projectStartDate"
        :projectEndDate="projectEndDate"
        height="550px"
        @actionBegin="actionBegin"
        @dataBound="dataBound"
      />
    </div>
  `,
  data() {
    return {
      isRowDropped: false,
      enableAutoWbsUpdate: false,
      projectData: WBSData,
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
      },
      columns: [
        { field: 'WBSCode', headerText: 'WBS Code' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
      ],
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
      },
      toolbar: ['Add', 'Edit', 'Update', 'Delete'],
      timelineSettings: {
        topTier: { unit: 'Week' },
        bottomTier: { unit: 'Day', count: 1 }
      },
      projectStartDate: new Date('03/31/2024'),
      projectEndDate: new Date('05/30/2024')
    };
  },
  methods: {
    actionBegin(args) {
      if (args.requestType === 'beforeDrop') {
        this.isRowDropped = true;
        this.$refs.gantt.ej2Instances.enableAutoWbsUpdate = true;
      }
    },
    dataBound() {
      if (this.isRowDropped) {
        this.$refs.gantt.ej2Instances.enableAutoWbsUpdate = false;
        this.isRowDropped = false;
      }
    }
  },
  provide: {
    gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]
  }
});
