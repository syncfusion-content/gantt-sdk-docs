
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
Vue.use(GanttPlugin);
new Vue({
    el: '#app',
    template: `
    <div>
        <ejs-gantt height="430px" :dataSource="data" :taskFields="taskSettings" :timelineSettings="timelineSettings"
            :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
        </ejs-gantt>
    </div>
    `,
    data: function () {
        return {
            data: [
                {
                    TaskID: 1,
                    TaskName: "Project Initiation",
                    StartDate: new Date("04/02/2019"),
                    EndDate: new Date("04/21/2019")
                },
                { TaskID: 2, TaskName: "Identify Site location", StartDate: new Date("04/02/2019"), Duration: 4, ParentID: 1, Progress: 50 },
                { TaskID: 3, TaskName: "Perform Soil test", StartDate: new Date("04/02/2019"), Duration: 4, ParentID: 1, Progress: 50 },
                { TaskID: 4, TaskName: "Soil test approval", StartDate: new Date("04/02/2019"), Duration: 4, ParentID: 1, Progress: 50 },
                {
                    TaskID: 5,
                    TaskName: "Project Estimation",
                    StartDate: new Date("04/02/2019"),
                    EndDate: new Date("04/21/2019")
                },
                { TaskID: 6, TaskName: "Develop floor plan for estimation", StartDate: new Date("04/04/2019"), Duration: 3, ParentID: 5, Progress: 50 },
                { TaskID: 7, TaskName: "List materials", StartDate: new Date("04/04/2019"), Duration: 3, ParentID: 5, Progress: 50 },
                { TaskID: 8, TaskName: "Estimation approval", StartDate: new Date("04/04/2019"), Duration: 3, ParentID: 5, Progress: 50 }
            ],
            taskSettings: {
                id: "TaskID",
                name: "TaskName",
                startDate: "StartDate",
                duration: "Duration",
                progress: "Progress",
                parentID: "ParentID"
            },
            timelineSettings: {
                viewStartDate: new Date("04/03/2019"),
                viewEndDate: new Date("04/07/2019")
            },
            projectStartDate: new Date("03/31/2019"),
            projectEndDate: new Date("04/13/2019")
        };
    },

    provide: {
        gantt: []
    }
});