import { Kanban } from '@syncfusion/ej2-kanban';
import { generateKanbanDataVirtualScrollData } from './datasource.ts';

let kanbanObj: Kanban = new Kanban({
    enableVirtualization: true, // To enable virtual scrolling feature.
    dataSource: generateKanbanDataVirtualScrollData(),
    keyField: 'Status',
    enableTooltip: true,
    columns: [
        { headerText: 'To Do', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Code Review', keyField: 'Review'},
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        headerField: 'Id',
        contentField: 'Summary',
        selectionType: 'Multiple'
    },
    dialogSettings : {
        fields: [
            {key: 'Id', text: 'ID', type: 'TextBox'},
            {key: 'Status', text: 'Status', type: 'DropDown'},
            {key: 'StoryPoints', text: 'Story Points', type: 'Numeric' },
            {key: 'Summary', text: 'Summary', type: 'TextArea'}
        ]
    }
});
kanbanObj.appendTo('#Kanban');

