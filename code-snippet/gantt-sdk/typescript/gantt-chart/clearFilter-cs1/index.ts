import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

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
    allowFiltering: true,
    filterSettings: {
        columns: [{ field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
        { field: 'Progress', matchCase: false, operator: 'equal', predicate: 'and', value: 90 }]
    }
});
gantt.appendTo('#Gantt');

let filterBtn: Button = new Button();
filterBtn.appendTo('#clearFilter');

document.getElementById('clearFilter').addEventListener('click', () => {
    gantt.clearFiltering();
});