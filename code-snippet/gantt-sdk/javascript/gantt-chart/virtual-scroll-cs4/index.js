ej.gantt.Gantt.Inject(ej.gantt.Selection,ej.gantt.Sort,ej.gantt.Filter);
var filteredCount = 0;
var datasetCount;
var ganttChart = new ej.gantt.Gantt({
        dataSource: virtualData,
        treeColumnIndex: 1,
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID'
        },
        enableVirtualization: true,
        allowSorting: true,
        allowFiltering: true,
        actionComplete: function (args) {
            if (args.requestType == 'filtering') {
                if (args.rows != null) {
                    filteredCount =
                        ganttChart.treeGrid.filterModule.filteredResult.length;
                    var combinedMessage = `Dataset Count: ${datasetCount} Filtered Count: ${filteredCount}`;
                    var countElement = document.getElementById('count-element');
                    if (countElement) {
                        countElement.textContent = combinedMessage;
                    }
                }
            }
        },
        created:function() {
            datasetCount = ganttChart.flatData.length;
            var combinedMessage = `Dataset Count: ${datasetCount} Filtered Count: ${filteredCount}`;
            var countElement = document.getElementById('count-element');
            if (countElement) {
                countElement.textContent = combinedMessage;
            }
        },
        columns: [
            { field: 'TaskID' },
            { field: 'TaskName' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' }
        ],
        labelSettings: {
            taskLabel: 'Progress'
        },
        gridLines: 'Both',
        splitterSettings: {
            columnIndex: 2
        },
    });
    ganttChart.appendTo('#Gantt');

