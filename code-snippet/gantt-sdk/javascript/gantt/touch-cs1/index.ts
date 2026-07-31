import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    editSettings: {
        allowTaskbarEditing: true
    },
    // Forcing desktop layout to change as mobile layout
    load: function () {
        this.isAdaptive = true;
    }
});

gantt.appendTo('#Gantt');