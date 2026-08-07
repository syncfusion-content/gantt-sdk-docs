---
layout: post
title: Immutable Mode in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to use immutable mode in Syncfusion ASP.NET MVC Gantt Chart for improved performance when handling large data sets and frequent updates.
keywords: asp.net mvc gantt immutable, immutable mode, performance optimization, data handling, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/immutable
platform: gantt-sdk
control: Immutable Mode - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Performance Optimization with Immutable Mode in ASP.NET MVC Gantt Chart

The immutable mode optimizes the Gantt re-rendering performance by using the object reference and [deep compare](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) concept. When performing the Gantt actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [`enableImmutableMode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_EnableImmutableMode) property as **true**.

> This feature uses the primary key value for data comparison. So, you need to provide the `isPrimaryKey` column.

The following code example shows how to display the immutable mode in the Gantt control.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/immutable/immutable/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="immutable.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/immutable/immutable/immutable.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/immutable/immutable/razor %}
{% endhighlight %}
{% highlight c# tabtitle="immutable.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/immutable/immutable/immutable.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Limitations

The following features are not supported in the immutable mode:

- Column reorder
- Virtualization
