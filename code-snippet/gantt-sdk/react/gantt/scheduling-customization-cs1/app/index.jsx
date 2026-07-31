import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';

const projectStartDate = new Date('04/01/2025');

const data = [
  { TaskID: 1, TaskName: 'Plan project', StartDate: new Date('04/03/2025'), Duration: 5, isManual: false },
  { TaskID: 2, TaskName: 'Develop feature', StartDate: new Date('04/03/2025'), Duration: 7, isManual: false },
  { TaskID: 3, TaskName: 'Test module', StartDate: new Date('03/31/2025'), Duration: 3, isManual: false }
];

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  manual: 'isManual'
};

let ganttInstance = null;

function dataBound() {
  if (!ganttInstance) return;

  const tasks = ganttInstance.dataSource;
  let updated = false;

  tasks.forEach((task: any) => {
    if (!task.isManual && task.StartDate && new Date(task.StartDate) < projectStartDate) {
      task.isManual = true;
      updated = true;
    }
  });

  if (updated) {
    // Create a new array reference to trigger refresh.
    ganttInstance.dataSource = [...tasks];

  }
}

function App() {
  return (
    <GanttComponent
      ref={(gantt) => { ganttInstance = gantt; }}
      dataSource={data}
      height="450px"
      taskMode="Custom"
      taskFields={taskFields}
      dataBound={dataBound}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));