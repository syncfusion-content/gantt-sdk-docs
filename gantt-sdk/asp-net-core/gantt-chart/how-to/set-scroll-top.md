---
layout: post
title: Set Scroll Top in ASP.NET Core Gantt Component| Syncfusion
description: Learn here all about Set Scroll Top in Syncfusion ASP.NET Core Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Set Scroll Top
publishingplatform: gantt-sdk
documentation: ug
---


# Set the vertical scroll position

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