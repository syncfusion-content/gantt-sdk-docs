<template>
     <div>
        <ejs-button id="editDialog" cssClass="e-info" v-on:click.native="edit">edit</ejs-button>
        <br><br>
       <ejs-button id="addDialog" cssClass="e-info" v-on:click.native="add">add</ejs-button>
       <br><br>
       <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields= "taskFields" :height="height" :editDialogFields="editDialogFields" :editSettings="editSettings" :resourceNameMapping= "resourceNameMapping" :resourceIDMapping="resourceIdMapping" :resources= "resources"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { editingData , editingResources } from './data-source.js';
const gantt = ref(null);
const data = editingData;
const height = '450px';
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
const resourceNameMapping = 'resourceName';
const resourceIdMapping = 'resourceId';
const resources = editingResources;
const editSettings = {
    allowEditing: true,
    allowTaskbarEditing: true
};

const edit = function(e){
    var ganttObj = gantt.value.ej2Instances;
    ganttObj.editModule.dialogModule.openEditDialog();
};
const add = function(e){
    var ganttObj = gantt.value.ej2Instances;
    ganttObj.editModule.dialogModule.openAddDialog();
};
provide('gantt',  [ Edit, Selection ]);
</script>
