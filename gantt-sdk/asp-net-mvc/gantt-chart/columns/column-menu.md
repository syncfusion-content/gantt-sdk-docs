---
layout: post
title: Column Menu in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to use the column menu in Syncfusion ASP.NET MVC Gantt Chart to manage, filter, and configure column visibility and display.
keywords: asp.net mvc gantt column menu, column visibility, column configuration, show hide columns, column menu, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/columns/column-menu
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Menu with Sort and Filter in ASP.NET MVC Gantt Chart

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click the Multiple icon of the column. To enable the column menu, you should set the [`ShowColumnMenu`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ShowColumnMenu) property to true. The default items are displayed in the following table:

| Item             | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| `SortAscending`  | Sort the current column in ascending order.                            |
| `SortDescending` | Sort the current column in descending order.                           |
| `AutoFit`        | Auto fit the current column.                                           |
| `AutoFitAll`     | Auto fit all columns.                                                  |
| `Filter`         | Show the filter option as given in the `filterSettings.type` property. |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/columnMenu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ColumnMenu.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/columnMenu/columnMenu.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](../images/columnMenu.png)

N> You can disable the column menu for a particular column by setting the `Columns.ShowColumnMenu` to `false`.

## Column menu Events

During the resizing action, the gantt component triggers the below two events.

1. The [`columnMenuOpen`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ColumnMenuOpen) event triggers before the column menu opens.
2. The [`columnMenuClick`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ColumnMenuClick) event triggers when the user clicks the column menu of the gantt.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/colMenuEvents/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ColMenuEvents.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/colMenuEvents/colMenuEvents.cs %}
{% endhighlight %}
{% endtabs %}

## Custom Column Menu Item

Custom column menu items can be added by defining the `columnMenuItems`. Actions for this customized items can be defined in the [`columnMenuClick`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ColumnMenuClick) event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/colMenuItem/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ColMenuItem.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/colMenuItem/colMenuItem.cs %}
{% endhighlight %}
{% endtabs %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the `columnMenuOpenEventArgs.hide` as true in the [`columnMenuOpen`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ColumnMenuOpen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **Task Name** column.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/colMenuAction/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ColMenuAction.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/colMenuAction/colMenuAction.cs %}
{% endhighlight %}
{% endtabs %}
