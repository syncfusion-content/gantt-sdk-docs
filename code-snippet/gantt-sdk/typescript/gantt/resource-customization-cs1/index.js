ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar,ej.gantt.Selection);

let style;
window.Resources = function (resource) {
    switch(resource) {
        case 'Martin Tamer':
            style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 81px; height: 24px; border-radius: 24px; background: #DFECFF " ;
            break;
        case 'Rose Fuller':
            style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 71px; height: 24px; border-radius: 24px; background: #E4E4E7 " ;
            break;
        case 'Margaret Buchanan':
            style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 123px; height: 24px; border-radius: 24px; background: #DFFFE2 " ;
            break;
        case 'Tamer Vinet':
            style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 75px; height: 24px; border-radius: 24px; background: #FFEBE9 " ;
            break;
    }
    return style;
}

window.ResourcesStyles = function (resource) {
    switch(resource) {
        case 'Martin Tamer':
            style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #006AA6" ;
            break;
        case 'Rose Fuller':
            style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #766B7C" ;
            break;
        case 'Margaret Buchanan':
            style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #00A653" ;
            break;
        case 'Tamer Vinet':
            style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #FF3740" ;
            break;
    }
    return style;
}
var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    resources: editingResources,
    queryTaskbarInfo(args) {
        if (args.data.resources == 'Martin Tamer') {
            args.taskbarBgColor = '#DFECFF';
            args.progressBarBgColor = '#006AA6'
        }else if (args.data.resources == 'Rose Fuller') {
            args.taskbarBgColor = '#E4E4E7';
            args.progressBarBgColor = '#766B7C'
        }
        else if (args.data.resources == 'Margaret Buchanan') {
            args.taskbarBgColor = '#DFFFE2';
            args.progressBarBgColor = '#00A653'
        }
        else if (args.data.resources == 'Tamer Vinet') {
            args.taskbarBgColor = '#FFEBE9';
            args.progressBarBgColor = '#FF3740'
        }
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        resourceInfo: 'resources',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: 250 },
        { field: 'resources', headerText: 'Resources', width: 175, template: '#resColumnTemplate' },
        { field: 'Progress', headerText: 'Progress', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 }
    ],
    splitterSettings: {
        columnIndex: 3
    },
    labelSettings: {
        rightLabel: 'resources'
    }
});
gantt.appendTo('#Gantt');