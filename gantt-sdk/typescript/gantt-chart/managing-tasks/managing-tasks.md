---
layout: post
title: Managing Tasks in TypeScript Gantt Chart | Syncfusion
description: Master task management in Syncfusion TypeScript Gantt Chart with CRUD operations, editing modes, and hierarchical task organization for projects.
keywords: TypeScript gantt manage tasks, task management, create tasks, update tasks, delete tasks, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/managing-tasks/managing-tasks
platform: gantt-sdk
control: Managing Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Overview of Task Management Features in TypeScript Gantt Chart

Managing tasks in the TypeScript Gantt Chart control enables dynamic project updates, such as inserting, deleting, or editing tasks and dependencies, by enabling [allowAdding](https://ej2.syncfusion.com/documentation/api/gantt/editSettings#allowadding), [allowDeleting](https://ej2.syncfusion.com/documentation/api/gantt/editSettings#allowdeleting), [allowEditing](https://ej2.syncfusion.com/documentation/api/gantt/editSettings#allowediting), and [allowTaskbarEditing](https://ej2.syncfusion.com/documentation/api/gantt/editSettings#allowtaskbarediting) with `Edit` module injected. A primary key column, defined by [columns.isPrimaryKey](https://ej2.syncfusion.com/documentation/api/gantt/column#isprimarykey) set to **true** (e.g., on id), ensures reliable CRUD operations and task identification. Editing modes include cell editing for quick TreeGrid updates, dialog editing for comprehensive changes, taskbar dragging for duration or date adjustments, and connector line dragging for dependencies. Customize dialogs with templates or fields using [addDialogFields](https://ej2.syncfusion.com/documentation/api/gantt#adddialogfields) and [editDialogFields](https://ej2.syncfusion.com/documentation/api/gantt#editdialogfields). Methods like [addRecord](https://ej2.syncfusion.com/documentation/api/gantt#addrecord), [deleteRow](https://ej2.syncfusion.com/documentation/api/gantt#deleterow), and [updateRecordById](https://ej2.syncfusion.com/documentation/api/gantt#updaterecordbyid) support programmatic management. Ensure valid `taskFields` mappings and a primary key to enable editing seamlessly.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/getting-started-cs12" %}

Editing feature requires a primary key column for CRUD operations. While defining columns in Gantt Chart using the [columns](https://ej2.syncfusion.com/documentation/api/gantt#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [id](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#id) column will be the primary key column. If [id](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#id) column is not defined, we need to enable [isPrimaryKey](https://ej2.syncfusion.com/documentation/api/gantt/column#isprimarykey) for any one of the columns defined in the [columns](https://ej2.syncfusion.com/documentation/api/gantt#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](https://ej2.syncfusion.com/documentation/api/gantt#actionbegin) event when `requestType` is **beforeOpenAddDialog**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs2" %}

## Cell edit type and its params

The [columns.editType](https://ej2.syncfusion.com/documentation/api/gantt/column#edittype) is used to define the edit type for any particular column. You can set the [columns.editType](https://ej2.syncfusion.com/documentation/api/gantt/column#edittype) based on data type of the column.

Below is the combined content from the provided markdown sections in bullet points, as requested, ensuring clarity and conciseness while preserving the original information:

- **Cell edit types and components**:
  - **numericedit**: Uses the [NumericTextBox](https://ej2.syncfusion.com/documentation/numerictextbox) control for editing integers, doubles, and decimals.
  - **defaultedit**: Uses the [TextBox](https://ej2.syncfusion.com/documentation/textbox) control for editing string data.
  - **dropdownedit**: Uses the [DropDownList](https://ej2.syncfusion.com/documentation/drop-down-list) control to display all unique values for a field.
  - **booleanedit**: Uses the [CheckBox](https://ej2.syncfusion.com/documentation/check-box) control for editing boolean data.
  - **datepickeredit**: Uses the [DatePicker](https://ej2.syncfusion.com/documentation/datepicker) control for editing date data.
  - **datetimepickeredit**: Uses the [DateTimePicker](https://ej2.syncfusion.com/documentation/datetimepicker) control for editing date-time data.

- **Customization**:
  - Customize editor control behavior using the [columns.edit.params](https://ej2.syncfusion.com/documentation/api/gantt/column#edit) property.

- **Edit type parameters**:
  - **numericedit**: Supports parameters like `decimals: 2`, `value: 5`.
  - **dropdownedit**: Supports parameters like `value: 'Germany'`.
  - **booleanedit**: Supports parameters like `checked: true`.
  - **datepickeredit**: Supports parameters like `format: 'dd.MM.yyyy'`.
  - **datetimepickeredit**: Supports parameters like `value: new Date()`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs2" %}

## Prevent particular column and taskbar editing

You can prevent editing for the particular column by setting [columns.allowEditing](https://ej2.syncfusion.com/documentation/api/gantt/column/#allowEditing) to **false**.

To restrict taskbar editing, set `args.cancel` to **true** in the [actionBegin](https://ej2.syncfusion.com/documentation/gantt/events#actionbegin) event based on `taskbarEditAction`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs5" %}

## Cell Edit Template

The cell edit template is used to create a custom control for a particular column by invoking the following functions:

- `create` - It is used to create the element at the time of initialization.

- `write` - It is used to create the custom control or assign default value at the time of editing.

- `read` - It is used to read the value from the control at the time of save.

- `destroy` - It is used to destroy the control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs3" %}

## Disable editing for particular column

You can disable editing for particular columns, by using the [columns.allowEditing](https://ej2.syncfusion.com/documentation/api/gantt/column#allowediting) property.

In the following demo, editing is disabled for the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/managingTasks-cs4" %}

## Customize control in add/edit dialog

In Gantt Chart, the controls such as form elements, grid and RTE in add and edit dialog can be customized by using [additionalParams](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettingsModel#additionalParams) property.

### Customize general tab of dialog

The form element in the General tab of the add/edit dialog can be added or removed by using the [fields](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettings#fields) property within the [addDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettings) and [editDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/editDialogFieldSettings) settings respectively.

The controls of the `fields` can be customized by using the [edit](https://ej2.syncfusion.com/documentation/gantt/managing-tasks/managing-tasks#cell-edit-template) template feature.

In the below sample, General tab is customized using the `fields` property. The fields **TaskID**, **TaskName** and **newInput** are added in both `addDialogFields` and `editDialogFields` settings.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs14" %}

### Customize dependency, segments and resources tab of dialog

You can customize the dependency, segments, and resource tabs of the dialog box using the [additionalParams](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettingsModel#additionalParams) property within the [addDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettings) and [editDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/editDialogFieldSettings) settings respectively. This customization involves defining properties from the [grid](https://ej2.syncfusion.com/documentation/api/grid) within the `additionalParams` property.

In the example below:

- The dependency tab enables [sorting](https://ej2.syncfusion.com/documentation/api/grid#allowsorting) and [toolbar](https://ej2.syncfusion.com/documentation/api/grid#toolbar) options.
- The segments tab enables `sorting` and `toolbar` options and includes a new column `newData` defined with a specified [field](https://ej2.syncfusion.com/documentation/api/grid/columnModel#field).
- The resources tab defines a new column **Segment Task** with specific properties such as `field`, [width](https://ej2.syncfusion.com/documentation/api/grid/columnModel#width) and [headerText](https://ej2.syncfusion.com/documentation/api/grid/columnModel#headertext).
  These customizations are applied to both `addDialogFields` and `editDialogFields` settings.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs15" %}

### Customize note dialog tab

You can customize the note dialog tab using the [additionalParams](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettingsModel#additionalParams) property within the [addDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/addDialogFieldSettings) and [editDialogFields](https://ej2.syncfusion.com/documentation/api/gantt/editDialogFieldSettings) settings respectively. This customization involves defining properties from the [RTE](https://ej2.syncfusion.com/documentation/api/rich-text-editor) module within the `additionalParams` property.

In the following example, the notes tab is customized with the [inlinemode](https://ej2.syncfusion.com/documentation/api/rich-text-editor#inlinemode) property enabled, allowing for in-place editing. Additionally, the `OnSelection` property is enabled, which opens the toolbar inline upon selecting text.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/rows-cs16" %}

## Touch interaction

The Gantt control editing actions can be achieved using the double tap and tap and drag actions on a element.

The following table describes different types of editing modes available in Gantt.

| Action                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cell editing](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/managing-tasks#cell-editing)       | To perform double tap on a specific cell, initiate the cell to be in edit state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Dialog editing](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/managing-tasks#dialog-editing)   | To perform double tap on a specific row, initiate the edit dialog to be opened.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Taskbar editing](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/managing-tasks#taskbar-editing) | Taskbar editing action is initiated using the `tap` action on the taskbar. <br> **Parent taskbar** : Once you tap on the parent taskbar, it will be changed to editing state. Perform only dragging action on parent taskbar editing. <br> ![Alt text](https://ej2.syncfusion.com/documentation/images/editing-parent.PNG) <br> **Child taskbar** : Once you tap the child taskbar, it will be changed to editing state. <br> ![Alt text](https://ej2.syncfusion.com/documentation/images/editing-state.PNG) <br> **Dragging taskbar** : To drag a taskbar to the left or right in editing state. <br> <br> **Resizing taskbar** : To resize a taskbar, drag the left/right resize icon. <br> <br> **Progress resizing** : To change the progress, drag the progress resize icon to the left or right direction. |

### Task dependency editing

You can `tap` the left/right connector point to initiate [task dependencies](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/task-dependency) edit mode and again tap another taskbar to establish the dependency line between two taskbars.

The following table explains the taskbar state in dependency edit mode.

![Taskbar states](https://ej2.syncfusion.com/documentation/images/taskbar-states.PNG)

| Taskbar state                | Description                                                                                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Parent taskbar`             | You cannot create dependency relationship to parent tasks. <br> ![Parent taskbar](https://ej2.syncfusion.com/documentation/images/parent-taskbar.PNG)                                                                              |
| `Taskbar without dependency` | If you tap a valid child taskbar, it will create `FS` type dependency line between tasks, otherwise exits from task dependency edit mode. <br> ![Valid taskbar](https://ej2.syncfusion.com/documentation/images/valid-taskbar.PNG) |
| `Taskbar with dependency`    | If you tap the second taskbar, which has already been directly connected, it will ask to remove it. <br> ![Invalid taskbar](https://ej2.syncfusion.com/documentation/images/invalid-taskbar.PNG)                                   |
| `Removing dependency`        | Once you tap the taskbar with direct dependency, then confirmation dialog will be shown for removing dependency. <br> ![Confirm dialog](https://ej2.syncfusion.com/documentation/images/confirm-dialog.PNG)                        |

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/touch-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/touch-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/touch-cs1" %}

> Note: In mobile device, you cannot create dependency other than `FS` by taskbar editing. By using cell/dialog editing, you can add all type of dependencies.

## Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [tooltipSettings.editing](https://ej2.syncfusion.com/documentation/api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/editingTooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/editingTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/editingTooltip-cs1" %}

## See also

- [How to add new tasks?](https://ej2.syncfusion.com/documentation/gantt/managing-tasks/adding-new-tasks)
- [How to delete tasks?](https://ej2.syncfusion.com/documentation/gantt/managing-tasks/deleting-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/documentation/gantt/critical-path)
