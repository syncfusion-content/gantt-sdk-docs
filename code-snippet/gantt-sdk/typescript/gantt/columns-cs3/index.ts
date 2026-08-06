import { Gantt, Resize, SplitterSettings } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize);

let splitterSettings: SplitterSettings = {
    position: '90%'
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowResizing: true,
    splitterSettings: splitterSettings,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});

gantt.appendTo('#Gantt');