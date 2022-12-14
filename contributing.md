# Contributing to this project
We would welcome any contributions to this project. Please follow this instructions(we'll be using instructions for git in command line)

## Fork this repository
 Click on the fork repository on the top of the project website. This will create a copy of this repository in your profile.


## Clone the repository to your computer
 Clone the forked repository to your machine by navigating to where you want to keep the project and then opening the terminal there.

Then, open the terminal, and type the following command:

    git clone https://github.com/<profile-name>/Compiler

where you need to replace ```<profile-name>``` with your github username.

## Branch this repository
Navigate to the folder of the repository in the terminal (if you aren't already there). Then, execute the following command:

    git branch -c <branch-name>

where you replace ```<branch-name>``` with whatever you want to name your branch. This creates a new branch where you can make edits to compare with the original code in the ```main``` branch

## Make changes and commit them

After making changes to the repo, go back to the directory and execute:

    git status

and you'll see the changes made by you.

Add those changes using the command:

    git add <file-name>

where you replce ```<file-name>``` with the files you have changed. If you want to add all changes at once, use:

    git add -A

Now commit those changes with the command

    git commit 

This will open your default text editor(the one you configured ```git``` with) with some boilerplate commit message. You can edit the message and then save it and exit your editor.

If you have a short commit message in mind, use the command:

    git commit -m "<your-message>"

Replacing ```<your-mesage>``` with your message enclosed in double quotes

## Push your changes to Github

You can push these changes to the repo on github ("the origin") using the following command:

    git push -u origin <branch-name>

where you replace ```<branch-name>``` with your branch name.

## Submit changes for review

Go to your rofile in Github and navigate to the forked repository. You'll find a button labelled ```Compare & Pull request```. Click on it and then submit it for review, giving a summary at the end

We will review the code and merge it with the project if we like it. You'll receive a notification email once your pull request has been merged