---
layout: post
title: Reorder Columns in React Gantt Chart Component | Syncfusion
description: Learn how to reorder columns in the Syncfusion React Gantt Chart using drag-and-drop or code, and how to restrict reordering for specific columns.
platform: gantt-sdk
control: Column reorder
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Reorder in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports column reordering by dragging a column header to a new position.

To enable column reordering, set the [allowReordering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowreordering) property to **true** in the Gantt configuration and inject the `Reorder` in the service array.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/columnreorder-cs1" %}

> - You can modify the appearance of column headers during drag-and-drop using the [columnDrag](https://ej2.syncfusion.com/react/documentation/gantt/events#columndrag) and [columnDrop](https://ej2.syncfusion.com/react/documentation/gantt/events#columndrop) events.
> - After columns are reordered, their data positions also change. Ensure any dependent logic is updated to reflect the new column order.
> - You can disable the reordering of a particular column by setting the `allowReordering` property to **false**.

## Disable column reordering for specific columns

In React Gantt Chart component, columns are reordered by default. To restrict reordering for a specific column, set its [allowReordering](https://ej2.syncfusion.com/react/documentation/api/gantt/column#allowreordering) property to **false**.

The following example demonstrates how reordering is restricted for the **TaskName** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/columnreorder-cs2" %}

## Reorder columns programmatically

You can programmatically reorder columns in React Gantt Chart component using available methods based on field names, index, or target index.

> To perform external column reordering, the column's [allowReordering](https://ej2.syncfusion.com/react/documentation/api/gantt/column#allowreordering) property must be enabled.

### Reorder columns using field names

You can reorder columns in the Gantt Chart component using the [reorderColumns](https://helpej2.syncfusion.com/react/documentation/api/gantt#reordercolumns) method. This method reorders one or more columns by specifying the source column(s) and the target column using their field names:

- **fromFName**: The field name of the column to move.
- **toFName**: The field name of the target column position.

The following demonstrates how to reorder columns by placing **TaskName** to position before **TaskID**, or moving **TaskName**, **StartDate**, **Duration** to position before **TaskID**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/columnreorder-cs3" %}

### Reorder columns using column index

You can reorder columns in the Gantt Chart component using the [reorderColumnByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbyindex) method of the grid object. This method repositions a column based on its current index and takes two parameters:

- **fromIndex**: Index of the column to move.
- **toIndex**: Target index to place the column.

The following demonstrates how to reorder the column at index **1** to position **3**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/columnreorder-cs4" %}

### Reorder columns using target index

You can reorder single or multiple columns in the Gantt Chart component using the [reorderColumnByTargetIndex](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbytargetindex) method of the grid object. This method reorders columns based on their field names and the target index. It takes two parameters:

- **fieldName**: The field name of the column to move.
- **toIndex**: The index where the column should be placed.

The following demonstrates how to reorder a single column **TaskID** to index **3**, or move multiple columns **TaskID**, **TaskName** to index **3**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/columnreorder-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/columnreorder-cs5" %}

## Customize column reorder behavior using events

You can customize the column reorder behavior in Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt using the [columnDragStart](https://ej2.syncfusion.com/react/documentation/gantt/events#columndragstart), [columnDrag](https://ej2.syncfusion.com/react/documentation/gantt/events#columndrag), and [columnDrop](https://ej2.syncfusion.com/react/documentation/gantt/events#columndrop) events. These events provide control over each stage of the column drag-and-drop process, allowing for custom logic or restrictions.

The following demonstrates how to handle specific fields during column reordering:

- Cancel `columnDrop` for the **TaskID** field.
- Cancel `columnDrag` for the **Duration** field.
- Change header text for the **TaskName** field during the `columnDragStart` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/reorder-events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/reorder-events-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/reorder-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/reorder-events-cs1" %}
