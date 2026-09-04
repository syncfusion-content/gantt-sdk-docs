---
layout: post
title: Scrolling in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to implement and customize scrolling in Syncfusion ASP.NET MVC Gantt Chart including horizontal and vertical scrolling for large projects.
keywords: asp.net mvc gantt scrolling, horizontal scroll, vertical scroll, page scrolling, virtual scroll, large datasets, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/scrolling
platform: gantt-sdk
control: Scrolling - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Scrolling behavior in ASP.NET MVC Gantt Chart

The scrollbar is displayed in the gantt when content exceeds the element [`width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Width) or [`height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Height). The vertical and horizontal scrollbars appear based on the following criteria:

- The vertical scrollbar appears when the total height of rows present in the gantt exceeds its element height.
- The horizontal scrollbar appears when the sum of columns width exceeds the grid pane size.
- The [`height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Height) and [`width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Width) set the gantt height and width, respectively.

N> The default value for [`height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Height) and [`width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Width) is `auto`.

## Set width and height

To specify the [`width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Width) and [`height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Height) of the scroller in pixels, set the pixel value to a number.

The following code example shows how to set height and width in the Gantt control:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/scrolling/width-height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Width-height.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/scrolling/width-height/width-height.cs %}
{% endhighlight %}
{% endtabs %}

## Responsive with the parent container

Specify the [`width`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Width) and [`height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Height) as `100%` to make the gantt element fill its parent container.
Setting the [`height`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Height) to `100%` requires the gantt parent element to have explicit height.

The following code example shows how to set height and width in the Gantt control:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/scrolling/responsive/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Responsive.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/scrolling/responsive/responsive.cs %}
{% endhighlight %}
{% endtabs %}

## Scroll To Date method

In the Gantt control, When We use the [`scrollToDate`](https://ej2.syncfusion.com/documentation/api/gantt/index-default#scrolltodate) method, it will scroll the timeline horizontally to the date that we specified in the method's argument.

The following code examples show how the scroll To Date method works in Gantt:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/scrollToDate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="scrollToDate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/scrollToDate/scrollToDate.cs %}
{% endhighlight %}
{% endtabs %}

## Set the vertical scroll position

In the Gantt control, you can set the vertical scroller position dynamically by clicking the custom button using the `setScrollTop` method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/setScrollTop/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SetScrollTop.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/setScrollTop/setScrollTop.cs %}
{% endhighlight %}
{% endtabs %}
