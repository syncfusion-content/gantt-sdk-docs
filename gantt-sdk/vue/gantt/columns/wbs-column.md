---
layout: post
title: Work Breakdown Structure (WBS) in Vue Gantt Chart | Syncfusion
description: Learn how to integrate and manage WBS codes in the Syncfusion Vue Gantt Chart component to improve task hierarchy visualization and project tracking.
control: WBS Column
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Work Breakdown Structure (WBS) in Vue Gantt Chart Component

The Work Breakdown Structure (WBS) organizes project tasks hierarchically in the Gantt Chart component by assigning unique codes to each task. This system enhances visualization and management by clearly reflecting task relationships and levels. It is especially useful in complex environments such as construction projects or enterprise-scale software development.

## Configuration and implementation

To enable and configure WBS in your Gantt Chart component:

- **Enable WBS Codes**: Set the [enableWBS](https://ej2.syncfusion.com/vue/documentation/api/gantt#enablewbs) property to `true` to automatically generate unique task codes and their predecessors.
- **Auto-Update Codes**: Set the [enableAutoWbsUpdate](https://ej2.syncfusion.com/vue/documentation/api/gantt#enableautowbsupdate) property to `true` to maintain accurate WBS codes during actions like sorting, filtering, editing, or drag-and-drop.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/wbscolumn-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/wbscolumn-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/wbscolumn-cs1" %}

## Managing WBS code updates

For better performance, you can control when WBS codes are updated by using the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/gantt#actionbegin) and [dataBound](https://ej2.syncfusion.com/vue/documentation/api/gantt#databound) events. This is particularly useful during actions such as dragging and dropping rows.

In the following example, WBS auto-update is enabled only during the **row drag and drop** action using these events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/wbscolumn-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/wbscolumn-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/wbscolumn-cs2" %}

## Limitations

The WBS feature has the following limitations in the Vue Gantt Chart component:

- Editing the WBS code and WBS predecessor columns is not supported.
- Load on demand is not supported with the WBS feature.
- WBS Code and WBS Predecessor fields cannot be mapped directly from the data source.