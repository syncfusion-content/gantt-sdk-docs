---
layout: post
title: WebMCP tool integration for React Kanban | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion® React Kanban to enable AI interaction, configure tools, manage access, and monitor execution.
keywords: react kanban webmcp, kanban webmcp tools, webmcp react kanban, ai integration, task board tools
canonical: https://help.syncfusion.com/gantt-sdk/react/kanban/webmcp
platform: gantt-sdk
control: WebMCP - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# WebMCP Tools Integration for Syncfusion® React Kanban

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® React Kanban components through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform tasks such as:

- Manage cards and card updates.
- Move work across columns and update board data.
- Manage column visibility and board organization.
- Search, filter, sort, and navigate the board.
- Expand and collapse swimlane groups.
- Review card details and selected cards.

The React Kanban component provides WebMCP tools that enable AI agents to manage cards, organize columns, handle board interactions, navigate swimlanes, perform search, filtering, and sorting operations, and review selected card data.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® React Kanban component
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.

The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® React Kanban component.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® React Kanban component.

### Step 1: Create an application

Create an React application and integrate the Syncfusion® React Kanban component by following the [Getting Started with React Kanban](https://help.syncfusion.com/gantt-sdk/react/kanban/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMcpAdapter module and inject it into the component to make WebMCP functionality available.

```js
import { KanbanComponent, ColumnsDirective, ColumnDirective, Inject, WebMcpAdapter } from '@syncfusion/ej2-react-kanban';

const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

export default function App() {
  return (
    <KanbanComponent
      id='kanban'
      keyField='Status'
      dataSource={dataSource}
      cardSettings={cardSettings}
      enableWebMcp={true}
      height="450px"
    >
      <ColumnsDirective>
        <ColumnDirective headerText='Open' keyField='Open' />
        <ColumnDirective headerText='In Progress' keyField='In Progress' />
        <ColumnDirective headerText='Review' keyField='Review' />
        <ColumnDirective headerText='Done' keyField='Done' />
      </ColumnsDirective>
      <Inject services={[WebMcpAdapter]} />
    </KanbanComponent>
  );
}
```

### Step 3: Register component tools

Set the [enableWebMcp](https://ej2.syncfusion.com/react/documentation/api/kanban#enablewebmcp) property to `true` and configure the [webMcpSettings](https://ej2.syncfusion.com/react/documentation/api/kanban#webmcpsettings) property to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a component may expose tools such as:

- `getCardDetails` – Returns the card details based on card ID from the board.
- `getColumnData` – Returns the column data based on column key input.
- `getSelectedCards` – Gets the list of selected cards from the board.

An AI assistant can discover these tools and invoke them based on user prompts.

```js
import { KanbanComponent, ColumnsDirective, ColumnDirective, Inject, WebMcpAdapter } from '@syncfusion/ej2-react-kanban';

const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

const webMcpSettings = {
  tools: []
};

export default function App() {
  return (
    <KanbanComponent
      id='kanban'
      keyField='Status'
      dataSource={dataSource}
      cardSettings={cardSettings}
      enableWebMcp={true}
      webMcpSettings={webMcpSettings}
      height="450px"
    >
      <ColumnsDirective>
        <ColumnDirective headerText='Open' keyField='Open' />
        <ColumnDirective headerText='In Progress' keyField='In Progress' />
        <ColumnDirective headerText='Review' keyField='Review' />
        <ColumnDirective headerText='Done' keyField='Done' />
      </ColumnsDirective>
      <Inject services={[WebMcpAdapter]} />
    </KanbanComponent>
  );
}
```

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/react/documentation/api/kanban#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `kanban` is specified, a tool such as `getCardDetails` may be registered as `kanban_getCardDetails`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```js
import { KanbanComponent, ColumnsDirective, ColumnDirective, Inject, WebMcpAdapter } from '@syncfusion/ej2-react-kanban';

const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

const webMcpSettings = {
  name: 'kanban',
  tools: ['getCardDetails', 'getColumnData', 'getSelectedCards', 'addCard'],
  exposedTo: ['https://www.syncfusion.com/']
};

export default function App() {
  const beforeWebMcpToolExecute = (args) => {
    if (args.toolName === 'kanban_addCard') {
      const hour = new Date().getHours();

      if (hour < 9 || hour > 17) {
        args.cancel = true;
        console.log('Card updates are allowed only between 9:00 AM and 5:00 PM.');
      }
    }
  };

  return (
    <KanbanComponent
      id='kanban'
      keyField='Status'
      dataSource={dataSource}
      cardSettings={cardSettings}
      enableWebMcp={true}
      webMcpSettings={webMcpSettings}
      beforeWebMcpToolExecute={beforeWebMcpToolExecute}
      height="450px"
    >
      <ColumnsDirective>
        <ColumnDirective headerText='Open' keyField='Open' />
        <ColumnDirective headerText='In Progress' keyField='In Progress' />
        <ColumnDirective headerText='Review' keyField='Review' />
        <ColumnDirective headerText='Done' keyField='Done' />
      </ColumnsDirective>
      <Inject services={[WebMcpAdapter]} />
    </KanbanComponent>
  );
}
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/react/documentation/api/kanban#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```js
import { KanbanComponent, ColumnsDirective, ColumnDirective, Inject, WebMcpAdapter } from '@syncfusion/ej2-react-kanban';
import './App.css'
const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

const webMcpSettings = {
  name: 'kanban',
  tools: ['getCardDetails', 'getColumnData', 'getSelectedCards', 'addCard'],
  exposedTo: ['https://www.syncfusion.com/']
};

export default function App() {
  const beforeWebMcpToolExecute = (args) => {
    if (args.toolName === 'kanban_addCard') {
      const hour = new Date().getHours();

      if (hour < 9 || hour > 17) {
        args.cancel = true;
        console.log('Card updates are allowed only between 9:00 AM and 5:00 PM.');
      }
    }
  };

  return (
    <KanbanComponent
      id='kanban'
      dataSource={dataSource}
      cardSettings={cardSettings}
      enableWebMcp={true}
      webMcpSettings={webMcpSettings}
      beforeWebMcpToolExecute={beforeWebMcpToolExecute}
      height="450px"
    >
      <ColumnsDirective>
        <ColumnDirective headerText='Open' keyField='Open' />
        <ColumnDirective headerText='In Progress' keyField='In Progress' />
        <ColumnDirective headerText='Review' keyField='Review' />
        <ColumnDirective headerText='Done' keyField='Done' />
      </ColumnsDirective>
      <Inject services={[WebMcpAdapter]} />
    </KanbanComponent>
  );
}
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® React Kanban component with WebMCP integration through this [demo](https://demos.syncfusion.com/gantt-sdk/gantt-chart/webmcp/index.html).

## See also

- [WebMCP Tools for React Kanban](https://ej2.syncfusion.com/react/documentation/webmcp/components#kanban)
