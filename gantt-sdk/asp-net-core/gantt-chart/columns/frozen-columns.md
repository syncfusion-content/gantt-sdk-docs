---
layout: post
title: Frozen Columns in ASP.NET Core Gantt Chart | Column Pinning | Syncfusion
description: Learn how to pin and freeze columns in Syncfusion ASP.NET Core Gantt Chart to keep critical information visible during scrolling.
keywords: asp.net core gantt frozen columns, column pinning, frozencolumns, horizontal scroll, fixed columns, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/frozen-columns
platform: gantt-sdk
control: Frozen Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Frozen Columns with Left and Right Pinning in ASP.NET Core Gantt Chart

The [ASP.NET Core Gantt Chart](https://www.syncfusion.com/aspnet-core-ui-controls/gantt-chart) component provides a frozen columns feature that keeps selected columns fixed while scrolling horizontally through large datasets. This functionality ensures that critical information remains visible at all times, improving readability and user experience. By maintaining key columns in view, it simplifies navigation and makes referencing important data points easier when working with extensive project details.

To enable frozen columns, use the [frozenColumns](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Frozencolumns) property in the Gantt Chart component.

In the following example, the `frozenColumns` property is set to **2**, which keeps the first two columns fixed on the left while the remaining columns can be scrolled horizontally.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Frozen Columns with Left and Right Pinning in ASP.NET Core Gantt Chart](images/frozen-columns-with-left-and-right-pinning-in-asp-net-core-gantt-chart-placeholder.png)

## Freeze particular columns

The ASP.NET Core Gantt provides a feature that enables freezing specific columns, significantly enhancing data visibility and improving the user experience. The `isFrozen` property is used at the column level to freeze a specific column at any desired index on the left side, offering flexibility in managing which columns are frozen.

To freeze a particular column in the Gantt, set the [isFrozen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Isfrozen) property of the column to **true**.

The following example demonstrates how to freeze a particular column in the Gantt using the `isFrozen` property.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs2/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs2/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Freeze particular columns](images/freeze-particular-columns-placeholder.png)

## Freeze direction

In the ASP.NET Core Gantt, the **freeze direction** feature allows you to position frozen columns to the left, right, or in a fixed position, while still allowing the remaining columns to be horizontally scrollable. 

To achieve this, the [column.freeze](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Freeze) property can be utilized. This property is used to specify the freeze direction for individual columns.

The types of the `column.freeze` directions:

* **Left**: When the `column.freeze` property is set to **Left**, specific columns will be frozen on the left side.

* **Right**: When the `column.freeze` property is set to **Right**, certain columns will be frozen on the right side.

* **Fixed**: The Fixed direction locks a column at a fixed position within the Gantt columns. This ensures that the column is always visible during horizontal scroll.

In the following example, the **TaskId** column is frozen on the left side, the **resources** column is frozen on the right side and the **Progress** column is frozen in a fixed position within the content table.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs3/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs3/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Freeze direction](images/freeze-direction-placeholder.png)

## Change default frozen line color

The frozen line borders of frozen columns in the ASP.NET Core Gantt Chart component can be customized by applying custom CSS styles to the respective frozen columns. This allows you to change the border color of left, right, and fixed frozen columns to match your application's design and theme.

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
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs4/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/frozencolumns-cs4/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Change default frozen line color](images/change-default-frozen-line-color-placeholder.png)

## Limitations

* **Freeze Direction Incompatibility**: The Freeze Direction feature (using the [column.freeze](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Freeze) property) is not compatible with the [isFrozen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Isfrozen) and [frozenColumns](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Frozencolumns) properties. When using Freeze Direction, do not use the isFrozen property or frozenColumns settings simultaneously, as they may cause conflicting behavior in how columns are positioned and frozen.