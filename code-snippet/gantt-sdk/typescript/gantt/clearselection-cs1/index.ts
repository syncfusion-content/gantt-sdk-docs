import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
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
        mode: 'Both',
        type: 'Multiple'
    }
});

gantt.appendTo('#Gantt');

let dropDown: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Row', value: 'Row' },
        { text: 'Cell', value: 'Cell' },
        { text: 'Both', value: 'Both' }
    ],
    fields: { text: 'text', value: 'value' },
    value: 'Row',
    width: 150,
    change: (args: ChangeEventArgs) => {
        gantt.selectionSettings.mode = args.value as 'Row' | 'Cell' | 'Both';
    }
});

dropDown.appendTo('#selectionMode');

let clearBtn: Button = new Button();
clearBtn.appendTo('#clearSelection');

document.getElementById('clearSelection')!.addEventListener('click', () => {
    gantt.clearSelection();
});