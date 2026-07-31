---
layout: post
title: Adding new tasks in JavaScript Gantt control | Syncfusion
description: Learn here all about Adding new tasks in Syncfusion JavaScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Adding new tasks
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Adding new tasks in JavaScript Gantt control

Tasks can be dynamically added to the Gantt project by enabling the [editSettings.allowAdding](../../api/gantt/editSettings#allowadding) property.

## Toolbar

A row can be added to the Gantt component from the toolbar while the [editSettings.allowAdding](../../api/gantt/editSettings#allowadding) property is set to true. On clicking the toolbar add icon, you should provide the task information in the add dialog.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/rows-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/rows-cs1" %}
{% endif %}

> By default, the new row will be added to the top most row in the Gantt control.

## Context menu

A row can also be added above, below or child of the selected row by using context menu support. For this, we need to enable the property [enableContextMenu](../../api/gantt#enablecontextmenu) and inject the [ContextMenu](../../api/gantt/index-default#contextmenumodule) module into the Gantt control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/managingTasks-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/managingTasks-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/managingTasks-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/managingTasks-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/managingTasks-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/managingTasks-cs1" %}
{% endif %}

## Using method

You can add rows to the Gantt control dynamically using the [addRecord](../../api/gantt#addrecord) method and you can define the add position of the default new record by using the [rowPosition](../../api/gantt/rowPosition) property. You can also pass the `rowIndex` as an additional parameter.

- Top of all the rows.
- Bottom to all the existing rows.
- Above the selected row.
- Below the selected row.
- As child to the selected row.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/addRow-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/addRow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/addRow-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/addRow-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/addRow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/addRow-cs1" %}
{% endif %}
