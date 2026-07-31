---
layout: post
title: Top Tier and Bottom Tier in Vue Gantt Chart Component | Syncfusion
description: Learn here all about Top tier and bottom tier in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Top tier and bottom tier
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Top Tier and Bottom Tier in Vue Gantt Chart Component

The Gantt Chart component contains two tiers layout in timeline, you can customize the top tier and bottom tier using the [topTier](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings#toptier) and [bottomTier](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings#bottomtier) properties. Timeline tier's unit can be defined by using the [unit](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#unit) property, and the [format](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#format) property is used to define the date format of timeline cell. The [count](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#count) property is used to define the number of units to be combined as a single cell and the [formatter](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#formatter) property is used to define the custom method to format the date value of timeline cell.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/timeline-cs8" %}

## Combining timeline cells

In the Gantt Chart component, the timeline cells in top and bottom tiers can be combined with number of timeline units. This can be achieved by using the [topTier.count](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#count) and [bottomTier.count](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#count) properties. Refer to the following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/timeline-cs9" %}

## Format value of timeline cell

In the Gantt Chart component, you can format the value of top and bottom timeline cells using the standard date format string or the custom formatter method. This can be done using the [topTier.format](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#format), [topTier.formatter](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#formatter), [bottomTier.format](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#format) and [bottomTier.formatter](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#formatter) properties. The following example shows how to use the formatter method for timeline cells.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/timeline-cs10" %}

## Timeline cell width

In the Gantt Chart component, you can define the width value of timeline cell using the [timelineSettings.timelineUnitSize](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings#timelineunitsize) property. This value will be set to the bottom timeline cell, and the width value of top timeline cell will be calculated automatically based on bottom tier cell width using the [topTier.unit](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings#unit) and [timelineSettings.timelineUnitSize](https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings#timelineunitsize) properties. Refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/timeline-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/timeline-cs11" %}
