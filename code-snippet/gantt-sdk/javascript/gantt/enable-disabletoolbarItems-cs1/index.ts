import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Filter);

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
    toolbar: [
        { text: 'Quick Filter', id: 'QuickFilter' }, 
        { text: 'Clear Filter', id: 'ClearFilter' }
    ],
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.id === 'QuickFilter') {
            gantt.filterByColumn('TaskName', 'startswith', 'Identify');
        }
        if (args.item.id === 'ClearFilter') {
            gantt.clearFiltering();
        }
    },
    allowFiltering: true
});

gantt.appendTo('#Gantt');

let switchObj: Switch = new Switch({
    checked: true,
    change: (args: ChangeEventArgs) => {
        const enable = args.checked as boolean;
        // Enable or disable both custom toolbar items.
        gantt.toolbarModule.enableItems(['QuickFilter', 'ClearFilter'], enable);
    }
});

switchObj.appendTo('#switch');