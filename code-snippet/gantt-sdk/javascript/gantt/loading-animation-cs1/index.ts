import { Gantt, Sort , Selection, VirtualScroll, Filter} from '@syncfusion/ej2-gantt';
import { virtualData } from './datasource.ts';

Gantt.Inject(Sort, Selection, VirtualScroll, Filter);

let gantt: Gantt = new Gantt({
    dataSource: virtualData,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    enableVirtualization: true,
    loadingIndicator: { indicatorType: 'Shimmer' },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
    ],
});
gantt.appendTo('#Gantt');