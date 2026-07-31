import { Gantt, Selection, VirtualScroll,Sort,Filter } from '@syncfusion/ej2-gantt';
import { virtualData } from './datasource.ts';

Gantt.Inject(Selection, VirtualScroll,Sort,Filter);
let filteredCount: any = 0;
let datasetCount: any;
let gantt: Gantt = new Gantt({
    dataSource: virtualData,
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
    },
    allowSorting: true,
    allowFiltering: true,
    actionComplete: function (args:any) {
        if (args.requestType == 'filtering') {
            if (args.rows != null) {
                filteredCount =
                    gantt.treeGrid.filterModule.filteredResult.length;
                let combinedMessage = `Dataset Count: ${datasetCount} Filtered Count: ${filteredCount}`;
                const countElement = document.getElementById('count-element');
                if (countElement) {
                    countElement.textContent = combinedMessage;
                }
            }
        }
    },
    created:function() {
        datasetCount = gantt.flatData.length;
        let combinedMessage = `Dataset Count: ${datasetCount} Filtered Count: ${filteredCount}`;
        const countElement = document.getElementById('count-element');
        if (countElement) {
            countElement.textContent = combinedMessage;
        }
    },
    enableVirtualization: true,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { field: 'Duration' },
        { field: 'Progress' },
    ],
    allowSelection: true,
    gridLines: 'Both',
    height: '450px',
    splitterSettings: {
        columnIndex: 2
    },
    labelSettings: {
        taskLabel: 'Progress'
    }
});
gantt.appendTo('#Gantt');