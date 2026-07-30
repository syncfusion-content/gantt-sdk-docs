---
layout: post
title: Searching in React Gantt Chart Component | Syncfusion
description: Learn here all about Searching in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Searching 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Searching in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component allows quick filtering of records based on search input, improving access to relevant data in large datasets.

To enable search functionality, include the **Search** item in the [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt#toolbar) configuration and inject both `Filter` service and `Toolbar` service into the component's `providers` array.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs1" %}

## Initial search

The React Gantt component allows applying search criteria during initial load using the [searchSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings) property.  

To configure this feature, define the following properties:

| Property       | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `fields`       | Defines the fields where the search should be applied.        |
| `operator`     | Sets the condition for matching (e.g., `contains`, `equals`). |
| `key`          | Specifies the value to search for.                            |
| `ignoreCase`   | Determines if the search should be case-insensitive.          |
| `ignoreAccent` | Ignores diacritic characters or accents during the search.    |

The following sample demonstrates an initial search where `fields` is set to **TaskName**, `operator` is **contains**, `key` is **Pröduct**, with `ignoreCase` set to **true** and `ignoreAccent` set to **true** (e.g., typing "product" will match "Pröduct").

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs2" %}

> By default, Gantt searches all the bound column values. To customize this behavior, define the [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings#fields) property.

## Search operators

Search operators specify the type of comparison used during a search. These are configured through the [searchSettings.operator](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings#operator) property.

The following operators are supported in searching:

| Operator   | Description                                           |
| ---------- | ----------------------------------------------------- |
| startsWith | Matches values that begin with the specified text.    |
| endsWith   | Matches values that end with the specified text.      |
| contains   | Matches values that include the specified text.       |
| equal      | Matches values that exactly match the specified text. |
| notEqual   | Matches values that do not match the specified text.  |

> The default value for `searchSettings.operator` is `contains`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs6" %}

## Search by external button

To perform a search from an external button in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt, call the [search](https://ej2.syncfusion.com/react/documentation/api/gantt#search) method programmatically with the desired keyword.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs3" %}

> You should set the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowfiltering) property to **true** for searching the content externally.

## Search specific columns

To search specific columns in the Gantt Chart component, use the [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings#fields) property. This allows you to define which column fields should be included in the search, instead of searching across all columns by default.

This following sample demonstrates searching only within the **TaskName** and **Duration** columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs4" %}

## Clear search by external button

To clear the search results in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt from an external button, set the [searchSettings.key](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings#key) property to an empty string. 
 
Alternatively, you can invoke the [search](https://ej2.syncfusion.com/react/documentation/api/gantt#search) method with an empty string to reset the search.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs5" %}

## Search on each key stroke

You can enable instant filtering in the Gantt Chart component by calling the [search](https://ej2.syncfusion.com/react/documentation/api/gantt#search) method on each `keyup` event.  This can be configured within the component’s [created](https://ej2.syncfusion.com/react/documentation/gantt/events#created) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs7" %}

## Highlight the search text

The React Gantt Chart component supports highlighting matched search text within grid cells to improve visibility of search results. 

This can be achieved using the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querycellinfo) event, which is triggered during cell rendering. Within this event, check if the cell belongs to the target column, retrieve the cell value and search keyword, and use the `includes` method to detect matches. If a match is found, wrap the matched text in a `<span>` with a custom CSS class for styling.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/searching-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/searching-cs8" %}