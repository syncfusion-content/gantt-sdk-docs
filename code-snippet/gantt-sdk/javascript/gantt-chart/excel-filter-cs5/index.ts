import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

Gantt.Inject(Filter);

let localData: Object[] = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
];

let gantt: Gantt = new Gantt({
    dataSource: localData,
    height: '370px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 120 },
        { field: 'TaskName', headerText: 'Project Activity', width: 250, clipMode: 'EllipsisWithTooltip' },
        { field: 'StartDate', headerText: 'Planned Start Date', width: 200 },
        { field: 'Duration', headerText: 'Duration', width: 160 },
        { field: 'Progress', headerText: 'Completion (%)', width: 200 }
    ],
    splitterSettings: {
        columnIndex: 3
    },
    filterSettings: {
        type: 'Excel'
    },
    actionBegin: (args: any) => {
        if (args.requestType === 'filterBeforeOpen') {
            let hostUrl: string =
                'https://ej2services.syncfusion.com/angular/development/api/GanttWebApiRemoteData';
            args.filterModel.options.dataSource.json = new DataManager({
                url: hostUrl,
                adaptor: new WebApiAdaptor(),
                crossDomain: true
            });
        }
    }
});

gantt.appendTo('#Gantt');