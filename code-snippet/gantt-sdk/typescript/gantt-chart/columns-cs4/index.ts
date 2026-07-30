import { Gantt, Resize, SplitterSettings } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize);

let splitterSettings: SplitterSettings = {
    columnIndex: 6
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowResizing: true,
    splitterSettings: splitterSettings,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', minWidth: 200, width: 250, maxWidth: 300 },
        { field: 'StartDate' },
        { field: 'Duration', minWidth: 100, maxWidth: 200 },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');