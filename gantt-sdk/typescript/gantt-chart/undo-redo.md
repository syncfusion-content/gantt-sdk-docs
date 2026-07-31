---
layout: post
title: Undo Redo in TypeScript Gantt Chart Control | Syncfusion
description: Learn here all about undo redo in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Undo Redo
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Undo Redo in TypeScript Gantt Chart Control

The undo redo feature in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control allows users to revert or reapply actions like task edits, deletions, or dependency changes, enhancing project management by correcting mistakes efficiently. Enabled via the [enableUndoRedo](../api/gantt#enableundoredo) property, it supports actions such as editing task details, dragging taskbars, or reordering columns. For example, undoing a task duration change restores the original timeline, while redoing it reapplies the edit. The [undoRedoActions](../api/gantt#undoredoactions) property specifies which actions to track (e.g., Edit, Delete), defaulting to a comprehensive set including sorting, filtering, and zooming. The [undoRedoStepsCount](../api/gantt#undoredostepscount) property limits the action history, defaulting to 10, with older actions removed as new ones are added. This feature ensures history management for complex projects with hierarchical tasks or frequent updates.

## Configure undo redo

Enable undo redo by setting [enableUndoRedo](../api/gantt#enableundoredo) to **true** and injecting `UndoRedo`. The [undoRedoActions](../api/gantt#undoredoactions) property customizes supported actions, such as:

- **Edit:** Reverts task field changes (e.g., StartDate, Duration) via dialog or taskbar drag, requiring `Edit`.
- **Delete:** Restores deleted tasks, requiring `Edit`.
- **Add:** Removes added tasks, requiring `Edit`.
- **Column Reorder:** Reverts column reordering, requiring `Reorder`.
- **Indent/Outdent:** Reverts hierarchy changes, requiring `Edit`.
- **Row Drag And Drop:** Restores row positions, requiring `RowDD`.
- **Taskbar Drag And Drop:** Reverts taskbar drags, requiring `Edit`.
- **Sorting, Filtering, Search:** Reverts grid operations, requiring respective services.
- **Zoom In, Zoom Out, Zoom To Fit:** Reverts timeline zoom changes.
- **ColumnState:** Restores column visibility.
- **Previous Time Span, Next Time Span:** Reverts timeline navigation.

The [undoRedoStepsCount](../api/gantt#undoredostepscount) property sets the action history limit (e.g., 5); setting it to **0** disables undo/redo. Ensure dependencies like `Edit` or `RowDD ` are injected for actions like Edit or RowDragAndDrop.

## Configure the feature set for undo redo actions

By default, all the gantt features listed in the below table will be restored for undo and redo actions. However, you have the option to specify only the required actions to be restored using [undoRedoActions](../api/gantt#undoredoactions) property.

| Built-in Undo Redo Items | Actions                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| Edit                     | Undo redo actions can be performed for edited record.            |
| Delete                   | Undo redo actions can be performed for deleted record.           |
| Add                      | Undo redo actions can be performed for newly added record.       |
| ColumnReorder            | Undo redo actions can be performed for reordered column.         |
| Indent                   | Undo redo actions can be performed for indented record.          |
| Outdent                  | Undo redo actions can be performed for outdented record.         |
| ColumnResize             | Undo redo actions can be performed for resized column.           |
| Sorting                  | Undo redo actions can be performed for sorted column.            |
| Filtering                | Undo redo actions can be performed for filtered record.          |
| Search                   | Undo redo actions can be performed for searched value.           |
| ZoomIn                   | Undo redo actions can be performed for zoomIn action.            |
| ZoomOut                  | Undo redo actions can be performed for zoomOut action.           |
| ZoomToFit                | Undo redo actions can be performed for zoomToFit action.         |
| ColumnState              | Undo redo actions can be performed for hided or shown columns.   |
| RowDragAndDrop           | Undo redo actions can be performed for row drag and drop.        |
| TaskbarDragAndDrop       | Undo redo actions can be performed for taskbar drag and drop.    |
| PreviousTimeSpan         | Undo redo actions can be performed for previous time span acton. |
| NextTimeSpan             | Undo redo actions can be performed for next time span action.    |

In the following code example, **Edit** and **Delete** actions are specified in `undoRedoActions` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs1" %}
{% endif %}

## Configuring the storage step count for undo and redo actions

You can specify the number of actions to be stored for undo and redo operations using the [undoRedoStepsCount](../api/gantt#undoredostepscount) property.

By default, the value of `undoRedoStepsCount` is set to 10.

When the number of actions performed exceeds the `undoRedoStepsCount`, the oldest action in the undo collection is removed, and the latest action performed is added to the collection. This ensures that the number of stored actions does not exceed the specified limit, maintaining efficient memory usage.

In the following example, `undoRedoStepsCount` value is set to 5. This code allows reverting task edits (e.g., changing a task’s duration) or deletions, with up to 5 actions stored.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs2" %}
{% endif %}

## Programmatic undo and redo in Gantt Chart

Programmatic control over undo redo is achieved using methods like [undo](../api/gantt/#undo) to revert actions, [redo](../api/gantt#redo) to reapply them.

The following example triggers `undo` and `redo` via external buttons:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs3" %}
{% endif %}

## Retrieve undo and redo stack collection

By default, when an undo or redo action is performed, the actions are stored in an array collection. To retrieve the undo and redo stack array collections, you can use the [getUndoActions](../api/gantt#getundoactions) and [getRedoActions](../api/gantt#getredoactions) methods.

The following code example demonstrates how to retrieve the **undo** and **redo** collection using method by clicking the external button.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs4" %}
{% endif %}

## Clear undo and redo collection

At any point, you can clear the undo and redo collections using [clearUndoCollection](../api/gantt#clearundocollection) and [clearRedoCollection](../api/gantt#clearredocollection) methods. This allows you to reset the undo and redo stacks as needed during runtime.

The following code example demonstrates how to clear the undo and redo collection using method by clicking the external button.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/undo-redo-cs5" %}
{% endif %}

## See also

- [How to configure task editing?](./managing-tasks/task-bar-editing)
- [How to manage task dependencies?](./task-dependency)
- [How to configure critical path?](./critical-path)
