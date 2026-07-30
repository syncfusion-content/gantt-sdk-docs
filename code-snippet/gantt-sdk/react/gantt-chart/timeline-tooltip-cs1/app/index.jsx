import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  let ganttInstance;
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  function timelineTooltip(props) {
    const tier = props.tier;
    const date = props.date;
    const endDate = new Date(date);
    if (tier === 'topTier' && ganttInstance.timelineSettings.topTier.unit) {
      endDate.setDate(endDate.getDate() + 6);
    }
    const data = getTooltipData(new Date(date), endDate, tier);

    return (
      <div style={{ padding: '5px' }}>
        <div style={{ paddingBottom: '9px', textAlign: 'center', borderBottom: `2px solid white` }}>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
            {tier === 'topTier' ? props.value : date}
          </span>
        </div>
        <div style={{ display: 'flex', paddingBottom: '5px', paddingTop: '9px' }}>
          <span style={{ fontWeight: 'bold' }}>Active Tasks:</span>
          <span style={{ paddingLeft: '2px' }}>{data.activeTasks}</span>
        </div>
        <div style={{ display: 'flex', paddingBottom: '5px' }}>
          <span style={{ fontWeight: 'bold' }}>Milestones:</span>
          <span style={{ paddingLeft: '2px' }}>{data.milestones}</span>
        </div>
        <div style={{ display: 'flex', paddingBottom: '5px' }}>
          <span style={{ fontWeight: 'bold' }}>Overall Progress:</span>
          <span style={{ paddingLeft: '2px' }}>{data.overallProgress}</span>
        </div>
      </div>
    );
  };

  const getTooltipData = (startDate, endDate, tier) => {
    const gantt = ganttInstance;
    let activeTasks = [];

    if (tier === 'topTier') {
      activeTasks = gantt.currentViewData.filter((task) => {
        const taskStart = new Date(task['StartDate']);
        const taskEnd = new Date(task['EndDate']);
        taskStart.setHours(0, 0, 0, 0);
        taskEnd.setHours(0, 0, 0, 0);
        return (taskStart >= startDate && taskEnd <= endDate);
      });
    } else {
      activeTasks = gantt.currentViewData.filter((task) => {
        const taskStart = new Date(task['StartDate']);
        const taskEnd = new Date(task['EndDate']);
        taskStart.setHours(0, 0, 0, 0);
        taskEnd.setHours(0, 0, 0, 0);
        return (taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime());
      });
    }

    const milestones = activeTasks.filter((task) => task.Duration === 0);
    const totalProgress = activeTasks.reduce((acc, task) => acc + (task.Progress || 0), 0);
    const overallProgress = (activeTasks.length > 0) ? (totalProgress / activeTasks.length).toFixed(2) : '0';

    return {
      activeTasks: activeTasks.length,
      milestones: milestones.length,
      overallProgress: overallProgress
    };
  }
  const template = timelineTooltip;
  const tooltipSettings = {
    timeline: template
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
    tooltipSettings={tooltipSettings} height='450px' ref={gantt => ganttInstance = gantt}>
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));