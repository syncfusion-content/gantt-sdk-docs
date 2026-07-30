import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
  let ganttInstance;
  let comboInstance;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const timelineSettings = {
    timelineViewMode: 'Week'
  };

  const timelineOptions = [
    { Id: 'Week', Value: 'Week' },
    { Id: 'Day', Value: 'Day' },
    { Id: 'Month', Value: 'Month' }
  ];

  const onTimelineChange = (args) => {
    if (ganttInstance) {
      ganttInstance.timelineSettings.timelineViewMode = args.value;
      ganttInstance.refresh();
    }
  };

  return (
    <div>
      <ComboBoxComponent
        ref={(combo) => (comboInstance = combo)}
        dataSource={timelineOptions}
        width="200px"
        fields={{ text: 'Value', value: 'Id' }}
        index={0}
        change={onTimelineChange}
      />
      <GanttComponent
        ref={(gantt) => (ganttInstance = gantt)}
        height="430px"
        dataSource={data}
        taskFields={taskFields}
        timelineSettings={timelineSettings}
      >
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));