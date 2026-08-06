import { Gantt} from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: [
        {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
        {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
        {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
        {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, ParentID: 1},
        {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25')},
        {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5},
        {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5}
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskName', width: '150' },
        { field: 'StartDate', width: '150'},
        { field: 'Duration', width: '150' }
    ],
    actionFailure(args: any){
        let span = document.createElement('span');
        ((gantt.element).parentNode).insertBefore(span,(gantt).element);
        span.style.color = '#FF0000'
        span.innerHTML = args.error[0];
    }
});
gantt.appendTo('#Gantt');
