let data  = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, ParentID: 1 },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentID: 5 }
];
  
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { GanttComponent } from '@syncfusion/ej2-react-gantt';
  
  function App(){
    const taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
      const splitterSettings = {
          columnIndex: 5
      };
    function customizeCell(args) {
              if (args.column.field == "Progress") {
                 if (args.data.Progress < 60)
                    args.cell.style.backgroundColor="lightgreen"
                 else
                    args.cell.style.backgroundColor="yellow"
          }
      };
      function rowDataBound(args) {
          if(args.data.TaskID==4)
              args.row.style.backgroundColor="red"
      }
          return <GanttComponent dataSource={data} taskFields={taskFields}
          splitterSettings={splitterSettings} queryCellInfo={customizeCell}
          rowDataBound={rowDataBound}
          height = '450px'>
       </GanttComponent>
  };
  ReactDOM.render(<App />, document.getElementById('root'));