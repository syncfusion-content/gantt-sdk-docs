

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-react-gantt';
import { base64Data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        resourceInfo: 'resources'
    };
    const toolbarOptions = ['PdfExport'];
    let ganttChart;
    function toolbarClick(args) {
        if (args.item.text === 'PDF export') {
            let exportProperties = {
                enableFooter: false
            };
            ganttChart.pdfExport(exportProperties);
        }
    };
    function pdfQueryTaskbarInfo(args) {
        if (!args.data.hasChildRecords) {
            if (args.data.ganttProperties.resourceNames) {
                args.taskbarTemplate.image = [{
                    width: 20, base64: (args).data.taskData.resourcesImage, height: 20
                }]
            }
            args.taskbarTemplate.value = args.data.TaskName;
            args.taskbarTemplate.fontStyle = {
                fontColor: new PdfColor(255, 255, 255),
                fontFamily: 'TimesRoman',

            }
        }
        if (args.data.hasChildRecords) {
            if (args.data.ganttProperties.resourceNames) {
                args.taskbarTemplate.image = [{
                    width: 20, base64: (args).data.taskData.resourcesImage, height: 20
                }]
            }
            args.taskbarTemplate.value = args.data.TaskName;
            args.taskbarTemplate.fontStyle = {
                fontColor: new PdfColor(255, 255, 255),
                fontFamily: 'TimesRoman',

            }
        }
        if (args.data.ganttProperties.duration === 0) {
            if (args.data.ganttProperties.resourceNames) {
                args.taskbarTemplate.image = [{
                    width: 20, base64: (args).data.taskData.resourcesImage, height: 20,
                }]
            }
            args.taskbarTemplate.value = args.data.TaskName,
                args.taskbarTemplate.fontStyle = {
                    fontColor: new PdfColor(255, 255, 255),
                    fontFamily: 'TimesRoman'
                }
        }
    }
    const splitterSettings = {
        columnIndex: 2
    };
    function TaskbarTemplate(props) {
        return (
            <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={{ height: "100%" }}  >
                <div className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar" style={{ width: props.ganttProperties.progressWidth + "px", height: "100%" }} >
                    <img className="image" src={`./images/${props.ganttProperties.resourceNames}.png`}  style={{ height: '30px', width: '30px', top: '10px' }} />
                </div>
                <span
                    className="e-task-label"
                    style={{ position: "absolute", fontSize: "12px", color: "white", top: "5px", left: "30px", fontFamily: "Segoe UI", cursor: "move", overflow: "hidden" }} >
                    {props.TaskName}
                </span>
            </div>
        );
    }
    function ParentTaskbarTemplate(props) {
        return (
            <div className="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar" style={{ height: "100%" }}  >
                <div className="e-gantt-parent-progressbar-inner-div e-row-expand e-gantt-parent-progressbar" style={{ width: props.ganttProperties.progressWidth + "px", height: "100%" }}  >
                </div>
                <span className="e-task-label" style={{ position: "absolute", fontSize: "12px", color: "white", top: "5px", left: "10px", fontFamily: "Segoe UI", cursor: "move" }} >
                    {props.TaskName}
                </span>
            </div>
        );
    }
    function MilestoneTemplate(props) {
        return (
            <div className="e-gantt-milestone" style={{ position: "relative", display: "inline-block" }}>
                <div className="e-milestone-top" style={{ position: "absolute", borderRightWidth: "20px", borderLeftWidth: "20px", borderBottomWidth: "20px" }} />
                <div className="e-milestone-bottom" style={{ position: "absolute", top: "20px", borderRightWidth: "20px", borderLeftWidth: "20px", borderTopWidth: "20px" }} />
                <img className="image" src={`./images/${props.ganttProperties.resourceNames}.png`}  style={{ height: '30px', width: '30px', position: 'absolute', top: '1px', left: '80%', transform: 'translateX(-50%)' }} />
            </div>
        );
    }
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
    };

    return <GanttComponent dataSource={base64Data} rowHeight={45} taskFields={taskFields} toolbar={toolbarOptions} pdfQueryTaskbarInfo={pdfQueryTaskbarInfo} toolbarClick={toolbarClick} allowPdfExport={true} ref={gantt => ganttChart = gantt}
        splitterSettings={splitterSettings} resourceFields={resourceFields} resources={editingResources} taskbarTemplate={TaskbarTemplate}
        parentTaskbarTemplate={ParentTaskbarTemplate}
        milestoneTemplate={MilestoneTemplate} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID'></ColumnDirective>
            <ColumnDirective field='TaskName'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport, Selection]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));