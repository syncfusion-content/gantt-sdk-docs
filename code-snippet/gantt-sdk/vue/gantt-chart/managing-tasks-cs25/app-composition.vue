<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :editDialogFields="editDialogFields" :addDialogFields= "addDialogFields" :dataSource="data"  :resources= "resourceCollection" :resourceFields= "resourceFields" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { GanttComponent as EjsGantt, Edit, Toolbar } from "@syncfusion/ej2-vue-gantt";
import {projectNewData ,editingResources} from "./data-source"

const data = projectNewData;
const addDialogFields = [
    { type: 'General', headerText: 'General add',fields:["TaskID", "TaskName","newInput"]},
    { type: 'Dependency'},
    { type: 'Resources'} , 
    { type: 'Notes' },
    {type:"Segments"}
];
const editDialogFields = [
    { type: 'General', headerText: 'General edit', fields: ["TaskID", "TaskName", "newinput"] },
    { type: 'Dependency'},
    { type: 'Resources'},
    { type: 'Notes'},
    { type: "Segments"}
];
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    resourceInfo: 'resources',
    work: 'work',
    child: 'subtasks',
    segments: 'Segments',
    notes:"note",
};
const resourceCollection = editingResources;
const resourceFields = {
    id: 'resourceId',
    name: 'resourceName',
    unit: 'resourceUnit',
    group: 'resourceGroup'
};
const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
provide('gantt',  [ Edit, Toolbar ]);
</script>