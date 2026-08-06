import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
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
        mode: 'Row'
    }
});

gantt.appendTo('#Gantt');

let dropDownList: DropDownList = new DropDownList({
    width: '200px',
    dataSource: [
        { text: 'Row', value: 'Row' },
        { text: 'Cell', value: 'Cell' },
        { text: 'Both', value: 'Both' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    change: (args: ChangeEventArgs) => {
        gantt.selectionSettings.mode = args.value as any;
    }
});

dropDownList.appendTo('#selectionMode');