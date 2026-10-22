---
layout: post
title: Real-Time ASP.NET Core Gantt Chart with SignalR | Live Updates | Syncfusion
description: Learn how to enable real-time updates with SignalR in the Syncfusion ASP.NET Core Gantt Chart for instant task synchronization and seamless live collaboration.
keywords: asp.net core gantt signalr, real-time updates, live data, razor pages, push notifications, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/signalr
platform: gantt-sdk
control: SignalR - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# SignalR Integration with Real-Time Data Sync in ASP.NET Core Gantt Chart

The [ASP.NET Core Gantt Chart](https://www.syncfusion.com/gantt-sdk/aspnet-core-gantt-chart) component supports real-time data binding using **SignalR**, a powerful library for bi-directional communication between servers and clients. This approach enables live data updates without page refreshes, making it ideal for applications that require instant information delivery such as stock tickers, live dashboards, and real-time notifications.

**What is SignalR?**

SignalR is an open-source .NET library that simplifies adding real-time web functionality to applications. It automatically handles the best transport method (WebSockets, Server-Sent Events, or Long Polling) and provides a high-level API for server-to-client and client-to-server communication. SignalR enables persistent two-way connections between clients and servers, allowing instant data synchronization without polling.

**Key Benefits of SignalR**

- **Real-Time Communication**: Establish persistent connections for instant data updates across all connected clients.
- **Bidirectional**: Support both server-to-client (broadcasting) and client-to-server (commands) communication.
- **Automatic Transport Selection**: Intelligently choose the best transport protocol (WebSockets, SSE, Long Polling) based on browser and server capabilities.
- **Scalable Broadcasting**: Efficiently broadcast updates to multiple clients simultaneously using SignalR groups.
- **Built-in Reconnection**: Automatically handles client reconnection with exponential back off retry logic.
- **No Page Refresh Required**: Update UI dynamically without reloading the page.
- **Cross-Platform**: Works across browsers, mobile devices, and desktop applications.

## Prerequisites 

Ensure the following software and packages are installed before proceeding: 

| Software/Package | Version | Purpose |
|------------------|---------|---------|
|Syncfusion License Key | Latest | Required for Syncfusion components|
|.NET SDK | 8.0 or later | ASP.NET Core Razor Pages and SignalR development |
|Visual Studio / VS Code | Latest | IDE for development |
|Basic knowledge of ASP.NET Core, JavaScript, and SignalR  | N/A | Understanding the integration |

## Setting Up SignalR with Real-Time Data

### Step 1: Create a New ASP.NET Core Razor Pages Project

Before proceeding, ensure that you have completed the base ASP.NET Core Gantt Chart setup as described in the [Getting Started guide](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/getting-started). The guide provides comprehensive instructions for project creation, NuGet package installation, tag helpers, stylesheet and script resources, and basic control configuration.

```bash
dotnet new webapp -o GanttSignalR
cd GanttSignalR
```

### Step 2: Install the Syncfusion Packages

Install the Syncfusion ASP.NET Core Gantt and theme packages.

```bash
dotnet add package Syncfusion.AspNetCore.Gantt --version {{ site.releaseversion }}
dotnet add package Syncfusion.AspNetCore.Themes --version {{ site.releaseversion }}
```

Open the **~/Pages/\_ViewImports.cshtml** file and import the tag helpers.

```cshtml
@addTagHelper *, Syncfusion.AspNetCore.Gantt
@addTagHelper *, Syncfusion.AspNetCore.Base
```

### Step 3: Add Stylesheet, Scripts, and the Script Manager

Include the theme stylesheet, the Gantt script, and the SignalR browser client inside the `<head>` of **~/Pages/Shared/\_Layout.cshtml**. Then register the script manager at the end of the `<body>` element.

```cshtml
<head>
    ...
    <link rel="stylesheet" href="_content/Syncfusion.AspNetCore.Themes/styles/fluent2.css" />
    <script src="_content/Syncfusion.AspNetCore.Gantt/scripts/sf-gantt.min.js"></script>
    <!-- SignalR browser client -->
    <script src="https://cdn.jsdelivr.net/npm/@@microsoft/signalr@8.0.7/dist/browser/signalr.min.js"></script>
</head>
<body>
    ...
    <!-- Syncfusion ASP.NET Core Script Manager -->
    <ejs-scripts></ejs-scripts>
</body>
```

> If the SignalR client script is already referenced in `_Layout.cshtml`, remove the duplicate `<script>` reference from `Index.cshtml`.

### Step 4: Register Syncfusion License

Register the Syncfusion license key in `Program.cs`:

```csharp
using Syncfusion.Licensing;

SyncfusionLicenseProvider.RegisterLicense("YOUR_SYNCFUSION_LICENSE_KEY");

var builder = WebApplication.CreateBuilder(args);
```

### Step 5: Configure the Gantt Chart with Events

To enable real-time collaboration, add the Gantt Chart control to `Index.cshtml` and bind two important lifecycle events: `created` and `actionComplete`.

```cshtml
<ejs-gantt id="Gantt" dataSource="@Model.GanttData" actionComplete="actionComplete" created="created">
    <!-- Gantt configuration here (e.g., taskFields, columns) -->
</ejs-gantt>
```

### Step 6: Implement SignalR Connection

In `Index.cshtml`, configure the SignalR connection and the event handlers inside a `<script>` block using the following lifecycle events:

**created Event**

The `created` event establishes the SignalR connection to the backend hub. Initializing the connection here ensures that the real-time communication channel is ready as soon as the Gantt Chart component is rendered.

**actionComplete Event**

The `actionComplete` event is triggered after add, edit, and delete operations are completed in the Gantt Chart. By checking the `requestType` property, you can identify the performed operation and send the corresponding task data to the SignalR hub. Connected clients receive the notification and apply the appropriate CRUD operation, ensuring real-time synchronization across all Gantt Chart instances.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/signalr/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/signalr/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![SignalR Real-Time Collaboration](images/signalr-real-time-collaboration-placeholder.png)

- **HubConnectionBuilder**: Configures and creates the SignalR connection to the backend hub. It allows you to specify the hub URL, authentication options (such as credentials), logging level, and reconnection behavior. Once configured, the `.build()` method creates the `HubConnection` instance that manages communication with the server.

- **on()**: Registers a client-side listener for messages broadcast by the server. In this implementation, it listens for the `ReceiveTaskChange` event. Based on the received operation type (add, update, or delete), the corresponding Gantt Chart method is invoked to synchronize task changes across connected clients.

- **invoke()**: Allows the client to call a method on the server-side hub. In this implementation, it invokes the `BroadCastTaskChange` method and sends a payload containing the operation type, task data, and sender connection ID to synchronize task changes across connected clients.

**Handling add operations**

When a user adds a task, the `actionComplete` event is triggered with a request type of add. The newly created task data is sent to the SignalR hub using the `BroadCastTaskChange` method.
When other connected clients receive the notification, the task is inserted into their Gantt Chart instances by calling:

```javascript
gantt.addRecord(data);
```

**Handling edit operations**

When a task is modified, the `actionComplete` event is triggered with a request type of save. The updated task data is broadcast through SignalR.
Upon receiving the update notification, connected clients update the corresponding task using:

```javascript
gantt.updateRecordByID(data);
```

**Handling delete operations**

When a task is deleted, the deleted task information is sent to the SignalR hub.
Connected clients remove the corresponding task record using:

```javascript
gantt.deleteRecord(data.TaskId);
```

**Preventing Duplicate Broadcasts**

To avoid broadcast loops during synchronization, incoming SignalR updates are applied locally without re-broadcasting them. The implementation uses the **toRefreshGantt** flag and sender connection ID validation to ensure that each add, update, or delete operation is processed only once across all connected Gantt Chart instances.

## Create the Hub and Server Configuration

### Step 1: Use the ASP.NET Core Project as the SignalR Host

The ASP.NET Core Razor Pages project created above hosts both the Gantt Chart page and the SignalR hub. Refer to the [Getting started with ASP.NET Core Gantt Control](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/getting-started) for additional setup guidance.

### Step 2: Implementing the SignalR Hub

Create a `Hubs` folder in the project root and add `GanttHub.cs`:

```csharp
GanttHub.cs

using Microsoft.AspNetCore.SignalR;
namespace GanttSignalR.Hubs
{
    public class GanttHub : Hub
    {
        public async Task JoinProject(string projectId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, projectId);
        }
        public async Task BroadCastTaskChange(string projectId, TaskChange change)
        {
            await Clients.OthersInGroup(projectId)
                         .SendAsync("ReceiveTaskChange", change);
        }
    }
    public class TaskChange
    {
        public string ProjectId { get; set; }
        public string Type { get; set; }
        public object Data { get; set; }
        public string Sender { get; set; }
    }
}
```

The `BroadCastTaskChange` method broadcasts task changes to other connected clients in the specified SignalR group. The task change data is sent through the `ReceiveTaskChange` event, allowing connected Gantt Chart instances to remain synchronized.

### Step 3: Configure SignalR Services

Update `Program.cs` to register Razor Pages, SignalR services, and map the hub. When the page and hub are served from the same application, CORS is not required.

```csharp
using GanttSignalR.Hubs; // Adjust namespace if needed
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
// Add SignalR services
builder.Services.AddSignalR();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapRazorPages();
// Map SignalR hub   
app.MapHub<GanttHub>("/ganttHub");

app.Run();
```

This configuration registers SignalR services and exposes the hub endpoint to the Gantt page. If the hub is hosted in a separate application, add a CORS policy with `AllowCredentials()` for the Razor Pages origin and call `app.UseCors()` before `app.MapHub()`.

## Configure Syncfusion ASP.NET Core Gantt with SignalR 

### Step 1: Configure the Gantt Components

The ASP.NET Core Gantt Chart package (`Syncfusion.AspNetCore.Gantt`) has already been installed in your project via NuGet, and the tag helpers, stylesheet, and script resources were added in the earlier steps.

### Step 2: Update the Gantt in Index.cshtml

Update the page to include a fully configured Gantt Chart with data binding. This step defines the basic structure of the Gantt control, including data source, task fields, and columns.

```cshtml
Index.cshtml

<ejs-gantt id="Gantt" height="450px" dataSource="@Model.GanttData"
           actionComplete="actionComplete" created="created">
    <e-gantt-taskfields id="TaskId" name="TaskName" startDate="StartDate" duration="Duration" progress="Progress" parentID="ParentId"></e-gantt-taskfields>
    <e-gantt-columns>
        <e-gantt-column field="TaskId" headerText="Task ID"></e-gantt-column>
        <e-gantt-column field="TaskName" headerText="Task Name"></e-gantt-column>
        <!-- Add more columns --> 
    </e-gantt-columns>
</ejs-gantt> 
```

## How Real-Time Sync Works

The integration enables seamless, instant updates across multiple users. The process follows this flow: 

**1. User Action Triggers Event**

When a user makes a change such as editing, adding, or deleting a task in the Gantt Chart, the `actionComplete` event is automatically triggered.

**2. Broadcast the Change**

Inside the `actionComplete` handler, the client checks the `requestType` property (e.g., add, edit, save, delete). If a meaningful change has occurred, the client calls `invoke('BroadCastTaskChange', projectId, payload)` on the SignalR connection. This sends a lightweight notification to the server-side hub.

**3. Server Broadcasts to Other Clients**

Once the SignalR hub receives the message, it uses `Clients.OthersInGroup(projectId).SendAsync("ReceiveTaskChange", change)` to push the notification to all other connected clients in the project group.

**4. Connected Clients Apply the Operation**

Each client receives the notification and applies the corresponding operation directly to its Gantt Chart instance.

| Operation | Gantt Method         |
| --------- | -------------------- |
| Add       | `addRecord()`        |
| Update    | `updateRecordByID()` |
| Delete    | `deleteRecord()`     |

This mechanism ensures that collaborative changes are reflected in real time without requiring manual page refreshes, providing a smooth and responsive multi-user experience.

## Running the Application 

**Step 1: Build the Application** 

```bash
dotnet build
```

**Step 2: Run the Application**

```bash
dotnet run
```

The application starts on `https://localhost:7297`.

**Step 3: Test Real-Time Sync**

- Open https://localhost:7297 in two separate browser tabs.
- In the first tab, perform an action such as adding, editing, or deleting a task. 
- Observe that the task is automatically added, updated, or removed in the second tab as corresponding operations are synchronized through SignalR.

![SignalR Real-Time Sync Result](images/signalr-real-time-sync-result-placeholder.png)

The application now provides a collaborative project management tool. Experiment with adding database persistence (e.g., using Entity Framework) or advanced features like user-specific updates.

## Summary

This guide demonstrates building a real-time collaborative Gantt Chart application using SignalR with ASP.NET Core:

- Configure the SignalR browser client using the `@microsoft/signalr` script in Razor Pages
- Create an ASP.NET Core SignalR hub for bidirectional communication
- Handle `created` event to establish SignalR connection on control initialization
- Use `actionComplete` event to:
  - Broadcast CRUD operation payloads through SignalR.
  - Synchronize records using:
    - `addRecord()`
    - `updateRecordByID()`
    - `deleteRecord()`
  - Prevent duplicate processing using sender tracking and broadcast suppression.
- Configure CORS when the hub is hosted in a separate application
- Implement troubleshooting strategies for common connection and synchronization issues

This architecture enables teams to collaborate seamlessly with instant visibility of project changes and can be extended with database persistence, user-specific notifications, and conflict resolution features.

## Reference Links

- [Introduction to SignalR](https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction)
- [ASP.NET Core Gantt Chart Component](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/getting-started)
- [Gantt API Reference](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html)

## Troubleshooting Common SignalR + ASP.NET Core Gantt Issues

This section covers the most frequent problems developers encounter when integrating SignalR with the ASP.NET Core Gantt Chart component for real-time collaboration.

| # | Problem | Possible Causes | Solution |
|---|---------|----------------|----------|
| 1 | "Failed to connect to SignalR hub" or connection stays in "Connecting" state | Incorrect hub URL, app not running, CORS policy blocking (separate hub host), firewall/proxy blocking WebSocket | Ensure the hub URL matches exactly (e.g., `https://localhost:7297/ganttHub`) and `app.MapHub<GanttHub>("/ganttHub")` is in `Program.cs`. If the hub is hosted separately, verify CORS is configured with `AllowCredentials()`. Check browser console → Network tab for 400/403/502 errors on WebSocket connection. |
| 2 | "CORS policy: No 'Access-Control-Allow-Origin' header is present" | CORS not configured or incorrect origin URL when the hub is hosted in a separate application | In `Program.cs`, ensure `WithOrigins(...)` matches the origin of the Razor Pages app exactly (including protocol and port). Add `.AllowCredentials()` to the policy. Call `app.UseCors()` before `app.MapHub()`. |
| 3 | "Cannot read properties of undefined (reading 'invoke')" or "signalR is not defined" | SignalR client script not loaded, connection not established before calling `invoke()`, connection object is null | Ensure the `@microsoft/signalr` script is loaded before your page script. Check that `connection` is not null/undefined before calling `invoke()`. Ensure the `created` event has completed and the connection is started before `actionComplete` tries to invoke methods. Add error handling: `if (!connection) return;` |
| 4 | Changes made by one user don't appear for other users | Hub not broadcasting to the group, clients not in the same group, message name mismatch | Verify the hub method uses `Clients.OthersInGroup()` or the appropriate group targeting and that clients call `JoinProject`. Ensure the message name matches on both send and receive (e.g., "ReceiveTaskChange"). Check that all clients are listening with `connection.on('ReceiveTaskChange', ...)`. |
| 5 | Infinite loop: CRUD operations are repeatedly broadcast between clients | Remote CRUD operations triggering `actionComplete`. Missing suppression logic. | Prevent recursive broadcasts by tracking operations that originate from SignalR. Use a flag such as `toRefreshGantt` to skip broadcasting when a synchronized operation is being applied locally. Additionally, include the sender's SignalR connection ID in the payload and ignore messages originating from the current client.  |

### Quick Diagnostic Steps

When troubleshooting SignalR issues with ASP.NET Core Gantt, follow these steps systematically:

**1. Verify the Application is Running**
```bash
# Ensure your ASP.NET Core application is running
dotnet run
# Look for output: "Now listening on: https://localhost:7297"
```

**2. Check Browser Console**
- Open Developer Tools (F12) → Console tab
- Look for SignalR connection messages (success or errors)
- Check for CORS errors, connection failures, or JavaScript errors

**3. Inspect Network Traffic**
- Open Developer Tools → Network tab → Filter by WS (WebSocket)
- Look for connection to your hub endpoint (e.g., `/ganttHub`)
- Status should show "101 Switching Protocols" for successful WebSocket upgrade
- If you see repeated XHR requests instead, WebSocket fallback to long polling occurred

### Common Solutions Summary

**Most real-time issues in ASP.NET Core + SignalR setups are solved by:**

1. **Correct Hub Mapping and CORS Configuration**: Ensure `MapHub` is configured, and when hosted separately, `AllowCredentials()` is set and the origin URL matches exactly (including protocol and port)
2. **Proper URL Construction**: Use absolute URLs with correct protocol (`https://` not `http://` for production)
3. **Connection State Checking**: Always verify connection state before invoking methods
4. **Message Name Matching**: Ensure server-side `SendAsync("MessageName")` matches client-side `on('MessageName')`
5. **WebSocket Support**: Verify WebSocket protocol is enabled on your hosting environment
6. **Error Handling**: Implement comprehensive try-catch blocks and error logging
7. **Proper Disposal**: Call `connection.stop()` in the `window.onbeforeunload` handler to clean up connections and prevent memory leaks
