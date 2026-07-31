import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
  let ganttInstance: GanttComponent | null = null;
  const taskSettings: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    indicators: 'Indicators'
  };

  const editSettings: object = {
    allowEditing: true
  };

  const toolbar: string[] = ['Edit'];

  const dataBound = (): void => {
    const elements = document.querySelectorAll('.e-indicator-span');
    elements.forEach((el) => {
      el.addEventListener('click', (event: Event) => {
        const indicator = event.target as HTMLElement;
        const taskbar = indicator.closest('.e-chart-row') as HTMLElement;

        if (taskbar && ganttInstance) {
          const rowIndex = Number(taskbar.getAttribute('data-rowindex'));
          const record = ganttInstance.flatData[rowIndex];
          console.log(record.ganttProperties);
          if (record.ganttProperties.taskId) {
            ganttInstance.openEditDialog(record.ganttProperties.taskId);
          }
        }
      });
    });
  };

  return (
    <GanttComponent
      id="Gantt"
      height="450px"
      dataSource={data}
      taskFields={taskSettings}
      editSettings={editSettings}
      toolbar={toolbar}
      dataBound={dataBound}
      ref={gantt => ganttInstance = gantt}
    >
      <Inject services={[Toolbar, Edit]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));