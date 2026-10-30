---
layout: post
title: WebMCP Integration in Blazor Gantt Chart | Syncfusion®
description: WebMCP integration in Blazor Gantt Chart explains setup, tool registration, configuration, and API reference with code examples.
platform: gantt-sdk
control: WebMCP
documentation: ug
---

# WebMCP Integration in Blazor Gantt Chart

## Integration

WebMCP integrates seamlessly into the [Blazor Gantt Chart](https://www.syncfusion.com/blazor-components/blazor-gantt-chart) application with minimal configuration. The integration exposes specialized tools that allow AI agents to perform task management, scheduling, resource allocation, and timeline analysis operations through natural language.

### Prerequisites

Ensure the following before integrating WebMCP:

- Syncfusion Gantt Chart component is installed and configured [Getting Started](https://help.syncfusion.com/gantt-sdk/blazor/gantt-chart/getting-started-with-web-app)
- A Chromium-based browser, such as Chrome, Edge, or Brave, has the WebMCP flag enabled

## Getting Started

### Step 1: Configure the Browser

Before WebMCP can be used locally, enable the feature flag and install the browser extension:

1. **Enable WebMCP Flag**
   - Enable WebMCP for testing via `chrome://flags/`
   - Search for "WebMCP" and set to "Enabled (testing)"
   - Click **"Relaunch"** to restart Chrome

2. **Install WebMCP Extension**
   - Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd)
   - Click **"Add to Chrome"**
   - Pin the extension icon to the toolbar

3. **Configure Gemini API Key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key
   - Open the WebMCP extension → paste the API key
   - The extension is ready to use

### Step 2: Import the Required Namespace

Add the following namespace to the Razor component:

```
@using Syncfusion.Blazor.Gantt
```

### Step 3: Enable WebMCP

Set the `EnableWebMcp` property to `true` in the Gantt configuration:

```
<SfGantt DataSource="@TaskCollection"
    EnableWebMcp="true"
    AllowSorting="true"
    AllowFiltering="true">
</SfGantt>
```

### Step 4: Register Tools

Set the `GanttWebMcpSettings` property to register the available tools at the control level:

```
<SfGantt TValue="TaskData"
    DataSource="@TaskCollection"
    EnableWebMcp="true"
    Height="450px"
    Width="100%">
    <GanttTaskFields
        Id="TaskId"
        Name="TaskName"
        StartDate="StartDate"
        EndDate="EndDate"
        Duration="Duration"
        Progress="Progress"
        ParentID="ParentId"
        Dependency="Predecessor">
    </GanttTaskFields>

    <GanttWebMcpSettings Name="gantt" />

</SfGantt>
```

### Step 5: Test the Setup

**Test with a Local Setup**
- Run the application locally and open it in a Chromium-based browser such as Chrome, Edge, or Brave.
- Launch the WebMCP extension and confirm that it connects to the application successfully.
- Verify that the registered tools are displayed with the chosen prefix.
- Try a sample prompt that matches the data scenario to validate tool execution and response behavior.

**Sample Prompts**

{% promptcards %}
{% promptcard Task Creation %}
Add a new task called "Design Phase" with a start date of 2024-02-01 and 15 days duration.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Search and Filter %}
Search for all tasks with "Implementation" in the name.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Export and Reporting %}
Export the current Gantt view to PDF.
{% endpromptcard %}
{% endpromptcards %}

---

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. For complete input/output schemas, call `GetWebMcpToolsAsync()` programmatically.

---

## Data Query Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| GetData | Read | Always | Return all Gantt task records currently visible. *Opt-in: disabled by default to prevent exposing row-level data.* Set `Enabled="true"` to expose. |
| GetSelectedRecords | Read | Always | Return the currently selected Gantt rows. |
| GetCurrentViewRecords | Read | Always | Return the records currently rendered in the viewport. |
| GetTaskById | Read | Always | Return the task record for the supplied primary key (Id). |
| GetColumns | Read | Always | Return the column definitions currently rendered. |
| GetColumnIndexByField | Read | Always | Return the current column index for the supplied field name. |
| GetSelectedRowIndexes | Read | Always | Return the row indexes of the current selection. |
| GetSelectedRowCellIndexes | Read | Always | Return the row and cell indexes of the current selection. |
| GetCriticalTasks | Read | Always | Return the tasks currently on the critical path. |
| GetRowTaskModel | Read | Always | Return the row-and-task pair for the supplied primary key. |
| GetPersistedData | Read | Always | Return the persisted toolbar/filter state for the supplied key. |
| GetFilteredRecords | Read | Always | Return the Gantt records currently in the active filter. Requires AllowFiltering="true". |

---

