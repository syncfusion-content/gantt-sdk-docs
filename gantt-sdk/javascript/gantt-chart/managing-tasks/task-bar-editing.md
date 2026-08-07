---
layout: post
title: Taskbar Editing in JavaScript Gantt Chart | Syncfusion
description: Learn to edit tasks via taskbar interactions in Syncfusion JavaScript Gantt Chart for intuitive and interactive project timeline adjustments and management.
keywords: javascript gantt taskbar editing, drag taskbar, resize taskbar, edit taskbar, task drag, synchronfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/managing-tasks/task-bar-editing
platform: gantt-sdk
control: Taskbar Editing - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Editing Tasks Using Taskbar Drag and Resize in JavaScript Gantt Chart

Task bar editing in the JavaScript Gantt Chart control enables intuitive project timeline adjustments by allowing to drag or resize taskbars to modify task details, such as start dates, durations, or progress, using mouse or touch interactions. Enable this feature by setting the [allowTaskbarEditing](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings#allowtaskbarediting) property to **true** and injecting `Edit`, ensuring task data aligns with valid [taskFields](https://ej2.syncfusion.com/javascript/documentation/api/gantt#taskfields) mappings (e.g., id, startDate, duration). Taskbars can be dragged to shift dates, resize them to adjust durations, or move progress grips to update completion percentages. The [taskbarEditing](https://ej2.syncfusion.com/javascript/documentation/gantt/events#taskbarediting) event allows preventing edits for specific tasks, while the [queryTaskbarInfo](https://ej2.syncfusion.com/javascript/documentation/gantt/events#querytaskbarinfo) event customizes taskbar visuals by hiding editing indicators like resizer or connector points.

## Edit taskbars

Enable taskbar editing by setting [allowTaskbarEditing](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings#allowtaskbarediting) to **true** and injecting `Edit`. Drag taskbars to adjust start and end dates, resize them to modify durations, or adjust progress grips to update completion percentages, ideal for quick timeline updates.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs13" %}
{% endif %}

## Prevent taskbar editing for specific tasks

Prevent taskbar editing for specific tasks using the [taskbarEditing](https://ej2.syncfusion.com/javascript/documentation/gantt/events#taskbarediting) event by setting its `cancel` property to **true** based on task data, such as protecting milestones. Customize taskbar visuals by hiding editing indicators (e.g., resizer, connector points) using the [queryTaskbarInfo](https://ej2.syncfusion.com/javascript/documentation/gantt/events#querytaskbarinfo) event, ensuring a tailored editing experience.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/editing-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/editing-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/editing-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/editing-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/editing-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/editing-cs5" %}
{% endif %}

## See also

- [How to configure task editing?](https://ej2.syncfusion.com/javascript/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/javascript/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/javascript/documentation/gantt/critical-path)
