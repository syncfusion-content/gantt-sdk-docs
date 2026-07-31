---
layout: post
title: Filtering in TypeScript Gantt Chart Control | Syncfusion
description: Learn here all about filtering in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Filtering 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filtering in TypeScript Gantt Chart Control

Filtering allows you to view specific or related records based on defined criteria. The Gantt Chart control supports options like filter menu, Excel-like filtering, and toolbar search to narrow down visible data.

To enable filtering, set [allowFiltering](../../api/gantt#allowfiltering) to **true** in the Gantt configuration. You can define filter options using [filterSettings](../../api/gantt/filterSettings) and configure toolbar search using [searchSettings](../../api/gantt/searchSettings) property.

To activate filtering functionality, inject the `Filter` service into the control.

> * The filtering UI is rendered based on the column type, allowing data to be filtered using appropriate operators.
> * The filter menu is enabled by default. To disable the filtering option for a specific column, set the `allowFiltering` property of the `column` to **false**.

## Apply initial filter on load

To apply filtering during the initial render of the TypeScript Gantt Chart control, define the filter conditions using a **predicate** object within the [filterSettings.columns](../../api/gantt/filterSettings#columns) property.

The following sample demonstrates how to apply an initial filter where **TaskName** starts with **Identify** and **TaskID** equals **2**, using a `Predicate` condition set to **and**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4" %}
{% endif %}

## Supported filter operators

Filter operators can be set using the `filterSettings.columns.operator` property to define the comparison logic for each column.

The available operators and their supported data types are:

| Operator           | Description                                          | Supported Types               |
| ------------------ | ---------------------------------------------------- | ----------------------------- |
| startswith         | Matches values beginning with the specified value.   | String                        |
| endswith           | Matches values ending with the specified value.      | String                        |
| contains           | Matches values that include the specified value.     | String                        |
| equal              | Matches values exactly equal to the specified value. | String, Number, Boolean, Date |
| notequal           | Matches values not equal to the specified value.     | String, Number, Boolean, Date |
| greaterthan        | Matches values greater than the specified value.     | Number, Date                  |
| greaterthanorequal | Matches values greater than or equal to the value.   | Number, Date                  |
| lessthan           | Matches values less than the specified value.        | Number, Date                  |
| lessthanorequal    | Matches values less than or equal to the value.      | Number, Date                  |

> By default, the `filterSettings.columns.operator` value is `equal`

## Hierarchy-based filtering modes

The TypeScript Gantt Chart control supports multiple filtering modes, which can be configured using the [filterSettings.hierarchyMode](../../api/gantt/filterSettings#hierarchymode) property. The available modes are:

- **Parent**: This is the default mode. Filtered records are displayed along with their parent records. If no parent exists, only the filtered records are shown.

- **Child**: Displays filtered records along with their child records. If no child exists, only the filtered records are shown.

- **Both**: Displays filtered records along with both parent and child records. If neither exists, only the filtered records are shown.

- **None**: Displays only the filtered records without any parent or child context.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1" %}
{% endif %}

## Enable diacritic-sensitive filtering

By default, the TypeScript Gantt Chart control ignores diacritic characters during filtering. To enable filtering with diacritic sensitivity, set the [filterSettings.ignoreAccent](../../api/gantt/filterSettings#ignoreaccent) property to **true**.

The following sample demonstrates this behavior: when filtering the **TaskName** column, entries containing diacritic characters (e.g., �Pr�ject�, �Proj�ct�) will be matched if you enter the base text **Project**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1" %}
{% endif %}

## Programmatic filtering using method

You can apply dynamic filtering in the TypeScript Gantt by using the [filterByColumn](../../api/gantt#filterbycolumn) method. This enables programmatic filtering without relying on UI interactions.

The following sample demonstrates how to filter the **TaskName** and **TaskID** columns using single and multiple values. The filtering is triggered through an external button click by calling the `filterByColumn` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1" %}
{% endif %}

## Clear all applied filters

You can clear all the filtering conditions applied in the Gantt Chart contol by using the [clearFiltering](../../api/gantt#clearfiltering) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1" %}
{% endif %}

## Set different filter types per column

You can enable different filter types for individual columns in the Gantt Chart control by setting the `column.filter.type` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2" %}
{% endif %}

## Customize filtering behavior using events

You can customize the filtering behavior in the TypeScript Gantt using the [actionBegin](../../documentation/gantt/events#actionbegin) and [actionComplete](../../gantt/events#actioncomplete) events. These events allow you to inject custom logic at different stages of the filtering workflow.

The following sample demonstrates how to handle different filtering stages using `args.requestType`:
  
- For **filterBeforeOpen**, customize filter operators based on `args.columnType` (number or string).  
- For **filtering**, cancel the action if `args.currentFilteringColumn` is **StartDate**.  
- For **filterAfterOpen**, apply background styling to the filter dialog content and footer.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1" %}
{% endif %}