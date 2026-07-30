

import { Kanban } from '@syncfusion/ej2-kanban';
import { kanbanData } from './datasource.ts';

let kanbanObj: Kanban = new Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open', allowToggle: true, isExpanded: false },
        { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
        { headerText: 'Testing', keyField: 'Testing', allowToggle: true, isExpanded: false },
        { headerText: 'Done', keyField: 'Close', allowToggle: true }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');


