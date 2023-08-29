# React-Project Motivation
I felt the need to broaden my front-end skills besides HTML/CSS, and react was the recommended choice.
The project is based off the game Tower of Fantasy, you can view the official website here: _https://www.toweroffantasy-global.com/home.html_.

# Main Features
- _The information and pictures displayed on the website are all original works of Tower of Fantasy._
- The website uses a simple ajax request to a PHP file to detect if the user has logged in.
- Once logged in, a simple message will be displayed to confirm that the user has been logged in. 
- If the login is rejected, an error message will be given, and the page will be reloaded.
- A register feature is also available, that connects to the database, and if successful, a prompt is given to the user to then return to the login page.
- This website supports a login + edit feature, where the user is prompted upon entering the website to login, register(if new) or to enter as a guest mode
- Guest mode will allow the user to bypass any security features and solely view the website.
- However, users entering as guests have their editing privilege's retracted.
- Only users who register and login are able to edit the information on the website.
- The project uses the 3 different regions in Tower of Fantasy. Namely the Aesperia, Vera, and Domain 9 regions.
- These larger regions also consist of smaller regions, which each have similar components.

# How to install the project:

- Download and install node.js here `https://nodejs.org/en`  and complete the installation wizard.
- After the installation proceed to entering `npm install -g create-react-app ` in your cmd.
- Proceed by creating your directory `mkdir YOUR_FOLDER_NAME` by entering it in your cmd
- Inside this folder enter `create-react-app reactfirst YOUR_APP_NAME`(undercase letters only)
- This will create your react application. Then proceed to the directory and copy my code directly into the folder, and replace all the files.
- Finally run `npm start` and the project will be opened up in your default browser, enjoy ~

# Future Plans for this website:
- Making a login form submission using php
- Check user credentials from a file(in an array)
- New users credentials get added into that array, and are able to login
- What the users see once logged in varies slightly (editing privledge follow below)
