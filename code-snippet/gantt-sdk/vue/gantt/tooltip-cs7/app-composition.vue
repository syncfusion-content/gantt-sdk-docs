<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :renderBaseline="true" :taskFields="taskFields"
      :columns="columns" :treeColumnIndex="1" :includeWeekend="true" :timelineSettings="timelineSettings"
      :height="height" :dayWorkingTime="dayWorkingTime" :projectStartDate="projectStartDate"
      :projectEndDate="projectEndDate" :tooltipSettings="tooltipSettings" baselineColor='red'>
      <template v-slot:baselineTooltipTemplate="{data}">
        <div>Baseline StartDate : {{format(data.BaselineStartDate)}}</div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { baselineData  } from './data-source.js';
import { Internationalization } from '@syncfusion/ej2-base';
let instance = new Internationalization();
const data = baselineData;
const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate'
};
const columns = [
    { field: 'TaskName', headerText: 'Service Name', width: '250', clipMode: 'EllipsisWithTooltip' },
    { field: 'BaselineStartDate', headerText: 'Planned start time' },
    { field: 'BaselineEndDate', headerText: 'Planned end time' },
    { field: 'StartDate', headerText: 'Start time' },
    { field: 'EndDate', headerText: 'End time' },
];
const timelineSettings = {
    timelineUnitSize: 65,
    topTier: {
        unit: 'None',
    },
    bottomTier: {
        unit: 'Minutes',
        count: 15,
        format: 'hh:mm a'
    },
};
const height = '450px';
const dayWorkingTime = [{ from: 1, to: 24 }];
const projectStartDate = new Date('03/05/2018 09:30:00 AM');
const projectEndDate = new Date('03/05/2018 07:00:00 PM');
const tooltipSettings = {
    showTooltip: true,
    baseline: "baselineTooltipTemplate"
};
const dateFormat = 'hh:mm a';
const format = (value) => {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};
provide('gantt',  [ DayMarkers ]);
</script>