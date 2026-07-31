var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    editSettings: {
        allowEditing: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { 
            field: 'Duration',
            editType: 'numericedit',
            edit: { params: { min: 1 } },
            valueAccessor: function (field, data) {
                return data[field];
            }
        },
        { 
            field: 'Progress',
            editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        }
    ]
});

ej.gantt.Gantt.Inject(ej.gantt.Edit);

ganttChart.appendTo('#Gantt');