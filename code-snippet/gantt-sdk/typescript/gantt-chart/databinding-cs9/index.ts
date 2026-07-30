


import { Gantt } from '@syncfusion/ej2-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let dataSource: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/GanttData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

let gantt: Gantt = new Gantt({
    dataSource: dataSource,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        progress: 'Progress',
        duration: 'Duration',
        dependency: 'Predecessor',
        child: 'SubTasks'
    }
});
gantt.appendTo('#Gantt');



