---
layout: post
title: Installing Syncfusion Gantt SDK web installer - Syncfusion
description: Learn how to install the Syncfusion Gantt SDK web installer after downloading it from our Syncfusion website.
platform: Gantt SDK
control: Installation and Deployment
documentation: ug
---

# Installing Syncfusion Gantt SDK web installer


## Overview

For the Essential Studio Gantt SDK product, Syncfusion offers a Web Installer. This installer alleviates the burden of downloading a larger installer. You can simply download and run the online installer, which will be smaller in size and will download and install the Essential Studio products you have chosen. You can get the most recent version of Essential Studio Web Installer [here](https://www.syncfusion.com/downloads/latest-version). 

 
## Installation

The steps below show how to install Essential Studio Gantt SDK Web Installer.

The steps below show how to install the Essential Studio Gantt SDK Web Installer.

1.  Open the Syncfusion Essential Studio Gantt SDK Web Installer file from the downloaded location by double-clicking it. The Installer Wizard automatically opens and extracts the package.

    
    N> The installer wizard extracts the syncfusionessentialGanttSDKwebinstaller_{version}.exe dialog, which displays the package's unzip operation.
    
2. 	The Syncfusion Gantt SDK Web Installer's welcome wizard is displayed. Click the **Next** button.

    ![Welcome wizard](images/Step-by-Step-Installation_img2.png)

  
3.  The Platform Selection Wizard will appear. From the **Available** tab, select the products to be installed. Select the **Install All** checkbox to install all products. 
    
	<em>**Available**</em>
	
	![Platform Selection wizard Available](images/Step-by-Step-Installation_img3.png)
	
	If you have multiple products installed in the same version, they will be listed under the **Installed** tab. You can also select which products to uninstall from the same version. Click the Next button.
	
	<em>**Installed**</em>
	
    ![Platform Selection wizard Installed](images/Step-by-Step-Installation_img24.png)
	
	I> If the required software for the selected product isn't already installed, the **Additional Software Required** alert will appear. You can, however, continue the installation and install the necessary software later.
	
	**Required Software**
	
	![Additional Software Alert](images/Step-by-Step-Installation_img5.png)
		
	
4.	If previous version(s) for the selected products are installed, the Uninstall previous version wizard will be displayed. You can see the list of previously installed versions for the products you've chosen here. To remove all versions, check the **Uninstall All** checkbox. Click the Next button.

	![Existing Version for install](images/Step-by-Step-Installation_img20.png)

	N> From the 2021 Volume 1 release, Syncfusion has provided the option to uninstall the previous versions from 18.1 while installing the new version.

5.	A pop-up screen is displayed to confirm the uninstallation of the selected previous versions.

	![Existing Version for install](images/Step-by-Step-Installation_img21.png)
	
	
6. 	The Confirmation Wizard appears with the list of products to be installed/uninstalled. You can view and modify the list of products that will be installed and uninstalled from this page.

    ![Confirmation for install/uninstall](images/Step-by-Step-Installation_img15.png)

	N> By clicking the **Download Size** and **Installation Size** links, you can determine the approximate size of the download and installation.

7.  The Configuration Wizard appears. You can change the Download, Install, and Demos locations from here. You can also change the Additional settings on a product-by-product basis. Click **Next** to install with the default settings.

    ![Install and samples location for install](images/Step-by-Step-Installation_img8.png)
	
	**Additional settings**

    * Select the **Install Demos** check box to install Syncfusion samples, or leave the check box unchecked if you do not want to install Syncfusion samples.
	* Select the **Register Syncfusion Assemblies in GAC** check box to install the latest Syncfusion assemblies in GAC, or clear this check box when you do not want to install the latest assemblies in GAC.
    * Select the **Configure Syncfusion controls in Visual Studio** check box to configure the Syncfusion controls in the Visual Studio toolbox, or clear this check box when you do not want to configure the Syncfusion controls in the Visual Studio toolbox during installation. Note that you must also select the **Register Syncfusion assemblies in GAC** check box when you select this check box.
    * Select the **Configure Syncfusion Extensions controls in Visual Studio** check box to configure the Syncfusion Extensions in Visual Studio, or clear this check box when you do not want to configure the Syncfusion Extensions in Visual Studio.
    * Check the **Create Desktop Shortcut** check box to add a desktop shortcut for the Syncfusion Control Panel.
    * Check the **Create Start Menu Shortcut** check box to add a shortcut to the Start menu for the Syncfusion Control Panel.

8.  After reading the License Terms and Conditions, check the **I agree to the License Terms and Privacy Policy** check box. Click the **Next** button.

9.  The login wizard appears. You must enter your Syncfusion email address and password. If you do not already have a Syncfusion account, you can create one by clicking on **Create an Account**. If you have forgotten your password, click **Forgot Password** to create a new one. Click the **Install** button.

    ![Login wizard install](images/Step-by-Step-Installation_img9.png)

	I> The products you have chosen are installed based on your Syncfusion License (Trial or Licensed).

10. The download, installation, and uninstallation progress are displayed as shown below.

    ![Download and Installation progress install](images/Step-by-Step-Installation_img10.png)

11. When the installation is finished, the **Summary** wizard appears. Here you can see the list of products that have been installed successfully and those that have failed. To close the Summary wizard, click **Finish**.

    ![Installation Summary](images/Step-by-Step-Installation_img11.png)

    * To open the Syncfusion Control Panel, click **Launch Control Panel**.

12. After installation, there will be two Syncfusion control panel entries, as shown below. The Essential Studio entry will manage all Syncfusion products installed in the same version, while the Product entry will only uninstall the specific product setup.

    ![Control Panel](images/Step-by-Step-Installation_img19.png)
	
	
	
## Uninstallation

The Syncfusion Gantt SDK installer can be uninstalled in two ways.

   * Uninstall the Gantt SDK using the Syncfusion Gantt SDK web installer
   * Uninstall the Gantt SDK from Windows Control Panel

Follow either one of the option below to uninstall Syncfusion Essential Studio Gantt SDK installer.
  
**Option 1: Uninstall the Gantt SDK using the Syncfusion Gantt SDK web installer**

Syncfusion provides the option to uninstall products of the same version directly from the Web Installer application. Select the products to be uninstalled from the list, and the Web Installer uninstalls them one by one.

![Platform Selection wizard - Installed](images/Step-by-Step-Installation_img4.png)

### Option 2: Uninstall the Gantt SDK from Windows Control Panel

You can uninstall all the installed products by selecting the **Syncfusion Essential Studio {version}** entry (element 1 in the screenshot below) from the Windows Control Panel, or you can uninstall Gantt SDK alone by selecting the **Syncfusion Essential Studio for Gantt SDK {version}** entry (element 2 in the screenshot below) from the Windows Control Panel.

![Control Panel](images/Step-by-Step-Installation_img22.png)

N> If the **Syncfusion Essential Studio for Gantt SDK {version}** entry is selected from the Windows Control Panel, the Syncfusion Essential Studio Gantt SDK alone is removed and the default MSI uninstallation window is displayed.

1.  The Syncfusion Gantt SDK Web Installer's welcome wizard is displayed. Click the **Next** button.

    ![Welcome wizard uninstall](images/Step-by-Step-Installation_img2.png)
	
2.  The Platform Selection Wizard will appear. From the **Installed** tab, select the products to be uninstalled. To select all products, check the **Uninstall All** checkbox. Click the Next button.
    
	<em>**Installed**</em>
	
	![Platform Selection wizard Installed](images/Step-by-Step-Installation_img4.png)
	
	You can also select the products to be installed from the **Available** tab.Click the Next button.
	
	<em>**Available**</em>
	
	![Platform Selection wizard Available](images/Step-by-Step-Installation_img25.png)
	
3.  If any other products selected for installation, Uninstall previous version wizard will be displayed with previous version(s) installed for the selected products. Here you can view the list of installed previous versions for the selected products. Select **Uninstall All** checkbox to select all the versions. Click Next.

    ![Existing Version for install](images/Step-by-Step-Installation_img26.png)

4.  A pop-up screen is displayed to confirm the uninstallation of the selected previous versions.

    ![Existing Version for install](images/Step-by-Step-Installation_img21.png)

5.  The Confirmation Wizard appears with the list of products to be installed/uninstalled. Here you can view and modify the list of products that will be installed/uninstalled.

    ![Confirmation for install/uninstall](images/Step-by-Step-Installation_img15.png)

    N> By clicking the **Download Size** and **Installation Size** links, you can determine the approximate size of the download and installation.

6.  The Configuration Wizard appears. You can change the Download, Install, and Demos locations from here. You can also change the Additional settings on a product-by-product basis. Click **Next** to install with the default settings.

    ![Install and samples location install/uninstall](images/Step-by-Step-Installation_img23.png)

7.  After reading the License Terms and Conditions, check the **I agree to the License Terms and Privacy Policy** check box. Click the **Next** button.

8.  The login wizard appears. You must enter your Syncfusion email address and password. If you do not already have a Syncfusion account, you can create one by clicking on **Create an Account**. If you have forgotten your password, click **Forgot Password** to create a new one. Click the **Install** button.

    ![Login wizard install/uninstall](images/Step-by-Step-Installation_img9.png)

    I> The products you have chosen are installed based on your Syncfusion License (Trial or Licensed).

9.  The download, installation, and uninstallation progresses are shown.

    ![Download and Installation progress install/uninstall](images/Step-by-Step-Installation_img17.png)

10.  When the installation is finished, the **Summary** wizard appears. Here you can see the list of products that have been successfully and unsuccessfully installed/uninstalled. To close the Summary wizard, click **Finish**.

    ![Summary install/uninstall](images/Step-by-Step-Installation_img18.png)

To open the Syncfusion Control Panel, click **Launch Control Panel**.