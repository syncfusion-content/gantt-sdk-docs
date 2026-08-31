import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
	height: '450px',
	hoursPerDay: 8,
	projectStartDate: new Date('04/01/2026'),
	projectEndDate: new Date('04/30/2026'),
	taskFields: {
		id: 'TaskId',
		name: 'TaskName',
		startDate: 'StartDate',
		duration: 'Duration',
		parentID: 'ParentId'
	},
	labelSettings: {
		leftLabel: 'TaskName'
	},
	calendarSettings: {
		projectCalendar: {
			workingTime: [
				{ from: 9, to: 12 },
				{ from: 13, to: 17 }
			],
			exceptions: [
				{ from: new Date('04/06/2026'), to: new Date('04/06/2026'), name: 'Extended Working Day', isWorking: true, workingTime: [{ from: 8, to: 18 }] }
			]
		}
	}
});
gantt.appendTo('#Gantt');

let addBtn: Button = new Button();
addBtn.appendTo('#updateHoursPerDay');

document.getElementById('updateHoursPerDay').addEventListener('click', () => {
    gantt.hoursPerDay = 16;
});