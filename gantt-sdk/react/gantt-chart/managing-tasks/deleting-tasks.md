---
layout: post
title: Deleting tasks in React Gantt Chart Component | Syncfusion
description: Learn how to delete tasks dynamically in the Syncfusion React Gantt Chart component using toolbar or programmatic methods for efficient project management.
platform: gantt-sdk
control: Deleting tasks
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Deleting Tasks in React Gantt Chart Component

Deleting tasks in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component streamlines project management by removing tasks, such as outdated milestones or subtasks, using the toolbar or programmatic methods. Enabled by setting the [editSettings.allowDeleting](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowdeleting) property to **true** and injecting `Edit`, tasks can be deleted after selecting a row, ensuring seamless updates to dependencies and critical path calculations. A confirmation dialog, activated via [editSettings.showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#showdeleteconfirmdialog), prompts to verify deletions, preventing accidental removals. The [deleteRow](https://ej2.syncfusion.com/react/documentation/api/gantt#deleterow) method allows programmatic deletion, requiring a selected row with valid `taskFields` mappings (e.g., id, name). Ensure tasks are selected and `taskFields` are properly configured to avoid issues during deletion.

## Delete tasks via toolbar

Enable task deletion through the toolbar by setting [editSettings.allowDeleting](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowdeleting) to **true** and injecting `Edit`. Select a row and click the toolbar’s **Delete** icon to remove the task, with an optional confirmation dialog if [editSettings.showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#showdeleteconfirmdialog) is enabled. This method is ideal for quickly removing tasks like completed activities.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/taskdelete-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/taskdelete-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/taskdelete-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/taskdelete-cs1" %}

## Delete tasks with confirmation dialog

Enable a confirmation dialog for task deletion by setting [editSettings.showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#showdeleteconfirmdialog) to **true**, alongside [editSettings.allowDeleting](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowdeleting) and `Edit` service. After selecting a row, deleting via the toolbar or [deleteRow](https://ej2.syncfusion.com/react/documentation/api/gantt#deleterow) method prompts a dialog to confirm the action, ensuring intentional removals. This is useful for critical tasks where accidental deletion must be avoided.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/deleteconfirm-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/deleteconfirm-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/deleteconfirm-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/deleteconfirm-cs1" %}

## Delete tasks programmatically

Delete tasks programmatically using the [deleteRow](https://ej2.syncfusion.com/react/documentation/api/gantt#deleterow) method, which requires a selected row and `Edit`. Ensure the row is selected and `taskFields` mappings (e.g., id) are valid to perform the deletion. This method supports automation, such as removing tasks via a custom button, and respects the confirmation dialog if enabled.

```typescript

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Edit, Selection, Inject } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {

    let ganttInstance: GanttComponent | null = null;

    const taskData: object[] = [
        { TaskID: 1, TaskName: 'Product concept', StartDate: new Date('04/02/2025'), EndDate: new Date('04/08/2025') },
        { TaskID: 2, TaskName: 'Define the product usage', StartDate: new Date('04/02/2025'), Duration: 1, Progress: 30, ParentID: 1 },
        { TaskID: 3, TaskName: 'Define the target audience', StartDate: new Date('04/02/2025'), Duration: 2, Progress: 40, ParentID: 1 },
        { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/05/2025'), Duration: 2, Progress: 30, ParentID: 1, Predecessor: '2' },
        { TaskID: 5, TaskName: 'Concept approval', StartDate: new Date('04/08/2025'), Duration: 0, ParentID: 1, Predecessor: '3,4' },
        { TaskID: 6, TaskName: 'Market research', StartDate: new Date('04/09/2025'), EndDate: new Date('04/18/2025'), Progress: 30 },
        { TaskID: 7, TaskName: 'Demand analysis', Progress: 40, ParentID: 6 },
        { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/09/2025'), Duration: 4, Progress: 30, ParentID: 7, Predecessor: '5' },
        { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/09/2025'), Duration: 4, ParentID: 7, Predecessor: '5' },
        { TaskID: 10, TaskName: 'Competitor analysis', StartDate: new Date('04/15/2025'), Duration: 4, Progress: 30, ParentID: 6, Predecessor: '7,8' }
    ];

    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        dependency: 'Predecessor',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const editSettings: object = {
        allowDeleting: true,
        showDeleteConfirmDialog: true
    };

    const deleteTask = (): void => {
        if (!ganttInstance) return;

        const selectedRecords = ganttInstance.selectionModule.getSelectedRecords();
        if (selectedRecords.length) {
            ganttInstance.editModule.deleteRecord(selectedRecords[0].TaskID);
        }
    };

    return (
        <div>
            <ButtonComponent onClick={deleteTask}>Delete Task</ButtonComponent>
            <br /><br />
            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={taskData}
                taskFields={taskFields}
                editSettings={editSettings}
                ref={gantt => ganttInstance = gantt}
            >
                <Inject services={[Edit, Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/task-bar-editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)