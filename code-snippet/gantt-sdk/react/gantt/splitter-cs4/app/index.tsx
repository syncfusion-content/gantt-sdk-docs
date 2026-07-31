
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, SplitterSettingsModel, ISplitterResizedEventArgs } from '@syncfusion/ej2-react-gantt';
import { ResizingEventArgs } from '@syncfusion/ej2-layouts';
import { data } from './datasource';

function App() {
  let ganttRef: GanttComponent | null = null;

  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const splitterSettings: SplitterSettingsModel = { columnIndex: 2 };

  const onDataBound = (): void => {
    const splitterBar = ganttRef.element.querySelector('.e-split-bar') as HTMLElement;
    if (splitterBar) {
      splitterBar.addEventListener('mouseover', () => {
        splitterBar.style.background = 'grey';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
        if (resizeHandler) resizeHandler.style.visibility = 'hidden';
      });
      splitterBar.addEventListener('mouseleave', () => {
        splitterBar.style.background = '#dee2e6';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
        if (resizeHandler) resizeHandler.style.visibility = 'visible';
      });
    }
  };

  const onSplitterResizing = (args: ResizingEventArgs): void => {
    const splitterBar = ganttRef.element.querySelector('.e-split-bar') as HTMLElement;
    if (splitterBar) {
      splitterBar.style.background = 'grey';
      const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
      if (resizeHandler) resizeHandler.style.visibility = 'hidden';
    }
  };

  const onSplitterResized = (args: ISplitterResizedEventArgs): void => {
    const splitterBar = ganttRef.element.querySelector('.e-split-bar') as HTMLElement;
    if (splitterBar) {
      splitterBar.style.background = '#dee2e6';
      const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
      if (resizeHandler) resizeHandler.style.visibility = 'visible';
    }
  };

  return (
    <div className="control-section">
      <GanttComponent
        height="410px"
        dataSource={data}
        taskFields={taskFields}
        splitterSettings={splitterSettings}
        treeColumnIndex={1}
        dataBound={onDataBound}
        splitterResizing={onSplitterResizing}
        splitterResized={onSplitterResized}
        ref={gantt => ganttRef = gantt}>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
