---
layout: post
title: Checkbox Column in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to add and use checkbox columns in Syncfusion ASP.NET Core Gantt Chart for multi-select task selection and bulk operations.
keywords: asp.net core gantt checkbox column, checkbox selection, multi select, select tasks, bulk selection, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/check-box-column
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Checkbox Columns in ASP.NET Core Gantt Chart

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_DisplayAsCheckBox) property as **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/checkbox/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Checkbox.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/checkbox/checkbox.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](../images/checkbox.png)
