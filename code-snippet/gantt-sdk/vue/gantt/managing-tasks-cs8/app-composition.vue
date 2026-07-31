<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields= "taskFields" :height= "height" :editDialogFields="editDialogFields" :addDialogFields="addDialogFields" :editSettings="editSettings"  :toolbar="toolbar" :resourceFields= "resourceFields" :resources= "resources" :labelSettings="labelSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Edit, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { editingResources } from './data-source.js';

const data = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,Progress: 50, resources: [1]},
            {TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',Progress: 50, resources: [2, 3, 5]},
            {TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '4', Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '6', resources: [4, 8],Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 0, Predecessor: '7', resources: [12, 5]}
        ]
    }
];
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks',
    notes: 'info',
    resourceInfo: 'resources'
};
const editDialogFields = [
    { type: 'General', headerText: 'General' },
    { type: 'Dependency' },
    { type: 'Resources' },
    { type: 'Notes' }
];
const addDialogFields = [
    { type: 'General', headerText: 'General' },
    { type: 'Dependency' }
    ];
const height = '450px';
const resourceFields = {
    id: 'resourceId',
    name: 'resourceName',
};
const resources = editingResources;
const editSettings = {
   allowAdding: true,
   allowEditing: true,
   mode: 'Dialog',
   allowTaskbarEditing: true
};
const toolbar = ['Add'];
const labelSettings = {
    leftLabel: 'TaskName',
    rightLabel: 'resources'
};
provide('gantt',  [ Edit, Toolbar ]);
</script>