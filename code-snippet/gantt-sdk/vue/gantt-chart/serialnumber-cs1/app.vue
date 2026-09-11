<template>
	<div>
		<ejs-gantt id="ganttDefault" :dataSource="data" :height="height" :allowSorting="true" :allowFiltering="true" :allowResizing="true" :enableContextMenu="true" :showColumnMenu="true" :enableSerialNumber="true" :allowRowDragAndDrop="true" :allowTaskbarDragAndDrop="true" :treeColumnIndex="2" :editSettings="editSettings" :taskFields="taskFields" :splitterSettings="splitterSettings" :toolbar="toolbar" :columns="columns"></ejs-gantt>
	</div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { data } from './data-source.js';
export default {
	name: "App",
	components: {
		"ejs-gantt": GanttComponent
	},
	data: function() {
		return {
			data: data,
			height: '450px',
			taskFields: {
				id: 'TaskID',
				name: 'TaskName',
				startDate: 'StartDate',
				duration: 'Duration',
				progress: 'Progress',
				parentID: 'ParentID'
			},
			editSettings: {
				allowAdding: true,
				allowEditing: true,
				allowDeleting: true,
				allowTaskbarEditing: true,
				showDeleteConfirmDialog: true
			},
			toolbar: [
				'Add',
				'Edit',
				'Update',
				'Delete',
				'Cancel',
				'Indent',
				'Outdent',
				'ExpandAll',
				'CollapseAll',
				'Search'
			],
			splitterSettings: {
				columnIndex: 4
			},
			columns: [
				{ field: 'TaskID', headerText: 'Task ID', visible: false },
				{ field: 'SerialNumber', headerText: 'S.No', width: '100', allowFiltering: false },
				{ field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '280' },
				{ field: 'StartDate', headerText: 'Start Date', width: '140' },
				{ field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130' },
				{ field: 'Progress', headerText: 'Progress' }
			]
		};
	}
};
</script>