## Selection Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| SelectRow | Write | Always | Select a single row by index. |
| SelectRows | Write | Always | Select multiple rows by index array. |
| SelectCell | Write | Always | Select a cell at the supplied (rowIndex, columnIndex) tuple. |
| SelectRowRange | Write | Always | Select a contiguous range of rows from startIndex to endIndex (inclusive). |
| ClearSelection | Write | Always | Clear all selected rows and cells. |

---

## Task Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| AddTask | Write | Always | Add a new task with supplied fields. Does NOT open a dialog. Use for "add ..." prompts without "dialog" keyword. |
| UpdateTask | Write | Always | Update an existing task by matching its Id field. |
| DeleteTask | Write | Always | Delete a task by its id. When id is omitted, deletes the currently selected task. |
| ConvertToMilestone | Write | Always | Convert a task to a milestone (zero duration). |

---

## Hierarchy & Indentation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| IndentTask | Write | Always | Indent the currently selected task under the previous sibling. |
| OutdentTask | Write | Always | Outdent the currently selected task to its parent's level. |
| ExpandAll | Write | Always | Expand every parent task in the Gantt. |
| CollapseAll | Write | Always | Collapse every parent task in the Gantt. |
| ExpandAtLevel | Write | Always | Expand all tasks up to the supplied hierarchy level. |
| CollapseAtLevel | Write | Always | Collapse all tasks up to the supplied hierarchy level. |
| ExpandByKey | Write | Always | Expand a specific node identified by its primary-key value. |
| CollapseByKey | Write | Always | Collapse a specific node identified by its primary-key value. |

---

## Dependency & Predecessor Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| AddPredecessor | Write | Always | Add a dependency relationship. predecessorString follows Syncfusion format (e.g., '3FS+2d' for finish-to-start with +2 days lag). |
| RemovePredecessor | Write | Always | Remove all dependencies from the supplied task id. |
| UpdatePredecessor | Write | Always | Replace all dependencies on the supplied task id with a single new relationship. |

---

## Sorting & Filtering Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| SortByColumn | Write | Always | Sort the Gantt by a single column in the supplied direction (Ascending/Descending). |
| ClearSorting | Write | Always | Clear the active sort. |
| FilterByColumn | Write | Always | Apply a single-column filter to the Gantt with operator and value. |
| ClearFiltering | Write | Always | Clear all active filters. |
| Search | Write | Always | Search/filter the Gantt by the supplied key. |

---

## Timeline Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| ZoomIn | Write | Always | Zoom the timeline in by one step. |
| ZoomOut | Write | Always | Zoom the timeline out by one step. |
| ZoomToFit | Write | Always | Zoom the timeline to fit the entire bound data on screen. |
| ResetZoom | Write | Always | Reset the timeline zoom to the configured default. |
| ScrollToTimeline | Write | Always | Scroll the chart so that the supplied date is centered in view. |
| ScrollToTaskbar | Write | Always | Scroll the chart to the supplied task's taskbar position. |
| NavigateToNextTimeSpan | Write | Always | Advance timeline viewport to next scheduled unit. |
| NavigateToPreviousTimeSpan | Write | Always | Move timeline viewport to previous scheduled unit. |

---

## Layout & View Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| SetSplitterPosition | Write | Always | Resize the grid/chart splitter. Position is a preset name (Default, Grid, Chart), column index, or percentage string 0-100. |
| ReorderColumns | Write | Always | Reorder columns to the supplied sequence of field names. |
| ShowColumn | Write | Always | Show a hidden column by field name. |
| HideColumn | Write | Always | Hide a visible column by field name. |
| AutofitColumns | Write | Always | Resize columns to fit content. |
| RefreshColumns | Write | Always | Force column collection to re-render. |
| OpenColumnChooser | Write | Always | Open the column chooser dialog. |

---

## Dialog & Editing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| OpenAddDialog | Write | Always | Open the Add Record dialog. Only executes when the prompt contains the word "dialog". |
| OpenEditDialog | Write | Always | Open the Edit Record dialog for the supplied task. Only executes when the prompt contains the word "dialog". |
| CancelEdit | Write | Always | Close any open edit/add dialog without saving. |

---

## Task Segments & Advanced Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| SplitTask | Write | Always | Split a task into two segments at the supplied date. |
| MergeTask | Write | Always | Merge consecutive segments of a split task back into one. |
| ReorderRow | Write | Always | Reorder a row within its parent (Above, Below, or Child position). |

---

## Project Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| UpdateProjectDates | Write | Always | Update project start and end dates. |
| Undo | Write | Always | Reverse the last action. |
| Redo | Write | Always | Reapply the last undone action. |
| Refresh | Write | Always | Force grid to refresh from bound data source. |

---

