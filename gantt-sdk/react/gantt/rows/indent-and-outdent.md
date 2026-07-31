---
layout: post
title: Indent and Outdent in React Gantt Chart Component | Syncfusion
description: Learn how to use Indent and Outdent features in the Syncfusion React Gantt Chart component to manage task hierarchy effectively.
platform: gantt-sdk
control: Indent and outdent 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Indent and Outdent in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component provides built-in support for indenting and outdenting rows, allowing hierarchy levels to be adjusted within the Gantt chart.

 * **Indent** – Moves a selected row one level deeper, making it the last child of its previous row.
 * **Outdent** – Shifts a row one level up, placing it as a sibling to its parent.

To enable indent and outdent functionality, set [editSettings.allowEditing](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowediting) to **true**, inject `Edit` and `Selection` in the Gantt Chart component, and use either the **built-in context menu** or [toolbaritems](https://ej2.syncfusion.com/react/documentation/api/gantt/toolbarItem/) to perform indent and outdent actions.

The following sample demonstrates how to enable indent and outdent functionalities in the Gantt using the [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt#toolbar) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs1" %}

## Indent and outdent a row programmatically

You can programmatically adjust a row's hierarchy in the React Gantt Chart component using the [indent](https://ej2.syncfusion.com/react/documentation/api/gantt#indent) and [outdent](https://ej2.syncfusion.com/react/documentation/api/gantt#outdent) methods. Before performing these actions, select the target row by calling the [selectRow](https://ej2.syncfusion.com/react/documentation/api/gantt#selectrow) method with the appropriate row index.

The following sample demonstrates how to programmatically select row index **2** and perform indent or outdent actions using an external button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs2" %}

## Retrieve Indent and outdent details

You can retrieve indent and outdent details using the [actionComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#actioncomplete) event, where the `args.requestType` value will be either **indented** or **outdented**, indicating the type of action performed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/indent-outdent-cs3" %}

## Limitation 

* The indent and outdent feature does not support selecting and modifying multiple rows simultaneously.