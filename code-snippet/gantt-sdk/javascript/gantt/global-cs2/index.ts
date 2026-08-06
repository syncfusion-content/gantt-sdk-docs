import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as cagregorian from './ca-gregorian.js';
import * as numbers from './numbers.js';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

loadCldr(cagregorian,numbers);
setCulture('de-DE');
    
L10n.load({
  'de-DE': {
      'gantt': {
           "id": "Ich würde",
            "name": "Name",
            "startDate": "Anfangsdatum",
            "duration": "Dauer",
            "progress": "Fortschritt",
     }
  }
});
let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    locale: 'de-DE',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
});
gantt.appendTo('#Gantt');