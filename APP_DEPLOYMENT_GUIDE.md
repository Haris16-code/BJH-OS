BJH OS Apps Deployment Center Developer Documentation
=====================================================

Welcome to **BJH OS Apps Deployment Center**! This platform allows you to host your HTML5 games and web applications instantly. Follow this guide to create an account, prepare your project, and deploy it to a live URL.

1\. Getting Started
-------------------

##### Create an Account

1.  Navigate to the <a href="https://bjhos.unaux.com/BJH_OS_Apps_Deployment_Center" target="_blank">BJH OS Apps Deployment Center Home Page</a>
2.  Click on the Register tab.
3.  Fill in your Full Name, Email, Password, and a short Bio.
4.  Click Register.
5.  Once registered, switch to the Login tab and enter your credentials to access the Dashboard.

2\. Preparing Your Project (Critical Step)
------------------------------------------

Before uploading, you must ensure your project files are structured correctly. The system requires an entry point file named `index.html`.

##### File Structure Rules

*   Rule 1: Your project MUST have a file named `index.html`.
*   Rule 2: The `index.html` file must be at the root level of your folder or ZIP file, not inside a nested sub-folder.

✅ **Correct Structure:**

- MyGame/
  - index.html  <-- Must be here!
  - style.css
  - script.js
  - assets/
    - player.png

❌ **Incorrect Structure (Will Fail):**

- MyGame/
  - SourceCode/   <-- Don't hide index.html inside here!
    - index.html
    - style.css

        

3\. Deploying Your App
----------------------

Once logged into your Developer Dashboard:

##### Project Details:

*   **Project Name:** Enter a unique name (e.g., "Space Invaders"). This will become part of your URL (e.g., .../games/space-invaders).
*   **Type:** Select Web App or Game.
*   **Version:** Enter a version number (e.g., 1.0).
*   **Description:** (Optional) Add a brief description.

##### Upload Files:

*   Drag and drop your entire project folder into the "Drag & Drop" area.
*   Note: The system automatically checks for `index.html` before uploading.

##### Deploy:

1.  Click the Deploy Now button.
2.  Wait for the progress bar to reach 100%.
3.  Once successful, your project list will update automatically.

4\. Accessing Your Live URL
---------------------------

After a successful deployment, your project will appear in the "Your Projects" table below the upload form.

*   **View Live:** Click the Link displayed in the "Live URL" column, or click the icon.
*   **Copy URL:** Click the Copy button next to the URL to copy it to your clipboard. **Use this generated link in BJH OS Apps Market**

5\. Updating Your Project
-------------------------

To update an existing app (e.g., to fix bugs or add levels):

1.  Enter the exact same Project Name in the upload form.
2.  Update the Version number (e.g., to 1.1).
3.  Upload the new files.
4.  Click Deploy Now.

The system will overwrite the old files with the new ones automatically.

6\. Troubleshooting & Support
-----------------------------

*   **"The project root must contain an index.html file":** Check your folder structure. Ensure `index.html` is not inside a sub-folder. Open your folder/zip and make sure `index.html` is visible immediately.
*   **"Project name taken by another user":** Project names (slugs) are global. If someone else has used "Flappy Bird", try "Flappy Bird Remastered" or "My Flappy Bird".
*   **Account Banned:** If you violate platform rules, your account may be banned. You will see a red overlay on your dashboard. You can use the form provided in the overlay to submit an appeal to the Administrator.
