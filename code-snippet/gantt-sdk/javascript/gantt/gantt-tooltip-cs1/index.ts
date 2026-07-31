import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
Gantt.Inject(DayMarkers);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        baselineStartDate: "BaselineStartDate",
        baselineEndDate: "BaselineEndDate",
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    eventMarkers: [
        {
            day: '04/10/2019',
            label: 'Project approval and kick-off'
        }
    ],
    renderBaseline: true,
    baselineColor: 'red',
    tooltipSettings: {
        showTooltip: true
    }
});
gantt.appendTo('#Gantt');