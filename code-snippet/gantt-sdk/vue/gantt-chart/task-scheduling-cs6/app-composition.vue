<<template>
     <div>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :highlightWeekends='true' :workWeek="workWeek"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const workWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday"];
provide('gantt',  [ DayMarkers ]);
</script>