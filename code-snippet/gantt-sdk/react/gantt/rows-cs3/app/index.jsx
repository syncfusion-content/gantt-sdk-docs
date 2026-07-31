import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const taskFields= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
  };
  function collapsing(args) {
      if (args.data.TaskID==1){
      args.cancel=true;
      }}

  function expanding(args) {
      if (args.data.TaskID==5){
      args.cancel=true;
      }
}
        return <GanttComponent dataSource={data} taskFields={taskFields}  
        collapsing={collapsing} expanding={expanding} height = '450px'>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));