import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(DayMarkers);

let eventMarkersEnabled: boolean = true;

const defaultMarkers: Array<{ day: Date; label: string }> = [
    { day: new Date('04/09/2019'), label: 'Research phase' },
    { day: new Date('04/30/2019'), label: 'Design phase' },
    { day: new Date('05/23/2019'), label: 'Production phase' },
    { day: new Date('06/20/2019'), label: 'Sales and marketing phase' }
];

let gantt: Gantt = new Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    eventMarkers: defaultMarkers,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]
});

gantt.appendTo('#Gantt');

let eventBtn: Button = new Button({ content: 'Event Markers' });
eventBtn.appendTo('#eventMarkers');

document.getElementById('eventMarkers')!.addEventListener('click', () => {
    gantt.eventMarkers = eventMarkersEnabled ? [] : defaultMarkers.slice();
    gantt.refresh();
    eventMarkersEnabled = !eventMarkersEnabled;
});