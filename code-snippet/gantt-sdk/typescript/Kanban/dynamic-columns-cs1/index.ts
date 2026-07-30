

import { Kanban } from '@syncfusion/ej2-kanban';
import { kanbanData } from './datasource.ts';

let kanbanObj: Kanban = new Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');

let particularColumn: HTMLElement = document.getElementById('particularColumn');
let column: HTMLElement = document.getElementById('column');
particularColumn.onclick = () => {
    kanbanObj.columns[1].allowToggle= true;
};
column.onclick = () => {
    kanbanObj.columns = [
        { headerText: 'To Do', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
    ]
};


