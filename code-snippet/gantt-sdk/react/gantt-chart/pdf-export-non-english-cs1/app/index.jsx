import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data, adventProFont } from './datasource';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

function App() {

    let ganttChart = null;

    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const toolbar = ['PdfExport'];

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_pdfexport' && ganttChart) {
            // Create PdfExportProperties with custom font for non-English characters (Arabic)
            const exportProps = {
                fileName: 'project-arabic.pdf',
                ganttStyle: {
                    font: new PdfTrueTypeFont(adventProFont, 12)
                }
            };
            ganttChart.pdfExport(exportProps);
        }
    }

    return (
        <GanttComponent
            ref={(g) => ganttChart = g}
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskSettings}
            toolbar={toolbar}
            toolbarClick={toolbarClick}
            allowPdfExport={true}
            treeColumnIndex={1}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="معرف" width="100" textAlign="Left" />
                <ColumnDirective field="TaskName" headerText="اسم المهمة" width="250" />
                <ColumnDirective field="StartDate" headerText="تاريخ البدء" width="150" />
                <ColumnDirective field="Duration" headerText="المدة" width="150" />
                <ColumnDirective field="Progress" headerText="التقدم" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));