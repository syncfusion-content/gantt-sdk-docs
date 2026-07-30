---
layout: post
title: Maintain Zoom-to-fit in TypeScript Gantt Chart | Syncfusion
description: Learn how to maintain zoom-to-fit functionality in the Syncfusion TypeScript Gantt Chart control during editing and dynamic data source changes.
platform: gantt-sdk
control: Zoom to fit
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Maintain Zoom-to-fit in TypeScript Gantt Chart Control

The zoom-to-fit functionality in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control ensures the entire project timeline fits within the viewport, providing an optimal view of all tasks. When using the `zoomToFit` toolbar item, editing actions (e.g., cell edit, dialog edit, taskbar edit) or dynamic `dataSource` changes can cause the timeline to refresh, potentially losing the zoomed view. By leveraging the [fitToProject](../../api/gantt#fittoproject) method, you can maintain the zoom-to-fit state seamlessly. For editing actions, call `fitToProject` in the [actionComplete](../../gantt/events#actioncomplete) and [taskbarEdited](../../gantt/events#taskbaredited) events to reapply zoom-to-fit after modifications like updating task durations or dependencies. For dynamic `dataSource` changes, such as adding or removing tasks, invoke `fitToProject` in the [dataBound](../../gantt/events#databound) event to adjust the timeline automatically. Ensure `Toolbar` is injected and `toolbar` includes `zoomToFit` to enable this feature, with valid [timelineSettings](../../api/gantt#timelinesettings) configured for accurate rendering. This approach maintains a consistent project overview, integrating with task scheduling, dependencies, and critical path for efficient project management.

The following example demonstrates how to use `fitToProject` after performing edit actions:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofit-cs1" %}
{% endif %}

The following example demonstrates how to use `fitToProject` after dynamically changing the data source:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofitdatasource-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofitdatasource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofitdatasource-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofitdatasource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofitdatasource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/how-to-maintainzoomtofitdatasource-cs1" %}
{% endif %}

## See also
- [How to configure timeline settings?](../../gantt/timeline)
- [How to configure toolbar?](../../gantt/toolbar)
- [How to manage task editing?](../../gantt/managing-tasks/editing-tasks)