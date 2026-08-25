---
layout: post
title: Excel-like Filter in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to implement Excel-like filtering in Syncfusion ASP.NET Core Gantt Chart with sorting and advanced filtering options.
keywords: asp.net core gantt excel filter, excel-like filter, advanced filter, filter interface, excel filtering, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/filtering/excel-like-filter
platform: gantt-sdk
control: Filtering - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Using Excel-Like Filtering Interface in ASP.NET Core Gantt Chart

You can enable Excel like filter by defining [`filterSettings.type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_FilterSettings) as `Excel`. The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/excelfilter/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Enablefilter.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/excelfilter/enablefilter.cs %}
{% endhighlight %}
{% endtabs %}
