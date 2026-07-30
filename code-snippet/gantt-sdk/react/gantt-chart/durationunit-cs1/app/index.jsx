let data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 2, DurationUnit: 'day', ParentID: 1, Progress: 50 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 12, DurationUnit: 'hour', ParentID: 1, Progress: 70 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 240, DurationUnit: 'minute', ParentID: 1, Progress: 80 },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 8, DurationUnit: 'hour', ParentID: 5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, DurationUnit: 'day', ParentID: 5, },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 480, DurationUnit: 'minute', ParentID: 5, Progress: 70 }
];

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';

function App (){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    durationUnit:'DurationUnit',
    parentID: 'ParentID'
  };
  const splitterSettings = {
    columnIndex: 4
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
          splitterSettings={splitterSettings} height = '450px'>
       </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));