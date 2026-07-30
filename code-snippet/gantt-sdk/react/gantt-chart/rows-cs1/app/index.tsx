import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';
function App() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let gantt: GanttComponent | null;
  let heightRow: Object = { small: 20, medium: 40, big: 60 };
  const changeHeight = ((args: ChangeEventArgs) => {
    (gantt as GanttComponent).rowHeight = heightRow[args.target.id];
  });
  return <div>
    <ButtonComponent id="small" cssClass="e-small" onClick={changeHeight}>Change height 20px</ButtonComponent>
    <ButtonComponent id="medium" cssClass="e-small" onClick={changeHeight}>Change height 40px</ButtonComponent>
    <ButtonComponent id="big" cssClass="e-small" onClick={changeHeight}>Change height 60px</ButtonComponent>

    <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} rowHeight={42} height='450px'>
    </GanttComponent></div>
};
ReactDOM.render(<App />, document.getElementById('root'));