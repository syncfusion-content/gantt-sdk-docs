
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
     <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :treeColumnIndex="1"
     :holidays="holidays" :labelSettings="labelSettings" :splitterSettings="splitterSettings" :height="height"
     :columns="columns" :timelineSettings="timelineSettings" :timelineTemplate='timelineTemplates'>
 </ejs-gantt>
    </div>
`,

  data: function() {
      return{
        timelineTemplates: function () {
            return { template : Vue.component('timelineTemplates',{
               template: `<div v-if="data.tier == 'topTier'" class="e-header-cell-label e-gantt-top-cell-text"
               style="width:100%;background-color: #FBF9F1 ;  font-weight: bold;height: 100%;display: flex; justify-content: center ; align-items: center;   "
               title={{data.date}}>
               <div> {{ data.value }}</div>
               <div style="width:20px; height: 20px; line-height: normal; padding-left: 10px; ">
                   <img :style="{ width: '100%', height: '100%' }" :src="imagedate()">
               </div>
           </div>
           <div v-else-if="data.tier === 'bottomTier'" class="e-header-cell-label e-gantt-top-cell-text" :style="{
               width: '100%',backgroundColor: bgColor(data.value, data.date),textAlign: 'center',height: '100%',
               display: 'flex',alignItems: 'center',fontWeight: 'bold',justifyContent: 'center'}" title={{data.date}}>
               {{ holidayValue(data.value, data.date) }}
           </div>`,
           methods: {
            imagedate() {
                // Define the logic for image source
                const getImage = Math.floor(Math.random() * 5) + 1;
                return "./images/" + getImage + ".svg";
            },
            bgColor(value, date) {
                // Define the logic to determine background color
                var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                if (value === "S") {
                    return "#7BD3EA"
                }
                const parsedDate = new Date(date);
                for (let i = 0; i < ganttChart.holidays.length; i++) {
                    const holiday = ganttChart.holidays[i];
                    const fromDate = new Date(holiday.from);
                    const toDate = new Date(holiday.to)
                    if (parsedDate >= fromDate && parsedDate <= toDate) {
                        return "#97E7E1";
                    }
                }
                return "#E0FBE2"
            },
            holidayValue(value, date) {
                // Define the logic to determine holiday value
                var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                const parsedDate = new Date(date);
                for (let i = 0; i < ganttChart.holidays.length; i++) {
                    const holiday = ganttChart.holidays[i];
                    const fromDate = new Date(holiday.from);
                    const toDate = new Date(holiday.to)
                    if (parsedDate >= fromDate && parsedDate <= toDate) {
                        const options = { weekday: 'short' };
                        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
                    }
                }
                return value
            }
          },
            })}
      },
        data: editingData,
        allowSorting: true,
        taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId',
        },
        splitterSettings: {
            columnIndex: 1
        },
        treeColumnIndex: 1,
        allowSelection: true,
        gridLines: "Both",
        showColumnMenu: false,
        highlightWeekends: true,
        timelineSettings: {
            topTier: {
                unit: 'Week',
                format: 'dd/MM/yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
            timelineUnitSize: 100
        },
        holidays: [{
            from: "04/04/2019",
            to: "04/05/2019",
            label: " Public holidays",
            cssClass: "e-custom-holiday"

        },
        {
            from: "04/12/2019",
            to: "04/12/2019",
            label: " Public holiday",
            cssClass: "e-custom-holiday"

        }],
        columns: [
            { field: 'TaskID', headerText: 'Task ID', visible: false },
            { field: 'TaskName', headerText: 'Task Name', width: 300 },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' },
        ],
        labelSettings: {
            leftLabel: 'TaskName',
            taskLabel: 'Progress'
        },
        height: '550px',
        allowUnscheduledTasks: true,
    
        };
  },
 
});