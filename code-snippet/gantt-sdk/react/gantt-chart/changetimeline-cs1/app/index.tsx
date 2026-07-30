import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent} from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';
function App (){
    let ganttInstance:any;
    const taskFields:any= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
    };
 const modes:any=[
    {
      item: "Hour",
      id:"1"
    },
    {
      item: "Day",
      id:"2"
    },
    {
      item: "Week",
      id:"3"
    },
    {
      item: "Month",
      id:"4"
    },
    {
      item: "Year",
      id:"5"
    }
  ];

  const fields:any={text:"item", value:"id"};

  function onChange(args:any) {
    if(args.value==="1")
    {
      ganttInstance.timelineSettings.timelineViewMode="Hour";
    }
    else if(args.value==="2")
    {
      ganttInstance.timelineSettings.timelineViewMode="Day";
    }
    else if(args.value==="3")
    {
      ganttInstance.timelineSettings.timelineViewMode="Week";
    }
    else if(args.value==="4")
    {
      ganttInstance.timelineSettings.timelineViewMode="Month";
    }
    else if(args.value==="5")
    {
      ganttInstance.timelineSettings.timelineViewMode="Year";
    }

  }
    return (
      <div>
              <DropDownListComponent id="modes" placeholder="Select" dataSource={modes}
               fields={fields} change={onChange} width="150px"/>
  
              <GanttComponent ref={gantt => ganttInstance =gantt}
                    dataSource={data} taskFields={taskFields}
                    height = '450px'>    
              </GanttComponent>       
      </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));