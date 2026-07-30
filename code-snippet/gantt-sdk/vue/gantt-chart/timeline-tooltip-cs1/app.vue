<template>
  <div>
    <ejs-gantt
      ref="gantt"
      :dataSource="data"
      id="GanttContainer"
      :taskFields="taskFields"
      :height="height"
      :tooltipSettings="tooltipSettings"
    >
      <template v-slot:timelineTooltipTemplate="{ data }">
        <div v-if="data.tier == 'topTier'" v-html="topTierTooltip(data.value, data.date, data.tier)"></div>
        <div v-if="data.tier == 'bottomTier'" v-html="bottomTierTooltip(data.date, data.tier)"></div>
      </template>
    </ejs-gantt>
  </div>
</template>

<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { editingData } from "./data-source.js";

export default {
  name: "App",
  components: {
    "ejs-gantt": GanttComponent,
  },
  data() {
    return {
      data: editingData,
      height: "450px",
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
        timeline: "timelineTooltipTemplate",
      },
    };
  },
  methods: {
    format(value) {
      return this.$refs.gantt.getFormatedDate(value, "d/M/y");
    },
    topTierTooltip(value, date, tier) {
      const startDate = new Date(date);
      const endDate = new Date(startDate.getTime());
      endDate.setDate(startDate.getDate() + 6);
      const data = this.getTooltipData(startDate, endDate, tier);
      return this.generateTooltipMarkup(value, data);
    },
    bottomTierTooltip(date, tier) {
      const startDate = new Date(date);
      const endDate = new Date(startDate.getTime());
      const data = this.getTooltipData(startDate, endDate, tier);
      return this.generateTooltipMarkup(date, data);
    },
    getTooltipData(startDate, endDate, tier) {
      const ganttElement = this.$refs.gantt.ej2_instances[0];
      let activeTasks;
      if (tier === "topTier") {
        activeTasks = ganttElement.currentViewData.filter(task => {
          const taskStart = new Date(task.StartDate);
          const taskEnd = new Date(task.EndDate);
          taskStart.setHours(0, 0, 0, 0);
          taskEnd.setHours(0, 0, 0, 0);
          return taskStart >= startDate && taskEnd <= endDate;
        });
      } else {
        activeTasks = ganttElement.currentViewData.filter(task => {
          const taskStart = new Date(task.StartDate);
          const taskEnd = new Date(task.EndDate);
          taskStart.setHours(0, 0, 0, 0);
          taskEnd.setHours(0, 0, 0, 0);
          return taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime();
        });
      }
      const milestones = activeTasks.filter(task => task.Duration === 0);
      const totalProgress = activeTasks.reduce((acc, task) => acc + (task.Progress || 0), 0);
      const overallProgress = activeTasks.length > 0 ? (totalProgress / activeTasks.length).toFixed(2) : 0;
      return { activeTasks: activeTasks.length, milestones: milestones.length, overallProgress: overallProgress };
    },
    generateTooltipMarkup(label, tooltipData) {
      return `
        <div style="padding: 5px;">
          <div style="padding-bottom: 9px; text-align: center; border-bottom: 2px solid white">
            <span style="font-weight: bold; font-size: 14px;">${label}</span>
          </div>
          <div style="display: flex; padding-bottom: 5px; padding-top: 9px">
            <span style="font-weight: bold;">Active Tasks:</span>
            <span style="padding-left: 2px;">${tooltipData.activeTasks}</span>
          </div>
          <div style="display: flex; padding-bottom: 5px;">
            <span style="font-weight: bold;">Milestones:</span>
            <span style="padding-left: 2px;">${tooltipData.milestones}</span>
          </div>
          <div style="display: flex; padding-bottom: 5px;">
            <span style="font-weight: bold;">Overall Progress:</span>
            <span style="padding-left: 2px;">${tooltipData.overallProgress}</span>
          </div>
        </div>
      `;
    },
  },
};
</script>
