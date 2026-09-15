---
layout: post
title: Taskbar in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to customize and manage taskbars in Syncfusion ASP.NET MVC Gantt Chart including taskbar templates, progress tracking, and drag-and-drop.
keywords: asp.net mvc gantt taskbar, task bars, taskbar styling, progress bar, drag taskbar, taskbar customization, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/taskbar
platform: gantt-sdk
control: Taskbar - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Taskbar Customization with Templates in ASP.NET MVC Gantt Chart

## Taskbar template

You can design your own taskbars to view the tasks in Gantt using the [`TaskbarTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_TaskbarTemplate) property. You can also map the template script element’s ID value to this property, and customize the parent taskbars and milestones with custom templates using the [`ParentTaskbarTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ParentTaskbarTemplate) and [`MilestoneTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_MilestoneTemplate) properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/customizations/taskbarTemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="TaskbarTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/customizations/taskbarTemplate/taskbarTemplate.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](./images/taskbarTemplate1.png)

## Taskbar customization

### Taskbar Height

The height of child taskbars and parent taskbars can be customized using the [`TaskbarHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_TaskbarHeight) property. The following code example shows how to use the property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/appearance-and-styling/taskbarHeight/razor %}
{% endhighlight %}
{% highlight c# tabtitle="TaskbarHeight.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/appearance-and-styling/taskbarHeight/taskbarHeight.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](./images/taskbarHeight.png)

N> The [`TaskbarHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_TaskbarHeight) value should be lower than the [`RowHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_RowHeight) property value and these properties accept only pixel values.

### Conditional formatting

The default taskbar UI can be replaced with custom templates using the [`QueryTaskbarInfo`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_QueryTaskbarInfo) event. The following code example shows customizing the taskbar UI based on task progress values in the Gantt control.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/appearance-and-styling/conditionalFormatting/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ConditionalFormatting.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/appearance-and-styling/conditionalFormatting/conditionalFormatting.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](./images/conditionalFormatting.png)

### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/change-gripper-icon/razor %}
{% endhighlight %}
{% highlight c# tabtitle="data.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/change-gripper-icon/data.cs %}
{% endhighlight %}
{% endtabs %}

![Change Gripper Icon in Taskbar](./images/change-gripper-icon.png)

## Multi Taskbar support in project view

The Gantt component, supports rendering multi-taskbars in the project view. With this feature the parent taskbar, when it is collapsed, visually summarize the progress of all its child taskbars.

This feature can be enabled by setting the [EnableMultiTaskbar](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_EnableMultiTaskbar) property value to `true`.

The following code example shows how to use this property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/projectview-multitaskbar-cs1/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Projectview-multitaskbar.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/projectview-multitaskbar-cs1/Projectview-multitaskbar.cs %}
{% endhighlight %}
{% endtabs %}

![Multitaskbar support in projectview](./images/project-multitaskbar.png)

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [`ConnectorLineWidth`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ConnectorLineWidth) and [`ConnectorLineBackground`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ConnectorLineBackground) properties. The following code example shows how to use these properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/appearance-and-styling/dependencyFormatting/razor %}
{% endhighlight %}
{% highlight c# tabtitle="DependencyFormatting.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/appearance-and-styling/dependencyFormatting/dependencyFormatting.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](./images/dependencyFormatting.png)

## Tooltip

In the Gantt control, you can enable or disable the mouse hover tooltip for the following UI elements using the [`TooltipSettings.ShowTooltip`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttTooltipSettings.html#Syncfusion_EJ2_Gantt_GanttTooltipSettings_ShowTooltip) property:

- Taskbar
- Connector line
- Baseline
- Event marker

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/enableTooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EnableTooltip.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/enableTooltip/enableTooltip.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](./images/taskbar-tooltip.png)

Taskbar Tooltip

![Alt text](./images/dependency-tooltip.png)

Dependency Tooltip

![Alt text](./images/baseline-tooltip.png)

Baseline Tooltip

![Alt text](./images/event-marker-tooltip.png)

Event Marker Tooltip

N> The default value of the [`TooltipSettings.ShowTooltip`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttTooltipSettings.html#Syncfusion_EJ2_Gantt_GanttTooltipSettings_ShowTooltip) property is true.

## Tooltip template

### Taskbar tooltip

The default tooltip in the Gantt control can be customized using the [`TooltipSettings.Taskbar`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttTooltipSettings.html#Syncfusion_EJ2_Gantt_GanttTooltipSettings_Taskbar) property. You can map the template script element’s ID value or template string directly to this property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/taskbarTemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="TaskbarTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/taskbarTemplate/taskbarTemplate.cs %}
{% endhighlight %}
{% endtabs %}

The below screenshot shows the output of above code example.

![Alt text](./images/taskbarTemplate.png)

### Baseline tooltip

A baseline tooltip can be customized using the [`TooltipSettings.Baseline`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttTooltipSettings.html#Syncfusion_EJ2_Gantt_GanttTooltipSettings_Baseline) property. The following code example shows how to customize the baseline tooltip in Gantt.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/baselineTemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="BaselineTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/baselineTemplate/baselineTemplate.cs %}
{% endhighlight %}
{% endtabs %}

The following screenshot shows the template for baseline in Gantt.

![Alt text](./images/baselineTemplate.png)

### Connector line tooltip

The default connector line tooltip in the Gantt control can be customized using the [`TooltipSettings.ConnectorLine`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttTooltipSettings.html#Syncfusion_EJ2_Gantt_GanttTooltipSettings_ConnectorLine) property. You can map the value to this property as template script element ID or template string format. The following code example shows how to use the [`TooltipSettings.ConnectorLine`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttTooltipSettings.html#Syncfusion_EJ2_Gantt_GanttTooltipSettings_ConnectorLine) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/dependencyLineTemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="DependencyLineTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/dependencyLineTemplate/dependencyLineTemplate.cs %}
{% endhighlight %}
{% endtabs %}

The below screenshot shows the output of above code example.

![Alt text](./images/dependencyLineTemplate.png)

### Timeline tooltip

A timeline tooltip can be customized using the [`TooltipSettings.Timeline`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttTooltipSettings.html#Syncfusion_EJ2_Gantt_GanttTooltipSettings_Timeline) property. This allows modifying the appearance and content of the tooltip displayed over the timeline. The following code example shows how to customize the timeline tooltip in Gantt.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/timelineTooltipTemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="TimelineTooltipTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/tooltip/timelineTooltipTemplate/timelineTooltipTemplate.cs %}
{% endhighlight %}
{% endtabs %}

The below screenshot shows the output of above code example.

![Alt text](./images/tooltiptemplate.png)