## Export & Data Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| ExportToPdf | Write | Always | Trigger PDF download of current Gantt view. |
| ExportToExcel | Write | Always | Trigger XLSX download of current Gantt data. |
| ExportToCsv | Write | Always | Trigger CSV download of current Gantt data. |
| CopyToClipboard | Write | Always | Copy supplied text to OS clipboard. |

---

## Resource Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| GetResourceAssignments | Read | Always | Return the resource assignments attached to the supplied Gantt task. Requires GanttAssignmentFields configured. |
| GetResources | Read | Always | Return the resources associated with the supplied Gantt task. Requires GanttResourceFields configured. |
| UpdateResourceAssignment | Write | Always | Update an existing resource assignment by primary key. Requires EditSettings.AllowEditing="true" and GanttAssignmentFields configured. |
| DeleteResourceAssignment | Write | Always | Remove a resource assignment from a task. Requires EditSettings.AllowEditing="true" and GanttAssignmentFields configured. |

---

## State & Control Tools

| Tool Name | Type | Condition | Description |
|-----------|------|--------------|-------------|
| ShowSpinner | Write | Always | Show loading spinner overlay. |
| HideSpinner | Write | Always | Hide loading spinner overlay. |
| SetPersistedData | Write | Always | Persist toolbar/filter state under supplied key. |
| ResetPersistedData | Write | Always | Remove persisted state for supplied key. |

---

## Code Examples

### Basic Setup

Set up a Gantt Chart with WebMCP enabled and tools registered on creation.

```
@using Syncfusion.Blazor.Gantt
@using Syncfusion.Blazor.Data

<div style="width:100%; height:100%;">
    <SfGantt TValue="TaskData"
        @ref="GanttRef"
        DataSource="@TaskCollection"
        EnableWebMcp="true"
        Height="100%"
        Width="100%"
        TreeColumnIndex="1">
        
        <GanttTaskFields
            Id="TaskId"
            Name="TaskName"
            StartDate="StartDate"
            EndDate="EndDate"
            Duration="Duration"
            Progress="Progress"
            ParentID="ParentId"
            Dependency="Predecessor">
        </GanttTaskFields>

        <GanttColumns>
            <GanttColumn Field="TaskId" Width="80"></GanttColumn>
            <GanttColumn Field="TaskName" Width="250"></GanttColumn>
            <GanttColumn Field="StartDate" Width="100"></GanttColumn>
            <GanttColumn Field="EndDate" Width="100"></GanttColumn>
            <GanttColumn Field="Duration" Width="100"></GanttColumn>
            <GanttColumn Field="Progress" Width="100"></GanttColumn>
        </GanttColumns>

        <GanttWebMcpSettings Name="gantt" />

    </SfGantt>
</div>

@code {
    private SfGantt<TaskData>? GanttRef;
    private List<TaskData> TaskCollection = new();

    protected override void OnInitialized()
    {
        TaskCollection = new List<TaskData>()
        {
            new TaskData() { TaskId = 1, TaskName = "Project Planning", StartDate = new DateTime(2024, 02, 01), EndDate = new DateTime(2024, 02, 07), Duration = 6, Progress = 100, ParentId = null },
            new TaskData() { TaskId = 2, TaskName = "Define Scope", StartDate = new DateTime(2024, 02, 01), EndDate = new DateTime(2024, 02, 03), Duration = 2, Progress = 100, ParentId = 1 },
            new TaskData() { TaskId = 3, TaskName = "Resource Allocation", StartDate = new DateTime(2024, 02, 04), EndDate = new DateTime(2024, 02, 07), Duration = 3, Progress = 50, ParentId = 1 },
            new TaskData() { TaskId = 4, TaskName = "Implementation", StartDate = new DateTime(2024, 02, 08), EndDate = new DateTime(2024, 02, 21), Duration = 13, Progress = 30, ParentId = null },
            new TaskData() { TaskId = 5, TaskName = "Design Phase", StartDate = new DateTime(2024, 02, 08), EndDate = new DateTime(2024, 02, 12), Duration = 4, Progress = 80, ParentId = 4 },
            new TaskData() { TaskId = 6, TaskName = "Development", StartDate = new DateTime(2024, 02, 13), EndDate = new DateTime(2024, 02, 21), Duration = 8, Progress = 0, ParentId = 4 }
        };
    }

    public class TaskData
    {
        public int? TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Duration { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
        public string Predecessor { get; set; }
    }
}
```

### Customizing Tool Registration

Register only specific tools by disabling tools in the WebMcpSettings:

