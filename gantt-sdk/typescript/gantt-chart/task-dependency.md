---
layout: post
title: Task Dependency in TypeScript Gantt Chart Control | Syncfusion
description: Learn here all about task dependency in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Task Dependency
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Dependency in TypeScript Gantt Chart Control

Task dependency in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control establishes relationships between tasks, affecting scheduling where changes to predecessors impact successors. Dependencies are categorized into four types—Start to Start (SS), Start to Finish (SF), Finish to Start (FS), and Finish to Finish (FF)—mapped via the [taskFields.dependency](../api/gantt/taskFields#dependency) property in the data source. Parent dependencies are enabled by default with [allowParentDependency](../api/gantt#allowparentdependency) set to **true**, allowing relationships between parent-parent, child-child, parent-child, and child-parent tasks. Offsets support day, hour, or minute units for precise timing, and validation modes handle conflicts during editing via the [actionBegin](../api/gantt#actionbegin) event. Connector lines are customized using [connectorLineWidth](../api/gantt#connectorlinewidth) and [connectorLineBackground](../api/gantt#connectorlinebackground), with the `queryTaskbarInfo` event enabling dynamic styling. Public methods like [addPredecessor](../api/gantt#addpredecessor) and [removePredecessor](../api/gantt#removepredecessor) allow programmatic management, ensuring accurate visualization with ARIA labels for accessibility and responsive scaling for mobile views.

## Configure task dependencies

Task dependencies are defined in the data source as string values (e.g., '2FS+3d' for Finish to Start with 3-day offset) and mapped using [taskFields.dependency](../api/gantt/taskFields#dependency). Parent dependencies can be enabled by [allowParentDependency](../api/gantt#allowparentdependency) property. By default, the `allowParentDependency` property will be **true**.

Multiple predecessor relationships can be defined in a single task by assigning a comma-separated string to the `Predecessor` field, such as `'2FS,3FS'`. This configuration allows the Gantt Chart to interpret and render multiple dependencies during the initial data load.

```ts
{ TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 0, Predecessor: '3FS,2FS', Progress: 30 }
```

The following example establishes dependencies. This code renders connector lines for dependencies like '2FS' and updates taskbars when changes occur.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-dependency/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-dependency/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-dependency" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-dependency/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/task-dependency/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/task-dependency" %}
{% endif %}

## Understand task relationship types

Task relationships are categorized into four types based on start and finish dates:

- Start to Start (SS): Successor starts with predecessor.

  ![Start to Start dependency](./images/ss.png)

- Start to Finish (SF): Successor finishes when predecessor starts.

  ![Start to Finish dependency](./images/sf.png)

- Finish to Start (FS): Successor starts after predecessor finishes (default).

  ![Finish to Start dependency](./images/fs.png)

- Finish to Finish (FF): Successor finishes with predecessor.

  ![Finish to Finish dependency](./images/ff.png)

Specify types in the data source (e.g., '2SS+1h') for hour-based offsets.

## Configure predecessor offsets with duration units

Predecessor offsets support day, hour, or minute units (e.g., '2FS+3h'), allowing precise delays or leads between tasks.

The following example uses duration units. This code applies offsets such as '2FS+3h', adjusting the taskbars accordingly.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs2" %}
{% endif %}

## Predecessor offset synchronization on initial load

The [autoUpdatePredecessorOffset](../api/gantt#autoupdatepredecessoroffset) property specifies whether the Gantt Chart automatically adjusts and synchronizes the predecessor offset values (e.g., "+2", "-1d") in the predecessor column display and the underlying data during initial data load/binding, so they match the actually rendered taskbar positions and dependency lines.

- When **enabled**: During the initial data binding/load, the Gantt recalculates the offset portions of predecessor strings based on the final rendered dates after applying calendar rules, weekends, holidays, and working times. The predecessor column in the grid and the corresponding data field values are updated to reflect these accurate offsets - preventing visual or data mismatch between what is displayed and what was actually used for rendering dependency lines - without affecting task dates, durations, or triggering any scheduling/validation logic.

- When **disabled**: The predecessor column displays exactly the offset values provided in the original data source, even if they no longer match the rendered dependency lines due to calendar adjustments. This can result in visual inconsistencies where the grid shows one offset (e.g., "5FS+0") while the drawn arrow connects tasks with a different effective offset (e.g., equivalent to +2 due to non-working days). No automatic correction occurs during load.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs7" %}
{% endif %}

## Disable automatic dependency offset updates

Automatic offset updates during taskbar editing are disabled with [updateOffsetOnTaskbarEdit](../api/gantt#updateoffsetontaskbaredit) set to **false**, allowing manual updates via the dependency tab or predecessor column.

The following example disables automatic updates. This code preserves dependency offsets during edits, requiring manual adjustments.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs3" %}
{% endif %}

## Handle dependency validation modes

Dependency validation during editing uses the [actionBegin](../api/gantt#actionbegin) event with `requestType: 'validateLinkedTask'`. The `validateMode` argument defines modes:

- `respectLink`: Prioritizes links, reverting invalid edits.
- `removeLink`: Prioritizes editing, removing conflicting links.
- `preserveLinkWithEditing`: Updates offsets to maintain links (default).

The following example enables `respectLink` mode. This code reverts edits violating links, ensuring dependency integrity.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs4" %}
{% endif %}

## Use validation dialog

When all validation modes are disabled in [actionBegin](../api/gantt#actionbegin), a dialog prompts users to choose modes like canceling edits or removing links, based on the successor's start date relative to the predecessor.

The following example enables the validation dialog. This code displays options like "Remove the link and move the task" for conflicts.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs5" %}
{% endif %}

## Show or hide dependency lines dynamically

Dependency lines are hidden or shown by toggling `visibility: hidden` on `.e-gantt-dependency-view-container`, allowing dynamic control for focused views.

The following example toggles dependency lines. This code hides lines on button click, with ARIA updates for accessibility.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs6" %}
{% endif %}

## Managing predecessor dependencies

You can manage task dependencies by adding, updating, or removing predecessor links. These methods control task order and execution:

- [addPredecessor](../api/gantt#addpredecessor): Adds a predecessor to a task to define its dependency.
- [removePredecessor](../api/gantt#removepredecessor): Removes an existing dependency from the task.
- [updatePredecessor](../api/gantt#updatepredecessor): Updates the dependency details using the task's ID.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/predecessor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/predecessor-cs1" %}
{% endif %}

## Customize connector lines

Connector lines are styled globally with [connectorLineWidth](../api/gantt#connectorlinewidth) and [connectorLineBackground](../api/gantt#connectorlinebackground).

The following example sets the connector line background color as red:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connector-line/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connector-line/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/connector-line" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connector-line/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connector-line/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/connector-line" %}
{% endif %}

## Disable predecessor validation

By default, Gantt Chart task dates are validated based on predecessor values. To disable this validation, set the [enablePredecessorValidation](../api/gantt#enablepredecessorvalidation) property to **false**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-predecessor/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-predecessor/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/disable-predecessor" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-predecessor/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-predecessor/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/disable-predecessor" %}
{% endif %}

## Limitation

> When virtualization is enabled, dependency lines are shown only for tasks currently visible in the viewport. If two tasks are connected by a line, the line will appear only if at least one of the tasks is visible. If both tasks are expanded and the line spans across pages, it will still be displayed as long as one task is in view.

## See also

- [How to configure task constraints?](./task-constraints)
- [How to customize taskbars?](./taskbar)
- [How to enable critical path?](./critical-path)
