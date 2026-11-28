import Vue from 'vue';
import { GanttPlugin } from '@syncfusion/ej2-vue-gantt';
import { GanttData } from './data-source.js';

Vue.use(GanttPlugin);

new Vue({
    el: '#app',
    template: `
        <ejs-gantt
            :dataSource="data"
            :taskFields="taskFields"
            :tooltipSettings="tooltipSettings"
            :projectStartDate="projectStartDate"
            :projectEndDate="projectEndDate"
            height="450px">
        </ejs-gantt>
    `,
    data() {
        return {
            data: GanttData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID: 'ParentID',
                segments: 'Segments'
            },
            tooltipSettings: {
                showTooltip: true,
                showSegmentTooltip: true
            },
            projectStartDate: new Date('04/05/2026'),
            projectEndDate: new Date('04/10/2026')
        };
    }
});
