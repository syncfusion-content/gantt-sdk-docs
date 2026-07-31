<template>
    <div>
        <ejs-gantt ref='gantt' id="customContextMenu" :dataSource="data" :taskFields="taskFields" :height="height"
            :editSettings="editSettings" :enableContextMenu="true" :allowSorting="true" :allowResizing="true"
            :contextMenuItems="contextMenuItems" :contextMenuClick="contextMenuClick"
            :contextMenuOpen="contextMenuOpen"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, ContextMenu, Edit, Sort, Resize, Selection } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const customContextMenu = ref(null);
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
const contextMenuItems = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
    { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
    { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
    { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
];
const contextMenuClick = function (args) {
    var record = args.rowData;
    var ganttObj = customContextMenu.value.ej2Instances;
    if (args.item.id === 'collapserow') {
        ganttObj.collapseByID(Number(record.ganttProperties.taskId));
    }
    if (args.item.id === 'expandrow') {
        ganttObj.expandByID(Number(record.ganttProperties.taskId));
    }
    if (args.item.id === 'hidecols') {
        ganttObj.hideColumn(args.column.headerText);
    }
}
const contextMenuOpen = function (args) {
    var record = args.rowData;
    if (args.type !== 'Header') {
        if (!record.hasChildRecords) {
            args.hideItems.push('Collapse the Row');
            args.hideItems.push('Expand the Row');
        } else {
            if (record.expanded) {
                args.hideItems.push("Expand the Row");
            } else {
                args.hideItems.push("Collapse the Row");
            }
        }
    }
}
provide('gantt', [ContextMenu, Edit, Sort, Resize, Selection]);
</script>