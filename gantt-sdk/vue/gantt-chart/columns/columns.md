---
layout: post
title: Columns in Vue Gantt Chart Component | Syncfusion
description: Learn here all about columns in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Columns
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Columns in Vue Gantt Chart Component

Columns display information from the bound data source, and you can edit column values to update task details through the TreeGrid. Operations such as sorting, filtering, and searching can be performed based on column definitions. To display a Gantt Chart column, the [field](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#field) property should be mapped from the data source to the column.

> If the column [field](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#field) is not specified in the data source, the column values will be empty.

The [treeColumnIndex](https://ej2.syncfusion.com/vue/documentation/api/gantt#treecolumnindex) property is used to define the expander column in the Gantt Chart component to expand and collapse child rows.

To learn about customizing Gantt Chart column data, you can check this video:
{% youtube "https://www.youtube.com/watch?v=LvB4lvlm1J8" %}

## Defining columns

Using the [columns](https://ej2.syncfusion.com/vue/documentation/api/gantt#columns) property, you can define the columns in the Gantt Chart. If columns are not defined, default columns will be rendered based on the mapped data source fields in the [taskFields](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskfields) property. Refer to the following code example for defining columns with widths.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs14" %}

## Custom column header

The column header text can be defined using the [headerText](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#headertext) property. You can also customize column headers using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#headertemplate) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs15" %}

## Format

To format cell values based on a specific culture, use the [columns.format](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#format) property. The Gantt Chart component uses the [Internationalization](../../common/internationalization) library to format `number` and `date` values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs16" %}

> By default, number and date values are formatted in the `en-US` culture.

### Number formatting

Number or integer values can be formatted using the following format strings:

| Format | Description     | Remarks                                                       |
| ------ | --------------- | ------------------------------------------------------------- |
| N      | Numeric type    | Followed by precisions like N2, N3, etc.                      |
| C      | Currency type   | Followed by precisions like C2, C3, etc.                      |
| P      | Percentage type | Expects a value from 0 to 1. Example: `0.2` formats to `20%`. |

### Date formatting

You can format date values using built‑in or custom date format strings.

For built‑in date formats, specify the [columns.format](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#format) value as a string (e.g., `yMd`).

You can also use custom format objects. Examples:

| Format                                                | Formatted value        |
| ----------------------------------------------------- | ---------------------- |
| { type: 'date', format: 'dd/MM/yyyy' }                | 04/07/1996             |
| { type: 'date', format: 'dd.MM.yyyy' }                | 04.07.1996             |
| { type: 'date', skeleton: 'short' }                   | 7/4/96                 |
| { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }    | 04/07/1996 12:00 AM    |
| { type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs17" %}

## Change tree/expander column

The tree/expander column contains icons to expand or collapse parent records. You can define the tree column index using the [treeColumnIndex](https://ej2.syncfusion.com/vue/documentation/api/gantt#treecolumnindex) property. Its default value is `0`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs19" %}

## Show or hide columns dynamically

You can show or hide Gantt Chart columns dynamically using external buttons by invoking the [showColumn](https://ej2.syncfusion.com/vue/documentation/api/gantt#showcolumn) or [hideColumn](https://ej2.syncfusion.com/vue/documentation/api/gantt#hidecolumn) methods.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs20" %}

## Controlling Gantt Chart column actions

You can enable or disable Gantt Chart actions for a particular column by using the following properties:  
[allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowfiltering),  
[allowSorting](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowsorting),  
[allowReordering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowreordering),  
[allowEditing](https://ej2.syncfusion.com/vue/documentation/api/gantt#editsettings).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs2" %}

## Column type

The column type can be specified using the `columns.type` property. It specifies the type of data bound to the column.

If a `format` is defined, the column uses `type` to select an appropriate formatting option such as [number](https://ej2.syncfusion.com/vue/documentation/common/internationalization#number-formatting) or [date](https://ej2.syncfusion.com/vue/documentation/common/internationalization#manipulating-datetime).

Gantt Chart columns support the following types:

- string
- number
- boolean
- date
- datetime

> If `type` is not defined, it is inferred from the first record of the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/gantt#datasource).  
> If the first record contains a null or blank value, you must explicitly define the column `type`.
