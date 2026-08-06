


import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(DayMarkers);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    eventMarkers: [
        {
            day: '04/10/2019',
            cssClass: 'e-custom-event-marker',
            label: 'Project approval and kick-off'
        },
        {
            day: '04/10/2019',
            cssClass: 'e-custom-event-marker',
            label: 'Project approval and kick-off'
        },
    ],
    dataBound(): void {
        let labeltop: number = 100;
        let rightarrow: number = 110;
        for (let i: number = 0; i < this.eventMarkers.length; i++) {
            (document.getElementsByClassName('e-span-label')[i] as HTMLElement).style.top = labeltop + 'px';
            (document.getElementsByClassName('e-gantt-right-arrow')[i] as HTMLElement).style.top = rightarrow + 'px';
            labeltop += 35;
            rightarrow += 35;
        }
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('07/06/2019')
});
gantt.appendTo('#Gantt');
