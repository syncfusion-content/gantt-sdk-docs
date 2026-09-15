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
		workingTime: [
			{ from: 9, to: 12 },
			{ from: 13, to: 17 }
		],
		exceptions: [{
			from: new Date('04/06/2026'),
			to: new Date('04/06/2026'),
			name: 'Extended Working Day',
			isWorking: true,
			workingTime: [{ from: 8, to: 18 }]
		}]
	}
};
const columns = [
	{ field: 'TaskId', headerText: 'ID', width: '80' },
	{ field: 'TaskName', headerText: 'Task Name', width: '250' },
	{ field: 'StartDate', headerText: 'Start Date' },
	{ field: 'Duration', headerText: 'Duration' }
];
</script>
