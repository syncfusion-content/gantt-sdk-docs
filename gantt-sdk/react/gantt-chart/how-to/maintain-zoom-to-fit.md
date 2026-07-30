---
layout: post
title: Maintain Zoom-to-fit in React Gantt Chart Component | Syncfusion
description: Learn how to maintain zoom-to-fit functionality in the Syncfusion React Gantt Chart component during editing and dynamic data source changes.
platform: gantt-sdk
control: Zoom to fit
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Maintain Zoom-to-fit in React Gantt Chart Component

The zoom-to-fit functionality in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component ensures the entire project timeline fits within the viewport, providing an optimal view of all tasks. When using the `zoomToFit` toolbar item, editing actions (e.g., cell edit, dialog edit, taskbar edit) or dynamic `dataSource` changes can cause the timeline to refresh, potentially losing the zoomed view. By leveraging the [fitToProject](https://ej2.syncfusion.com/react/documentation/api/gantt#fittoproject) method, you can maintain the zoom-to-fit state seamlessly. For editing actions, call `fitToProject` in the [actionComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#actioncomplete) and [taskbarEdited](https://ej2.syncfusion.com/react/documentation/gantt/events#taskbaredited) events to reapply zoom-to-fit after modifications like updating task durations or dependencies. For dynamic `dataSource` changes, such as adding or removing tasks, invoke `fitToProject` in the [dataBound](https://ej2.syncfusion.com/react/documentation/gantt/events#databound) event to adjust the timeline automatically. Ensure `ToolbarService` is injected and `toolbar` includes `zoomToFit` to enable this feature, with valid [timelineSettings](https://ej2.syncfusion.com/react/documentation/api/gantt#timelinesettings) configured for accurate rendering. This approach maintains a consistent project overview, integrating with task scheduling, dependencies, and critical path for efficient project management.

The following example demonstrates how to use `fitToProject` after performing edit actions:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofit-cs1" %}

The following example demonstrates how to use `fitToProject` after dynamically changing the data source:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofitdatasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofitdatasource-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofitdatasource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/how-to-maintainzoomtofitdatasource-cs1" %}

## See also
- [How to configure timeline settings?](https://ej2.syncfusion.com/react/documentation/gantt/timeline)
- [How to configure toolbar?](https://ej2.syncfusion.com/react/documentation/gantt/toolbar)
- [How to manage task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/editing-tasks)