```
@using System.Text.Json
@using Syncfusion.Blazor.Gantt

<SfGantt TValue="TaskData"
         DataSource="@Tasks"
         EnableWebMcp="true"
         Height="450px">

    <GanttTaskFields Id="TaskId"
                     Name="TaskName"
                     StartDate="StartDate"
                     Duration="Duration"
                     Progress="Progress" />

    <GanttWebMcpSettings Name="CustomGantt">
        <GanttWebMcpTools>
            <GanttWebMcpTool Command="GanttWebMcpToolCommand.GetData"
                             Enabled="true"
                             Description="Return the Gantt task data." />

            <GanttWebMcpTool Command="GanttWebMcpToolCommand.FilterByColumn"
                             Enabled="true"
                             Description="Filter Gantt tasks by a column value." />

            <GanttWebMcpTool Command="GanttWebMcpToolCommand.Custom"
                             Name="getTaskSummary"
                             Description="Return tasks whose names match an optional search string."
                             InputSchema="@taskSummarySchema" />
        </GanttWebMcpTools>
    </GanttWebMcpSettings>

    <GanttEvents TValue="TaskData"
                 OnWebMcpExecute="HandleWebMcpToolExecution" />
</SfGantt>

@code {
    private readonly string taskSummarySchema =
        "{\"type\":\"object\",\"properties\":{\"taskName\":{\"type\":\"string\",\"description\":\"Optional substring to match in task names.\"}}}";

    private List<TaskData> Tasks { get; set; } = new()
    {
        new() { TaskId = 1, TaskName = "Planning", StartDate = new DateTime(2026, 1, 5), Duration = 4, Progress = 100 },
        new() { TaskId = 2, TaskName = "Implementation", StartDate = new DateTime(2026, 1, 9), Duration = 8, Progress = 40 },
        new() { TaskId = 3, TaskName = "Testing", StartDate = new DateTime(2026, 1, 19), Duration = 5, Progress = 0 }
    };

    private Task HandleWebMcpToolExecution(GanttWebMcpExecuteEventArgs args)
    {
        if (args.Command != GanttWebMcpToolCommand.Custom ||
            args.Name != "getTaskSummary")
        {
            return Task.CompletedTask;
        }

        string? taskNameFilter = null;
        if (args.Arguments?.TryGetValue("taskName", out var value) == true)
        {
            taskNameFilter = value?.ToString();
        }

        var matches = Tasks
            .Where(task => string.IsNullOrWhiteSpace(taskNameFilter) ||
                task.TaskName.Contains(taskNameFilter, StringComparison.OrdinalIgnoreCase))
            .ToList();

        args.Result = JsonSerializer.Serialize(new
        {
            TotalTasks = matches.Count,
            Tasks = matches.Select(task => new
            {
                task.TaskId,
                task.TaskName,
                task.StartDate,
                task.Duration,
                task.Progress
            })
        });

        return Task.CompletedTask;
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public int Duration { get; set; }
        public int Progress { get; set; }
    }
}
```

### Enabling Data Exposure for Queries

To allow AI agents to read task data via the `GetData` tool, explicitly enable it:

```
<GanttWebMcpSettings Name="gantt">
    <GanttWebMcpTools>
        <GanttWebMcpTool Name="GetData" Enabled="true" />
    </GanttWebMcpTools>
</GanttWebMcpSettings>
```

**Note**: `GetData` is disabled by default to prevent unintended data exposure. Enable only when necessary.

---

## Troubleshooting

### Q: WebMCP is unavailable or `modelContext` is undefined

**A:**
1. Verify WebMCP flag is enabled:
   - Open `chrome://flags/#enable-webmcp-testing`
   - Confirm it shows "Enabled (testing)"
   - Fully restart Chrome (not just reload the page)

2. Check that the Chrome version is up-to-date (WebMCP requires recent Chromium)

3. Ensure testing occurs on a secure context (HTTPS or localhost)

---

### Q: The extension does not show registered tools

**A:**
1. Verify `EnableWebMcp="true"` is set on the SfGantt component.
2. Confirm `<GanttWebMcpSettings Name="gantt" />` is configured as a child component.
3. Open DevTools (F12) → Console, check for errors
4. Try refreshing the page and opening the extension again
5. Verify the tool prefix is correct (check console logs for "Registered tools with prefix: gantt_*")

---

### Q: Tools are registered but do not execute

**A:**
1. Verify the Gemini API key is valid:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new key if needed
   - Re-enter it in the WebMCP extension

2. Verify the extension has permission to access the site:
   - Right-click the WebMCP extension → Manage extension
   - Ensure "Allow on this site" is enabled

---

### Q: "Permission denied" or "Secure context required"

**A:**
- WebMCP requires HTTPS in production or localhost for development
- If using cross-origin tools, both sites must be HTTPS
- Test locally using URL

---

## See Also

* [Getting Started](https://help.syncfusion.com/gantt-sdk/blazor/gantt-chart/getting-started-with-web-app)
