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
	parentID: 'ParentId',
	calendarId: 'CalendarId'
};
const labelSettings = { leftLabel: 'TaskName' };
const calendarSettings = {
	projectCalendar: {
		workingTime: [{ from: 9, to: 17 }]
	},
	taskCalendars: [
		{
			calendarId: 'day-shift',
			workingTime: [{ from: 9, to: 17 }],
			holidays: [],
			exceptions: [{
				from: new Date('04/09/2026'),
				to: new Date('04/09/2026'),
				name: 'Team Meeting Day',
				isWorking: true,
				workingTime: [{ from: 10, to: 16 }]
			}]
		},
		{
			calendarId: 'night-shift',
			workingTime: [{ from: 17, to: 9 }],
			holidays: [],
			exceptions: [{
				from: new Date('04/10/2026'),
				to: new Date('04/10/2026'),
				name: 'Maintenance Window',
				isWorking: true,
				workingTime: [{ from: 18, to: 8 }]
			}]
		}
	]
};
const columns = [
	{ field: 'TaskId', headerText: 'ID', width: '80' },
	{ field: 'TaskName', headerText: 'Task Name', width: '250' },
	{ field: 'StartDate', headerText: 'Start Date' },
	{ field: 'Duration', headerText: 'Duration' }
];
</script>
