<template>
	<div>
		<ejs-gantt :dataSource="data" :height="height" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :taskFields="taskFields" :labelSettings="labelSettings" :allowUnscheduledTasks="true" :editSettings="editSettings" :columns="columns"></ejs-gantt>
	</div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';
export default {
	name: "App",
	components: {
		"ejs-gantt": GanttComponent
	},
	data: function() {
		return {
			data: GanttData,
			height: '450px',
			projectStartDate: new Date('03/28/2019'),
			projectEndDate: new Date('05/18/2019'),
			taskFields: {
				id: 'TaskId',
				name: 'TaskName',
				startDate: 'StartDate',
				duration: 'Duration',
				endDate: 'EndDate'
			},
			labelSettings: {
				leftLabel: 'TaskName'
			},
			editSettings: {
				allowTaskbarEditing: true,
				allowTaskbarDraw: true
			},
			columns: [
				{ field: 'TaskId', headerText: 'ID', width: '80' },
				{ field: 'TaskName', headerText: 'Task Name', width: '250' },
				{ field: 'StartDate', headerText: 'Start Date' },
				{ field: 'EndDate', headerText: 'End Date' },
				{ field: 'Duration', headerText: 'Duration' }
			]
		};
	}
};
</script>
