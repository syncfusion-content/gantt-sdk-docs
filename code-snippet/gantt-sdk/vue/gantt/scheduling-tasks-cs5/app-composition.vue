<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings= "editSettings" :allowUnscheduledTasks='true'></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Edit } from "@syncfusion/ej2-vue-gantt";
const data = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            isParent:true,
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', Duration: 3, Progress: 50},
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Progress: 50   },
                { TaskID: 4, TaskName: 'Soil test approval', EndDate: new Date('04/08/2019'), Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            isParent:true,
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Progress: 50, resources: [4],isParent:false  },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Progress: 50  },
                { TaskID: 8, TaskName: 'Estimation approval',Duration: 0,Progress: 50}
            ]
        },
    ];
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate:'EndDate',
    duration:'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const editSettings = {
    allowEditing:true,
}
provide('gantt',  [ Edit ]);
</script>