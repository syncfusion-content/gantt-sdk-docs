import { Gantt } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { ColumnModel } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    splitterSettings: { position: '75%' },
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
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', format: 'yMd', width: 150 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ]
});
gantt.appendTo('#Gantt');

let alignmentDropdown: DropDownList = new DropDownList({
    width: '120px',
    dataSource: [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' }
    ],
    fields: { text: 'text', value: 'value' },
    value: 'Right',
    change: (args: ChangeEventArgs) => {
        (gantt.treeGrid.grid.columns as ColumnModel[]).forEach(col => {
            col.textAlign = args.value as any;
        });
        gantt.treeGrid.grid.refreshColumns();
    }
});
alignmentDropdown.appendTo('#alignment');