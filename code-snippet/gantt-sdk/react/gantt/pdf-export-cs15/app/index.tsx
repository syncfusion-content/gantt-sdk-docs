import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { PdfFontStyle, PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';
import { data } from './datasource';
import { robotoFont } from './font';
function App(){
    let ganttInstance:any;
  const taskValues:any= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks' 
  };
  const  toolbarOptions: any = ['PdfExport'];
  
  const toolbarClick=(args:any)=>{
    if(args.item.text === 'PDF export'){
      let exportProperties = {
        ganttStyle: {font: new PdfTrueTypeFont(robotoFont, 12, PdfFontStyle.Bold)}
    };
    ganttInstance.pdfExport(exportProperties);
  }};

    return (
      <div>
              <GanttComponent id='root' ref={gantt => ganttInstance =gantt}
                    dataSource={data} taskFields={taskValues}
                    height = '450px' toolbar={toolbarOptions}
                    toolbarClick={toolbarClick} allowPdfExport={true}>  

                    <Inject services={[Toolbar, PdfExport, Selection]} />  
              </GanttComponent>       
      </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));