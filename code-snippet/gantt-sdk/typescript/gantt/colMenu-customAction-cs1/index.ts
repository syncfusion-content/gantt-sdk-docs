import { Gantt, ColumnMenu, Sort, Filter, ColumnMenuOpenEventArgs, SplitterSettings } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(ColumnMenu, Sort, Filter);

let splitterSettings: SplitterSettings = {
    columnIndex: 5
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    showColumnMenu: true,
    allowFiltering: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: splitterSettings,
    columnMenuOpen: (args: ColumnMenuOpenEventArgs) => {
        for (let item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'TaskName') {
                item.hide = true;
            } else {
                item.hide = false;
            }
        }
    },
});

gantt.appendTo('#Gantt');