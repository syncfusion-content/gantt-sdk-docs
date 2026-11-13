---
layout: post
title: WebMCP Integration in Blazor Kanban | Syncfusion®
description: WebMCP integration in Blazor Kanban explains setup, tool registration, configuration, and the Kanban WebMCP tool reference.
platform: gantt-sdk
control: WebMCP
documentation: ug
---

# WebMCP Integration in Blazor Kanban

## Integration

WebMCP integration lets an AI agent interact with a [Blazor Kanban board](https://www.syncfusion.com/gantt-sdk/blazor-kanban-board) through the tools registered with the browser's WebMCP runtime. The tools can inspect board data and settings, update cards and columns, and perform other supported board actions.

### Prerequisites

- The Syncfusion Blazor Kanban component is installed and configured [Getting Started](https://help.syncfusion.com/gantt-sdk/blazor/kanban/getting-started-with-web-app).
- A Chromium-based browser that supports the experimental WebMCP API is required. For local testing, enable the WebMCP feature at `chrome://flags/#enable-webmcp` and relaunch the browser. Browser support and setup may change while the API is experimental.
- The browser must expose `document.modelContext`. If it does not, the Kanban board continues to work, but its WebMCP tools are not registered.

## Getting Started

### Step 1: Configure the browser

Before using WebMCP in a local environment, enable the browser feature and install the tool inspector:

1. **Enable the WebMCP feature**
   - Open `chrome://flags/#enable-webmcp`.
   - Enable the feature and relaunch the browser.

2. **Install the WebMCP extension**
   - Install [WebMCP - Model Context Tool Inspector](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd) from the Chrome Web Store.
   - Pin the extension icon to the browser toolbar.

3. **Configure the extension**
   - Create or copy an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
   - Open the WebMCP extension and provide the API key.

### Step 2: Import the required namespace

Add the following namespace to the Razor component:

```razor
@using Syncfusion.Blazor.Kanban
```

### Step 3: Enable WebMCP

Set `EnableWebMcp` to `true`. This setting is `false` by default. Give the board a unique `Name` in `KanbanWebMcpSettings` when the page contains multiple Kanban boards.

```razor
@using Syncfusion.Blazor.Kanban

<SfKanban TValue="TaskCard"
          KeyField="@nameof(TaskCard.Status)"
          DataSource="@Tasks"
          EnableWebMcp="true">
    <KanbanWebMcpSettings Name="workBoard" />
    <KanbanCardSettings HeaderField="Id" ContentField="Title" />
    <KanbanColumns>
        <KanbanColumn HeaderText="To Do" KeyField="@OpenKeys" />
        <KanbanColumn HeaderText="In Progress" KeyField="@InProgressKeys" />
        <KanbanColumn HeaderText="Done" KeyField="@DoneKeys" />
    </KanbanColumns>
</SfKanban>

@code {
    private List<string> OpenKeys { get; } = new() { "Open" };
    private List<string> InProgressKeys { get; } = new() { "InProgress" };
    private List<string> DoneKeys { get; } = new() { "Done" };

    private List<TaskCard> Tasks { get; } = new()
    {
        new() { Id = "KAN-101", Title = "Prepare release notes", Status = "Open", Assignee = "Avery" },
        new() { Id = "KAN-102", Title = "Review deployment plan", Status = "InProgress", Assignee = "Jordan" },
        new() { Id = "KAN-103", Title = "Update test cases", Status = "Done", Assignee = "Sam" }
    };

    public class TaskCard
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Assignee { get; set; } = string.Empty;
    }
}
```

WebMCP tools are registered after client-side rendering. Set `EnableWebMcp` during initial component configuration and keep its value fixed for the component lifetime.

### Step 4: Test the setup

- Run the application in a supported Chromium-based browser with WebMCP enabled.
- Open the WebMCP extension and verify that the board's tools appear.
- If the page has multiple boards, verify that each board has a distinct tool prefix.
- Try a prompt that matches the board's data.

**Sample prompts:**

{% promptcards %}
{% promptcard Inspect the Board %}
List the work board columns and the number of cards in each column.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Find a Card %}
Return the current status and assignee for card KAN-101.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Move a Card %}
Move card KAN-101 to the In Progress column.
{% endpromptcard %}
{% endpromptcards %}

