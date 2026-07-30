let GanttData = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 2, TaskName: 'Identify Site location', Duration: 3, ParentID: 1, Progress: 50 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), ParentID: 1, Progress: 50 },
    { TaskID: 4, TaskName: 'Soil test approval', EndDate: new Date('04/08/2019'), ParentID: 1, Progress: 50 },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), EndDate: new Date('04/08/2019'), ParentID: 5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), ParentID: 5, Progress: 50 },
    { TaskID: 8, TaskName: 'Estimation approval', Duration: 0, ParentID: 5, Progress: 50 }
];

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
function  App() {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
const editSettings = {
            allowEditing: true,
            allowTaskbarEditing: true,
        };
    
        return < GanttComponent dataSource={GanttData} taskFields={taskFields} editSettings={editSettings} allowUnscheduledTasks={true} height='400px'>
<Inject services={[Edit]}/>
        </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));