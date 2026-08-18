---
layout: post
title: Responsive Columns in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to create responsive columns in Syncfusion ASP.NET Core Gantt Chart that adapt to different screen sizes for optimal viewing experience.
keywords: asp.net core gantt responsive columns, responsive design, mobile columns, column responsiveness, adaptive layout, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/responsive-columns
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Responsive Columns in ASP.NET Core Gantt Chart

You can toggle the column visibility based on media queries, which are defined in the [`HideAtMedia`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_HideAtMedia). The [`HideAtMedia`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_HideAtMedia) accepts valid [Media Queries](http://cssmediaqueries.com/what-are-css-media-queries.html).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/hideAtMedia/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HideAtMedia.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/hideAtMedia/hideAtMedia.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/hideAtMedia/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HideAtMedia.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/hideAtMedia/hideAtMedia.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
