
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { Ajax } from '@syncfusion/ej2-base';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
Vue.use(GanttPlugin);
;
new Vue({
    el: '#app',
    template: `
     <div>
        <ejs-button id="databind"  v-on:click.native="databind">Bind Data</ejs-button>
        <br>
        <br>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :projectStartDate="projectStartDate" :projectEndDate= "projectEndDate"></ejs-gantt>
    </div>
`,

    data: function () {
        return {
            data: [],
            height: '450px',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                progress: 'Progress',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'SubTasks'
            },
            projectStartDate: new Date('02/24/2019'),
            projectEndDate: new Date('07/20/2019')
        };
    },
    methods: {
        databind: function () {
            let ajax = new Ajax("https://services.syncfusion.com/vue/production/api/GanttData", "GET");
            this.$refs.gantt.showSpinner();

            ajax.send();
            ajax.onSuccess = (data) => {
                this.$refs.gantt.hideSpinner();
                this.data = JSON.parse(data).Items;
            };
        },

    }

});