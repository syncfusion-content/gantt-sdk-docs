<template>
	<div>
		<ejs-gantt :dataSource="data" :height="height" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :taskFields="taskFields" :labelSettings="labelSettings" :allowUnscheduledTasks="true" :editSettings="editSettings" :columns="columns"></ejs-gantt>
	</div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';

const data = GanttData;
const height = '450px';
const projectStartDate = new Date('03/28/2019');
const projectEndDate = new Date('05/18/2019');
const taskFields = {
	id: 'TaskId',
	name: 'TaskName',
	startDate: 'StartDate',
	duration: 'Duration',
	endDate: 'EndDate'
};
const labelSettings = { leftLabel: 'TaskName' };
const editSettings = {
	allowTaskbarEditing: true,
	allowTaskbarDraw: true
};
const columns = [
	{ field: 'TaskId', headerText: 'ID', width: '80' },
	{ field: 'TaskName', headerText: 'Task Name', width: '250' },
	{ field: 'StartDate', headerText: 'Start Date' },
	{ field: 'EndDate', headerText: 'End Date' },
	{ field: 'Duration', headerText: 'Duration' }
];
</script>
