---
layout: post
title: Reorder Columns in ASP.NET Core Gantt Chart | Drag & Drop | Syncfusion
description: Learn how to reorder columns in Syncfusion ASP.NET Core Gantt Chart with drag-and-drop or programmatically, with options to restrict reordering for specific columns.
keywords: asp.net core gantt reorder columns, allowreordering, drag and drop, column reorder, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/column-reorder
platform: gantt-sdk
control: Column Reorder - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Column Reordering with Drag and Drop Support in ASP.NET Core Gantt Chart

The [ASP.NET Core Gantt Chart](https://www.syncfusion.com/aspnet-core-ui-controls/gantt-chart) component supports column reordering by dragging a column header to a new position. 

To enable column reordering, set the [allowReordering](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Allowreordering) property to **true** in the Gantt configuration.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Column Reordering with Drag and Drop Support](images/column-reordering-with-drag-and-drop-support-in-asp-net-core-gantt-chart-placeholder.png)

> * You can modify the appearance of column headers during drag-and-drop using the [columnDrag](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Columndrag) and [columnDrop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Columndrop) events.
> * After columns are reordered, the visual column index changes but field names remain the same. If your logic references column indices (e.g., `gantt.treeGrid.columns[0]`), update those references after reordering.
> * You can disable the reordering of a particular column by setting the `allowReordering` property to **false**.

## Disable column reordering for specific columns

In Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Gantt Chart component, when [allowReordering](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Allowreordering) is enabled globally, you can restrict reordering for individual columns by setting their [allowReordering](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Allowreordering) property to **false**.

> Column-level `allowReordering="false"` only works when global `allowReordering` is **true**; if global reordering is disabled, all columns cannot be reordered regardless of column-level settings.

The following example demonstrates how reordering is restricted for the **TaskName** column.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs2/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs2/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Disable column reordering for specific columns](images/disable-column-reordering-for-specific-columns-placeholder.png)

## Reorder columns programmatically

You can programmatically reorder columns in ASP.NET Core Gantt Chart component using available methods based on field names, index, or target index.  

> To perform programmatic column reordering, the global [allowReordering](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Allowreordering) property must be enabled and the target column's [allowReordering](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Allowreordering) property must not be set to **false**.

### Reorder columns using field names

**Use this method when:** You have the field names of columns you want to reorder and prefer a readable, semantic approach.

You can reorder columns in the Gantt Chart component using the [reorderColumns](https://ej2.syncfusion.com/javascript/documentation/api/gantt/index-default#reordercolumns) method on the gantt instance. This method reorders one or more columns by specifying the source column(s) and the target column using their field names:  

- **fromFName**: The field name of the column to move.  
- **toFName**: The field name of the target column position.

The following demonstrates how to reorder columns by placing **TaskName** to position before **TaskId**, or moving **TaskName**, **StartDate**, **Duration** to position before **TaskId**.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs3/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs3/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Reorder columns using field names](images/reorder-columns-using-field-names-placeholder.png)

### Reorder columns using column index

**Use this method when:** You need to swap or move columns by their numeric position in the grid, or you're implementing UI controls that work with column positions.

You can reorder columns in the Gantt Chart component using the [reorderColumnByIndex](https://ej2.syncfusion.com/javascript/documentation/api/grid#reordercolumnbyindex) method on `gantt.treeGrid` object. This method repositions a column based on its current index and takes two parameters:

- **fromIndex**: Index of the column to move (zero-based).  
- **toIndex**: Target index where the column should be placed (zero-based).

The following demonstrates how to reorder the column at index **1** to position **3**.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs5/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs5/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Reorder columns using column index](images/reorder-columns-using-column-index-placeholder.png)

### Reorder columns using target index

**Use this method when:** You want to move multiple columns to a specific position using their field names, combining the semantic clarity of field names with positional control.

You can reorder single or multiple columns in the Gantt Chart component using the [reorderColumnByTargetIndex](https://ej2.syncfusion.com/javascript/documentation/api/grid#reordercolumnbytargetindex) method on `gantt.treeGrid` object. This method reorders columns based on their field names and the target index. It takes two parameters:  

- **fieldName**: The field name (or array of field names for multiple columns) of the column(s) to move. 
- **toIndex**: The zero-based index where the column(s) should be placed.

The following demonstrates how to reorder a single column **TaskId** to index **3**, or move multiple columns **TaskId** and **TaskName** together to index **3** (pass an array of field names: `['TaskId', 'TaskName']`).

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs6/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs6/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Reorder columns using target index](images/reorder-columns-using-target-index-placeholder.png)

## Customize column reorder behavior using events

You can customize the column reorder behavior in ASP.NET Core Gantt using the [columnDragStart](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Columndragstart), [columnDrag](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Columndrag), and [columnDrop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Columndrop) events.  These events provide control over each stage of the column drag-and-drop process, allowing for custom logic or restrictions.

The following demonstrates how to handle specific fields during column reordering:  
- Cancel `columnDrop` for the **TaskId** field.  
- Cancel `columnDrag` for the **Duration** field.  
- Change header text for the **TaskName** field during the `columnDragStart` event.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs4/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnreorder-cs4/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Customize column reorder behavior using events](images/customize-column-reorder-behavior-using-events-placeholder.png)
