---
layout: post
title: Copy and Paste in Angular Gantt Chart | Syncfusion
description: Learn how to enable and use the copy and paste feature in Syncfusion Angular Gantt Chart to duplicate tasks and task hierarchies.
keywords: angular gantt copy paste, gantt task copy, gantt task paste, duplicate tasks, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/angular/gantt-chart/copy-paste
platform: gantt-sdk
control: Copy and Paste - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

## Copy and Paste in Angular Gantt Chart

The Copy and Paste feature lets users copy selected tasks, including their child tasks, and insert the copies below a selected row. Users can reuse existing tasks and task structures without recreating them.

### Enabling copy and paste

Task copy and paste functionality can be enabled by setting the **allowTaskCopyPaste** property to **true**. This feature operates with row-based selection and requires **allowSelection** to be enabled, with **selectionSettings.mode** configured as **Row** or **Both**. Copy and paste actions are not supported when the selection mode is set to **Cell**. To copy multiple tasks simultaneously, configure **selectionSettings.type** as **Multiple**; otherwise, only individual tasks can be copied.

To enable copy/paste operations, inject the **EditService**, and set **editSettings.allowAdding** to **true**, as pasted tasks are added as new records.

**Ctrl + C** (**Command + C** on macOS): copies the selected task or tasks.
**Ctrl + V** (**Command + V** on macOS): pastes the copied task or tasks below the selected row.

The following example demonstrates enabling task copy and paste in the Gantt control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/how-to/copy-paste-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/gantt-chart/how-to/copy-paste-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/gantt-chart/how-to/copy-paste-cs1" %}

Once enabled, users can copy and paste tasks using keyboard shortcuts.

### Limitations

Copy and paste work only through the keyboard shortcuts. There is no built-in touch gesture or toolbar button for them.
Copy and paste do not work with cell selection mode.
