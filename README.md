# Games-Django

<div style="display: flex;">
  <div style="flex: 1;">
    <a href="https://www.facebook.com/quang.nguyenthe.710">
      <img src="assets/images/myface.png" width="25%" height="25%">
    </a>
  </div>
  
  <div style="flex: 2;">
    <p> A website that contains Games using Django Python
</p>
  </div>
</div>

## Table of Contents

- [Features](#features)
- [User Interface](#user-interface)
- [Screenshots](#screenshots)
- [Prerequisites](#i-prerequisites)
- [Setup](#ii-setup)
- [Run App](#iii-run-app)
- [Error](#error)
- [Time-tracking](#time-tracking)
- [Future Work](#future-work)

## Features

* Playing Games on Website (Windows/Linux/Mac Os/Ubuntu)

## USER INTERFACE

## Screenshots

# HOW TO RUN THIS APP 

## I. Prerequisites

- **SYSTEM:** 512MB RAM, At Least 1GB of Free Space in C Drive, And 100MB of Free Space in your App Folder.
- **INSTALLED:** [Python](https://www.python.org/downloads/)(choose version according to your OS), [Django](https://docs.djangoproject.com/en/5.0/topics/install/#install-the-django-code) , [Git](https://git-scm.com/downloads)(v2.45.2)
- **You don't need Wifi / Internet Access to run this app**

## II. Setup
### Clone this github repository app

- Open a folder in your computer that you want to add this app.
- Open git (in step 2), then type:

```bash
git clone https://github.com/thequang-ntq/Games-Django.git
```


## III. Run App

- **Open your terminal and:**
1. Changing the directory into the outer folder **main** directory, if you haven't already
2. Run the following commands:
```bash
python manage.py runserver
```
3. You’ll see the following output on the command line:
```bash
System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
June 28, 2024 - 08:41:53
Django version 5.0.6, using settings 'helloworld.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```
4. Now that the server’s running, visit http://127.0.0.1:8000/ with your web browser. Enjoy the games.
## Error

## Time Tracking

| Date         | Task                | Notes                                               |
|--------------|---------------------|-----------------------------------------------------|
| 28/06/2024   | Project setup       |                                                     |
| 28/06/2024   | First Setup         | First upload about the app.                         |

##### Future Work
- [ ] Update app structure, optimize and clean code.
- [ ] Migrate database: from FireStore(firebase) to [SQLite](https://pub.dev/packages/sqflite)
- [ ] UI : Design the UI better, cleaner