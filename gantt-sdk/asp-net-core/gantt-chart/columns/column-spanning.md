---
layout: post
title: Column Spanning in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to implement column spanning in Syncfusion ASP.NET Core Gantt Chart to merge multiple columns and create header groups.
keywords: asp.net core gantt column spanning, column merge, header grouping, spanning columns, merged columns, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/column-spanning
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Column Spanning with Cell Merge Support in ASP.NET Core Gantt Chart

The gantt has option to span the adjacent cells. You need to define the `colSpan` attribute to span cells in the [`QueryCellInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_QueryCellInfo) event.

In the following demo, **Work 1** cells have been spanned.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/colSpan/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ColSpan.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/colSpan/colSpan.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/colSpan/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ColSpan.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/colSpan/colSpan.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



![Alt text](images/colspan.png)