import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Filter);

const dropDownData: string[] = [
    'ClearFilter',
    'Project Kickoff', 'Site Selection', 'Soil Analysis',
    'Approval of Soil Report', 'Cost Estimation',
    'Create Floor Plan', 'Material Listing', 'Approval of Estimate'
];

let autoComplete: AutoComplete = new AutoComplete({
    dataSource: dropDownData,
    placeholder: 'Search TaskName',
    change: (args: ChangeEventArgs) => {
        const selectedValue = args.value as string;
        if (args.itemData && selectedValue !== 'ClearFilter') {
            // Filter when a valid task name is selected (exclude ClearFilter).
            gantt.filterByColumn('TaskName', 'equal', selectedValue);
        } else {
            // Clear filter when input is cleared or "ClearFilter" is selected/typed.
            gantt.clearFiltering();
        }
    }
});

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '420px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: [
        {
            type: 'Input',
            template: autoComplete,
            align: 'Left',
            tooltipText: 'Search TaskName'
        }
    ]
});

gantt.appendTo('#Gantt');