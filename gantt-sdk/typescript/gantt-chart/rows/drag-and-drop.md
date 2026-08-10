---
layout: post
title: Row Drag and Drop in TypeScript Gantt Chart | Syncfusion
description: Learn how to row drag and drop in Syncfusion TypeScript Gantt Chart to reorder tasks and reorganize project structure with intuitive interactions.
keywords: TypeScript gantt row drag drop, drag rows, reorder tasks, drag and drop, row reordering, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/rows/drag-and-drop
platform: gantt-sdk
control: Row Drag Drop - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Enabling Drag and Drop for Rows in TypeScript Gantt Chart

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control includes built-in support for row drag and drop, enabling rows to be rearranged within the Gantt Chart or dropped into custom components.

To enable this feature, inject the `RowDD` module in Gantt. Once injected, enable the functionality by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/documentation/api/gantt#allowrowdraganddrop) property.

## Drag and drop within the Gantt Chart

The Gantt Chart control allows you to rearrange rows using a drag icon. To enable this feature, set the [allowRowDragAndDrop](https://ej2.syncfusion.com/documentation/api/gantt#allowrowdraganddrop) property to **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs7" %}

## Different drop positions

In a Gantt chart, drag and drop functionality allows rearranging rows to adjust their position. You can drop rows in the following positions:

1. Above
2. Below
3. Child

**Above**

If the border line appears at the top of the target row (e.g., Task ID: 6) while dropping, the row will be placed `above` the target row as a sibling.

![Above Position](https://ej2.syncfusion.com/documentation/images/above.png)

**Below**

If the border line appears at the bottom of the target row (e.g., Task ID: 6) while dropping, the row will be placed `below` the target row as a sibling.

![Below Position](https://ej2.syncfusion.com/documentation/images/below.png)

**Child**

If the border line appears at both the top and bottom of the target row (e.g., Task ID: 6) while dropping, the row will be added as a `child` to the target row.

![Child Position](https://ej2.syncfusion.com/documentation/images/child.png)

## Drag and drop to custom component

You can drag rows from the Gantt Chart component into custom components for seamless data transfer. To enable this feature, set the [allowRowDragAndDrop](https://ej2.syncfusion.com/documentation/api/gantt#allowrowdraganddrop) property to **true**, and configure the `targetID` property within the `rowDropSettings` object of the `treeGrid` in the Gantt instance, inside the [load](https://ej2.syncfusion.com/documentation/api/gantt#load) event. The value of `targetID` must match the ID of the destination component. You can use the [rowDrop](https://ej2.syncfusion.com/documentation/api/gantt#rowdrop) event to handle the drop and perform necessary actions.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/drag-drop-custom/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/drag-drop-custom/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/drag-drop-custom" %}

## Drag and drop multiple rows together

You can drag and drop multiple rows simultaneously in the Gantt Chart control. To enable this functionality, set the [selectionSettings.type](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#type) property to **Multiple** , and set the [allowRowDragAndDrop](https://ej2.syncfusion.com/documentation/api/gantt#allowrowdraganddrop) property is set to **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs8" %}

## Taskbar drag and drop between rows

You can rearrange rows in the Gantt Chart control by dragging the taskbar element. This functionality is enabled by setting the [allowTaskbarDragAndDrop](https://ej2.syncfusion.com/documentation/api/gantt#allowtaskbardraganddrop) property to **true**, allowing taskbars to be repositioned across rows for improved scheduling control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/dynamicDrag-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/dynamicDrag-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/dynamicDrag-cs2" %}

## Perform row drag and drop action programmatically

To rearrange rows programmatically in the Gantt Chart control, use the [reorderRows](https://ej2.syncfusion.com/documentation/api/gantt#reorderrows) method. This method accepts the following parameters:

- **fromIndexes**: Indexes of the rows to be moved.
- **toIndex**: Target index for placement.
- **position**: Placement relative to the target (e.g., above or below).

In the example, a [click](https://ej2.syncfusion.com/documentation/api/button#click) event on an external button moves the row at index 1 **below** the row at index 2.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/dynamicDrag-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/dynamicDrag-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/dynamicDrag-cs1" %}

## Customize the drag and drop action

Customize the drag and drop behavior in the Gantt Chart control using the [rowDragStartHelper](https://ej2.syncfusion.com/documentation/api/gantt#rowdragstarthelper), [rowDragStart](https://ej2.syncfusion.com/documentation/api/gantt#rowdragstart), [rowDrag](https://ej2.syncfusion.com/documentation/api/gantt#rowdrag), and [rowDrop](https://ej2.syncfusion.com/documentation/api/gantt#rowdrop) events. These events provide control over the drag lifecycle, allowing precise handling of row interactions.

In this example, drag and drop actions are customized using event hooks. The `rowDragStartHelper` event prevents dragging for the row where **TaskID** is 2, while the `rowDrop` event cancels the drop action for the row where **TaskID** is 4. Additionally, `rowDragStart` and `rowDrag` apply background styling based on the values in the **Progress** column.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/drag-drop-action/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/drag-drop-action/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/drag-drop-action" %}

### Prevent reordering a row as child to another row

To prevent rows from being reordered as children, set `args.cancel` to **true** in the [rowDrop](https://ej2.syncfusion.com/documentation/api/gantt#rowdrop) event. After canceling the default drop action, use the [reorderRows](https://ej2.syncfusion.com/documentation/api/gantt#reorderrows) method to reposition the row at a specific index.

In the example, the drop action in **Child** position is blocked, and the dragged row is reordered **above** the target row.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs11" %}
