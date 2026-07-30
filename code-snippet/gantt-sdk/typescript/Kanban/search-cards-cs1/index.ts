

import { Kanban } from '@syncfusion/ej2-kanban';
import { TextBox } from '@syncfusion/ej2-inputs';
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

let textObj: TextBox = new TextBox({
    placeholder: 'Enter search text',
    showClearButton: true,
    width: 180
});
textObj.appendTo('#search');
document.getElementById('reset').onclick = () => {
    textObj.value = '';
    kanbanObj.query = new Query();
};
document.getElementById('search').onkeyup = (e: KeyboardEvent) => {
    let searchValue: string = (<HTMLInputElement>e.target).value;
    let searchQuery: Query = new Query();
    if (searchValue !== '') {
        searchQuery = new Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
    }
    kanbanObj.query = searchQuery;
};


