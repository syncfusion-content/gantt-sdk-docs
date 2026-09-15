ej.gantt.Gantt.Inject(ej.gantt.Selection, ej.gantt.Filter, ej.gantt.Toolbar);

var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    toolbar: ['Search'],
    filterSettings: {
        type: 'Menu'
    },
    allowFiltering: true,
    allowSelection: true,
    columns: [
        { field: 'CheckBox', headerText: '', showCheckbox: true, width: 70, allowFiltering: false },
        { field: 'TaskID', width: 110, visible: false },
        { field: 'TaskName', width: 190 },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Predecessor' },
        { field: 'Progress' }
    ],
    hierarchyCheckboxMode: 'hierarchy'
});

gantt.appendTo('#Gantt');

var selectionModeList = new ej.dropdowns.DropDownList({
    dataSource: [
        { id: 'self', type: 'self' },
        { id: 'hierarchy', type: 'hierarchy' },
        { id: 'filteredHierarchy', type: 'filteredHierarchy' }
    ],
    width: '125px',
    popupWidth: '100px',
    value: 'hierarchy',
    change: function (e) {
        var mode = e.value;
        gantt.hierarchyCheckboxMode = mode;
        gantt.refresh();
    },
    fields: { text: 'type', value: 'id' }
});

selectionModeList.appendTo('#mode');