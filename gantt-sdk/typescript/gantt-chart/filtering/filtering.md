---
layout: post
title: Filtering in TypeScript Gantt Chart | Syncfusion
description: Learn how to filter task data in Syncfusion TypeScript Gantt Chart to search and display tasks based on criteria for efficient project data management.
keywords: TypeScript gantt filtering, filter tasks, search tasks, filter conditions, column filtering, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/filtering/filtering
platform: gantt-sdk
control: Filtering - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filtering and Search Features in TypeScript Gantt Chart

Filtering allows you to view specific or related records based on defined criteria. The Gantt Chart control supports options like filter menu, Excel-like filtering, and toolbar search to narrow down visible data.

To enable filtering, set [allowFiltering](https://ej2.syncfusion.com/documentation/api/gantt#allowfiltering) to **true** in the Gantt configuration. You can define filter options using [filterSettings](https://ej2.syncfusion.com/documentation/api/gantt/filterSettings) and configure toolbar search using [searchSettings](https://ej2.syncfusion.com/documentation/api/gantt/searchSettings) property.

To activate filtering functionality, inject the `Filter` service into the control.

> - The filtering UI is rendered based on the column type, allowing data to be filtered using appropriate operators.
> - The filter menu is enabled by default. To disable the filtering option for a specific column, set the `allowFiltering` property of the `column` to **false**.

## Apply initial filter on load

To apply filtering during the initial render of the TypeScript Gantt Chart control, define the filter conditions using a **predicate** object within the [filterSettings.columns](https://ej2.syncfusion.com/documentation/api/gantt/filterSettings#columns) property.

The following sample demonstrates how to apply an initial filter where **TaskName** starts with **Identify** and **TaskID** equals **2**, using a `Predicate` condition set to **and**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/initialLoadFiltering-cs4" %}

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

The TypeScript Gantt Chart control supports multiple filtering modes, which can be configured using the [filterSettings.hierarchyMode](https://ej2.syncfusion.com/documentation/api/gantt/filterSettings#hierarchymode) property. The available modes are:

- **Parent**: This is the default mode. Filtered records are displayed along with their parent records. If no parent exists, only the filtered records are shown.

- **Child**: Displays filtered records along with their child records. If no child exists, only the filtered records are shown.

- **Both**: Displays filtered records along with both parent and child records. If neither exists, only the filtered records are shown.

- **None**: Displays only the filtered records without any parent or child context.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs1" %}

## Enable diacritic-sensitive filtering

By default, the TypeScript Gantt Chart control ignores diacritic characters during filtering. To enable filtering with diacritic sensitivity, set the [filterSettings.ignoreAccent](https://ej2.syncfusion.com/documentation/api/gantt/filterSettings#ignoreaccent) property to **true**.

The following sample demonstrates this behavior: when filtering the **TaskName** column, entries containing diacritic characters (e.g., �Pr�ject�, �Proj�ct�) will be matched if you enter the base text **Project**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/diacriticsFilter-cs1" %}

## Programmatic filtering using method

You can apply dynamic filtering in the TypeScript Gantt by using the [filterByColumn](https://ej2.syncfusion.com/documentation/api/gantt#filterbycolumn) method. This enables programmatic filtering without relying on UI interactions.

The following sample demonstrates how to filter the **TaskName** and **TaskID** columns using single and multiple values. The filtering is triggered through an external button click by calling the `filterByColumn` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filterByColumn-cs1" %}

## Clear all applied filters

You can clear all the filtering conditions applied in the Gantt Chart contol by using the [clearFiltering](https://ej2.syncfusion.com/documentation/api/gantt#clearfiltering) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/clearFilter-cs1" %}

## Set different filter types per column

You can enable different filter types for individual columns in the Gantt Chart control by setting the `column.filter.type` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filtering-cs2" %}

## Customize filtering behavior using events

You can customize the filtering behavior in the TypeScript Gantt using the [actionBegin](https://ej2.syncfusion.com/documentation/documentation/gantt/events#actionbegin) and [actionComplete](https://ej2.syncfusion.com/documentation/gantt/events#actioncomplete) events. These events allow you to inject custom logic at different stages of the filtering workflow.

The following sample demonstrates how to handle different filtering stages using `args.requestType`:

- For **filterBeforeOpen**, customize filter operators based on `args.columnType` (number or string).
- For **filtering**, cancel the action if `args.currentFilteringColumn` is **StartDate**.
- For **filterAfterOpen**, apply background styling to the filter dialog content and footer.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/filter-events-cs1" %}
