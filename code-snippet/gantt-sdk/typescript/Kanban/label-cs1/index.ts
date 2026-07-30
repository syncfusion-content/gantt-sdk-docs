

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
    },
    dialogSettings: {
        fields: [
            { text: 'ID', key: 'Id', type: 'Input' },
            { key: 'Status', type: 'DropDown' },
            { key: 'Estimate', type: 'Numeric' },
            { key: 'Summary', type: 'TextArea' }
        ]
    }
});
kanbanObj.appendTo('#Kanban');


