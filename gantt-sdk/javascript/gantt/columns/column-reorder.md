---
layout: post
title: Reorder Columns in JavaScript Gantt Chart Control | Syncfusion
description: Learn how to reorder columns in the Syncfusion JavaScript Gantt Chart control using drag-and-drop or code, and how to restrict reordering for specific columns.
platform: gantt-sdk
control: Column reorder
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Reorder in JavaScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control supports column reordering by dragging a column header to a new position.

To enable column reordering, set the [allowReordering](../../api/gantt#allowreordering) property to **true** in the Gantt configuration and inject the `Reorder` module to the Gantt control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columns-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columns-cs2" %}
{% endif %}

> - You can modify the appearance of column headers during drag-and-drop using the [columnDrag](../../gantt/events#columndrag) and [columnDrop](../../gantt/events#columndrop) events.
> - After columns are reordered, their data positions also change. Ensure any dependent logic is updated to reflect the new column order.
> - You can disable the reordering of a particular column by setting the `allowReordering` property to **false**.

## Disable column reordering for specific columns

In Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control, columns are reordered by default. To restrict reordering for a specific column, set its [allowReordering](../../api/gantt/column#allowreordering) property to **false**.

The following example demonstrates how reordering is restricted for the **TaskName** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columns-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/columns-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/columns-cs21" %}
{% endif %}

## Reorder columns programmatically

You can programmatically reorder columns in Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control using available methods based on field names, index, or target index.

> To perform external column reordering, the column's [allowReordering](../../api/gantt/column#allowreordering) property must be enabled.

### Reorder columns using field names

You can reorder columns in the Gantt Chart control using the [reorderColumns](../../api/gantt#reordercolumns) method. This method reorders one or more columns by specifying the source column(s) and the target column using their field names:

- **fromFName**: The field name of the column to move.
- **toFName**: The field name of the target column position.

The following demonstrates how to reorder columns by placing **TaskName** to position before **TaskID**, or moving **TaskName**, **StartDate**, **Duration** to position before **TaskID**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs1" %}
{% endif %}

### Reorder columns using column index

You can reorder columns in the Gantt Chart control using the [reorderColumnByIndex](../../api/grid#reordercolumnbyindex) method of the grid object. This method repositions a column based on its current index and takes two parameters:

- **fromIndex**: Index of the column to move.
- **toIndex**: Target index to place the column.

The following demonstrates how to reorder the column at index **1** to position **3**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs2" %}
{% endif %}

### Reorder columns using target index

You can reorder single or multiple columns in the Gantt Chart control using the [reorderColumnByTargetIndex](../../api/grid#reordercolumnbytargetindex) method of the grid object. This method reorders columns based on their field names and the target index. It takes two parameters:

- **fieldName**: The field name of the column to move.
- **toIndex**: The index where the column should be placed.

The following demonstrates how to reorder a single column **TaskID** to index **3**, or move multiple columns **TaskID**, **TaskName** to index **3**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/multipleReorder-cs3" %}
{% endif %}

## Customize column reorder behavior using events

You can customize the column reorder behavior in Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt using the [columnDragStart](../../gantt/events#columndragstart), [columnDrag](../../gantt/events#columndrag), and [columnDrop](../../gantt/events#columndrop) events. These events provide control over each stage of the column drag-and-drop process, allowing for custom logic or restrictions.

The following demonstrates how to handle specific fields during column reordering:

- Cancel `columnDrop` for the **TaskID** field.
- Cancel `columnDrag` for the **Duration** field.
- Change header text for the **TaskName** field during the `columnDragStart` event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/reorder-events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/reorder-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/reorder-events-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/reorder-events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/reorder-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/reorder-events-cs1" %}
{% endif %}
