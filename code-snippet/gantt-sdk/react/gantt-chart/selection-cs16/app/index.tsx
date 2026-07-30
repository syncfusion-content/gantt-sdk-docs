import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
      let ganttInstance: any;
      const taskFields: any = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
      };
      const settings: SelectionSettingsModel = {
            mode: 'Row',
            type: 'Multiple'
      };

      return <GanttComponent dataSource={data} allowSelection={true} enableHover={true} taskFields={taskFields}
            selectionSettings={settings} height='450px' ref={gantt => ganttInstance = gantt}>
            <Inject services={[Selection]} />
      </GanttComponent>
};

ReactDOM.render(<App />, document.getElementById('root'));