import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, TaskFieldsModel, ToolbarItems } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    let ganttInstance = null;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar = ['ExcelExport'];

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_excelexport') {
            const excelExportProperties = {
                header: {
                    headerRows: 7,
                    rows: [
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Northwind Traders',
                                    style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: '2501 Aerial Center Parkway',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Suite 200 Morrisville, NC 27560 USA',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Tel +1 888.936.8638 Fax +1 919.573.0306',
                                    style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    hyperlink: { target: 'https://www.northwind.com/', displayText: 'www.northwind.com' },
                                    style: { hAlign: 'Center' }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    hyperlink: { target: 'mailto:support@northwind.com' },
                                    style: { hAlign: 'Center' }
                                }
                            ]
                        }
                    ]
                },
                footer: {
                    footerRows: 4,
                    rows: [
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: 'Thank you for your business!',
                                    style: { hAlign: 'Center', bold: true }
                                }
                            ]
                        },
                        {
                            cells: [
                                {
                                    colSpan: 4,
                                    value: '!Visit Again!',
                                    style: { hAlign: 'Center', bold: true }
                                }
                            ]
                        }
                    ]
                }
            };
            if (ganttInstance) {
                ganttInstance.excelExport(excelExportProperties);
            }
        }
    }

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={data}
            height="430px"
            taskFields={taskFields}
            toolbar={toolbar}
            allowExcelExport={true}
            treeColumnIndex={1}
            toolbarClick={toolbarClick}
            ref={(g) => {
                ganttInstance = g;
            }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="80" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="120" />
                <ColumnDirective field="Duration" headerText="Duration" width="100" textAlign="Right" />
                <ColumnDirective field="Progress" headerText="Progress" width="100" textAlign="Right" />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));