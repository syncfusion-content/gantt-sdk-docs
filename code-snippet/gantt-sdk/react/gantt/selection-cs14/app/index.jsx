import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function  App(){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
 const settings = {
        mode: 'Row',
        type: 'Multiple'
  };
  let ganttInstance ;
 function rowSelected(args) {
    let selectedrowindex = ganttInstance.selectionModule.getSelectedRowIndexes();  // get the selected row indexes.
    alert(selectedrowindex); // to alert the selected row indexes.
    let selectedrecords = ganttInstance.selectionModule.getSelectedRecords();  // get the selected records.
    console.log(selectedrecords); // to print the selected records in console window.
}
      return <GanttComponent dataSource={data} allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} rowSelected={rowSelected} height = '450px' ref={gantt => ganttInstance = gantt}>
        <Inject services={[Selection]} />
        </GanttComponent>
   };
ReactDOM.render(<App />, document.getElementById('root'));