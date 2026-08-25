---
layout: post
title: Adding New Tasks in React Gantt Chart | Syncfusion
description: Learn how to add tasks dynamically in Syncfusion React Gantt Chart using toolbar, context menu, or programmatic methods for project management.
keywords: react gantt adding tasks, add new task, insert task, dynamic task addition, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/managing-tasks/adding-new-tasks
platform: gantt-sdk
control: Adding New Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Dynamically Adding New Tasks in React Gantt Chart

Adding new tasks to the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables flexible project management by inserting tasks like milestones or subtasks using the toolbar, context menu, or programmatic methods. With [editSettings.allowAdding](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowadding) enabled and `Edit` injected, tasks can be added at the top, as children, or at specific positions, seamlessly integrating with dependencies and critical path calculations. Ensure task data aligns with [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings (e.g., id, name, startDate) for successful addition, and verify parent rows support subtasks when adding child tasks. The toolbar opens a dialog for task details, the context menu provides positional options, and the [addRecord](https://ej2.syncfusion.com/react/documentation/api/gantt#addrecord) method offers precise control, making task creation efficient for dynamic project updates.

## Add tasks via toolbar

Enable task addition through the toolbar by setting [editSettings.allowAdding](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowadding) to **true** and injecting `Edit`. Clicking the toolbar’s **Add** icon opens a dialog to enter details like task name, start date, and duration, adding the task at the top of the Gantt chart. This is ideal for quickly inserting high-level tasks or milestones, with all required fields (e.g., TaskID) validated for successful creation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/toolbarRowadding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/toolbarRowadding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/toolbarRowadding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/toolbarRowadding-cs1" %}

## Add tasks via context menu

Enable context menu task addition by setting [enableContextMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#enablecontextmenu) to **true**, injecting `ContextMenu` and `Edit`, and enabling [editSettings.allowAdding](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowadding). Right-clicking a row opens a menu with **Above**, **Below**, and **Child** options. This method suits precise placement within project hierarchies.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/contextMenuRowAdding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/contextMenuRowAdding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/contextMenuRowAdding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/contextMenuRowAdding-cs1" %}

## Add tasks programmatically

Add tasks programmatically using the [addRecord](https://ej2.syncfusion.com/react/documentation/api/gantt#addrecord) method, specifying task data, `rowPosition` (**Top**, **Bottom**, **Above**, **Below**, **Child**), and an optional `rowIndex`. Inject `Edit` and ensure `taskFields` mappings are valid. 

**Important prerequisites**:
- **Unique TaskID**: Every new task **must** have a unique ID value that doesn't conflict with existing task IDs. Duplicate IDs will result in undefined behavior, potential data loss, or rendering errors. Always increment or generate new IDs programmatically before calling `addRecord`.
- **Required fields**: Provide `TaskName` and at least one date field (`StartDate` with `Duration`, or `EndDate`).
- **Parent task validation**: When adding a task as a child (`rowPosition: 'Child'`), ensure the parent row exists and supports child tasks.
- **Dependency validation**: If the new task has dependencies, verify that referenced predecessor tasks exist before adding.

For example, adding a task as a child creates a subtask under a parent row, updating the project hierarchy:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/customRowadding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/customRowadding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/customRowadding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/customRowadding-cs1" %}

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)