import { Gantt, Reorder } from '@syncfusion/ej2-gantt';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        position: '75%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90, visible: false },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 150 }
    ]
});

gantt.appendTo('#Gantt');

let switchObj: Switch = new Switch({
    change: (args: ChangeEventArgs) => {
        let durationColumn = gantt.treeGrid.grid.getColumnByField('Duration');
        durationColumn.visible = args.checked;
        gantt.treeGrid.grid.refreshColumns();
    }
});

switchObj.appendTo('#switch');