## Tool reference

The built-in tools are available by default, except `GetAllCards`, which is omitted from the agent's tool list because it exposes all card data. Explicitly enable `GetAllCards` to make it available.

All tools require `EnableWebMcp="true"` and a browser that supports `document.modelContext`. The **Type** column identifies read-only tools and tools that change board or UI state. The **Condition** column lists additional required component settings or state; **Always** means no additional component setting is required. Required arguments are listed in the description. A tool's write classification does not itself display a confirmation dialog. A confirmation prompt for a write can be requested by setting `ShowConfirmationDialog` in the `OnWebMcpExecute` event.

Call `GetWebMcpToolsAsync()` to retrieve the effective tool names, descriptions, and input schemas. Pass bare, case-sensitive tool names to retrieve only selected tools. The input schema is a JSON Schema object.

**Data retrieval tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `GetBoardStructure` | Read | Always | Retrieve the board key field, card header field, swimlane key field, and column definitions, including keys, visibility, item counts, limits, and allowed transitions. |
| `GetColumnCards` | Read | Always | Retrieve cards in one or more columns by their key values. Requires a non-empty `keys` array. |
| `GetSwimlaneCards` | Read | Requires `KanbanSwimlaneSettings.KeyField` and an existing swimlane key | Retrieve cards in a swimlane by its key value. Requires `keyField`. |
| `GetCard` | Read | Requires `KanbanCardSettings.HeaderField` | Retrieve a card by the value of its configured card header field. Requires `id`; returns whether a match was found. |
| `GetAllCards` | Read | Requires `Enabled="true"` in `KanbanWebMcpSettings` | Retrieve every card on the board. This tool is disabled by default because it exposes all row data. |
| `GetColumnCardCounts` | Read | Always | Retrieve the card count for each column without returning card records. |
| `GetTargetDetailsAsync` | Read | Requires a rendered board and browser-side Kanban runtime | Retrieve the column, swimlane, and card position at board-relative coordinates. Requires numeric `left` and `top` values. |

---

**Board and card settings tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `GetBoardSettings` | Read | Always | Retrieve board dimensions, drag-and-drop and keyboard settings, RTL, tooltip, CSS class, and configured constraint type. |
| `UpdateBoardSettings` | Write | Always | Update supported board dimensions, interactions, RTL, tooltip, CSS class, or constraint type. The constraint type is stored and reported but does not apply additional constraint behavior in this component version. |
| `GetCardSettings` | Read | Always | Retrieve card field mappings, selection mode, and header visibility. |
| `UpdateCardSettings` | Write | Always | Update supported card field mappings, selection mode, and header visibility. |
| `GetSwimlaneSettings` | Read | Always | Retrieve the swimlane key and text fields, sort direction, drag-and-drop, empty-row, item-count, and frozen-row settings. |
| `UpdateSwimlaneSettings` | Write | Always | Update supported swimlane fields, sorting, drag-and-drop, empty-row, item-count, and frozen-row settings. |
| `SetSwimlaneExpanded` | Write | Requires a configured swimlane and an existing swimlane key | Expand or collapse a swimlane by its key. Requires `key` and `expanded`. |
| `GetSortSettings` | Read | Always | Retrieve the card sorting field, direction, and ordering mode. |
| `UpdateSortSettings` | Write | Always | Update the card sorting field, direction, or ordering mode. |
| `GetDialogSettings` | Read | Always | Retrieve supported card-dialog dimensions, behavior, animation, position, and field definitions. |
| `UpdateDialogSettings` | Write | Always | Update supported card-dialog behavior, dimensions, animation, position, or field definitions. |
| `GetStackedHeaders` | Read | Always | Retrieve the configured stacked headers. |
| `UpdateStackedHeaders` | Write | Always | Replace the stacked-header definitions using header text and column key values. |

