


import { Gantt, DayMarkers,Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(DayMarkers, Toolbar);
function updateEventMarker() {
    document.getElementsByClassName('e-span-label')[1].style.top = '100px';
    document.getElementsByClassName('e-gantt-right-arrow')[1].style.top =
        '110px';
}

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks',
    },
    eventMarkers: [
        {
            day: new Date('04/02/2019'),
        },
        {
            day: new Date('04/09/2019'),
            label: 'Research phase research phase research phase',
        },
        {
            day: new Date('04/10/2019'),
            label: 'Design phase',
        },
        {
            day: new Date('05/23/2019'),
            label: 'Production phase',
        },
        {
            day: new Date('06/20/2019'),
            label: 'Sales and marketing phase',
        },
    ],
    toolbar: ['ZoomIn', 'ZoomOut', 'ZoomToFit'],
    dataBound:function () {
        updateEventMarker();
        gantt.fitToProject();
    },
    actionComplete:function () {
        updateEventMarker();
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('07/06/2019')
});
gantt.appendTo('#Gantt');


