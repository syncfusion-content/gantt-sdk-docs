import { Gantt, Selection, VirtualScroll } from '@syncfusion/ej2-gantt';
import { virtualData } from './datasource.ts';

Gantt.Inject(Selection, VirtualScroll);

let gantt: Gantt = new Gantt({
    dataSource: virtualData,
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    enableVirtualization: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
    ],
    allowSelection: true,
    enableTimelineVirtualization: true,
    gridLines: 'Both',
    height: '450px',
    splitterSettings: {
        columnIndex: 2
    },
    labelSettings: {
        taskLabel: 'Progress'
    },
    projectStartDate: new Date('04/01/2019'),
    projectEndDate: new Date('12/31/2025')
});
gantt.appendTo('#Gantt');