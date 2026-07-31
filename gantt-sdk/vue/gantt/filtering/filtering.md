---
layout: post
title: Filtering in Vue Gantt Chart Component | Syncfusion
description: Learn how to enable and use filtering in the Vue Gantt Chart to refine data with menu filters, search, hierarchy modes, and custom options.
control: Filtering
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filtering in Vue Gantt Chart Component

Filtering allows you to view specific or related records based on filter criteria. Filtering in the Gantt Chart component can be done using the **filter menu** and **toolbar search**.

To enable filtering, set the [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowfiltering) property to `true`.  
Menu filtering can be configured using the [filterSettings](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings) property, and toolbar search can be configured using the [searchSettings](https://ej2.syncfusion.com/vue/documentation/api/gantt/searchSettings) property.

To use filtering, inject the [Filter](https://ej2.syncfusion.com/vue/documentation/api/gantt#filtermodule) module in the `provide` section.

## Filter hierarchy modes

The Gantt Chart component offers multiple hierarchy modes through the [filterSettings.hierarchyMode](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings#hierarchymode) property:

- **Parent**: Default mode. Shows filtered records along with their parent records.
- **Child**: Shows filtered records along with their child records.
- **Both**: Shows filtered records along with both parent and child records.
- **None**: Shows only the filtered records.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/filtering-cs3" %}

### Initial filter

To apply filtering during initial rendering, define filter predicates using the [filterSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings#columns) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/filtering-cs4" %}

### Filter operators

The filter operator for a column can be defined using the `filterSettings.columns.operator` property.

| Operator             | Description                                                          | Supported Types                     |
| -------------------- | -------------------------------------------------------------------- | ----------------------------------- |
| `startswith`         | Checks if the value begins with the specified text.                  | String                              |
| `endswith`           | Checks if the value ends with the specified text.                    | String                              |
| `contains`           | Checks if the value contains the specified text.                     | String                              |
| `equal`              | Checks if the value equals the specified value.                      | String \| Number \| Boolean \| Date |
| `notequal`           | Checks if the value does **not** equal the specified value.          | String \| Number \| Boolean \| Date |
| `greaterthan`        | Checks if the value is greater than the specified value.             | Number \| Date                      |
| `greaterthanorequal` | Checks if the value is greater than or equal to the specified value. | Number \| Date                      |
| `lessthan`           | Checks if the value is less than the specified value.                | Number \| Date                      |
| `lessthanorequal`    | Checks if the value is less than or equal to the specified value.    | Number \| Date                      |

> By default, `filterSettings.columns.operator` is set to **equal**.

### Diacritics

By default, the Gantt Chart component **ignores diacritic characters** while filtering.  
To consider diacritics, set [filterSettings.ignoreAccent](https://ej2.syncfusion.com/vue/documentation/api/gantt/filterSettings#ignoreaccent) to `true`.

Example: Type **Project** in the **TaskName** column to filter diacritic characters.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/filtering-cs5" %}

## Filtering a specific column by method

You can filter a specific column dynamically using the [filterByColumn](https://ej2.syncfusion.com/vue/documentation/api/gantt#filterbycolumn) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/filtering-cs6" %}

## Clear filtered columns

You can clear all filtering conditions using the [clearFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#clearfiltering) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/filtering-cs7" %}

## Custom component in filter menu

You can add custom filter components using the [column.filter.ui](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#filter) property.

To implement a custom filter UI, define:

- `create`: Creates a custom component
- `write`: Writes events to the custom component
- `read`: Reads the filter value

Below is an example where a dropdown is used as a custom filter for the **TaskName** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/filtering-cs8" %}
