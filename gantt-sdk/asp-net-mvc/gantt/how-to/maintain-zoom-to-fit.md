---
layout: post
title: Maintain Zoom To Fit in ASP.NET MVC Gantt Component
description: Learn here all about Maintain Zoom To Fit in Syncfusion ASP.NET MVC Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Maintain Zoom To Fit
publishingplatform: gantt-sdk
documentation: ug
---

# Maintain zoomToFit

In the Gantt control, While performing edit actions or dynamically change dataSource, the timeline gets refreshed. When zoomToFit toolbar item is clicked and perform editing actions or dynamically change dataSource, the timeline gets refreshed. So that, the timeline will not fit to the project any more.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions(cell edit,dialog edit,taskbar edit) by using `fitToProject` method in `actionComplete` and `taskbarEdited` event.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofit/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Maintainzoomtofit.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofit/maintainzoomtofit.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofit/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Maintainzoomtofit.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofit/maintainzoomtofit.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Maintain zoomToFit after change dataSource dynamically

We can maintain `zoomToFit` after change dataSource dynamically, by calling `fitToProject` method in dataBound event.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofitdatasource/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Maintainzoomtofitdatasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofitdatasource/maintainzoomtofitdatasource.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofitdatasource/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Maintainzoomtofitdatasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt/how-to/maintainzoomtofitdatasource/maintainzoomtofitdatasource.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
