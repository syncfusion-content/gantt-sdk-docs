

import { Kanban, DialogEventArgs } from '@syncfusion/ej2-kanban';
import { Ajax } from '@syncfusion/ej2-base';

let kanbanObj: Kanban = new Kanban({
    keyField: 'ShipCountry',
    columns: [
        { headerText: 'Denmark', keyField: 'Denmark' },
        { headerText: 'Brazil', keyField: 'Brazil' },
        { headerText: 'Switzerland', keyField: 'Switzerland' },
        { headerText: 'Germany', keyField: 'Germany' }
    ],
    cardSettings: {
        contentField: 'ShippedDate',
        headerField: 'OrderID'
    }
});
kanbanObj.appendTo('#Kanban');

let button = document.getElementById('btn');
button.addEventListener("click", function(e) {
    let ajax = new Ajax("https://services.syncfusion.com/js/production/api/Orders", "GET");
    ajax.send();
    ajax.onSuccess = function (data: string) {
        kanbanObj.dataSource = JSON.parse(data);
    };
});


