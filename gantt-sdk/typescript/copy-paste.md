---
layout: post
title: Copy and Paste in TypeScript Gantt Chart | Syncfusion
description: Learn how to enable and use the copy and paste feature in Syncfusion TypeScript Gantt Chart to duplicate tasks and task hierarchies.
keywords: typescript gantt copy paste, gantt task copy, gantt task paste, duplicate tasks, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/copy-paste
platform: gantt-sdk
control: Copy and Paste - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

## Copy and Paste in TypeScript Gantt Chart

The Copy and Paste feature lets users duplicate selected tasks, including their child tasks, and insert the copies below a selected row. Users can reuse existing tasks and task structures without recreating them.

### Enabling copy and paste

Copy and paste is disabled by default. To enable it:

- Set [allowTaskCopyPaste](https://ej2.syncfusion.com/documentation/api/gantt/#allowtaskcopypaste) to **true**.
- Keep [allowSelection](https://ej2.syncfusion.com/documentation/api/gantt/#allowselection) enabled, and use a row-based selection mode (`Row` or `Both`). Copy and paste do nothing when [selectionSettings.mode](https://ej2.syncfusion.com/documentation/api/gantt/selectionsettings) is `Cell`.
- To copy several tasks at once, set [selectionSettings.type](https://ej2.syncfusion.com/documentation/api/gantt/selectionsettings) to **Multiple**. A single task can be copied without it.
- Inject the `Edit` module and set `editSettings.allowAdding` to **true**. Pasting adds new records, so it needs both.

The following example demonstrates enabling task copy and paste in the Gantt control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/copypaste-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/copypaste-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/copypaste-cs1" %}

Once enabled, users can copy and paste tasks using keyboard shortcuts.

### Copying and pasting tasks

Select one or more task rows and use the following keyboard shortcuts:

| Action | Windows/Linux | macOS |
|----------|----------|----------|
| Copy selected task(s) | Ctrl + C | Command + C |
| Paste copied task(s) | Ctrl + V | Command + V |

When tasks are copied and pasted:

- Selected tasks are duplicated as new records.
- Parent-child hierarchy is preserved for copied task collections.
- Child records belonging to selected parent tasks are included in the copied content.
- Task field values are copied to the newly created records.
- Multiple tasks can be copied and pasted in a single operation.

### Resource view

When [viewType](https://ej2.syncfusion.com/documentation/api/gantt/#viewtype) is `ResourceView`:

- Resource parent rows can't be copied. If any selected row is a resource parent, the copy is cancelled.
- Pasted tasks are assigned to the resource of the row they are pasted below.

### Keyboard interaction

- **Ctrl + C** (**Command + C** on macOS): copies the selected task or tasks.
- **Ctrl + V** (**Command + V** on macOS): pastes the copied task or tasks below the selected row.

The shortcuts are ignored while a cell is being edited.

### Limitations

- Dependencies are not copied. Predecessor and successor links of the copied tasks are removed from the new records, including links between two copied tasks. Set them again after pasting if you need them.
- Copy and paste work only through the keyboard shortcuts. There is no built-in touch gesture or toolbar button for them.
- Copy and paste do not work with cell selection mode.

For example, if two tasks are connected by a Finish-to-Start dependency, copying and pasting both creates two new tasks with no link between them.