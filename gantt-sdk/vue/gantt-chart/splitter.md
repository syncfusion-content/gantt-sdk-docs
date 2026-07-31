---
layout: post
title: Splitter in Vue Gantt Chart Component | Syncfusion
description: Learn here all about Splitter in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Spitter
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Splitter in Vue Gantt Chart Component

In the Gantt Chart component, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt Chart component using the [splitterSettings](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the component. The [splitterSettings.position](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [splitterSettings.columnIndex](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [splitterSettings.view](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings#view) property. The following list is the possible values for this property:

- `Default`: Shows Grid side and Gantt side.
- `Grid`: Shows Grid side alone in Gantt.
- `Chart`: Shows chart side alone in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/appearance-customization-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/appearance-customization-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/appearance-customization-cs8" %}

## Change splitter position dynamically

In Gantt, we can change the splitter position dynamically by using [setSplitterPosition](https://ej2.syncfusion.com/vue/documentation/api/gantt#setsplitterposition) method. Either We can change the splitter position with splitter position or columnIndex values by passing these values as arguments to [setSplitterPosition](https://ej2.syncfusion.com/vue/documentation/api/gantt#setsplitterposition) method. The following code example shows how to use this methods.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/appearance-customization-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/appearance-customization-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/appearance-customization-cs9" %}
