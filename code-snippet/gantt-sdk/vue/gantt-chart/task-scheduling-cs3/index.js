
import Vue from "vue";
import { GanttPlugin, Edit, Selection, Toolbar } from "@syncfusion/ej2-vue-gantt";
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
    <div>
    <ejs-gantt ref = 'gantt' id = "GanttContainer" :dataSource = "data" :taskFields = "taskFields" :columns= "columns" :treeColumnIndex = "1" :height = "height" :editSettings = "editSettings" :toolbar = "toolbar" :taskMode= "taskMode" > </ejs-gantt>
        </div>
        `,

    data: function () {
        return {
            data: [
    {
                    'TaskID': 1,
                    'TaskName': 'Parent Task 1',
                    'StartDate': new Date('02/27/2017'),
                    'EndDate': new Date('03/03/2017'),
                    'Progress': '40',
                    'isManual': true,
                    'Children': [
                        {
                            'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/27/2017'),
                            'EndDate': new Date('03/03/2017'), 'Progress': '40'
                        },
                        {
                            'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/26/2017'),
                            'EndDate': new Date('03/03/2017'), 'Progress': '40', 'isManual': true
                        },
                        {
                            'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/27/2017'),
                            'EndDate': new Date('03/03/2017'), 'Duration': 5, 'Progress': '40',
                        }
                    ]
                },
                {
                    'TaskID': 5,
                    'TaskName': 'Parent Task 2',
                    'StartDate': new Date('03/05/2017'),
                    'EndDate': new Date('03/09/2017'),
                    'Progress': '40',
                    'isManual': true,
                    'Children': [
                        {
                            'TaskID': 6, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/06/2017'),
                            'EndDate': new Date('03/09/2017'), 'Progress': '40'
                        },
                        {
                            'TaskID': 7, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/06/2017'),
                            'EndDate': new Date('03/09/2017'), 'Progress': '40',
                        },
                        {
                            'TaskID': 8, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/28/2017'),
                            'EndDate': new Date('03/05/2017'), 'Progress': '40', 'isManual': true
                        },
                        {
                            'TaskID': 9, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/04/2017'),
                            'EndDate': new Date('03/09/2017'), 'Progress': '40', 'isManual': true
                        }
                    ]
                },
                {
                    'TaskID': 10,
                    'TaskName': 'Parent Task 3',
                    'StartDate': new Date('03/13/2017'),
                    'EndDate': new Date('03/17/2017'),
                    'Progress': '40',
                    'Children': [
                        {
                            'TaskID': 11, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/13/2017'),
                            'EndDate': new Date('03/17/2017'), 'Progress': '40'
                        },
                        {
                            'TaskID': 12, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/13/2017'),
                            'EndDate': new Date('03/17/2017'), 'Progress': '40',
                        },
                        {
                            'TaskID': 13, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/13/2017'),
                            'EndDate': new Date('03/17/2017'), 'Progress': '40',
                        },
                        {
                            'TaskID': 14, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/12/2017'),
                            'EndDate': new Date('03/17/2017'), 'Progress': '40', 'isManual': true
                        },
                        {
                            'TaskID': 15, 'TaskName': 'Child Task 5', 'StartDate': new Date('03/13/2017'),
                            'EndDate': new Date('03/17/2017'), 'Progress': '40'
                        }
                    ]
                }
],
            height: '450px',
            taskMode: 'Custom',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                endDate: 'EndDate',
                dependency: 'Predecessor',
                child: 'Children',
                manual: 'isManual'
            },
            editSettings: {
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'],
        columns: [
            { field: 'TaskID', visible: false },
            { field: 'TaskName' },
            { field: 'isManual' }
        ],
        };
    },
    provide: {
        gantt: [Edit, Selection, Toolbar]
    }

});