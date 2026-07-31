<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :editDialogFields="editDialogFields" :addDialogFields= "addDialogFields" :dataSource="data"  :resources= "resourceCollection" :resourceFields= "resourceFields" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings" ></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { GanttComponent as EjsGantt, Edit, Toolbar } from "@syncfusion/ej2-vue-gantt";
import {projectNewData ,editingResources} from "./data-source"
const data = projectNewData;
const addDialogFields = [
        { type: 'General'},
        { type: 'Dependency', additionalParams: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
        { type: 'Resources', additionalParams: { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }]}},
        {type:"Segments", additionalParams:{columns:[{field:"segmentTask",width:"170px" ,headerText:"Segment Task"}],}}
];
const editDialogFields = [
        { type: 'General'},
        { type: 'Dependency', additionalParams: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
        { type: 'Resources', additionalParams: { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }]}},
        {type:"Segments", additionalParams:{columns:[{field:"segmentTask",width:"170px" ,headerText:"Segment Task"}],}}
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