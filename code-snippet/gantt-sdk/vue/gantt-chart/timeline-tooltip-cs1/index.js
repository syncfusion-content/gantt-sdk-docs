
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
import taskbarTemplate from './taskbartemplate.vue';
Vue.use(GanttPlugin);
;
new Vue({
  el: '#app',
  template: `
  <div>
    <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :height="height"
      :tooltipSettings="tooltipSettings">
      <template v-slot:timelineTooltipTemplate="{ data }">
        <div v-if="data.tier === 'topTier'" v-html="topTierTooltip(data.value, data.date, data.tier)"></div>
        <div v-else-if="data.tier === 'bottomTier'" v-html="bottomTierTooltip(data.date, data.tier)"></div>
      </template>
    </ejs-gantt>
  </div>
`,

  data: function () {
    return {
      data: editingData,
      height: '450px',
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        baselineStartDate: "BaselineStartDate",
        baselineEndDate: "BaselineEndDate",
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
      },
      tooltipSettings: {
        showTooltip: true,
        timeline: "timelineTooltipTemplate"
      },
    };
  },
  methods: {
    format: function (value) {
      return this.$refs.gantt.getFormatedDate(value, 'd/M/y');
    },
    topTierTooltip: function (value, date, tier) {
      var endDate;
      var startDate = new Date(date);
      endDate = new Date(startDate.getTime());
      endDate.setDate(startDate.getDate() + 6);
      var data = this.getTooltipData(startDate, endDate, tier);
      return this.generateTooltipMarkup(value, data);
    },
    bottomTierTooltip: function (date, tier) {
      var startDate = new Date(date);
      var endDate = new Date(startDate.getTime());
      var data = this.getTooltipData(startDate, endDate, tier);
      return this.generateTooltipMarkup(date, data);
    },
    getTooltipData: function (startDate, endDate, tier) {
      var ganttElement = document.getElementsByClassName('e-gantt')[0].ej2_instances[0]
      var activeTasks;
      if (tier === 'topTier') {
        activeTasks = ganttElement.currentViewData.filter(function (task) {
          var taskStart = new Date(task.StartDate);
          var taskEnd = new Date(task.EndDate);
          taskStart.setHours(0, 0, 0, 0);
          taskEnd.setHours(0, 0, 0, 0);
          return taskStart >= startDate && taskEnd <= endDate;
        });
      } else {
        activeTasks = ganttElement.currentViewData.filter(function (task) {
          var taskStart = new Date(task.StartDate);
          var taskEnd = new Date(task.EndDate);
          taskStart.setHours(0, 0, 0, 0);
          taskEnd.setHours(0, 0, 0, 0);
          return taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime();
        });
      }
      var milestones = activeTasks.filter(function (task) {
        return task.Duration === 0;
      });
      var totalProgress = activeTasks.reduce(function (acc, task) {
        return acc + (task.Progress ? task.Progress : 0);
      }, 0);
      var overallProgress = (activeTasks.length > 0) ? (totalProgress / activeTasks.length).toFixed(2) : 0;
      return { activeTasks: activeTasks.length, milestones: milestones.length, overallProgress: overallProgress };
    },
    generateTooltipMarkup: function (label, tooltipData) {
      return (
        '<div style="padding: 5px;">' +
        '<div style="padding-bottom: 9px; text-align: center; border-bottom: 2px solid white">' +
        '<span style="font-weight: bold; font-size: 14px;">' + label + '</span>' +
        '</div>' +
        '<div style="display: flex; padding-bottom: 5px; padding-top: 9px">' +
        '<span style="font-weight: bold;">Active Tasks:</span>' +
        '<span style="padding-left: 2px;">' + tooltipData.activeTasks + '</span>' +
        '</div>' +
        '<div style="display: flex; padding-bottom: 5px;">' +
        '<span style="font-weight: bold;">Milestones:</span>' +
        '<span style="padding-left: 2px;">' + tooltipData.milestones + '</span>' +
        '</div>' +
        '<div style="display: flex; padding-bottom: 5px;">' +
        '<span style="font-weight: bold;">Overall Progress:</span>' +
        '<span style="padding-left: 2px;">' + tooltipData.overallProgress + '</span>' +
        '</div>' +
        '</div>'
      );
    }
  }

});