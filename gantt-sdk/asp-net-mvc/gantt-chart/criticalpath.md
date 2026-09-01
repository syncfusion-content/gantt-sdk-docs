---
layout: post
title: Critical Path in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to identify and manage the critical path in project schedules using Syncfusion ASP.NET MVC Gantt Chart, ensuring timely project delivery.
keywords: asp.net mvc gantt critical path, project schedule, task delays, project end date, critical tasks, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/criticalpath
platform: gantt-sdk
control: Critical Path - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Critical Path Identification in ASP.NET MVC Gantt Chart

The critical path in a project is indicated by a single task or a series of tasks. If a task in critical path is delayed, the entire project will be delayed. A task is considered to be critical if any delay to this task would affect the project end date.

The critical path can be enabled in Gantt by using the built-in toolbar button or `enableCriticalPath` to true.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/criticalpath/default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Criticalpath.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/criticalpath/default/criticalpath.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](./images/criticalpath.PNG)

## Customize taskbar in critical path

The taskbar in critical path can be customized by using `queryTaskbarInfo` event and `isCritical` property of row `data` in the event argument.

The following code example shows how to customize the critical path taskbar in the Gantt control:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/criticalpath/custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Customcriticalpath.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/criticalpath/custom/customcriticalpath.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](./images/customCriticalPath.PNG)
