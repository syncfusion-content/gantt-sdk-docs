import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, TimelineSettingsModel } from '@syncfusion/ej2-react-gantt';
import { ComboBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
  let ganttInstance: GanttComponent | null;
  let comboInstance: ComboBoxComponent | null;

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const timelineSettings: TimelineSettingsModel = {
    timelineViewMode: 'Week'
  };

  const timelineOptions = [
    { Id: 'Week', Value: 'Week' },
    { Id: 'Day', Value: 'Day' },
    { Id: 'Month', Value: 'Month' }
  ];

  const onTimelineChange = (args: ChangeEventArgs): void => {
    if (ganttInstance) {
      ganttInstance.timelineSettings.timelineViewMode = args.value as 'Week' | 'Day' | 'Month';
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