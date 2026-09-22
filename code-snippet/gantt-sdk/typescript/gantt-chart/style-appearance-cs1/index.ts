import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

const gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    width: '100%',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate'
    },
    labelSettings: {
        rightLabel: 'TaskName'
    },
    eventMarkers: [
        { day: new Date('01/16/2026'), label: 'Project approval and kick-off' }
    ],
    renderBaseline: true
});
gantt.appendTo('#Gantt');