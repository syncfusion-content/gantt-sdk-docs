

import { Kanban } from '@syncfusion/ej2-kanban';

const kanbanObj: Kanban = new Kanban({
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
});
kanbanObj.appendTo('#Kanban');


