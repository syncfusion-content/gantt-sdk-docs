
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
        height: '430px',
        enablePersistence: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
            { field: 'TaskName', headerText: 'Task Name', width: 150 },
            { field: 'StartDate', headerText: 'Start Date', width: 150 },
            { field: 'Duration', headerText: 'Duration', width: 150 },
            { field: 'Progress', headerText: 'Progress', width: 150 }
        ],
        dataBound: function () {
            var originalPersist = this.addOnPersist;
            this.addOnPersist = function (keys) {
                var filteredKeys = keys.filter(function (key) {
                    return key !== 'columns';
                });
                return originalPersist.call(this, filteredKeys);
            };
        }
    });

    ganttChart.appendTo('#Gantt');

    var addBtn = new ej.buttons.Button();
    addBtn.appendTo('#add');

    var removeBtn = new ej.buttons.Button();
    removeBtn.appendTo('#remove');

    document.getElementById('add').onclick = function () {
        ganttChart.columns.push({
            field: 'Progress',
            headerText: 'Progress',
            width: 100
        });
        ganttChart.refresh();
    };

    document.getElementById('remove').onclick = function () {
        ganttChart.columns.pop();
        ganttChart.refresh();
    };
