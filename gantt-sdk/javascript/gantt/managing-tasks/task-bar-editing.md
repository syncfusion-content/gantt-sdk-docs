---
layout: post
title: Task bar editing in JavaScript Gantt Chart Control | Syncfusion
description: Learn how to edit tasks via taskbar interactions in the Syncfusion JavaScript Gantt Chart control for intuitive project timeline adjustments.
platform: gantt-sdk
control: Task bar editing
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Bar Editing in JavaScript Gantt Chart Control

Task bar editing in the JavaScript Gantt Chart control enables intuitive project timeline adjustments by allowing to drag or resize taskbars to modify task details, such as start dates, durations, or progress, using mouse or touch interactions. Enable this feature by setting the [allowTaskbarEditing](../../api/gantt/editSettings#allowtaskbarediting) property to **true** and injecting `Edit`, ensuring task data aligns with valid [taskFields](../../api/gantt#taskfields) mappings (e.g., id, startDate, duration). Taskbars can be dragged to shift dates, resize them to adjust durations, or move progress grips to update completion percentages. The [taskbarEditing](../../gantt/events#taskbarediting) event allows preventing edits for specific tasks, while the [queryTaskbarInfo](../../gantt/events#querytaskbarinfo) event customizes taskbar visuals by hiding editing indicators like resizers or connector points.

## Edit taskbars

Enable taskbar editing by setting [allowTaskbarEditing](../../api/gantt/editSettings#allowtaskbarediting) to **true** and injecting `Edit`. Drag taskbars to adjust start and end dates, resize them to modify durations, or adjust progress grips to update completion percentages, ideal for quick timeline updates.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/getting-started-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/getting-started-cs13" %}
{% endif %}

## Prevent taskbar editing for specific tasks

Prevent taskbar editing for specific tasks using the [taskbarEditing](../../gantt/events#taskbarediting) event by setting its `cancel` property to **true** based on task data, such as protecting milestones. Customize taskbar visuals by hiding editing indicators (e.g., resizers, connector points) using the [queryTaskbarInfo](../../gantt/events#querytaskbarinfo) event, ensuring a tailored editing experience.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/editing-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/editing-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/editing-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/editing-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/editing-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/editing-cs5" %}
{% endif %}

## See also

- [How to configure task editing?](../../gantt/editing)
- [How to manage task dependencies?](../../gantt/task-dependency)
- [How to configure critical path?](../../gantt/critical-path)
