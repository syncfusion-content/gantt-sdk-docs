import { Gantt, Selection, DomVirtualization } from '@syncfusion/ej2-gantt';
import { virtualData,  } from './datasource.ts';

Gantt.Inject(Selection, DomVirtualization);

let ganttChart: Gantt = new Gantt({
    dataSource: virtualData,
    height: '450px',
    treeColumnIndex: 1,
    allowSelection: true,
    highlightWeekends: true,
    enableDomVirtualization: true,
    domVirtualizationSettings: {
        rowBuffer: 20
    },
    splitterSettings: {
        columnIndex: 2
    },
    labelSettings: {
        leftLabel: 'TaskName',
        taskLabel: 'Progress'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

ganttChart.appendTo('#Gantt');