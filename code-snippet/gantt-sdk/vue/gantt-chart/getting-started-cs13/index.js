
import Vue from 'vue';
import { GanttPlugin } from '@syncfusion/ej2-vue-gantt';

Vue.use(GanttPlugin);

;
new Vue({
    el: '#app',
    template: `
<div>
<ejs-gantt id="gantt" :dataSource="data" :taskFields = "taskFields" :height="height"></ejs-gantt>
</div>
`,

    data: function () {
        return {
            data: [
                {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
                {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 70, ParentID: 1},
                {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 50, ParentID: 1},
                {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, Progress: 40, ParentID: 1},
                {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-08'), EndDate: new Date('2024-04-18')},
                {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 30, ParentID: 5},
                {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 20, ParentID: 5}
            ],
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID: 'ParentID'
            },
        };
    },

});