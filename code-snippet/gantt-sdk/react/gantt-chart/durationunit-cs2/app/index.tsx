let data: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
    },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: '4days', ParentID: 1, Progress: 50 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: '16hours', ParentID: 1, Progress: 70 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: '1800minutes', ParentID: 1, Progress: 80 },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: '16hours', ParentID:5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: '3days', ParentID:5, Progress: 50 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: '480minutes', ParentID:5, Progress: 70 }
];

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, SplitterSettings, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';

function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings: SplitterSettings = {
    columnIndex: 4
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
          splitterSettings={splitterSettings} height = '450px'>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));