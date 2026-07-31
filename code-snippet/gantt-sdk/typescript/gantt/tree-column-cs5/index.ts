import { Gantt } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

let collapsingData: number[] = [];

let gantt: Gantt = new Gantt({
    id: 'ganttDefault',
    height: '430px',
    dataSource: data,
    treeColumnIndex: 1,
    splitterSettings: {
        position: '75%'
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
        { field: 'TaskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Name', textAlign: 'Left', width: 290 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 }
    ],
    dataBound: () => {
        if (gantt.treeGrid.initialRender && window.localStorage) {
            let storedData: number[] = JSON.parse(localStorage.getItem('collapsingData') || '[]');
            storedData.forEach((key: number) => {
                gantt.treeGrid.collapseByKey(key);
            });
        }
    },
    collapsed: (args: any) => {
        collapsingData.push(args.data.TaskID);
        localStorage.setItem('collapsingData', JSON.stringify(collapsingData));
    },
    expanded: (args: any) => {
        let index: number = collapsingData.indexOf(args.data.TaskID);
        if (index !== -1) {
            collapsingData.splice(index, 1);
            localStorage.setItem('collapsingData', JSON.stringify(collapsingData));
        }
    }
});

gantt.appendTo('#Gantt');