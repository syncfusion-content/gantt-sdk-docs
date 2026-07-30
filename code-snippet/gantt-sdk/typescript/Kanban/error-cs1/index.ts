

import { Kanban, DialogEventArgs } from '@syncfusion/ej2-kanban';
import { DataManager } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
});
let kanbanObj: Kanban = new Kanban({
    dataSource: data,
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
    },
    actionFailure: (e) => {
       let span: HTMLElement = document.createElement('span');
       kanbanObj.element.parentNode.insertBefore(span, kanbanObj.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    }
});
kanbanObj.appendTo('#Kanban');



