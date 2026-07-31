---
layout: post
title: Sorting in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about Sorting in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Sorting 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Sorting in JavaScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control provides sorting functionality to arrange task data in ascending or descending order based on column values.

To enable sorting, set the [allowSorting](../api/gantt#allowsorting) property to **true**. You can configure sorting behavior using the [sortSettings](../api/gantt/sortSettings) property.

Sorting is applied by clicking a column header. For multi-column sorting, hold the **CTRL** key while selecting additional headers. To remove sorting from a specific column in a multi-sorted view, hold the **SHIFT** key and click the column header. For details on keyboard interactions, refer to the [selection keyboard interaction](../grid/accessibility#keyboard-interaction) documentation.

To enable sorting functionality, inject the [Sort](../api/gantt#sortmodule) module into the Gantt control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/getting-started-cs14" %}
{% endif %}

> * The Gantt columns are sorted in the ascending order. If you click the already sorted column, the sort direction toggles.
> * To disable sorting for a particular column, set the [columns.allowSorting](../api/gantt/column#allowsorting) property to **false**.

## Initial sorting

You can apply sorting during the initial render of the Syncfusion JavaScript Gantt Chart control by configuring the [sortSettings.columns](../api/gantt/sortSettings#columns) property. Each column should be defined with a specific [field](../api/gantt/sortDescriptorModel#field) and [direction](../api/gantt/sortDescriptorModel#direction), ensuring that the Gantt loads with the desired sort order applied to the specified columns.

The following code example shows how to add sorted columns during Gantt initialization, with `field` set to **TaskID** and `direction` to **Descending**, and another with `field` as **TaskName** and `direction` as **Ascending**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs1" %}
{% endif %}

## Sort columns externally

You can externally sort columns, remove a specific sort, or clear all sorting in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control using button clicks.

### Add sort columns

You can externally sort a column in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control using the [sortColumn](../api/gantt#sortcolumn) method with parameters for column name, sort direction, and multi-sort configuration.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingColumns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingColumns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sortingColumns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingColumns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingColumns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sortingColumns-cs1" %}
{% endif %}

### Remove sort columns

You can externally remove sorting from a specific column in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control using the [removeSortColumn](../api/gantt/sort#removesortcolumn) method by passing the column name.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs3" %}
{% endif %}

### Clear sorting

You can clear all sorted columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control using the [clearSorting](../api/gantt#clearsorting) method to reset the Gantt Chart to its unsorted state.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/clearSorting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/clearSorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/clearSorting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/clearSorting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/clearSorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/clearSorting-cs1" %}
{% endif %}

## Customize sort icon

You can customize the sort icons in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control by overriding the **.e-icon-ascending** and **.e-icon-descending** CSS classes using the `content` property, as shown below:

```css
.e-gantt .e-icon-ascending::before {
    content: '\e7aa';
}

.e-gantt .e-icon-descending::before {
    content: '\e71f';
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs4" %}
{% endif %}

## Custom sorting

You can customize the default sort behavior for a column in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control by assigning a [column.sortComparer](../api/gantt/column#sortcomparer) function to define custom sorting logic.

The sorting process includes the following steps:

1. Ascending → Descending → Clear Sorting (resets to original data source order).
2. Child records are sorted within their respective parent groups.
3. Null values in child records appear at the bottom of each parent group, not across the entire Gantt Chart dataset.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs5" %}
{% endif %}

### Display null values always at bottom

You can customize the sorting behavior in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control to make `null` values consistently appear at the bottom, regardless of sort direction, by defining a column-level [column.sortComparer](../api/gantt/column#sortcomparer) function. By default, `null` values are placed at the bottom when sorting in ascending order and at the top when sorting in descending order. Applying a custom `sortComparer` helps override this default logic and is particularly useful when working with datasets where `null` entries should be visually separated from valid data.
 
The example below demonstrates how to display `null` values at the bottom of the Gantt Chart while sorting the `TaskName` column in both ascending and descending order.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs6" %}
{% endif %}

## Sorting custom columns

You can sort custom columns of various types such as string or numeric in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control by adding them to the column collection. Initial sorting can be configured using the [sortSettings](../api/gantt/sortSettings) property, or sorting can be triggered dynamically through external actions such as a button click. 

The following code snippet demonstrates how to sort the `CustomColumn` using an external button.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingCustomColumns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingCustomColumns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sortingCustomColumns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingCustomColumns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sortingCustomColumns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sortingCustomColumns-cs1" %}
{% endif %}

## Prevent sorting on specific columns

You can prevent sorting on specific columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control by handling the [actionBegin](../gantt/events#actionbegin) or [actionComplete](../gantt/events#actioncomplete) events. Alternatively, you can disable sorting for a column by setting its [allowSorting](../api/gantt/column#allowsorting) property to **false** in the column configuration.

The following sample demonstrates how to prevent sorting for the **TaskID** and **StartDate** columns.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs7" %}
{% endif %}

## Disable clear sort

By default, clicking a column header switches the sort order between ascending, descending, and unsorted. To restrict this to only ascending and descending, set [sortSettings.allowUnsort](../api/gantt/sortsettings#allowunsort) to **false**. This ensures sorting remains active without reverting to an unsorted state.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/sorting-cs8" %}
{% endif %}

## Touch interaction

To perform a tap action on a column header in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control, the [sorting](sorting#sorting) operation is triggered for the selected column. A popup appears when multi-column sorting is enabled. To sort multiple columns, tap the popup and then tap the desired column headers. The following screenshot shows Gantt touch sorting.

![Multiple Sorting](images/multiple-sorting.png)