<template>
     <div>
        <ejs-button id="undo" cssClass="e-info" v-on:click="undo">Undo</ejs-button>
        <ejs-button id="redo" cssClass="e-info" v-on:click="redo">Redo</ejs-button>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :allowSorting='true' :allowFiltering='true' :enableUndoRedo='true' :allowRowDragAndDrop='true' :undoRedoActions="undoRedoActions" :allowReordering='true' :showColumnMenu='true' :allowResizing='true' :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
const data = projectNewData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent',
'PrevTimeSpan', 'NextTimeSpan','Undo','Redo'];
const undoRedoActions = ['Add', 'Edit', 'Delete', 'Search','Sorting','Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent',
'PreviousTimeSpan', 'NextTimeSpan','ColumnState'];
 const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};
const undo = function(e){
    var ganttObj = gantt.value.ej2Instances;
    ganttObj.undo();
};
const redo = function(e){
    var ganttObj = gantt.value.ej2Instances;
    ganttObj.redo();
};
provide('gantt',  [ Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo ]);
</script>