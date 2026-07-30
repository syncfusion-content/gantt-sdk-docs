<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" locale = "de-DE"></ejs-gantt>
    </div>
</template>
<script>

import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as cagregorian from './ca-gregorian.js';
import * as numbers from './numbers.js';
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
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
loadCldr(cagregorian,numbers);
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: projectNewData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
            }
      };
  }
};
</script>