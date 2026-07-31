---
layout: post
title: Task bar editing in React Gantt Chart Component | Syncfusion
description: Learn how to edit tasks via taskbar interactions in the Syncfusion React Gantt Chart component for intuitive project timeline adjustments.
platform: gantt-sdk
control: Task bar editing
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Bar Editing in React Gantt Chart Component

Task bar editing in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables intuitive project timeline adjustments by allowing to drag or resize taskbars to modify task details, such as start dates, durations, or progress, using mouse or touch interactions. Enable this feature by setting the [allowTaskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowtaskbarediting) property to **true** and injecting `Edit`, ensuring task data aligns with valid [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings (e.g., id, startDate, duration). Taskbars can be dragged to shift dates, resize them to adjust durations, or move progress grips to update completion percentages. The [taskbarEditing](https://ej2.syncfusion.com/react/documentation/gantt/events#taskbarediting) event allows preventing edits for specific tasks, while the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querytaskbarinfo) event customizes taskbar visuals by hiding editing indicators like resizers or connector points.

## Edit taskbars

Enable taskbar editing by setting [allowTaskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowtaskbarediting) to **true** and injecting `Edit`. Drag taskbars to adjust start and end dates, resize them to modify durations, or adjust progress grips to update completion percentages, ideal for quick timeline updates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/taskbaredit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/taskbaredit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/taskbaredit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/taskbaredit-cs2" %}

## Prevent taskbar editing for specific tasks

Prevent taskbar editing for specific tasks using the [taskbarEditing](https://ej2.syncfusion.com/react/documentation/gantt/events#taskbarediting) event by setting its `cancel` property to **true** based on task data, such as protecting milestones. Customize taskbar visuals by hiding editing indicators (e.g., resizers, connector points) using the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querytaskbarinfo) event, ensuring a tailored editing experience.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/preventtaskbaredit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/preventtaskbaredit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/preventtaskbaredit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/preventtaskbaredit-cs1" %}

## See also

- [How to configure task editing?](https://ej2.syncfusion.com/react/documentation/gantt/editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)
