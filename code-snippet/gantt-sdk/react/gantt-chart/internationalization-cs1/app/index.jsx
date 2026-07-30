import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
loadCldr(cagregorian, numbers);
setCulture('de-DE');

L10n.load({
  'de-DE': {
      'gantt': {
        "id": "Ich würde",
        "name": "Name",
        "startDate": "Anfangsdatum",
        "duration": "Dauer",
        "progress": "Fortschritt",
      }
  }
});

function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'parentId'
  };
  return (
    <GanttComponent 
      dataSource={data} 
      locale='de-DE' 
      allowSelection={true} 
      taskFields={taskFields}  
      height = '450px'
    >
    </GanttComponent>
  ); 
};
ReactDOM.render(<App />, document.getElementById('root'));