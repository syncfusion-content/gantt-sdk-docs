---
layout: post
title: Column Pinning (Frozen) in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to pin or freeze columns in Syncfusion ASP.NET Core Gantt Chart to keep important columns visible while scrolling horizontally.
keywords: asp.net core gantt column pinning, frozen columns, pinned columns, column freezing, sticky columns, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/frozen-column
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Frozen Columns with Left and Right Pinning in ASP.NET Core Gantt Chart

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Gantt Chart control provides a frozen columns feature that keeps selected columns fixed while scrolling horizontally through large datasets. This functionality ensures that critical information remains visible at all times, improving readability and user experience. By maintaining key columns in view, it simplifies navigation and makes referencing important data points easier when working with extensive project details.

To enable frozen columns, use the `frozenColumns` property in the Gantt Chart control. In the following example, the `frozenColumns` property is set to **2**, which keeps the first two columns fixed on the left while the remaining columns can be scrolled horizontally.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozenColumn/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="frozenColumn.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozenColumn/frozenColumn.cs %}
{% endhighlight %}
{% endtabs %}

![Frozen columns](../images/frozenColumn.png)

## Freeze particular columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Gantt Chart provides a feature that enables freezing specific columns, significantly enhancing data visibility and improving the user experience. The [isFrozen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_IsFrozen) property is used at the column level to freeze a specific column at any desired index on the left side, offering flexibility in managing which columns are frozen.

To freeze a particular column in the Gantt, set the `isFrozen` property of the column to **true**. The following example demonstrates how to freeze a particular column in the Gantt Chart using the `isFrozen` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/freezeColumn/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="freezeColumn.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/freezeColumn/freezeColumn.cs %}
{% endhighlight %}
{% endtabs %}

![Freeze column](../images/freezeColumn.png)

## Freeze direction

In the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Gantt, the **freeze direction** feature allows you to position frozen columns either to the left, right, or in a fixed position, while still allowing the remaining columns to be horizontally movable. To achieve this, the [column.freeze](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Freeze) property can be utilized. This property is used to specify the freeze direction for individual columns. The types of the `column.freeze` directions:

* **Left**: When the `column.freeze` property is set to **Left**, specific columns will be frozen on the left side.

* **Right**: When the `column.freeze` property is set to **Right**, certain columns will be frozen on the right side.

* **Fixed**: The fixed direction locks a column at a fixed position within the Gantt Chart columns. This ensures that the column is always visible during horizontal scroll.

In the following example, the **TaskID** column is frozen on the left side, the **resources** column is frozen on the right side and the **Progress** column is frozen on the fixed of the content table.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/freezeDirection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="freezeDirection.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/freezeDirection/freezeDirection.cs %}
{% endhighlight %}
{% endtabs %}

N> The freeze direction is not compatible when both the `isFrozen` and `frozenColumns` properties are enabled simultaneously.

![Freeze direction](../images/freeze-direction.png)

## Change default frozen line color

The frozen line borders of frozen columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Gantt Chart control can be customized by applying custom CSS styles to the respective frozen columns. This allows to change the border color of left, right, and fixed frozen columns to match your application's design and theme.

To change the default frozen line color, use the following CSS class names and apply the desired border color:

For left frozen columns: 

```css
.e-gantt .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(0, 255, 0) !important;
}
```
For right frozen columns:

```css
.e-gantt .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(0, 0, 255) !important;
}
```
For fixed frozen columns, both left and right borders need to be specified as mentioned below:

```css
.e-gantt .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(0, 255, 0) !important;
}

.e-gantt .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(0, 0, 255) !important;
}
```
The following example demonstrates how to change the default frozen line color using CSS:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozenLineColor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="frozenLineColor.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozenLineColor/frozenLineColor.cs %}
{% endhighlight %}
{% endtabs %}

![Frozen line color](../images/frozen-line-color.png)
