import { Gantt, ColumnMenu, Sort, ColumnMenuItemModel, SortSettingsModel, SplitterSettings } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(ColumnMenu, Sort);

let columnMenuItems: ColumnMenuItemModel[] = [
    { text: 'Clear Sorting', id: 'ganttclearsorting' }
];

let sortSettings: SortSettingsModel = {
    columns: [{ field: 'TaskName', direction: 'Ascending' }]
};

let splitterSettings: SplitterSettings = {
    columnIndex: 5
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    showColumnMenu: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    sortSettings: sortSettings,
    splitterSettings: splitterSettings,
    columnMenuItems: columnMenuItems,
    columnMenuClick: (args: any) => {
        if (args.item.id === 'ganttclearsorting') {
            gantt.clearSorting();
        }
    },
    columns: [
        { field: 'TaskID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' }
    ]
});

gantt.appendTo('#Gantt');