---

**Card tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `AddCard` | Write | Requires `TValue` to be instantiable with a parameterless constructor | Add one card. Requires `card`; optionally accepts a zero-based insertion `index`. Include the board's key-field value to place the card in a column. |
| `AddCards` | Write | Requires `TValue` to be instantiable with a parameterless constructor | Add multiple cards. Requires `cards`; optionally accepts a zero-based insertion `index`. |
| `UpdateCard` | Write | Requires `KanbanCardSettings.HeaderField` and an existing card matching `id` | Change supplied fields on an existing card identified by its configured card header field. Requires `id` and `changes`; optionally accepts a data-source `index`. |
| `UpdateCards` | Write | Requires `TValue` to be instantiable with a parameterless constructor | Update multiple card records using the data source's index-based operation. Requires `cards` and `index`. |
| `DeleteCard` | Write | Requires `KanbanCardSettings.HeaderField` | Delete a card by its configured card header-field value. Requires `id`, which may be a string or integer. |
| `DeleteCards` | Write | Requires `TValue` to be instantiable with a parameterless constructor | Delete multiple cards by supplying their records in `cards`. |
| `MoveCard` | Write | Requires `KeyField` and `KanbanCardSettings.HeaderField` | Move a card by setting its board key field to the supplied destination `columnKey` and optionally changing its swimlane. Supply a key that matches a configured column; the tool does not validate the destination column. Requires `id` and `columnKey`; optionally accepts `swimlaneKey` and a zero-based destination `index`. |
| `SelectCards` | Write | Requires `KanbanCardSettings.HeaderField` and selection enabled; multiple IDs require `SelectionType.Multiple` | Select cards by their header-field IDs. Pass an empty `ids` array to clear the selection. |
| `SetBoardPage` | Write | Always | Display a page of cards across the board. Requires one-based `page` and `pageSize`; the page size applies to the combined loaded card set. |
| `UpdateViewData` | Write | Requires `TValue` to be instantiable with a parameterless constructor | Replace the cards displayed on the board with the supplied `cards` records. |

---

**Column and board action tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `AddColumn` | Write | Always | Add a column using `headerText` and one or more `keyField` values. Optionally accepts a zero-based insertion `index`. This does not add or move cards. |
| `UpdateColumn` | Write | Requires an existing column at `index` | Update a column by its zero-based `index`. Supports header text, key values, visibility, card limits, transitions, expanded/toggle state, drag/drop, adding cards, and item-count visibility. |
| `DeleteColumn` | Write | Requires an existing column at `index` | Delete a column by its zero-based `index`. |
| `RefreshBoard` | Write | Always | Re-query the data source and rebuild the board to reflect external data changes. |
| `ExportCards` | Write | Always | Download all currently loaded cards as a CSV or JSON file. The export can include available card data fields. |
| `SetTemplate` | Write | Requires a template registered with `RegisterWebMcpCardTemplate` | Select a card template registered by the host. Requires the case-sensitive `templateName`; prompt-supplied markup and code are not accepted. |
| `OpenCardDialog` | Write | `Add` requires instantiable `TValue`; `Edit` and `Delete` require `KanbanCardSettings.HeaderField` and an existing card | Open the built-in card dialog for `Add`, `Edit`, or `Delete`. Requires `action`; `id` is required for edit and delete. |
| `CloseDialog` | Write | Always | Close the card dialog if it is open. |
| `ShowSpinnerAsync` | Write | Requires the board spinner to be initialized | Show the board's loading spinner. |
| `HideSpinnerAsync` | Write | Requires the board spinner to be initialized and active | Hide the board's loading spinner. |

---

## Custom tool configuration

Use `KanbanWebMcpSettings` and `KanbanWebMcpTools` to change the effective tool list. A settings entry can disable a built-in tool, override its name or description, or define a custom tool. `GetAllCards` is enabled by adding an entry with `Enabled="true"`.

