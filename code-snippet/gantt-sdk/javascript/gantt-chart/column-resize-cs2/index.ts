import { Gantt, Resize, SplitterSettings } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize);

let splitterSettings: SplitterSettings = {
    position: '75%'
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
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');

let resizeModeData: Object[] = [
    { text: 'Normal', value: 'Normal' },
    { text: 'Auto', value: 'Auto' }
];

let dropDownList: DropDownList = new DropDownList({
    dataSource: resizeModeData,
    fields: { text: 'text', value: 'value' },
    index: 0,
    width: '100',
    change: (args: any) => {
        gantt.treeGrid.grid.resizeSettings.mode = args.value;
    }
});

dropDownList.appendTo('#resizeMode');