---
layout: post
title: Row Drag and Drop in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about row drag and drop in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Row Drag and Drop 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Row Drag and Drop in JavaScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control includes built-in support for row drag and drop, enabling rows to be rearranged within the Gantt Chart or dropped into custom components. 

To enable this feature, inject the `RowDD` module in Gantt. Once injected, enable the functionality by setting the [allowRowDragAndDrop](../api/gantt#allowrowdraganddrop) property.

## Drag and drop within the Gantt Chart

The Gantt Chart control allows you to rearrange rows using a drag icon. To enable this feature, set the [allowRowDragAndDrop](../api/gantt#allowrowdraganddrop) property to **true**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs7" %}
{% endif %}

## Different drop positions

In a Gantt chart, drag and drop functionality allows rearranging rows to adjust their position. You can drop rows in the following positions:

1. Above
2. Below
3. Child

**Above**

If the border line appears at the top of the target row (e.g., Task ID: 6) while dropping, the row will be placed `above` the target row as a sibling.

![Above Position](../images/above.png)

**Below**

If the border line appears at the bottom of the target row (e.g., Task ID: 6) while dropping, the row will be placed `below` the target row as a sibling.

![Below Position](../images/below.png)

**Child**

If the border line appears at both the top and bottom of the target row (e.g., Task ID: 6) while dropping, the row will be added as a `child` to the target row.

![Child Position](../images/child.png)

## Drag and drop to custom component 

You can drag rows from the Gantt Chart component into custom components for seamless data transfer. To enable this feature, set the [allowRowDragAndDrop](../api/gantt#allowrowdraganddrop) property to **true**, and configure the `targetID` property within the `rowDropSettings` object of the `treeGrid` in the Gantt instance, inside the [load](../api/gantt#load) event. The value of `targetID` must match the ID of the destination component. You can use the [rowDrop](../api/gantt#rowdrop) event to handle the drop and perform necessary actions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-custom/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-custom/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-custom" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-custom/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-custom/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-custom" %}
{% endif %}

## Drag and drop multiple rows together

You can drag and drop multiple rows simultaneously in the Gantt Chart control. To enable this functionality, set the [selectionSettings.type](../api/gantt/selectionSettings#type) property to **Multiple** , and set the [allowRowDragAndDrop](../api/gantt#allowrowdraganddrop) property is set to **true**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs8" %}
{% endif %}

## Taskbar drag and drop between rows

You can rearrange rows in the Gantt Chart control by dragging the taskbar element. This functionality is enabled by setting the [allowTaskbarDragAndDrop](../api/gantt#allowtaskbardraganddrop) property to **true**, allowing taskbars to be repositioned across rows for improved scheduling control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs2" %}
{% endif %}

## Perform row drag and drop action programmatically

To rearrange rows programmatically in the Gantt Chart control, use the [reorderRows](../api/gantt#reorderrows) method. This method accepts the following parameters: 

- **fromIndexes**: Indexes of the rows to be moved.  
- **toIndex**: Target index for placement.  
- **position**: Placement relative to the target (e.g., above or below).

In the example, a [click](..api/button#click) event on an external button moves the row at index 1 **below** the row at index 2.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/dynamicDrag-cs1" %}
{% endif %}

## Customize the drag and drop action

Customize the drag and drop behavior in the Gantt Chart control using the [rowDragStartHelper](../api/gantt#rowdragstarthelper), [rowDragStart](../api/gantt#rowdragstart), [rowDrag](../api/gantt#rowdrag), and [rowDrop](../api/gantt#rowdrop) events. These events provide control over the drag lifecycle, allowing precise handling of row interactions.

In this example, drag and drop actions are customized using event hooks. The `rowDragStartHelper` event prevents dragging for the row where **TaskID** is 2, while the `rowDrop` event cancels the drop action for the row where **TaskID** is 4. Additionally, `rowDragStart` and `rowDrag` apply background styling based on the values in the **Progress** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-action/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-action/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-action" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-action/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-action/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/drag-drop-action" %}
{% endif %}

### Prevent reordering a row as child to another row

To prevent rows from being reordered as children, set `args.cancel` to **true** in the [rowDrop](../api/gantt#rowdrop) event. After canceling the default drop action, use the [reorderRows](../api/gantt#reorderrows) method to reposition the row at a specific index. 
 
In the example, the drop action in **Child** position is blocked, and the dragged row is reordered **above** the target row.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/rows-cs11" %}
{% endif %}