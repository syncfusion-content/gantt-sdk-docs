

import { Kanban } from '@syncfusion/ej2-kanban';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { closest } from '@syncfusion/ej2-base';
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
    dataBound: function () {
        let headerEle: HTMLElement = document.querySelector('.e-header-row');
        headerEle.addEventListener("dblclick", function (e: Event) {
            let target = closest((<HTMLElement>e.target), '.e-header-cells');
            DialogUtility.alert({
                title: 'Header',
                content: "Double clicked on " + (<HTMLElement>target.querySelector('.e-header-text')).innerText + " header",
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        });
    }
});
kanbanObj.appendTo('#Kanban');


