


import { Gantt } from '@syncfusion/ej2-gantt';
import { DataManager } from '@syncfusion/ej2-data';

let dataSource: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl',
});

let gantt: Gantt = new Gantt({
    dataSource: dataSource,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
      id: 'taskID',
      name: 'taskName',
      startDate: 'startDate',
      endDate: 'endDate',
      duration: 'duration',
      progress: 'progress',
      parentID: 'parentID',
    },
    actionFailure: (e) => {
       let span: HTMLElement = document.createElement('span');
       gantt.element.parentNode.insertBefore(span, gantt.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    },
});
gantt.appendTo('#Gantt');



