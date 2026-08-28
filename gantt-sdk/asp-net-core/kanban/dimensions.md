---
layout: post
title: Dimensions and Sizing in ASP.NET Core Kanban | Syncfusion
description: Learn how to configure dimensions, heights, and responsive sizing in Syncfusion ASP.NET Core Kanban components.
keywords: asp-net-core kanban dimensions, syncfusion kanban, sizing, responsive
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/dimensions
platform: gantt-sdk
control: Dimensions - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Dimensions, Height, and Width Configuration in ASP.NET Core Kanban

The Kanban dimensions refers to both height and width of the entire layout and it accepts three types of values.

* Auto
* Pixel
* Percentage

## Auto height and width

When height and width of the Kanban are set to `auto`, it will try as hard as possible to keep an element the same width as its parent container. In other words, the parent container that holds Kanban, its width or height will be the sum of its children. By default, Kanban is assigned with `auto` values for both the height and width properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/dimensions/auto/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/dimensions/auto/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/auto.PNG)

## Height and width in pixel

The Kanban height and width will be rendered exactly as per the given pixel values. It accepts both string and number values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/dimensions/pixel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/dimensions/pixel/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/pixel.PNG)

## Height and width in percentage

When height and width of the Kanban are given in percentage, it will make the Kanban as wide as the parent container.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/dimensions/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/dimensions/percentage/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/percentage.PNG)