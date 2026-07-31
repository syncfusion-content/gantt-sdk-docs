import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
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
        mode: 'Cell',
        type: 'Multiple',
        cellSelectionMode: 'Flow'
    }
});

gantt.appendTo('#Gantt');

let modeDropDown: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Cell', value: 'Cell' },
        { text: 'Row', value: 'Row' },
        { text: 'Both', value: 'Both' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    change: (args: ChangeEventArgs) => {
        gantt.treeGrid.grid.selectionSettings.mode = args.value as any;
        gantt.treeGrid.grid.refresh();
    }
});
modeDropDown.appendTo('#selectionMode');

let cellModeDropDown: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Flow', value: 'Flow' },
        { text: 'Box', value: 'Box' },
        { text: 'BoxWithBorder', value: 'BoxWithBorder' }
    ],
    fields: { text: 'text', value: 'value' },
    index: 0,
    change: (args: ChangeEventArgs) => {
        gantt.treeGrid.grid.selectionSettings.cellSelectionMode = args.value as any;
    }
});
cellModeDropDown.appendTo('#cellSelectionMode');