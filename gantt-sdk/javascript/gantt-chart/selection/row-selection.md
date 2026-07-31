---
layout: post
title: JavaScript Gantt Row Selection API Guide | Syncfusion
description: Explore how to configure and customize row selection in the Syncfusion JavaScript Gantt Chart control using API methods and events.
platform: gantt-sdk
control: Row selection
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Row Selection in JavaScript Gantt Chart Control

The JavaScript Gantt Chart control supports row selection using mouse clicks or keyboard navigation (arrow keys). This enables users to highlight, manipulate, or trigger actions on selected task rows.

## Single row selection

You can enable single row selection in the Gantt Chart control by setting [selectionSettings.mode](../../api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](../../api/gantt/selectionSettings#type) to **Single**. This allows you to select only one task row at a time.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs4" %}
{% endif %}

## Multiple row selection

You can enable multiple row selection in the Gantt Chart control by setting [selectionSettings.mode](../../api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](../../api/gantt/selectionSettings#type) to **Multiple**. This allows selection of more than one task row at a time by holding down the **Ctrl** key while clicking on multiple rows.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs14" %}
{% endif %}

## Row selection event sequence

- On initial row selection: `rowSelecting` triggers first, followed by `rowSelected`.

- When selecting a different row:
  - [rowSelecting](../../api/gantt#rowselecting) is followed by [rowDeselecting](../../api/gantt#rowdeselecting) and [rowDeselected](../../api/gantt#rowdeselected) to deselect the previously selected row.

  - Then, [rowSelected](../../api/gantt#rowselected) triggers for the newly selected row.

This sequence ensures proper handling of row transitions during selection and deselection.

## Select row at initial rendering

You can highlight or pre-select a specific row during the initial rendering of the Gantt Chart control by setting the [selectedRowIndex](../../api/gantt#selectedrowindex) property. This selects the row at the specified index when the Gantt loads.

The following example selects the row at index 5 during initial load:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs5" %}
{% endif %}

## Select rows externally

You can programmatically or dynamically select single rows, multiple rows, or a range of rows in the JavaScript Gantt Chart control.

### Single row selection

Select a single row in the Gantt Chart control by calling the [selectRow](../../api/gantt/selection#selectrow) method with the desired row index.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selectRow-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selectRow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selectRow-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selectRow-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selectRow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selectRow-cs1" %}
{% endif %}

### Multiple rows selection

Select multiple rows in the Gantt Chart control by using the [selectRows](../../api/gantt/selection#selectrows) method with an array of row indexes.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs6" %}
{% endif %}

### Range of rows selection

Select a range of rows in the Gantt Chart control by using the [selectRowsByRange](../../api/gantt/selection#selectrowsbyrange) method with the start and end row indexes.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs15" %}
{% endif %}

## Enable multi row selection without Ctrl key

You can enable simple multi-row selection by setting the `enableSimpleMultiRowSelection` property to **true** in the Grid configuration during the [created](../../gantt/events#created) event. This allows multiple rows to be selected individually through clicks without holding the Ctrl key.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs16" %}
{% endif %}

## Get selected row information

To access selected row details in the JavaScript Gantt Chart control:

- [getSelectedRowIndexes](../../api/gantt/selection#getselectedrowindexes) – Returns the index positions of selected rows.
- [getSelectedRecords](../../api/gantt/selection#getselectedrecords) – Provides the corresponding data objects.
- [getSelectedRows](../../api/gantt/selection#getselectedrows) – Retrieves the actual row elements from the DOM.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs17" %}
{% endif %}

> **Note:** The Gantt Chart control supports keyboard navigation for row selection. Use arrow keys to move focus and `Enter` or `Space` to select rows. Ensure accessibility compliance by providing appropriate ARIA attributes.

## Customize row selection action

You can customize row selection in the Gantt Chart using [rowSelecting](../../gantt/events#rowselecting), [rowSelected](../../gantt/events#rowselected), [rowDeselecting](../../gantt/events#rowdeselecting), and [rowDeselected](../../gantt/events#rowdeselected) events, which allow dynamic control over selection behavior based on specific conditions.

The following demonstrates how row selection and background color updates are handled in the JavaScript Gantt Chart control:

- In `rowSelecting`, selection is prevented when `TaskID` is 2.
- In `rowSelected`, rows with **Progress** > 40 are highlighted with a green background.
- In `rowDeselected`, rows with **Progress** ≤ 40 are styled with mauve background color.
- In `rowDeselecting`, if **Progress** > 80, the background color changes to yellow.

The following sample demonstrates

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/selection-cs7" %}
{% endif %}
