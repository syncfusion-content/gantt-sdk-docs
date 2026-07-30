


import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId',
        dependency: 'Predecessor'
    },
    splitterSettings:{
        view: 'Grid'
    },
    treeColumnIndex:1,
    labelSettings:{ leftLabel: 'TaskName' },
    highlightWeekends:true,
    projectStartDate: new Date('03/27/2025'),
    projectEndDate: new Date('07/06/2025'),
});

gantt.appendTo('#Gantt');