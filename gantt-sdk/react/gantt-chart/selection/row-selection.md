---
layout: post
title: React Gantt Row Selection API Guide | Syncfusion
description: Explore how to configure and customize row selection in the Syncfusion React Gantt Chart component using API methods and events.
platform: gantt-sdk
control: Row selection
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Row Selection in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports row selection using mouse clicks or keyboard navigation (arrow keys). This enables users to highlight, manipulate, or trigger actions on selected task rows.

## Single row selection

You can enable single row selection in the Gantt Chart component by setting [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#type) to **Single**. This allows you to select only one task row at a time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs5" %}

## Multiple row selection

You can enable multiple row selection in the Gantt Chart component by setting [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#type) to **Multiple**. This allows selection of more than one task row at a time by holding down the **Ctrl** key while clicking on multiple rows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs8" %}

## Row selection event sequence

- On initial row selection: `rowSelecting` triggers first, followed by `rowSelected`.

- When selecting a different row:
  - [rowSelecting](https://ej2.syncfusion.com/react/documentation/api/gantt#rowselecting) is followed by [rowDeselecting](https://ej2.syncfusion.com/react/documentation/api/gantt#rowdeselecting) and [rowDeselected](https://ej2.syncfusion.com/react/documentation/api/gantt#rowdeselected) to deselect the previously selected row.

  - Then, [rowSelected](https://ej2.syncfusion.com/react/documentation/api/gantt#rowselected) triggers for the newly selected row.

This sequence ensures proper handling of row transitions during selection and deselection.

## Select row at initial rendering

You can highlight or pre-select a specific row during the initial rendering of the Gantt Chart component by setting the [selectedRowIndex](https://ej2.syncfusion.com/react/documentation/api/gantt#selectedrowindex) property. This selects the row at the specified index when the Gantt loads.

The following example selects the row at index 5 during initial load:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs6" %}

## Select rows externally

You can programmatically or dynamically select single rows, multiple rows, or a range of rows in the React Gantt Chart component.

### Single row selection

Select a single row in the Gantt Chart component by calling the [selectRow](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#selectrow) method with the desired row index.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs7" %}

### Multiple rows selection

Select multiple rows in the Gantt Chart component by using the [selectRows](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#selectrows) method with an array of row indexes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs8" %}

### Range of rows selection

Select a range of rows in the Gantt Chart component by using the [selectRowsByRange](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#selectrowsbyrange) method with the start and end row indexes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs20/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs20" %}

## Enable multi row selection without Ctrl key

You can enable simple multi-row selection by setting the `enableSimpleMultiRowSelection` property to **true** in the Grid configuration during the [created](https://ej2.syncfusion.com/react/documentation/gantt/events#created) event. This allows multiple rows to be selected individually through clicks without holding the Ctrl key.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs21/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs21" %}

## Get selected row information

To access selected row details in the React Gantt Chart component:

- [getSelectedRowIndexes](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#getselectedrowindexes) – Returns the index positions of selected rows.
- [getSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#getselectedrecords) – Provides the corresponding data objects.
- [getSelectedRows](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#getselectedrows) – Retrieves the actual row elements from the DOM.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs22/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs22" %}

> **Note:** The Gantt Chart component supports keyboard navigation for row selection. Use arrow keys to move focus and `Enter` or `Space` to select rows. Ensure accessibility compliance by providing appropriate ARIA attributes.

## Customize row selection action

You can customize row selection in the Gantt Chart using [rowSelecting](https://ej2.syncfusion.com/react/documentation/gantt/events#rowselecting), [rowSelected](https://ej2.syncfusion.com/react/documentation/gantt/events#rowselected), [rowDeselecting](https://ej2.syncfusion.com/react/documentation/gantt/events#rowdeselecting), and [rowDeselected](https://ej2.syncfusion.com/react/documentation/gantt/events#rowdeselected) events, which allow dynamic control over selection behavior based on specific conditions.

The following demonstrates how row selection and background color updates are handled in the React Gantt Chart component:

- In `rowSelecting`, selection is prevented when `TaskID` is 2.
- In `rowSelected`, rows with **Progress** > 40 are highlighted with a green background.
- In `rowDeselected`, rows with **Progress** ≤ 40 are styled with mauve background color.
- In `rowDeselecting`, if **Progress** > 80, the background color changes to yellow.

The following sample demonstrates

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/selection-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/selection-cs10" %}
