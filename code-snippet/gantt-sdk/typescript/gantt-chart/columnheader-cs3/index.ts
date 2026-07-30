import { Gantt } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');

let alignmentData: Object[] = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' }
];

let dropDownList: DropDownList = new DropDownList({
    dataSource: alignmentData,
    index: 0,
    width: '100px',
    change: (args: ChangeEventArgs) => {
        gantt.treeGrid.grid.columns.forEach((col: any) => {
            col.headerTextAlign = args.value as any;
        });
        gantt.treeGrid.grid.refreshHeader();
    }
});

dropDownList.appendTo('#alignment');