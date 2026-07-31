var clickHandler = function(args){
    if (args.item.id === 'QuickFilter') {
        ganttChart.filterByColumn('TaskName', 'startswith', 'Identify');
    }
    if (args.item.id === 'ClearFilter') {
        ganttChart.clearFiltering();
    }
};

ej.gantt.Gantt.Inject(ej.gantt.Filter,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbarClick: clickHandler,
    toolbar: [
        { text: 'Quick Filter', id: 'QuickFilter' }, 
        { text: 'Clear Filter', id: 'ClearFilter' }
    ],
    allowFiltering:true
});
ganttChart.appendTo('#Gantt');

let switchObj = new ej.buttons.Switch({
    checked: true,
    change: (args) => {
        const enable = args.checked;
        // Enable or disable both custom toolbar items.
        ganttChart.toolbarModule.enableItems(['QuickFilter', 'ClearFilter'], enable);
    }
});

switchObj.appendTo('#switch');