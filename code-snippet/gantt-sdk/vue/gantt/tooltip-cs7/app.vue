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
<script>

import { GanttComponent, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { baselineData  } from './data-source.js';
import { Internationalization } from '@syncfusion/ej2-base';
let instance = new Internationalization();
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: baselineData,
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                baselineStartDate: 'BaselineStartDate',
                baselineEndDate: 'BaselineEndDate'
            },
            columns: [
                { field: 'TaskName', headerText: 'Service Name', width: '250', clipMode: 'EllipsisWithTooltip' },
                { field: 'BaselineStartDate', headerText: 'Planned start time' },
                { field: 'BaselineEndDate', headerText: 'Planned end time' },
                { field: 'StartDate', headerText: 'Start time' },
                { field: 'EndDate', headerText: 'End time' },
            ],
            timelineSettings: {
                timelineUnitSize: 65,
                topTier: {
                    unit: 'None',
                },
                bottomTier: {
                    unit: 'Minutes',
                    count: 15,
                    format: 'hh:mm a'
                },
            },
            dateFormat: 'hh:mm a',
            height: '450px',
            dayWorkingTime: [{ from: 1, to: 24 }],
            projectStartDate: new Date('03/05/2018 09:30:00 AM'),
            projectEndDate: new Date('03/05/2018 07:00:00 PM'),
            tooltipSettings: {
                showTooltip: true,
                baseline: "baselineTooltipTemplate"
            },
        };
  },
  provide: {
      gantt: [ DayMarkers ]
  },
  methods: {
      format: function(value) {
                return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
            }
  }
};
</script>