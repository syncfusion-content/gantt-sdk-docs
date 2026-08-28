---
layout: post
title: Loading Animation in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to configure and customize loading animations in Syncfusion ASP.NET MVC Gantt Chart to provide visual feedback during data loading operations.
keywords: asp.net mvc gantt loading animation, spinner animation, loading indicator, data loading feedback, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/loading-animation
platform: gantt-sdk
control: Loading Animation - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Loading Indicators with Spinner and Shimmer in ASP.NET MVC Gantt Chart

The loading indicator is used to display a visual indicator while the Gantt is fetching data or performing certain actions, such as sorting or filtering. The gantt supports two indicator types, achieved by setting the [`loadingIndicator.indicatorType`](../api/gantt#loadingindicator) property to Shimmer or Spinner. The default value of the indicator type is "Spinner."

In the following sample, the Shimmer indicator is displayed while the gantt is scrolled when using the virtual data.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/loading-animation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Loading-animation.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/loading-animation/loading-animation.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/loading-animation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Loading-animation.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/loading-animation/loading-animation.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
