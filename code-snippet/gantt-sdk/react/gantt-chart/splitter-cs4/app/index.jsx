
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  let ganttRef = null;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const splitterSettings = { columnIndex: 2 };

  const onDataBound = () => {
    const splitterBar = ganttRef.element.querySelector('.e-split-bar');
    if (splitterBar) {
      splitterBar.addEventListener('mouseover', () => {
        splitterBar.style.background = 'grey';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler');
        if (resizeHandler) resizeHandler.style.visibility = 'hidden';
      });
      splitterBar.addEventListener('mouseleave', () => {
        splitterBar.style.background = '#dee2e6';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler');
        if (resizeHandler) resizeHandler.style.visibility = 'visible';
      });
    }
  };

  const onSplitterResizing = () => {
    const splitterBar = ganttRef.element.querySelector('.e-split-bar');
    if (splitterBar) {
      splitterBar.style.background = 'grey';
      const resizeHandler = splitterBar.querySelector('.e-resize-handler');
      if (resizeHandler) resizeHandler.style.visibility = 'hidden';
    }
  };

  const onSplitterResized = () => {
    const splitterBar = ganttRef.element.querySelector('.e-split-bar');
    if (splitterBar) {
      splitterBar.style.background = '#dee2e6';
      const resizeHandler = splitterBar.querySelector('.e-resize-handler');
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