```razor
@using System.Text.Json
@using Syncfusion.Blazor.Kanban
<SfKanban TValue="SampleTask" 
          @ref="Kanban"
          KeyField="@nameof(SampleTask.Status)"
          DataSource="@Tasks"
          EnableWebMcp="true">

    <KanbanCardSettings HeaderField="@nameof(SampleTask.Id)"
                        ContentField="@nameof(SampleTask.Title)" />

    <KanbanColumns>
        <KanbanColumn HeaderText="Open" KeyField="@OpenKeys" />
        <KanbanColumn HeaderText="In Progress" KeyField="@InProgressKeys" />
        <KanbanColumn HeaderText="Done" KeyField="@DoneKeys" />
    </KanbanColumns>
    <KanbanSwimlaneSettings KeyField="@nameof(SampleTask.Assignee)"
                            TextField="@nameof(SampleTask.Assignee)" />

    <KanbanEvents TValue="SampleTask"
                  OnWebMcpExecute="HandleWebMcpExecute" />

    <KanbanWebMcpSettings Name="TestBoard">
        <KanbanWebMcpTools>
            <KanbanWebMcpTool Command="KanbanWebMcpToolCommand.GetAllCards"
                              Enabled="false" />
            <KanbanWebMcpTool Command="KanbanWebMcpToolCommand.AddCard"
                              Enabled="false" />
            <KanbanWebMcpTool Command="KanbanWebMcpToolCommand.AddCards"
                              Enabled="true" />
            <KanbanWebMcpTool Command="KanbanWebMcpToolCommand.Custom"
                              Name="GetCardsByStatus"
                              Description="Return the sample cards matching a status."
                              InputSchema="@GetCardsByStatusSchema" />
        </KanbanWebMcpTools>
    </KanbanWebMcpSettings>
</SfKanban>

<ul>
    @foreach (var tool in RegisteredTools)
    {
        <li>@tool.Name — @tool.Description</li>
    }
</ul>

@code {
    private SfKanban<SampleTask> Kanban { get; set; } = default!;

    private IReadOnlyList<IKanbanWebMcpTool> RegisteredTools { get; set; }
        = new List<IKanbanWebMcpTool>();

    private readonly List<SampleTask> Tasks = new()
    {
        new() { Id = "TASK-001", Title = "Review support requests", Status = "Open", Priority = "High", Assignee = "Alex" },
        new() { Id = "TASK-002", Title = "Reproduce login timeout", Status = "Open", Priority = "High", Assignee = "Morgan" },
        new() { Id = "TASK-003", Title = "Draft user guide", Status = "Open", Priority = "Medium", Assignee = "Jordan" },
        new() { Id = "TASK-004", Title = "Validate billing export", Status = "Open", Priority = "Low", Assignee = "Casey" },
        new() { Id = "TASK-005", Title = "Check mobile layout", Status = "Open", Priority = "Medium", Assignee = "Alex" },

        new() { Id = "TASK-006", Title = "Fix login timeout", Status = "InProgress", Priority = "High", Assignee = "Morgan" },
        new() { Id = "TASK-007", Title = "Add CSV export tests", Status = "InProgress", Priority = "Medium", Assignee = "Jordan" },
        new() { Id = "TASK-008", Title = "Update onboarding flow", Status = "InProgress", Priority = "Medium", Assignee = "Casey" },
        new() { Id = "TASK-009", Title = "Improve dashboard accessibility", Status = "InProgress", Priority = "High", Assignee = "Alex" },
        new() { Id = "TASK-010", Title = "Review notification settings", Status = "InProgress", Priority = "Low", Assignee = "Morgan" },

        new() { Id = "TASK-011", Title = "Resolve report formatting", Status = "Done", Priority = "Medium", Assignee = "Jordan" },
        new() { Id = "TASK-012", Title = "Update API documentation", Status = "Done", Priority = "Low", Assignee = "Casey" },
        new() { Id = "TASK-013", Title = "Remove duplicate notifications", Status = "Done", Priority = "High", Assignee = "Alex" },
        new() { Id = "TASK-014", Title = "Verify release pipeline", Status = "Done", Priority = "Medium", Assignee = "Morgan" },
        new() { Id = "TASK-015", Title = "Check archived-task search", Status = "Done", Priority = "Low", Assignee = "Jordan" }
    };

    private readonly List<string> OpenKeys = new() { "Open" };
    private readonly List<string> InProgressKeys = new() { "InProgress" };
    private readonly List<string> DoneKeys = new() { "Done" };
    private readonly object GetCardsByStatusSchema = new
    {
        type = "object",
        properties = new { status = new { type = "string" } },
        required = new[] { "status" }
    };

    private async Task InspectWebMcpTools()
    {
        RegisteredTools = await Kanban.GetWebMcpToolsAsync();
    }
    private async Task ListToolsAsync()
    {
        RegisteredTools = await Kanban.GetWebMcpToolsAsync();
    }

    private Task HandleWebMcpExecute(KanbanWebMcpExecuteEventArgs args)
    {
        if (args.Command == KanbanWebMcpToolCommand.Custom
            && args.Name == "GetCardsByStatus")
        {
            if (args.Arguments?.TryGetValue("status", out var value) != true
                || value is not string status)
            {
                args.Cancel = true;
                args.CancellationResponse = "A string 'status' argument is required.";
                return Task.CompletedTask;
            }

            var matchingTasks = Tasks
                .Where(task => task.Status.Equals(
                    status,
                    System.StringComparison.OrdinalIgnoreCase))
                .ToList();

            args.Result = JsonSerializer.Serialize(new
            {
                status,
                cards = matchingTasks
            });
        }

        return Task.CompletedTask;
    }
    public sealed class SampleTask
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Priority { get; set; } = string.Empty;
        public string Assignee { get; set; } = string.Empty;
    }
}
```

