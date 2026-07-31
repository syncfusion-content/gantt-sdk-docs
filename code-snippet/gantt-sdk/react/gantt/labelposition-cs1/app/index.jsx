let resourceCollection = [
    { ResourceId: 1, ResourceName: 'Martin Tamer', ResourceGroup: 'Planning Team'},
    { ResourceId: 2, ResourceName: 'Rose Fuller', ResourceGroup: 'Testing Team' },
    { ResourceId: 3, ResourceName: 'Margaret Buchanan', ResourceGroup: 'Approval Team' },
    { ResourceId: 4, ResourceName: 'Fuller King', ResourceGroup: 'Development Team' },
    { ResourceId: 5, ResourceName: 'Davolio Fuller', ResourceGroup: 'Approval Team' },
    { ResourceId: 6, ResourceName: 'Van Jack', ResourceGroup: 'Development Team' },
];
let data = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
    }, {
        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2, ParentID: 1,
        Progress: 30, work: 10, Resources: [{ ResourceId: 1, Unit: 50 }]
    },
    {
        TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4, ParentID: 1,
        Resources: [{ ResourceId: 2, Unit: 70 }], Progress: 30, work: 20
    },
    {
        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1, ParentID: 1,
        Resources: [{ ResourceId: 3, Unit: 25 }, { ResourceId: 1, Unit: 75 }], Progress: 30, work: 10,
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    }, {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
        Duration: 3, ParentID: 5, Progress: 30, Resources: [{ ResourceId: 4, Unit: 50 }, { ResourceId: 2, Unit: 70 }], work: 30
    },
    {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3, ParentID: 5,
        Resources: [{ ResourceId: 6, Unit: 40 }], Progress: 30, work: 40
    },
    {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
        Duration: 2, ParentID: 5, Resources: [{ ResourceId: 5, Unit: 75 }], Progress: 30, work: 60,
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30,
    }
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
function App (){
    const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            resourceInfo: 'Resources',
            child: 'subtasks'
        };
        const resourceFields = {
            id: 'ResourceId',
            name: 'ResourceName',
            unit: 'Unit',
            group: 'ResourceGroup'
        };
        const editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        const toolbar = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search'];
        const labelSettings = {
            rightLabel: 'Resources',
            leftLabel: 'TaskName',
            taskLabel: '${Progress}%'
        };
        const splitterSettings = {
            columnIndex: 3
        };
        const projectStartDate = new Date('03/22/2019');
       const projectEndDate = new Date('05/18/2019');
        return <GanttComponent id='root' dataSource = { data } treeColumnIndex = { 1} viewType = 'ResourceView' allowSelection = { true}  allowResizing = { true} highlightWeekends = { true} toolbar = { toolbar } editSettings = { editSettings } projectStartDate = { projectStartDate } projectEndDate = { projectEndDate } resourceFields = {resourceFields } taskFields = { taskFields } labelSettings = { labelSettings } splitterSettings = { splitterSettings } height = '410px' resources = { resourceCollection } >
            <ColumnsDirective>
            <ColumnDirective field= 'TaskID' visible= {false} > </ColumnDirective>
            <ColumnDirective field= 'TaskName'  headerText= 'Task Name'  width= '180' > </ColumnDirective>
            <ColumnDirective field= 'work'  headerText= 'Work' > </ColumnDirective>
            <ColumnDirective field= 'Progress' > </ColumnDirective>
            <ColumnDirective field= 'ResourceGroup'  headerText= 'Group' > </ColumnDirective>
            <ColumnDirective field= 'StartDate' > </ColumnDirective>
            <ColumnDirective field= 'Duration' > </ColumnDirective>
            </ColumnsDirective>
            <Inject services={[ Toolbar, Edit, Selection ]}/>
            </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));