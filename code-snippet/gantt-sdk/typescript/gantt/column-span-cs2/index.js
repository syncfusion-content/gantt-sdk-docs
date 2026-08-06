var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '430px',
    gridLines: 'Both',
    splitterSettings: {
        position: '75%'
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        work1: 'work1',
        work2: 'work2'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'work1', headerText: 'Work 1', textAlign: 'Center', width: 150 },
        { field: 'work2', headerText: 'Work 2', textAlign: 'Center', width: 150 },
        { field: 'work3', headerText: 'Work 3', textAlign: 'Center', width: 150 },
        { field: 'work4', headerText: 'Work 4', textAlign: 'Center', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    queryCellInfo: function (args) {
        var field = args.column.field;
        switch (args.data.TaskID) {
            case 1:
                if (field === 'work3' || field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work1') {
                    args.colSpan = 2;
                }
                break;
            case 2:
                if (field === 'work1' || field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work2') {
                    args.colSpan = 2;
                }
                break;
            case 3:
                if (field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work1') {
                    args.colSpan = 3;
                }
                break;
            case 4:
                if (field === 'work4' || field === 'work1') {
                    args.colSpan = 1;
                }
                break;
            case 5:
                if (field === 'work3') {
                    args.colSpan = 2;
                } else if (field === 'work1') {
                    args.colSpan = 2;
                }
                break;
            case 6:
                if (field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work1') {
                    args.colSpan = 3;
                }
                break;
            case 7:
                if (field === 'work4' || field === 'work1') {
                    args.colSpan = 1;
                }
                break;
            case 8:
                if (field === 'work1' || field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work2') {
                    args.colSpan = 2;
                }
                break;
        }

        if (args.colSpan > 1) {
            args.cell.style.border = '1px solid red';
        }
    }
});

ganttChart.appendTo('#Gantt');
