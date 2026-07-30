import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

let primaryGantt = null;
let secondaryGantt = null;

function App() {
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

  function syncScroll(args) {
    if (args.action === 'HorizontalScroll') {
      const chart = secondaryGantt.element.querySelector(
        '.e-chart-root-container > div'
      );
      if (chart) {
        chart.scrollLeft = args.scrollLeft;
      }
    }
  }

  return (
    <div className="control-section" style={{ height: '475px', width: '650px' }}>
      <GanttComponent
        ref={(g) => (primaryGantt = g)}
        id="primaryGanttContainer"
        height="50%"
        width="100%"
        dataSource={data}
        taskFields={taskFields}
        treeColumnIndex={1}
        allowSelection={true}
        dateFormat="MMM dd, y"
        highlightWeekends={true}
        actionComplete={syncScroll}
      >
        <Inject services={[Selection]} />
      </GanttComponent>

      <GanttComponent
        ref={(g) => (secondaryGantt = g)}
        id="secondaryGanttContainer"
        height="50%"
        width="100%"
        dataSource={data}
        taskFields={taskFields}
        treeColumnIndex={1}
        allowSelection={true}
        dateFormat="MMM dd, y"
        highlightWeekends={true}
      >
        <Inject services={[Selection]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));