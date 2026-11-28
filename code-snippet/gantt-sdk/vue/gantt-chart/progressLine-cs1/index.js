import Vue from 'vue';
import { GanttPlugin, Edit, ProgressLine } from '@syncfusion/ej2-vue-gantt';
import { GanttData } from './data-source.js';

Vue.use(GanttPlugin);

new Vue({
    el: '#app',
    template: `
        <ejs-gantt
            :dataSource="data"
            :taskFields="taskFields"
            :editSettings="editSettings"
            :progressLine="progressLine"
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
                parentID: 'ParentID'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowTaskbarEditing: true
            },
            progressLine: {
                statusDate: new Date('04/07/2026'),
                lineColor: '#e3165b',
                lineWidth: 2
            },
            projectStartDate: new Date('04/05/2026'),
            projectEndDate: new Date('04/30/2026')
        };
    },
    provide: {
        gantt: [Edit, ProgressLine]
    }
});
