---
layout: post
title: Task Labels in JavaScript Gantt Chart Control | Syncfusion
description: Learn how to configure taskbar labels in the Syncfusion JavaScript Gantt Chart control for enhanced data visualization and project management.
platform: gantt-sdk
control: Task labels 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Labels in JavaScript Gantt Chart Control

Task labels in the JavaScript Gantt Chart control display key task information directly on or near taskbars, enhancing project visualization without requiring task interaction. Configured via the [labelSettings](../api/gantt/labelSettings) property, labels show details like task names, IDs, or progress, streamlining workflows for resource management and status tracking. Labels support three positions: left labels outside the taskbar for identifiers like **TaskName**, right labels after the taskbar for metrics like **Progress**, and task labels overlaid on taskbars for prominent data like task titles. Left and right labels remain visible regardless of taskbar width, while task labels may clip for short tasks. Labels improve readability and provide immediate context, reducing the need for hovers or dialogs in large projects.

## Configure task labels

Task labels are configured using the [labelSettings](../api/gantt/labelSettings) property, mapping fields from the data source defined in [taskFields](../api/gantt#taskfields) (e.g., id to TaskID, name to TaskName). The control supports three label positions with specific use cases:
- [leftLabel](../api/gantt/labelSettingsModel#leftlabel): Displays content like task names or resource assignments to the left of taskbars, ideal for identifiers.
- [rightLabel](../api/gantt/labelSettingsModel#rightlabel): Shows metrics like progress percentages or durations to the right, suitable for completion data.
- [taskLabel](../api/gantt/labelSettingsModel#tasklabel): Overlays content like task titles or progress on taskbars, prominent but limited by taskbar width.

Use template literals for formatted labels, such as **${Progress}%** for progress percentages. Ensure valid `taskFields` mappings to reference fields accurately.

The following example configures labels for task names, IDs, and progress:

```typescript
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const labelSettings = {
    leftLabel: 'Task Id: ${TaskID}',
    rightLabel: 'Task Name: ${TaskName}',
    taskLabel: '${Progress}%'
  };
```

This code displays task names on the left, task IDs on the right, and formatted progress percentages on taskbars, ensuring clear visualization.

## Customize labels with templates

For advanced scenarios, you can create custom label templates using functions for advanced customization that provide complete control over label content and formatting.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tasklabels-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tasklabels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tasklabels-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tasklabels-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tasklabels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tasklabels-cs1" %}
{% endif %}

This code creates a left label with priority-based icons (e.g., red for high priority) and a right label with a progress bar, improving visual feedback. For responsive designs, ensure templates adapt to narrow screens, as task labels may be clipped on short taskbars.

**Conditional label display with icons:**

Create templates that show different content based on task properties:

{% if page.publishingplatform == "javascript" %}

```javascript
function leftLabelTemplate(props) {
    var priorityIcon = '';

    if (props.Priority === 'High') {
        priorityIcon = '<span class="priority-high">🔴</span>';
    } else if (props.Priority === 'Medium') {
        priorityIcon = '<span class="priority-medium">🟡</span>';
    } else if (props.Priority === 'Low') {
        priorityIcon = '<span class="priority-low">🟢</span>';
    }

    return (
        '<div class="custom-left-label">' +
            priorityIcon +
            '<span>' + props.TaskName + '</span>' +
        '</div>'
    );
}

function rightLabelTemplate(props) {
    var progress = props.Progress || 0;
    var duration = props.Duration || 0;

    return (
        '<div class="custom-right-label">' +
            '<div class="progress-container">' +
                '<span class="progress-text">' + progress + '%</span>' +
                '<div class="progress-bar" style="width:' + progress + '%"></div>' +
            '</div>' +
            '<span class="duration-text">' + duration + ' days</span>' +
        '</div>'
    );
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    labelSettings: {
        leftLabel: leftLabelTemplate,
        rightLabel: rightLabelTemplate
    }
});

ganttChart.appendTo('#Gantt');
```

{% elsif page.publishingplatform == "typescript" %}

```ts
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

function leftLabelTemplate(props: any): string {
    let priorityIcon: string = '';

    if (props.Priority === 'High') {
        priorityIcon = '<span class="priority-high">🔴</span>';
    } else if (props.Priority === 'Medium') {
        priorityIcon = '<span class="priority-medium">🟡</span>';
    } else if (props.Priority === 'Low') {
        priorityIcon = '<span class="priority-low">🟢</span>';
    }

    return `
        <div class="custom-left-label">
            ${priorityIcon}
            <span>${props.TaskName}</span>
        </div>
    `;
}

function rightLabelTemplate(props: any): string {
    const progress: number = props.Progress || 0;
    const duration: number = props.Duration || 0;

    return `
        <div class="custom-right-label">
            <div class="progress-container">
                <span class="progress-text">${progress}%</span>
                <div class="progress-bar" style="width:${progress}%"></div>
            </div>
            <span class="duration-text">${duration} days</span>
        </div>
    `;
}

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    labelSettings: {
        leftLabel: leftLabelTemplate,
        rightLabel: rightLabelTemplate
    }
});

gantt.appendTo('#Gantt');
```

{% endif %}

**Rich content labels with multiple data points:**

Display complex information with formatted content and calculations:

{% if page.publishingplatform == "javascript" %}

```js
function getProgressClass(progress) {
    if (progress >= 80) {
        return 'high';
    }
    if (progress >= 40) {
        return 'medium';
    }
    return 'low';
}

function formatDate(date) {
    if (!date) {
        return '';
    }
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit'
    });
}

function taskLabelTemplate(props) {
    var taskName = props.TaskName || (props.ganttProperties && props.ganttProperties.taskName);
    var startDate = props.StartDate || (props.ganttProperties && props.ganttProperties.startDate);
    var endDate = props.EndDate || (props.ganttProperties && props.ganttProperties.endDate);
    var progress = (props.Progress != null)
        ? props.Progress
        : (props.ganttProperties && props.ganttProperties.progress) || 0;
    var resources = props.Resources || (props.ganttProperties && props.ganttProperties.resourceInfo);

    var resourceHtml = '';
    if (resources && resources.length) {
        resourceHtml =
            '<span class="resource-count">👥 ' + resources.length + '</span>';
    }

    return (
        '<div class="rich-task-label">' +
            '<div class="task-info">' +
                '<strong>' + taskName + '</strong>' +
                '<small>' +
                    formatDate(startDate) + ' – ' + formatDate(endDate) +
                '</small>' +
            '</div>' +
            '<div class="task-meta">' +
                resourceHtml +
                '<span class="progress-badge progress-' + getProgressClass(progress) + '">' +
                    progress + '%' +
                '</span>' +
            '</div>' +
        '</div>'
    );
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    labelSettings: {
        taskLabel: taskLabelTemplate
    }
});

ganttChart.appendTo('#Gantt');
```

{% elsif page.publishingplatform == "typescript" %}

```ts
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

function getProgressClass(progress: number): string {
    if (progress >= 80) {
        return 'high';
    }
    if (progress >= 40) {
        return 'medium';
    }
    return 'low';
}

function formatDate(date?: Date): string {
    if (!date) {
        return '';
    }
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit'
    });
}

function taskLabelTemplate(props: any): string {
    const taskName: string =
        props.TaskName || props.ganttProperties?.taskName;

    const startDate: Date =
        props.StartDate || props.ganttProperties?.startDate;

    const endDate: Date =
        props.EndDate || props.ganttProperties?.endDate;

    const progress: number =
        props.Progress ?? props.ganttProperties?.progress ?? 0;

    const resources: any[] =
        props.Resources || props.ganttProperties?.resourceInfo;

    const resourceHtml: string = (resources && resources.length)
        ? `<span class="resource-count">👥 ${resources.length}</span>`
        : '';

    return `
        <div class="rich-task-label">
            <div class="task-info">
                <strong>${taskName}</strong>
                <small>
                    ${formatDate(startDate)} – ${formatDate(endDate)}
                </small>
            </div>
            <div class="task-meta">
                ${resourceHtml}
                <span class="progress-badge progress-${getProgressClass(progress)}">
                    ${progress}%
                </span>
            </div>
        </div>
    `;
}

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    labelSettings: {
        taskLabel: taskLabelTemplate
    }
});

gantt.appendTo('#Gantt');
```

{% endif %}

## See also

- [How to customize taskbars?](../gantt/taskbar)
- [How to manage task dependencies?](../gantt/task-dependency)
- [How to configure critical path?](../gantt/critical-path)