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

let dropDownData: Object[] = [
    { text: 'Header', value: 'Header' },
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' }
];

let dropDownList: DropDownList = new DropDownList({
    dataSource: dropDownData,
    index: 0,
    width: '100px',
    change: (args: ChangeEventArgs) => {
        gantt.treeGrid.textWrapSettings.wrapMode = args.value as any;
        gantt.treeGrid.allowTextWrap = true;
    }
});

dropDownList.appendTo('#wrapMode');