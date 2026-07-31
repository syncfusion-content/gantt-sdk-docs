import { Gantt, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'parentID'
    },
    toolbar: ['ZoomIn', 'ZoomOut', 'ZoomToFit'],
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019')
});
gantt.appendTo('#Gantt');