---
layout: post
title: Generate Syncfusion® License Key | Syncfusion
description: Learn how to generate a Syncfusion license key from the License and Downloads portal, claim a key, and understand edition-based vs platform-based licensing for all platforms.
keywords: syncfusion license key, generate license key, claim license key, license key generation, edition-based licensing, platform-based licensing, syncfusion essential studio
canonical: https://help.syncfusion.com/gantt-sdk/licensing/license-key-generation
platform: gantt-sdk
control: License Key Generation
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Generate Syncfusion® License Key

Syncfusion® license keys can be generated from the **License & Downloads** or **Trial & Downloads** section of the Syncfusion® website.

![License and Downloads portal showing the Get Community License Key option](images/get-community-license-key.png)


> * Syncfusion® license keys are **version and platform specific**. Refer to the [KB](https://www.syncfusion.com/kb/8976/how-to-generate-license-key-for-licensed-products) to generate the license key for the required version and platform.
> * Refer to the [KB](https://www.syncfusion.com/kb/8951/which-version-syncfusion-license-key-should-i-use-in-my-application) to know which version of the Syncfusion® license key should be used in the application.

## Claim a License Key

Syncfusion® license keys can also be generated from the **Claim License Key** page based on the trial or valid license associated with your Syncfusion® account.

You can get the license key, based on license availability in your Syncfusion® account.

| Account State | Result |
|---------------|--------|
| **Active License** | If your Syncfusion® account has a valid active license, a full license key valid for the licensed version and all covered features is generated.<br><br>![Claim License Key page showing an active license state](images/claim-license-active.png) |
| **Active Trial** | If your account has a valid trial license, a trial license key that includes the trial expiry date is generated. Trial keys have limited validity (typically 30 days).<br><br>![Claim License Key page showing an active trial state with expiry date](images/claim-license-trial.png) |
| **Expired License** | If your license subscription has expired, it must be renewed to obtain a valid license key for the latest Essential Studio® version. A temporary license key with a 5-day validity period is generated in the meantime.<br><br>![Claim License Key page indicating an expired license with temporary key notice](images/claim-license-expired.png) |
| **No Trial, No License, or Expired Trial** | If your account is not associated with any trial or license, or if your trial has expired, you can attempt to claim a new trial or valid license from the Claim License Key page.<br><br>![Claim License Key page showing no active trial or license state](images/claim-license-none.png) |

![Claim License Key page](images/claim-license-key.png)

## Licensing Update for Essential Studio (v31.1 and later)

Starting with Essential Studio version **31.1.17** (2025 Volume 3 release), Syncfusion has transitioned from a **platform-based** to an **edition-based** licensing model. This change simplifies license management by aligning keys with specific editions rather than individual platforms.

### Available Editions

- Essential Studio UI Edition
- Essential Studio Document SDK
- Essential Studio PDF Viewer SDK
- Essential Studio DOCX Editor SDK
- Essential Studio Spreadsheet Editor SDK
- Essential Studio Enterprise Edition (includes all of the above)

### Standalone UI SDKs (v34.1 and Later)

Starting with Essential Studio v34.1.29 (2026 Volume 2 release), we are introducing **Standalone UI SDKs** to provide greater flexibility in how you license and build your applications. In addition to the comprehensive UI Component Suite, you can now purchase individual SDKs for specialized components:

- Essential Studio Grid SDK
- Essential Studio **Gantt** SDK
- Essential Studio Rich Text Editor SDK
- Essential Studio Chart SDK
- Essential Studio Scheduler SDK
- Essential Studio Diagram SDK
- Essential File Manager SDK

A new **Essential Studio UI SDK Edition** is also introduced (covers UI components across all platforms; excludes Scheduler, Gantt, Rich Text Editor, Diagram, Spreadsheet, Document Editor, PDF Viewer, and PDF Extract SDK). Whether you need a single specialized component or a comprehensive UI suite, you can now choose the product that best fits your application requirements and budget.

N> This change applies to new product purchases only. Existing customers will continue to receive access to all UI components, including Gantt, Scheduler, Diagram, and Rich Text Editor, according to their current licensing. No changes are required for existing customers.

### Key Changes in the Licensing Model

Effective from the 2025 Volume 3 release (v31.1.17), the licensing model has been updated as follows:

- **Edition-Based License Keys**: License keys are now generated per edition (e.g., UI Edition, Document SDK) instead of per platform (e.g., ASP.NET Core, Blazor). This minimizes the need for multiple platform-specific keys.
- **Enterprise Edition Coverage**: A single Enterprise Edition license key unlocks all editions and SDKs. This key is available to customers with an Enterprise Edition license or those who purchased or registered before v31.1.17, by selecting all options during key generation.
- **Unchanged Registration Process**: The method for registering license keys within your application remains the same. See the [License Key Registration Guide](./license-key-registration) for instructions.
- **Recommendation for Existing Customers**: Users with licenses from before v31.1.17 are advised to select all five editions (UI Component Suite, Document SDK, DOCX Editor SDK, PDF Viewer SDK, Spreadsheet Editor SDK) when generating a key for v31.1.17 or higher to ensure compatibility with applications using controls or libraries from multiple editions.

## How to Generate License Keys (v31.1.17 or higher)

Follow these steps for the edition-based model. The same steps apply to all platforms: **Angular, React, Vue, JavaScript, TypeScript, ASP.NET Core, ASP.NET MVC, Blazor, WPF, UWP, WinUI,** and **MAUI**.

**Step 1:** Go to the [Downloads and Keys](https://www.syncfusion.com/account/downloads) page.

**Step 2:** Click the **Get License Key** link.

![Get License Key](images/get-license-key.png)

**Step 3:** In the dialog that appears, select version **31.x.x or higher** from the version dropdown.

**Step 4:** Select the required edition(s) or SDK(s) from the drop-down menu based on your application's component usage.

- Customers who purchased or registered before v31.1.17 will see all available editions and SDKs.
- New customers purchasing the Essential Studio Enterprise Edition will also see all available editions and SDKs.
- New customers purchasing specific editions or SDKs will see only those in the drop-down menu.

To generate an Enterprise Edition key, select all available options:

- UI Edition
- Document SDK
- DOCX Editor SDK
- PDF Viewer SDK
- Spreadsheet Editor SDK

![License Key Generation for SDK](images/license-key-generation-sdk.png)

N> Customers who purchased a license before v31.x.x are strongly advised to select all five editions and SDKs when generating a key for v31.x.x or higher to ensure continued functionality, as your application might use resources from multiple editions.

**Step 5:** Click **Get License Key**. This generates the Enterprise Edition license key, which covers all SDKs and UI components.

![Generate License Key](images/generate-license-key.png)

## How to Generate License Keys (v30.x.x or earlier)

For versions 30.x.x and earlier, follow the platform-based licensing model. The same steps apply to all supported platforms.

**Step 1:** Go to the [Downloads and Keys](https://www.syncfusion.com/account/downloads) page.

**Step 2:** Click the **Get License Key** link.

**Step 3:** In the pop-up dialog, select the required version (v30.x.x or earlier).

**Step 4:** From the drop-down menu, select the platform(s) used in your application. You can select multiple platforms.

- Select **Angular** for EJ2-Angular applications.
- Select **React** for EJ2-React applications.
- Select **Vue** for EJ2-Vue applications.
- Select **JavaScript** for EJ2-JavaScript applications.
- Select **TypeScript** for EJ2-TypeScript applications.
- Select **ASP.NET Core** for ASP.NET Core applications.
- Select **ASP.NET MVC** for ASP.NET MVC applications.
- Select **Blazor** for Blazor applications.
- Select **WPF** for WPF applications.
- Select **UWP** for UWP applications.
- Select **WinUI** for WinUI applications.
- Select **MAUI** for MAUI applications.
- Select multiple platforms if your application uses components across different platforms.

> When selecting an older version, the menu will display platforms (e.g., JavaScript, Angular) instead of the new editions.

![License Key Platform](images/license-key-platform.png)

**Step 5:** Click **Get License Key** to generate the platform-specific license key.

## See Also

- [How to register Syncfusion® License Key in the Application?](./license-key-registration)
- [Syncfusion Licensing Overview](./overview)
- [Licensing FAQ and Troubleshooting](./licensing-troubleshoot)
