import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { infiniteTimelineScrollData } from './datasource.ts';

Gantt.Inject(Selection);

var taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
};

var splitterSettings: object = {
    columnIndex: 3
};

let gantt: Gantt = new Gantt({
    height: '430px',
    dataSource: infiniteTimelineScrollData,
    enableInfiniteTimelineScroll: true,
    taskFields: taskSettings,
    treeColumnIndex: 1,
    splitterSettings: splitterSettings,
    gridLines: 'Both',
    columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', headerText: 'Job Name', width: 250, clipMode: 'EllipsisWithTooltip' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
        { field: 'Predecessor' }
    ],
    timelineSettings: {
        viewStartDate: new Date('12/29/2025'),
        viewEndDate: new Date('04/27/2026'),
    },
    labelSettings: {
        leftLabel: 'TaskID',
        rightLabel: 'TaskName',
    },
});

gantt.appendTo('#Gantt');