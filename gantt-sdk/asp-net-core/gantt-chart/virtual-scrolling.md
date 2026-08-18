---
layout: post
title: Virtual Scroll in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to enable virtual scrolling in Syncfusion ASP.NET Core Gantt Chart to efficiently handle large datasets and improve performance.
keywords: asp.net core gantt virtual scroll, virtual scrolling, large datasets, performance optimization, scroll performance, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/virtual-scrolling
platform: gantt-sdk
control: Virtual Scroll - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Implementing Virtual Scrolling in ASP.NET Core Gantt Chart

Virtual Scroll support in Gantt allows you to load large amount of data without performance degradation. To enable Virtual Scrolling, you need to inject `VirtualScroll` module in Gantt.

## Row virtualization

Row virtualization allows you to load and render a large number of tasks in Gantt with effective performance. In this mode, all tasks are fetched initially from the datasource and rendered in the DOM within a compact viewport area.

The number of records displayed in the Gantt is determined by the height.

This mode can be enable by setting the `EnableVirtualization` property to `true`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Virtual-scroll.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll/virtual-scroll.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Virtual-scroll.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll/virtual-scroll.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



![Alt text](images/virtual-scroll.png)

## Timeline virtualization

Timeline virtualization allows you to load a data source having large timespan with high performance. Initially, it renders the timeline with thrice the width of the gantt element, while other timeline cells render on-demand during horizontal scrolling.

This mode can be enable by setting the [EnableTimelineVirtualization](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_EnableTimelineVirtualization) property to `true`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Timeline-Virtual-scroll.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll-cs2/virtual-scroll.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll-cs2/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Timeline-Virtual-scroll.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/virtual-scroll-cs2/virtual-scroll.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Limitations for virtual scroll

* Due to the element height limitation in browsers, the maximum number of records loaded is limited by the browser capacity.
* Cell-based selection is not supported when virtualization is enabled.
* The number of records rendered will be determined by the `Height` property.
* It is necessary to mention the height of the Gantt in pixels when enabling Virtual Scrolling.