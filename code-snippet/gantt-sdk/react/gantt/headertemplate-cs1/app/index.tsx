let data: Object[]  = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID:1, Progress: 50 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID:1, Progress: 50 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID:1, Progress: 50 },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID:5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID:5, Progress: 50 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID:5, Progress: 50 }
];
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { GanttComponent,ColumnsDirective,ColumnDirective } from '@syncfusion/ej2-react-gantt';
  
  function App (){
      const taskFields: any = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
          return <GanttComponent dataSource={data} taskFields={taskFields} height = '450px'>
           <ColumnsDirective>
                  <ColumnDirective field='TaskID' width='150' ></ColumnDirective>
                  <ColumnDirective field='TaskName' width='250'></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>
  };
  ReactDOM.render(<App />, document.getElementById('root'));