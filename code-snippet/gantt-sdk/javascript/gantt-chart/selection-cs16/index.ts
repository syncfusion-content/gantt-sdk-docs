import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
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
        type: 'Multiple'
    },
    created: () => {
        let ganttObj = document.getElementById('Gantt')!.ej2_instances[0] as Gantt;
        ganttObj.treeGrid.grid.selectionSettings.enableSimpleMultiRowSelection = false;
    }
});

gantt.appendTo('#Gantt');