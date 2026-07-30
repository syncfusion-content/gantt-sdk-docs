import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
function App() {
  let ganttObj: GanttComponent | null = null;
  const taskFields: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID',
    indicators: 'Indicators'
  };

  const indicator = (): void => {
    if (!ganttObj) return;

    const nodes = ganttObj.element.querySelectorAll('.e-indicator-span');
    nodes.forEach((box: HTMLElement) => {
      const icon = box.children[0] as HTMLElement;
      if (icon) {
        icon.style.color = 'red';
      }
    });
  };

  return (
    <div>
      <ButtonComponent onClick={indicator}>
        Indicator background change
      </ButtonComponent>
      <br /><br />
      <GanttComponent
        id="Gantt"
        height="430px"
        dataSource={data}
        taskFields={taskFields}
        ref={gantt => ganttObj = gantt}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));