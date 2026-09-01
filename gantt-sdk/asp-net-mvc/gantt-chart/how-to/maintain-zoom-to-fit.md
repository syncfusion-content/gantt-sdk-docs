---
layout: post
title: Maintain Zoom to Fit in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to maintain zoom to fit functionality in Syncfusion ASP.NET MVC Gantt Chart to automatically scale timeline based on project duration.
keywords: asp.net mvc gantt zoom to fit, zoom functionality, auto zoom, timeline scaling, gantt zoom, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/maintain-zoom-to-fit
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Maintaining Zoom-to-Fit Behavior in ASP.NET MVC Gantt Chart

In the Gantt control, While performing edit actions or dynamically change dataSource, the timeline gets refreshed. When zoomToFit toolbar item is clicked and perform editing actions or dynamically change dataSource, the timeline gets refreshed. So that, the timeline will not fit to the project any more.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions(cell edit,dialog edit,taskbar edit) by using `fitToProject` method in `actionComplete` and `taskbarEdited` event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/maintainzoomtofit/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Maintainzoomtofit.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/maintainzoomtofit/maintainzoomtofit.cs %}
{% endhighlight %}
{% endtabs %}

## Maintain zoomToFit after change dataSource dynamically

We can maintain `zoomToFit` after change dataSource dynamically, by calling `fitToProject` method in dataBound event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/maintainzoomtofitdatasource/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Maintainzoomtofitdatasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/maintainzoomtofitdatasource/maintainzoomtofitdatasource.cs %}
{% endhighlight %}
{% endtabs %}
