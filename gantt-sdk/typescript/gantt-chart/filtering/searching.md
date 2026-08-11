---
layout: post
title: Searching in TypeScript Gantt Chart | Syncfusion
description: Learn how to enable quick search in Syncfusion TypeScript Gantt Chart to quickly find tasks and data across the project timeline.
keywords: TypeScript gantt searching, search tasks, text search, find tasks, search functionality, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/filtering/searching
platform: gantt-sdk
control: Searching - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Implementing Quick Search for Task Data in Typescript Gantt Chart

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control allows quick filtering of records based on search input, improving access to relevant data in large datasets.

To enable search functionality, include the **Search** item in the [toolbar](https://ej2.syncfusion.com/documentation/api/gantt#toolbar) configuration and inject both `Filter` service and `Toolbar` service into the control's `providers` array.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs1" %}

## Initial search

The TypeScript Gantt control allows applying search criteria during initial load using the [searchSettings](https://ej2.syncfusion.com/documentation/api/gantt/searchsettings) property.

To configure this feature, define the following properties:

| Property       | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `fields`       | Defines the fields where the search should be applied.        |
| `operator`     | Sets the condition for matching (e.g., `contains`, `equals`). |
| `key`          | Specifies the value to search for.                            |
| `ignoreCase`   | Determines if the search should be case-insensitive.          |
| `ignoreAccent` | Ignores diacritic characters or accents during the search.    |

The following sample demonstrates an initial search where `fields` is set to **TaskName**, `operator` is **contains**, `key` is **Pr�duct**, with `ignoreCase` set to **true** and `ignoreAccent` set to **true** (e.g., typing "product" will match "Pr�duct").

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs2" %}

> By default, Gantt searches all the bound column values. To customize this behavior, define the [searchSettings.fields](https://ej2.syncfusion.com/documentation/api/gantt/searchSettings#fields) property.

## Search operators

Search operators specify the type of comparison used during a search. These are configured through the [searchSettings.operator](https://ej2.syncfusion.com/documentation/api/gantt/searchSettings#operator) property.

The following operators are supported in searching:

| Operator   | Description                                           |
| ---------- | ----------------------------------------------------- |
| startsWith | Matches values that begin with the specified text.    |
| endsWith   | Matches values that end with the specified text.      |
| contains   | Matches values that include the specified text.       |
| equal      | Matches values that exactly match the specified text. |
| notEqual   | Matches values that do not match the specified text.  |

> The default value for `searchSettings.operator` is `contains`.

## Search by external button

To search the Gantt records from an external button, invoke the [search](https://ej2.syncfusion.com/documentation/api/gantt#search) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/externalSearch-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/externalSearch-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/externalSearch-cs1" %}

> You should set the [allowFiltering](https://ej2.syncfusion.com/documentation/api/gantt#allowfiltering) property to **true** for searching the content externally.

## Search specific columns

To search specific columns in the Gantt Chart control, use the [searchSettings.fields](https://ej2.syncfusion.com/documentation/api/gantt/searchSettings#fields) property. This allows you to define which column fields should be included in the search, instead of searching across all columns by default.

This following sample demonstrates searching only within the **TaskName** and **Duration** columns.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs3" %}

## Clear search by external button

To clear the search results in the TypeScript Gantt from an external button, set the [searchSettings.key](https://ej2.syncfusion.com/documentation/api/gantt/searchSettings#key) property to an empty string.

Alternatively, you can invoke the [search](https://ej2.syncfusion.com/documentation/api/gantt#search) method with an empty string to reset the search.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clear-search-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clear-search-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/clear-search-cs1" %}

## Search on each key stroke

You can enable instant filtering in the Gantt Chart control by calling the [search](https://ej2.syncfusion.com/documentation/api/gantt#search) method on each `keyup` event. This can be configured within the component�s [created](https://ej2.syncfusion.com/documentation/gantt/events#created) event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs4" %}

## Highlight the search text

The TypeScript Gantt Chart control supports highlighting matched search text within grid cells to improve visibility of search results.

This can be achieved using the [queryCellInfo](https://ej2.syncfusion.com/documentation/api/gantt#querycellinfo) event, which is triggered during cell rendering. Within this event, check if the cell belongs to the target column, retrieve the cell value and search keyword, and use the `includes` method to detect matches. If a match is found, wrap the matched text in a `<span>` with a custom CSS class for styling.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/searching-cs5" %}
