---
layout: post
title: Troubleshoot Syncfusion Licensing Errors | Syncfusion
description: Learn how to diagnose and resolve Syncfusion licensing validation errors across all supported Gantt SDK platforms, including key unregistered, invalid, expired, and version mismatches.
keywords: syncfusion licensing errors, trial expired error, invalid key error, platform mismatch license, version mismatch license, troubleshooting license key
canonical: https://help.syncfusion.com/gantt-sdk/licensing/licensing-error
platform: gantt-sdk
control: Licensing Errors
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Syncfusion® Licensing Errors

Licensing pop-ups and validation messages can appear under different circumstances depending on your configuration. Use the guidance below to identify the message and apply the appropriate resolution for your platform.

## Licensing errors (v31.1.17 and later)

### License key not registered or trial expired

This message appears when a license key is not registered in the application or code, or a trial key has passed the 30-day evaluation period.

**Error message:**  
This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. To remove the license validation message permanently, a valid license key must be included.

**Solution:**

1. If you **have a valid Syncfusion<sup style="font-size:70%">&reg;</sup> license**, you can **generate a license key for a specific version and product** from the [Downloads and Keys page](https://www.syncfusion.com/account/downloads).
2. If you **have a Syncfusion<sup style="font-size:70%">&reg;</sup> account and an active trial**, you can **generate the trial license key for a specific version and platform** from the [Trial Downloads page](https://www.syncfusion.com/account/manage-trials/downloads).
3. If you **have a Syncfusion<sup style="font-size:70%">&reg;</sup> account but no active trials**, [purchase a license](https://www.syncfusion.com/sales/pricing?category=ui-components) or [start your 30-day free trial](https://www.syncfusion.com/account/manage-trials/start-trials). Then, generate the trial license key for **a specific version and platform** from the [Downloads and Keys page](https://www.syncfusion.com/account/downloads).
4. If you **do not already have a Syncfusion<sup style="font-size:70%">&reg;</sup> account**, you can create one [on our Register page](https://www.syncfusion.com/account/register) and [purchase a license](https://www.syncfusion.com/sales/pricing?category=ui-components) or start your 30-day free trial. Then, you can **generate the trial license key for a specific version and platform** from the [Active Trials page](https://www.syncfusion.com/account/manage-trials/start-trials).
5. You can also generate a license key from the Claim License Key page by selecting **Claim your FREE account** in the warning dialog. Refer to the [license key generation guide](./license-key-generation) for more details.

* **Next step:** Register the generated license key in the application. Refer to the [license key registration guide](./license-key-registration) for information on registering the license key.

### Invalid key

If the application is registered with an invalid key, another version of a license key, or another platform's license key, the following error message will pop up when launching your application.

**Error message:**  
The included Syncfusion<sup style="font-size:70%">&reg;</sup> license key is invalid.

**Solution:**

1. If you have a valid Syncfusion<sup style="font-size:70%">&reg;</sup> license, you can **generate a license key for a specific version and product** from the [Downloads and Keys page](https://www.syncfusion.com/account/downloads).
2. If you have a Syncfusion<sup style="font-size:70%">&reg;</sup> account and an active trial, you can **generate the trial license key for a specific version and product** from the [Trial Downloads page](https://www.syncfusion.com/account/manage-trials/downloads).
3. If you **have a Syncfusion<sup style="font-size:70%">&reg;</sup> account but no active trials**, [purchase a license](https://www.syncfusion.com/sales/pricing?category=ui-components) or [start your 30-day free trial](https://www.syncfusion.com/account/manage-trials/start-trials). Then, you can **generate the trial license key for a specific version and product** from the [Downloads and Keys page](https://www.syncfusion.com/account/downloads).
4. If you **do not already have a Syncfusion<sup style="font-size:70%">&reg;</sup> account**, you can create one [on our Register page](https://www.syncfusion.com/account/register) and [purchase a license](https://www.syncfusion.com/sales/pricing?category=ui-components) or [start your 30-day free trial](https://www.syncfusion.com/account/manage-trials/start-trials). Then, you can **generate the trial license key for a specific version and product** from the [Trial Downloads page](https://www.syncfusion.com/account/manage-trials/downloads).
5. Also, you can generate the license key from the Claim License Key page by clicking **Claim your FREE account** link from the licensing warning message. Refer to the [license key generation guide](./license-key-generation) for more details.

* **Next step:** Register the generated license key in the application. Refer to the [license key registration guide](./license-key-registration) for information on registering the license key.

## Licensing errors from version 16.2.0* to 30.x.x*

### License key not registered

The following error message will be shown if a Syncfusion<sup style="font-size:70%">&reg;</sup> license key has not been registered in your application.

**Error message:**  
This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. Include a valid license to permanently remove this license validation message. You can also obtain a free 30 day evaluation license to temporarily remove this message during the evaluation period.

**Solution:**

* Follow the solution options listed above under **License key not registered or trial expired** to generate a valid license key for your specific legacy version and platform, then register it in your application. For legacy registration instructions, refer to the [license key registration guide](./license-key-registration).

### Invalid key

If the legacy application is registered with an invalid key, another version of a license key, or another platform's license key, the following error message will pop up when launching your application.

**Error message:**  
The included Syncfusion<sup style="font-size:70%">&reg;</sup> license is invalid.

**Solution:**

* Follow the solution options listed above under **Invalid key** on how to generate and register a valid license key for your specific legacy version and platform.

### Trial expired

The following error message will be shown if the trial key has expired after 30 days.

**Error message:**  
Your Syncfusion<sup style="font-size:70%">&reg;</sup> trial license has expired.

**Solution:**  
Purchase a license [on our Pricing page](https://www.syncfusion.com/sales/pricing?category=ui-components) to resolve this error.

### Platform Mismatch

If the application is registered with another platformâ€™s license key, the following error message will pop up when launching the application.

**Error message:**  
The included Syncfusion<sup style="font-size:70%">&reg;</sup> license is invalid (Platform mismatch).

**Solution:**

* License keys are version and platform-specific. If you encounter this message, regenerate a valid license key specifically matching your target platform (e.g., Angular, React, Vue, Blazor, ASP.NET Core) and register the generated key in your code.

### Version Mismatch

If the application is registered with another versionâ€™s license key, the following error message will pop up when launching the application.

**Error message:**  
The included Syncfusion<sup style="font-size:70%">&reg;</sup> license ({Registered Version}) is invalid for version {Required version}.

**Solution:**

* License keys are product and version-specific. Regenerate a valid license key matching the exact version of the Syncfusion packages referenced in your application and register the newly generated key.

## License Key activation errors using the npx command (JavaScript-family only)

These console validation errors occur if you use the `npx syncfusion-license activate` script within continuous integration (CI) environments or a local terminal on Angular, React, Vue, TypeScript, or JavaScript workflows.

### Invalid Key

If the license registration utility encounters an invalid license key format or structure, the following console error appears.

**Error message:**  
`(Error) License key is not valid.`

**Solution:**

* Ensure you copied the license key in its entirety without any trailing or leading whitespace, and verify it was generated for the correct package version from the [Downloads and Keys page](https://www.syncfusion.com/account/downloads).

### Version Mismatch

If you attempt to activate packages with a license key that was generated for a different Syncfusion volume or version, you will face this console mismatch.

**Error message:**  
`The key entered is for 23.*.* version, please enter the key for 27.*.* version.`

**Solution:**

* Generate a license key that corresponds directly to the package dependency version specified in your project's manifest files.

### Platform Mismatch

Using a license key from a non-web platform (e.g., WPF, WinUI) inside JS-based frameworks during a CLI activation triggers an activation failure.

**Error message:**  
`(Error) License key is not valid.`

**Solution:**

* Re-generate the license key and ensure that you select a web platform (such as JavaScript, React, Angular, or Vue) during the generation step.

### Trial Expired

If the trial key supplied to the command has passed its evaluation duration, the CLI activation tool rejects the registration.

**Error message:**  
`The included Syncfusion license key has expired.`

**Solution:**  
Purchase a developer license [here](https://www.syncfusion.com/sales/pricing?category=ui-components) to obtain a valid license key.

## Could not load Syncfusion.Licensing.dll assembly version...? (.NET, Blazor, MAUI, WPF, & WinUI only)

For native and desktop frameworks (such as WPF, WinUI, and .NET MAUI), you may encounter runtime assembly loading errors if the dependencies cannot resolve.

### Solution:

1. Ensure that all Syncfusion NuGet packagesâ€”including [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/)â€”are installed to the same exact version and successfully restored in your application.
2. Verify that package reference declarations within your configuration files are pointing to the identical target version.
3. Ensure that **Copy Local is set to True** for all referenced assemblies. Since assembly validation runs locally, the validation DLL must reside within the build and publisher output environments.
4. Clean and rebuild your project folder (`/bin` and `/obj` directories) to purge any outdated trial assemblies.

## Troubleshooting Checklist

If you continue to experience licensing pop-ups or console errors after registering a proper license key, check the following checklist:

1. **Verify Initialization Sequence:** The license key must be registered *before* initializing any Syncfusion component or control. Placing the registration statement too late in the app lifecycle will trigger the trial dialog.
2. **Match Package Versions:** If your program references multiple Syncfusion packages (e.g., different Gantt or Kanban components), they **MUST** all occupy the identical version. Any version divergence could result in mismatched key validation failures.
3. **Verify NuGet Assemblies:** Check clean program setups to confirm no cached or mixed-version trial packages or duplicate references exist within output build folders.
4. **Purge Cache folders:** Upgrading package references should always correspond with updating your license key. Try clean commands, or delete program caches, then run a full rebuild to guarantee clean packages are active.