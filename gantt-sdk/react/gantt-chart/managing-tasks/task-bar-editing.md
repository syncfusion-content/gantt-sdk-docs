---
layout: post
title: Taskbar Editing in React Gantt Chart | Syncfusion
description: Learn how to edit tasks by dragging and resizing taskbars in Syncfusion React Gantt Chart for intuitive project timeline adjustments.
keywords: react gantt taskbar editing, drag taskbar, resize taskbar, taskbar interactions, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/managing-tasks/task-bar-editing
platform: gantt-sdk
control: Taskbar Editing - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Editing Tasks by Dragging and Resizing Taskbars in React Gantt Chart

Task bar editing in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables intuitive project timeline adjustments by allowing to drag or resize taskbars to modify task details, such as start dates, durations, or progress, using mouse or touch interactions. Enable this feature by setting the [allowTaskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowtaskbarediting) property to **true** and injecting `Edit`, ensuring task data aligns with valid [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings (e.g., id, startDate, duration). Taskbars can be dragged to shift dates, resize them to adjust durations, or move progress grips to update completion percentages. The [taskbarEditing](https://ej2.syncfusion.com/react/documentation/gantt/events#taskbarediting) event allows preventing edits for specific tasks, while the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querytaskbarinfo) event customizes taskbar visuals by hiding editing indicators like resizer or connector points.

## Edit taskbars

Enable taskbar editing by setting [allowTaskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowtaskbarediting) to **true** and injecting `Edit`. Drag taskbars to adjust start and end dates, resize them to modify durations, or adjust progress grips to update completion percentages, ideal for quick timeline updates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/taskbaredit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/taskbaredit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/taskbaredit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/taskbaredit-cs2" %}

## Prevent taskbar editing for specific tasks

Prevent taskbar editing for specific tasks using the [taskbarEditing](https://ej2.syncfusion.com/react/documentation/gantt/events#taskbarediting) event by setting its `cancel` property to **true** based on task data, such as protecting milestones. Customize taskbar visuals by hiding editing indicators (e.g., resizer, connector points) using the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querytaskbarinfo) event, ensuring a tailored editing experience.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/preventtaskbaredit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/preventtaskbaredit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/preventtaskbaredit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/preventtaskbaredit-cs1" %}

## Enable taskbar drawing

The Gantt Chart control supports creating new tasks by dragging directly on the timeline. This feature is enabled via the [allowTaskbarDraw](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettingsModel#allowtaskbardraw) property in the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt#editsettings) configuration. Taskbar drawing is intended for scheduling unscheduled tasks and requires [allowUnscheduledTasks](https://ej2.syncfusion.com/angular/documentation/api/gantt#allowunscheduledtasks) to be enabled.

Dragging across the timeline schedules an unscheduled task by defining its timeline range. The resulting task duration is calculated based on the configured scheduling settings.

The following example demonstrates how to enable taskbar drawing:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/enabletaskbardraw-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/enabletaskbardraw-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/enabletaskbardraw-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/enabletaskbardraw-cs1" %}

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)