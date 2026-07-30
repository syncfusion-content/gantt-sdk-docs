<template>
  <div>
    <ejs-gantt 
      ref='gantt' 
      id="GanttContainer" 
      :dataSource="data" 
      :height="height"
      :enableInfiniteTimelineScroll="true"
      :taskFields="taskFields" 
      :treeColumnIndex="1"
      :splitterSettings="splitterSettings"
      gridLines="Both"
      :timelineSettings="timelineSettings"
      :labelSettings="labelSettings"
    >
      <e-columns>
        <e-column field='TaskID' width='80'></e-column>
        <e-column field='TaskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></e-column>
        <e-column field='StartDate'></e-column>
        <e-column field='Duration'></e-column>
        <e-column field='Progress'></e-column>
        <e-column field='Predecessor'></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
</template>
<script>
import { GanttComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-gantt";
import { infiniteTimelineScrollData } from './data-source.js';

export default {
  name: "App",
  components: {
    "ejs-gantt": GanttComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data: function() {
    return {
      data: infiniteTimelineScrollData,
      height: '430px',
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
      },
      splitterSettings: {
        columnIndex: 3
      },
      timelineSettings: {
        viewStartDate: new Date('12/29/2025'),
        viewEndDate: new Date('04/27/2026')
      },
      labelSettings: {
        leftLabel: 'TaskID',
        rightLabel: 'TaskName'
      }
    };
  },
  provide: {
    gantt: []
  }
};
</script>