For a custom tool, provide a PascalCase `Name`, a `Description`, and `InputSchema` as a JSON Schema object represented by an object rather than serialized JSON text. The `OnWebMcpExecute` handler must set `args.Result` for a custom tool. The same event is raised before built-in tools run; use it to inspect the command and arguments, cancel an invocation with `args.Cancel = true`, or request confirmation for a write with `args.ShowConfirmationDialog = true`.

The event runs before the tool executes. Use it for auditing, cancellation, and confirmation requests; built-in operations execute after the event completes. A requested confirmation must be approved and displayed for the operation to proceed. A canceled operation returns a terminal `[USER_CANCELLED]` message unless the host supplies `CancellationResponse`.

Built-in overrides retain the built-in input schema. Tool names, including built-in name overrides, must be PascalCase. `InputSchema` applies only to custom tools. Invalid custom tool definitions are skipped and logged. A custom tool with the same name as a built-in tool replaces that tool in the effective list.

## Tool names and multiple boards

The registered browser tool name combines a per-board prefix with the bare PascalCase tool name, for example `workBoard_GetBoardStructure`. The prefix is selected from `KanbanWebMcpSettings.Name`, then the Kanban component's `ID`, then a generated `SfKanban-{DataId}` value. Use distinct names or IDs for multiple boards on one page.

`GetWebMcpToolsAsync()` returns the effective tools using bare names, without the browser registration prefix. Its returned `IKanbanWebMcpTool` items expose `Name`, `Description`, and `InputSchema`.

## Errors and responses

Tool results are returned as text content containing JSON. Failed calls set `isError` and include a structured error payload with an error name, numeric code, and message. Common errors include:

| Error | Meaning |
|-------|---------|
| `UnknownTool` | The requested tool is not in this board's effective tool list. |
| `InvalidArgument` | A required argument is missing or has an invalid value or type. |
| `ExecutionFailed` | The tool could not complete its operation. |

---

The browser-side registration is scoped to the board and removed when that board is destroyed. If the browser does not support `document.modelContext`, the component logs a warning and leaves the board usable without agent tools.

## See also

- [Getting Started](https://help.syncfusion.com/gantt-sdk/blazor/kanban/getting-started-with-web-app)
