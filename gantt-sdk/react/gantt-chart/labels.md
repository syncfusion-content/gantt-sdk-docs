---
layout: post
title: Task Labels in React Gantt Chart Component | Syncfusion
description: Learn how to configure taskbar labels in the Syncfusion React Gantt Chart component for enhanced data visualization and project management.
platform: gantt-sdk
control: Task labels
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Labels in React Gantt Chart Component

Task labels in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component display key task information directly on or near taskbars, enhancing project visualization without requiring task interaction. Configured via the [labelSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings) property, labels show details like task names, IDs, or progress, streamlining workflows for resource management and status tracking. Labels support three positions: left labels outside the taskbar for identifiers like **TaskName**, right labels after the taskbar for metrics like **Progress**, and task labels overlaid on taskbars for prominent data like task titles. Left and right labels remain visible regardless of taskbar width, while task labels may clip for short tasks. Labels improve readability and provide immediate context, reducing the need for hovers or dialogs in large projects.

## Configure task labels

Task labels are configured using the [labelSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings) property, mapping fields from the data source defined in [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) (e.g., id to TaskID, name to TaskName). The component supports three label positions with specific use cases:

- [leftLabel](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettingsModel#leftlabel): Displays content like task names or resource assignments to the left of taskbars, ideal for identifiers.
- [rightLabel](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettingsModel#rightlabel): Shows metrics like progress percentages or durations to the right, suitable for completion data.
- [taskLabel](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettingsModel#tasklabel): Overlays content like task titles or progress on taskbars, prominent but limited by taskbar width.

Use template literals for formatted labels, such as **${Progress}%** for progress percentages. Ensure valid `taskFields` mappings to reference fields accurately.

The following example configures labels for task names, IDs, and progress:

```typescript
function App() {
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
    rightLabel: 'Task Name: ${taskData.TaskName}',
    taskLabel: '${Progress}%'
  };
  ...
}
```

This code displays task names on the left, task IDs on the right, and formatted progress percentages on taskbars, ensuring clear visualization.

## Customize labels with templates

For advanced scenarios, you can create custom label templates that provide complete control over label content and formatting

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/customization1-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/customization1-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/customization1-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/customization1-cs1" %}

This code creates a left label with priority-based icons (e.g., red for high priority) and a right label with a progress bar, improving visual feedback. For responsive designs, ensure templates adapt to narrow screens, as task labels may be clipped on short taskbars.

**Conditional label display with icons:**

Create templates that show different content based on task properties:

{% raw %}

```typescript
// Left label template with conditional logic.
const leftLabelTemplate = (props: any) => {
    const { Priority, TaskName } = props;
    return (
      <div className="custom-left-label">
        {Priority === 'High' && <span className="priority-high">🔴</span>}
        {Priority === 'Medium' && <span className="priority-medium">🟡</span>}
        {Priority === 'Low' && <span className="priority-low">🟢</span>}
        <span>{TaskName}</span>
      </div>
    );
  };
// Right label template with progress indicators.
  const rightLabelTemplate = (props: any) => {
    const progress = props.Progress || 0;
    const duration = props.Duration || 0;
    return (
      <div className="custom-right-label">
        <div className="progress-container">
          <span className="progress-text">{progress}%</span>
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="duration-text">{duration} days</span>
      </div>
    );
  };

  const labelSettings: any = {
    leftLabel: leftLabelTemplate,
    rightLabel: rightLabelTemplate,
  };
```

{% endraw %}

**Rich content labels with multiple data points:**

Display complex information with formatted content and calculations:

```typescript
// Task label template with multiple data points.

const getProgressClass = (progress: number): string => {
    if (progress >= 80) return 'high';
    if (progress >= 40) return 'medium';
    return 'low';
};

const taskLabelTemplate = (props: any): JSX.Element => {
    const taskName = props.TaskName || props.ganttProperties.taskName;
    const startDate = props.StartDate || props.ganttProperties.startDate;
    const endDate = props.EndDate || props.ganttProperties.endDate;
    const progress = props.Progress ?? props.ganttProperties.progress ?? 0;
    const resources = props.Resources || props.ganttProperties.resourceInfo;

    const formatDate = (date?: Date): string =>
        date ? date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) : '';

    return (
        <div className="rich-task-label">
            <div className="task-info">
                <strong>{taskName}</strong>
                <small>
                    {formatDate(startDate)} – {formatDate(endDate)}
                </small>
            </div>

            <div className="task-meta">
                {resources && (
                    <span className="resource-count">
                        👥 {resources.length}
                    </span>
                )}
                <span className={`progress-badge progress-${getProgressClass(progress)}`}>
                    {progress}%
                </span>
            </div>
        </div>
    );
};

const labelSettings = {
    taskLabel: taskLabelTemplate
};
```

## See also

- [How to customize taskbars?](https://ej2.syncfusion.com/react/documentation/gantt/taskbar)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)
