<template>
    <ejs-gantt height="430px" :dataSource="data" :taskFields="taskSettings" :timelineSettings="timelineSettings"
        :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
    </ejs-gantt>
</template>

<script setup>
import { ref } from "vue";
import { GanttComponent as EjsGantt, } from "@syncfusion/ej2-vue-gantt";
import { provide } from "vue";

provide("gantt", []);

const data = ref([
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
]);

const taskSettings = ref({
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID"
});

const timelineSettings = ref({
    viewStartDate: new Date("04/03/2019"),
    viewEndDate: new Date("04/07/2019")
});

const projectStartDate = ref(new Date("03/31/2019"));
const projectEndDate = ref(new Date("04/13/2019"));
</script>