import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Switch } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple',
        enableToggle: true
    }
});

gantt.appendTo('#Gantt');

let selectionMode: DropDownList = new DropDownList({
    dataSource: ['Row', 'Cell', 'Both'],
    index: 0,
    width: '150px',
    change: (args: ChangeEventArgs) => {
        gantt.selectionSettings.mode = args.value as any;
    }
});
selectionMode.appendTo('#selectionMode');

let toggleSwitch: Switch = new Switch({
    checked: true,
    change: (args: any) => {
        gantt.selectionSettings.enableToggle = args.checked;
    }
});
toggleSwitch.appendTo('#toggleSelection');