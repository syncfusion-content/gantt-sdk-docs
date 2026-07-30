

import { Kanban } from '@syncfusion/ej2-kanban';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
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

let priorityObj: DropDownList = new DropDownList({
    dataSource: ['None', 'High', 'Normal', 'Low'],
    index: 0,
    placeholder: 'Select a priority',
    width: 100,
    change: change
});
priorityObj.appendTo('#filter');

function change(args: ChangeEventArgs): void {
    let filterQuery: Query = new Query();
    if (args.value !== 'None') {
        filterQuery = new Query().where('Priority', 'equal', args.value);
    }
    (kanbanObj as any).query = filterQuery;
}


