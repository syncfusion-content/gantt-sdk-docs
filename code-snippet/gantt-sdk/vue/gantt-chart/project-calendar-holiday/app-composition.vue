<template>
	<div>
		<ejs-gantt :dataSource="data" :height="height" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :taskFields="taskFields" :labelSettings="labelSettings" :calendarSettings="calendarSettings" :columns="columns"></ejs-gantt>
	</div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';

const data = GanttData;
const height = '450px';
const projectStartDate = new Date('04/01/2026');
const projectEndDate = new Date('04/30/2026');
const taskFields = {
	id: 'TaskId',
	name: 'TaskName',
	startDate: 'StartDate',
	duration: 'Duration',
	parentID: 'ParentId'
};
const labelSettings = { leftLabel: 'TaskName' };
const calendarSettings = {
	projectCalendar: {
		holidays: [
			{ from: new Date('04/10/2026'), to: new Date('04/10/2026'), label: 'Regional closure' },
			{ from: new Date('04/17/2026'), to: new Date('04/17/2026'), label: 'Public holidays' }
		]
	}
};
const columns = [
	{ field: 'TaskId', headerText: 'ID', width: '80' },
	{ field: 'TaskName', headerText: 'Task Name', width: '250' },
	{ field: 'StartDate', headerText: 'Start Date' },
	{ field: 'Duration', headerText: 'Duration' }
];
</script>
