---
layout: post
title: Event Markers in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to add and customize event markers in Syncfusion ASP.NET Core Gantt Chart to display important dates and milestones on your timeline.
keywords: asp.net core gantt event markers, timeline markers, milestone markers, custom markers, timeline events, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/event-markers
platform: gantt-sdk
control: Event Markers - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Project-Wide Timeline Markers in ASP.NET Core Gantt Chart

The event markers in the Gantt control is used to highlight the important events in a project. Event markers can be initialized by using the [`EventMarkers`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_EventMarkers) property, and you can define date and label for the event markers using the [`Day`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttEventMarker.html#Syncfusion_EJ2_Gantt_GanttEventMarker_Day) and [`Label`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttEventMarker.html#Syncfusion_EJ2_Gantt_GanttEventMarker_Label) properties. You can also customize it using the [`CssClass`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttEventMarker.html#Syncfusion_EJ2_Gantt_GanttEventMarker_CssClass) properties. The following code example shows how to add event markers in the Gantt control.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/eventmarkers/eventmarkers/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Eventmarkers.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/eventmarkers/eventmarkers/eventmarkers.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/eventmarkers/eventmarkers/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Eventmarkers.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/eventmarkers/eventmarkers/eventmarkers.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



![Alt text](images/eventmarkers.png)