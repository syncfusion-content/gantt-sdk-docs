---
layout: post
title: Virtual Scroll in Vue Gantt Chart | Syncfusion
description: Learn how to enable virtual scrolling in Syncfusion Vue Gantt Chart for efficient rendering of large datasets.
keywords: vue gantt virtual scroll, row virtualization, large data, performance, scrolling, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/virtual-scrolling
platform: gantt-sdk
control: Virtual Scroll - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Implementing Virtual Scrolling for Performance in Vue Gantt Chart

Virtual Scroll support in Gantt allows you to load large amount of data without performance degradation. To enable Virtual Scrolling, you need to inject `VirtualScroll` module in Gantt.

## Row virtualization

Row virtualization allows you to load and render a large number of tasks in Gantt with effective performance. In this mode, all tasks are fetched initially from the datasource and rendered in the DOM within a compact viewport area.

The number of records displayed in the Gantt is determined by the height.

This mode can be enable by setting the `enableVirtualization` property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs1" %}

## Configure dom virtualization

Dom virtualization improves scrolling performance when a Gantt chart contains many tasks. Rather than keeping every task row in the dom at once, it renders the rows in the viewport along with a buffer of nearby rows. Limiting the number of rendered row elements reduces dom workload and helps scrolling remain smooth.

### Enable dom virtualization

Dom virtualization is enabled by setting the [enableDomVirtualization](https://ej2.syncfusion.com/vue/documentation/api/gantt#enabledomvirtualization) property to **true**. Inject `DomVirtualization` module in Gantt to enable the feature.

Use the [domVirtualizationSettings](https://ej2.syncfusion.com/vue/documentation/api/gantt/domVirtualizationSettings) property to configure the number of buffer rows. The `rowBuffer` property specifies the number of additional rows rendered around the visible rows and defaults to `20`.

The following example enables dom virtualization for a large dataset:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs4" %}

## Timeline virtualization

Timeline virtualization allows you to load a data source having large timespan with high performance. Initially, it renders the timeline with thrice the width of the gantt element, while other timeline cells render on-demand during horizontal scrolling.

This mode can be enable by setting the [enableTimelineVirtualization](https://ej2.syncfusion.com/vue/documentation/api/gantt#enabletimelinevirtualization) property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/virtual-scroll-cs3" %}

## Limitations for virtual scroll

* Due to the element height limitation in browsers, the maximum number of records loaded is limited by the browser capacity.
* Cell selection is not persisted due to on-demand rendering.
* The number of records rendered will be determined by the `height` property.
* It is necessary to mention the height of the Gantt in pixels when enabling Virtual Scrolling.
