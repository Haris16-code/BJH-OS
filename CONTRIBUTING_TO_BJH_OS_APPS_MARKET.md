BJH OS Developer Documentation
==============================

Welcome to the **BJH OS App Market Developer Platform**. This guide will walk you through setting up your account, deploying your first application, managing updates, and adhering to our community guidelines.

1\. Getting Started
-------------------

### Creating a Developer Account

To publish apps on BJH OS, you must register as a Developer.

1.  Navigate to the [**Login/Register**](https://bjh-os.alwaysdata.net/Apps-Market) page.
    
2.  Switch to the **"Create Account"** tab.
    
3.  **Crucial Step:** Under "Account Type", select **Developer** (Build Apps).
    
    *   _Note: Standard "User" accounts cannot access the deployment dashboard._
        
4.  Fill in your Full Name, Email, and Password.
    
5.  Click **Create Account**.
    

### Account Verification

Security is our priority. After registering:

1.  Check your email inbox for a **6-digit Verification Code (OTP)**.
    
2.  Enter the code in the verification modal that appears.
    
3.  Once verified, you will be automatically redirected to the **Developer Dashboard**.
    

2\. Deploying Your App
----------------------

BJH OS supports static web applications (HTML5/JS/CSS).

### Preparation

Before deploying, ensure your project folder is structured correctly:

*   **Root File:** Your main entry point **MUST** be named index.html.
    
*   **Assets:** Use relative paths for images, scripts, and styles (e.g., ![](assets/logo.png) instead of C:/Users/...).
    

### Deployment Steps

1.  Log in to the **Developer Dashboard**.
    
2.  Ensure the toggle is set to **"New Project"**.
    
3.  **Fill in App Metadata:**
    
    *   **App Name:** The public title of your app.
        
    *   **Type:** Select "App" (Utilities/Tools) or "Game".
        
    *   **Version:** Start with 1.0.
        
    *   **Icon URL:** A direct link to your app's icon (PNG/JPG, square aspect ratio recommended).
        
    *   **Screenshots URL:** Comma-separated links to gameplay or interface images.
        
    *   **Description:** A detailed explanation of your app features.
        
4.  **Upload Files:** Drag and drop your **entire project folder** into the drop zone.
    
5.  Click **Deploy**.
    

What happens next?

Your app will be uploaded to our cloud storage. It will enter a "Pending Review" state. An admin will review your code and assets. Once approved, it will automatically appear in the BJH OS App Market.

3\. Updating Your App
---------------------

We support **Zero-Downtime Updates**. Your live app remains accessible while your update is being reviewed.

### Update Process

1.  In the Developer Dashboard, toggle the switch to **"Update Existing"**.
    
2.  **Select Project:** Choose the app you wish to update from the dropdown menu.
    
3.  **Metadata:** The form will auto-fill with existing data. You **MUST** increment the **Version Number** (e.g., change 1.0 to 1.1).
    
4.  **Upload:** Drag and drop the _new_ version of your project folder.
    
5.  Click **Update**.
    

**The Shadow Copy System:**

*   Your update creates a "Shadow Copy" in the database.
    
*   The **Old Version** stays live and playable in the store.
    
*   The **New Version** goes to the Admin for review.
    
*   Upon **Approval**, the new files and data replace the old ones instantly.
    

4\. Support & Issues
--------------------

If you encounter bugs or have questions for the administration:

1.  Go to the **"Report Issues"** tab in your dashboard.
    
2.  **Subject:** Brief summary of the problem.
    
3.  **Description:** Detailed explanation.
    
4.  Click **Submit Ticket**.
    

You can track the status of your ticket (Open/Resolved) and view **Admin Replies** directly in the "My Support Tickets" list on the same page.

5\. Rules & Guidelines
----------------------

To ensure a safe ecosystem, all developers must adhere to the following rules. **Violation will result in immediate account suspension.**

### 🚫 Strict Prohibitions

1.  **No Malware:** Viruses, spyware, crypto-miners, or malicious scripts.
    
2.  **No Phishing:** Apps attempting to steal user credentials or data.
    
3.  **No NSFW Content:** Pornography, extreme violence, or hate speech.
    
4.  **No Copyright Infringement:** Do not upload cracked software or pirated games.
    

### ✅ Best Practices

1.  **Performance:** Ensure your app loads quickly and is responsive.
    
2.  **Asset Hosting:** Use reliable, persistent URLs for icons and screenshots (e.g., Imgur, Unsplash, or your own CDN).
    
3.  **Clean Code:** Avoid obfuscated code to speed up the review process.
    

### Account Suspension & Appeals

If your account is banned:

1.  You will lose access to the dashboard.
    
2.  A **"Suspended"** overlay will appear upon login showing the reason.
    
3.  You may submit an **Appeal** through the form provided in the overlay.
    
4.  Admins will review your appeal. If **Approved**, your access is restored. If **Rejected**, you will see the rejection reason and may try again.
