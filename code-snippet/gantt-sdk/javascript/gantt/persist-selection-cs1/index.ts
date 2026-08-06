import { Gantt, Selection, Sort, Filter } from '@syncfusion/ej2-gantt';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection, Sort, Filter);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    allowSorting: true,
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
        persistSelection: true
    }
});

gantt.appendTo('#Gantt');

let switchObj: Switch = new Switch({
    checked: true,
    change: (args: ChangeEventArgs) => {
        gantt.selectionSettings.persistSelection = args.checked;
    }
});

switchObj.appendTo('#switch');