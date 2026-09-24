---
layout: post
title: Dimensions and Sizing in ASP.NET MVC Kanban | Syncfusion
description: Learn how to configure dimensions, heights, and responsive sizing in Syncfusion ASP.NET MVC Kanban components.
keywords: asp-net-mvc kanban dimensions, syncfusion kanban, sizing, responsive
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/dimensions
platform: gantt-sdk
control: Dimensions - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Dimensions, Height, and Width Configuration in ASP.NET MVC Kanban

The Kanban dimensions refers to both height and width of the entire layout and it accepts three types of values.

* Auto
* Pixel
* Percentage

## Auto height and width

When height and width of the Kanban are set to `auto`, it will try as hard as possible to keep an element the same width as its parent container. In other words, the parent container that holds Kanban, its width or height will be the sum of its children. By default, Kanban is assigned with `auto` values for both the height and width properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/auto/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/auto/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/auto/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/auto.PNG)

## Height and width in pixel

The Kanban height and width will be rendered exactly as per the given pixel values. It accepts both string and number values.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/pixel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/pixel/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/pixel/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/pixel.PNG)

## Height and width in percentage

When height and width of the Kanban are given in percentage, it will make the Kanban as wide as the parent container.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/percentage/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/dimensions/percentage/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/percentage.PNG)