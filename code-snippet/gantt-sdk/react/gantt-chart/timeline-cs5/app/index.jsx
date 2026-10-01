import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';
function App() {
  const taskFields = {
    id: 'TaskID',
    parentID: 'ParentID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress'
  };
  const getWeekNumber = (date) => {
    const currentDate = new Date(date);
    const firstDay = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate.getTime() - firstDay.getTime()) / 86400000);
    return Math.ceil((days + firstDay.getDay() + 1) / 7);
  };
  const timelineSettings = {
    topTier: {
      unit: 'Week',
      formatter: (date) => `Week ${getWeekNumber(date)}`
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    }
  };
  return (
    <GanttComponent
      dataSource={GanttData}
      taskFields={taskFields}
      timelineSettings={timelineSettings}
      projectStartDate={new Date('2019-04-01')}
      projectEndDate={new Date('2019-10-01')}
      height='450px'>
    </GanttComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));