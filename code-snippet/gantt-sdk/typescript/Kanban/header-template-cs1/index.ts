

import { Kanban } from '@syncfusion/ej2-kanban';
import { kanbanData } from './datasource.ts';

let kanbanObj: Kanban = new Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open', template: '#headerTemplate' },
        { headerText: 'In Progress', keyField: 'InProgress', template: '#headerTemplate' },
        { headerText: 'Review', keyField: 'Review', template: '#headerTemplate' },
        { headerText: 'Done', keyField: 'Close', template: '#headerTemplate' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');


