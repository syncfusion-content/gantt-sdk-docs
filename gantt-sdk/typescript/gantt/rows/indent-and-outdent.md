---
layout: post
title: Indent and Outdent in TypeScript Gantt Chart Control | Syncfusion
description: Learn how to use indent and outdent features in the Syncfusion TypeScript Gantt Chart control to manage task hierarchy effectively.
platform: gantt-sdk
control: Indent and Outdent 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Indent and outdent in TypeScript Gantt Chart Control

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control provides built-in support for indenting and outdenting rows, allowing hierarchy levels to be adjusted within the Gantt chart.

 * **Indent** – Moves a selected row one level deeper, making it the last child of its previous row.
 * **Outdent** – Shifts a row one level up, placing it as a sibling to its parent.

To enable indent and outdent functionality, set [editSettings.allowEditing](../api/gantt/editSettings#allowediting) to **true**, inject `Edit` and `Selection` module of the control, and use either the **built-in context menu** or [toolbaritems](../api/gantt/toolbarItem) to perform indent and outdent actions.

The following sample demonstrates how to enable indent and outdent functionalities in the Gantt using the [toolbar](../api/gantt#toolbar) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent" %}
{% endif %}

## Indent and outdent a row programmatically

You can programmatically adjust a row's hierarchy in the TypeScript Gantt Chart control using the [indent](../api/gantt#indent) and [outdent](../api/gantt#outdent) methods. Before performing these actions, select the target row by calling the [selectRow](../api/gantt#selectrow) method with the appropriate row index.

The following sample demonstrates how to programmatically select row index **2** and perform indent or outdent actions using an external button click.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-externally/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-externally/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-externally" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-externally/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-externally/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-externally" %}
{% endif %}

## Retrieve Indent and outdent details

You can retrieve indent and outdent details using the [actionComplete](../api/gantt#actioncomplete) event, where the `args.requestType` value will be either **indented** or **outdented**, indicating the type of action performed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-events/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-events/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-events" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-events/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/indent-outdent-events" %}
{% endif %}

## Limitation 

* The indent and outdent feature does not support selecting and modifying multiple rows simultaneously.