<template>
	<div>
		<ejs-gantt id="ganttDefault" :dataSource="data" :height="height" :allowSorting="true" :allowFiltering="true" :allowResizing="true" :enableContextMenu="true" :showColumnMenu="true" :enableSerialNumber="true" :allowRowDragAndDrop="true" :allowTaskbarDragAndDrop="true" :treeColumnIndex="2" :editSettings="editSettings" :taskFields="taskFields" :splitterSettings="splitterSettings" :toolbar="toolbar" :columns="columns"></ejs-gantt>
	</div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { data } from './data-source.js';

const height = '450px';
const taskFields = {
	id: 'TaskID',
	name: 'TaskName',
	startDate: 'StartDate',
	duration: 'Duration',
	progress: 'Progress',
	parentID: 'ParentID'
};
const editSettings = {
	allowAdding: true,
	allowEditing: true,
	allowDeleting: true,
	allowTaskbarEditing: true,
	showDeleteConfirmDialog: true
};
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Indent', 'Outdent', 'ExpandAll', 'CollapseAll', 'Search'];
const splitterSettings = { columnIndex: 4 };
const columns = [
	{ field: 'TaskID', headerText: 'Task ID', visible: false },
	{ field: 'SerialNumber', headerText: 'S.No', width: '100', allowFiltering: false },
	{ field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '280' },
	{ field: 'StartDate', headerText: 'Start Date', width: '140' },
	{ field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130' },
	{ field: 'Progress', headerText: 'Progress' }
];
</script>
