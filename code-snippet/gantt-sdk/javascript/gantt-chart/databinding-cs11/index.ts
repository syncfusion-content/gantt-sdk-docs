import { Gantt } from '@syncfusion/ej2-gantt';

let emptyRecordTemplate: any = () => {
    return '<div class="emptyRecordTemplate"><span>There is no data available to display at the moment.</span></div>';
};

let gantt: Gantt = new Gantt({
    dataSource: [],
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        resourceInfo: 'resources'
    },
    created: function (this: Gantt): void {
        (this as any).treeGrid.grid.emptyRecordTemplate = emptyRecordTemplate;
    }
});

gantt.appendTo('#Gantt');