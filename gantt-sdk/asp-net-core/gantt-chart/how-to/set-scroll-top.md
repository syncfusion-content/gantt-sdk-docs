---
layout: post
title: Set Scroll Position in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to set the vertical scroll position programmatically in Syncfusion ASP.NET Core Gantt Chart using the scroll top method.
keywords: asp.net core gantt scroll position, set scroll top, scroll bar position, vertical scrolling, gantt scroll, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/how-to/set-scroll-top
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Controlling Vertical Scroll Position in ASP.NET Core Gantt Chart

In the Gantt control, you can set the vertical scroller position dynamically by clicking the custom button using the `setScrollTop` method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/setScrollTop/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="SetScrollTop.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/setScrollTop/setScrollTop.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/setScrollTop/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SetScrollTop.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/setScrollTop/setScrollTop.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



![Alt text](../images/setScrollTop.png)