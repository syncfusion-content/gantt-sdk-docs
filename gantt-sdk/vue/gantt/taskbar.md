---
layout: post
title: Taskbar in Vue Gantt Chart component | Syncfusion
description: Learn here all about Taskbar in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Taskbar 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Taskbar in Vue Gantt Chart component

## Taskbar template

You can design your own taskbars to view the tasks in Gantt using the [taskbarTemplate](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbartemplate) property. You can customize the parent taskbars and milestones with custom templates using the [parentTaskbarTemplate](https://ej2.syncfusion.com/vue/documentation/api/gantt#parenttaskbartemplate) and [milestoneTemplate](https://ej2.syncfusion.com/vue/documentation/api/gantt#milestonetemplate) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs2" %}

## Taskbar customization

### Taskbar height

The height of child taskbars and parent taskbars can be customized by using [taskbarHeight](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbarheight) property. The following code example shows how to use the [taskbarHeight](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbarheight) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs1" %}

> NOTE
The [taskbarHeight](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbarheight) value should be lower than [rowHeight](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowheight) property value and these properties accept only pixel values.



### Conditional formatting

The default taskbar UI can be replaced with custom templates by using the [queryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt/iQueryTaskbarInfoEventArgs) event. The following code example shows customizing the taskbar UI based on task progress values in Gantt Chart component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs3" %}

### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/change-gripper-icon-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/change-gripper-icon-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/change-gripper-icon-cs1" %}

## Multi Taskbar support in project view

The Gantt Chart component, supports rendering multi-taskbars in the project view. With this feature the parent taskbar, when it is collapsed, visually summarize the progress of all its child taskbars.

This feature can be enabled by setting the [enableMultiTaskbar](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#enablemultitaskbar) property value to `true`. 


The following code example shows how to use this property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/projectview-multitaskbar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/projectview-multitaskbar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/projectview-multitaskbar-cs1" %}

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [connectorLineWidth](https://ej2.syncfusion.com/vue/documentation/api/gantt#connectorlinewidth) and [connectorLineBackground](https://ej2.syncfusion.com/vue/documentation/api/gantt#connectorlinebackground) properties. The following code example shows how to use these properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs5" %}

## Tooltip

In the Gantt Chart component, you can enable or disable the mouse hover tooltip for the following UI elements using the [tooltipSettings.showTooltip](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#showtooltip) property:

* Taskbar
* Connector line
* Baseline
* Event marker

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs1" %}

> The default value of the [tooltipSettings.showTooltip](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#showtooltip) property is `true`.

## Tooltip template

### Taskbar tooltip

The default tooltip in the Gantt Chart component can be customized using the [tooltipSettings.taskbar](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#taskbar) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs4" %}

### Connector line tooltip

The default connector line tooltip in the Gantt Chart component can be customized using the [tooltipSettings.connectorLine](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#connectorline) property. The following code example shows how to use the [tooltipSettings.connectorLine](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#connectorline) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs5" %}



### Baseline tooltip

A baseline tooltip can be customized using the [tooltipSettings.baseline](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#baseline) property. The following code example shows how to customize the baseline tooltip in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/tooltip-cs7" %}

### Timeline tooltip

A timeline tooltip can be customized using the [tooltipSettings.timeline](https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings#timeline) property. This allows modifying the appearance and content of the tooltip displayed over the timeline. The following code example shows how to customize the timeline tooltip in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/timeline-tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/timeline-tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/timeline-tooltip-cs1" %}