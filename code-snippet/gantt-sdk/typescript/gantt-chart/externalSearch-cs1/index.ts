import { Gantt, Filter, Toolbar } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter, Toolbar);

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
    allowFiltering: true
});
gantt.appendTo('#Gantt');

let searchBtn: Button = new Button();
searchBtn.appendTo('#search');

document.getElementById('search').addEventListener('click', () => {
    let searchText: string = (<HTMLInputElement>document.getElementsByClassName('searchtext')[0]).value;
    gantt.search(searchText);
});