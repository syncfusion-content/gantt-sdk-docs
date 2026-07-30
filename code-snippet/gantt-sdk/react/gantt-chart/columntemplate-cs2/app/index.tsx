import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, SplitterSettings, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    resourceInfo: 'resources'
  };
  const splitterSettings: SplitterSettings = {
    columnIndex: 7
  };
  const ganttTemplate = (props: any) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const baseUrl = 'https://www.meaningofthename.com/';
      const searchUrl = `${baseUrl}${encodeURIComponent(props.TaskName)}`;
      window.open(searchUrl, '_blank');
    };
    return (<a href="#" onClick={handleClick}>{props.TaskName}</a>
    );
  };

  const template: any = ganttTemplate;
  return <GanttComponent dataSource={data} rowHeight={60} taskFields={taskFields} splitterSettings={splitterSettings} height='450px'>
    <ColumnsDirective>
      <ColumnDirective field='TaskID'></ColumnDirective>
      <ColumnDirective field='TaskName' template={template}></ColumnDirective>
      <ColumnDirective field='StartDate'></ColumnDirective>
      <ColumnDirective field='Duration'></ColumnDirective>
      <ColumnDirective field='Progress'></ColumnDirective>
    </ColumnsDirective>
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));