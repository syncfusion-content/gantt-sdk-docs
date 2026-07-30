---
layout: post
title: Filtering in React Gantt Chart Component | Syncfusion
description: Learn here all about filtering in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Filtering 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filtering in React Gantt Chart Component

Filtering allows you to view specific or related records based on defined criteria. The Gantt Chart component supports options like filter menu, Excel-like filtering, and toolbar search to narrow down visible data.

To enable filtering, set [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowfiltering) to **true** in the Gantt configuration. You can define filter options using [filterSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings) and configure toolbar search using [searchSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings) property.

To activate filtering functionality, inject the `Filter` service in the `providers` of the component.

> * The filtering UI is rendered based on the column type, allowing data to be filtered using appropriate operators.
> * The filter menu is enabled by default. To disable the filtering option for a specific column, set the `allowFiltering` property of the `column` to **false**.

## Apply initial filter on load

To apply filtering during the initial render of the React Gantt Chart component, define the filter conditions using a **predicate** object within the [filterSettings.columns](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings#columns) property.

The following sample demonstrates how to apply an initial filter where **TaskName** starts with **Identify** and **TaskID** equals **2**, using a `Predicate` condition set to **and**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/initialfilter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/initialfilter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/initialfilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/initialfilter-cs1" %}

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

The React Gantt Chart component supports multiple filtering modes, which can be configured using the [filterSettings.hierarchyMode](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings#hierarchymode) property. The available modes are:

- **Parent**: This is the default mode. Filtered records are displayed along with their parent records. If no parent exists, only the filtered records are shown.

- **Child**: Displays filtered records along with their child records. If no child exists, only the filtered records are shown.

- **Both**: Displays filtered records along with both parent and child records. If neither exists, only the filtered records are shown.

- **None**: Displays only the filtered records without any parent or child context.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filterhierarchy-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filterhierarchy-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filterhierarchy-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filterhierarchy-cs1" %}

## Enable diacritic-sensitive filtering

By default, the React Gantt Chart component ignores diacritic characters during filtering. To enable filtering with diacritic sensitivity, set the [filterSettings.ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings#ignoreaccent) property to **true**.

The following sample demonstrates this behavior: when filtering the **TaskName** column, entries containing diacritic characters (e.g., “Próject”, “Projéct”) will be matched if you enter the base text **Project**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/diacriticsfilter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/diacriticsfilter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/diacriticsfilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/diacriticsfilter-cs1" %}

## Programmatic filtering using method

You can apply dynamic filtering in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt by using the [filterByColumn](https://ej2.syncfusion.com/react/documentation/api/gantt#filterbycolumn) method. This enables programmatic filtering without relying on UI interactions.

The following sample demonstrates how to filter the **TaskName** and **TaskID** columns using single and multiple values. The filtering is triggered through an external button click by calling the `filterByColumn` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filterbymethod-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filterbymethod-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filterbymethod-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filterbymethod-cs1" %}

## Clear all applied filters

You can clear all the filtering conditions applied in the Gantt Chart component by using the [clearFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#clearfiltering) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/clearfilter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/clearfilter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/clearfilter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/clearfilter-cs1" %}

## Set different filter types per column

You can enable different filter types for individual columns in the Gantt Chart component by setting the `column.filter.type` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filtering-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filtering-cs6" %}

## Customize filtering behavior using events

You can customize the filtering behavior in the  Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt using the [actionBegin](https://ej2.syncfusion.com/react/documentation/gantt/events#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#actioncomplete) events. These events allow you to inject custom logic at different stages of the filtering workflow.

The following sample demonstrates how to handle different filtering stages using `args.requestType`:
  
- For **filterBeforeOpen**, customize filter operators based on `args.columnType` (number or string).  
- For **filtering**, cancel the action if `args.currentFilteringColumn` is **StartDate**.  
- For **filterAfterOpen**, apply background styling to the filter dialog content and footer.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-events-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/filter-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/filter-events-cs1" %}
