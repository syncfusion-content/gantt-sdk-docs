<template>
     <div>
        <ejs-gantt ref='gantt' id="customContextMenu" :dataSource="data" :taskFields = "taskFields" :height = "height" :editSettings="editSettings" :enableContextMenu="true" :contextMenuItems="contextMenuItems" :contextMenuClick = "contextMenuClick" :contextMenuOpen= "contextMenuOpen" :addChildRecords= "addChildRecords"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, ContextMenu, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const gantt = ref(null);
var copiedRecord;
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
};
const contextMenuItems = [{ text: 'Copy', target: '.e-content', id: 'copy' },
{ text: 'Paste', target: '.e-content', id: 'paste' }
];
const contextMenuClick = function (args) {
    var ganttObj = gantt.value.ej2Instances;
    if (args.item.id === 'copy') {
        copiedRecord = args.rowData;
        copiedRecord.taskData.TaskID = ganttObj.currentViewData.length + 1;
    }
    if (args.item.id === 'paste') {
        ganttObj.addRecord(copiedRecord.taskData,'Below',args.rowData.index);
        if(copiedRecord.hasChildRecords) {
            addChildRecords(copiedRecord, args.rowData.index + 1);
        }
        copiedRecord = undefined;
    }
}
const contextMenuOpen = function (args) {
    if (args.type !== 'Header') {
        if (copiedRecord) {
            args.hideItems.push('Copy');
        } else {
            args.hideItems.push('Paste');
         }
    }
}
const addChildRecords = function(record, index) {
    var ganttObj = gantt.value.ej2Instances;
    for(var i=0; i<record.childRecords.length; i++) {
    var childRecord = record.childRecords[i];
    childRecord.taskData.TaskID = ganttObj.currentViewData.length + 1;
    ganttObj.addRecord(childRecord.taskData,'Child',index);
    if(childRecord.hasChildRecords) {
        addChildRecords(childRecord, index + (i+1));
    }
}
}
provide('gantt',  [ ContextMenu, Edit, Selection]);
</script>