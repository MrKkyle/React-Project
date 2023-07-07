# React-app
This text document will outline all of the components and workings of the project that I have made using react.js
The project is based off the game Tower of Fantasy, you can view the official website _https://www.toweroffantasy-global.com/home.html_.

Website description:
-The website uses a simple ajax request to a php file to detect if the user has logged in.
-Once logged in, a simple message will be displayed to confirm that the user has been logged in. 
-If the login is rejected, an error message will be given, and the page will be reloaded.
-A register feature is also available, that connects to the database, and if successful, a prompt is given to the user to then return to the login page.
-This website supports a login + edit feature, where the user is prompted upon entering the website, to login, register(if new) or to enter as a guest mode, 
-Guest mode will allow the user to bypass any security features and solely view the website.
-However, users entering as guests have their editing privilege's retracted. 
-Only users who register and login are able to edit the information on the website.
-The information and pictures displayed on the website are all original works of Tower of Fantasy.
-The project uses the 3 different regions in Tower of Fantasy. Namely the Aesperia, Vera, and Domain 9 regions.
-These larger regions also consist of smaller regions, which each have similar components.


Here Is a detailed description of all the components that were created and integrated into this project:
-Auto Slideshow
A basic slideshow that switches to the next slide automatically. The number of slides can be configured by the developer, as well as the corresponding caption texts that go with each slide.

-Slideshow 
-A slideshow that consist of next and previous buttons allowing the user to navigate through the slideshow. Similarily, the number of slides can be configured as well. This slide, however, doesn't consist of caption texts.

-Background1.js
A straight-forward background created. The background picture can be configured by the developer.

-Background2.js
This background makes use of diamond shaped containers, in addition to a background that is similar to Background1.js. The diamond shapes are in a organized structure, and their background image, display, and text properties are fully configurable. Allowing some diamonds to be hidden, while others can be shown according to the demand of the user.

-Background3.js
This background makes use of the diamond shaped structures mentioned in Background2.js and the background mentioned in Background.js. In addition to this, it consist of a title text and text that loads in a efficient manner. The text, background, and title can be fully configured by the developer.

-Background4.js 
This background consist of mainly 4 elements that are shaped in a parallelogram. In addition to this, there are other un-configurable elements of similar shape and size. These elements alongside a background, which is configurable, makes up this component.

-Form.js
A simple login form 

-NavigationBar1.js
This component is responsible for the navigation of a react.js website. All the pages that are involved in a website ought to be added in this component. As a result it display this information in a beautiful navigation bar in the top of the screen.

-NavigationBar2.js
This left-side component is responsible for any external links that can be put in the website. It consist of 4 smaller elements which contain a text, icon and the external link. This information is also fully configurable.

-OverlayNavigation.js
This component provides navigation to the rest of the website in a semi-transparent element consisting of links.

-SplashScreen1.js
A simple splash screen with a text and a background.

-SplashScreen2.js
A splash screen just consisting of a background.

-TextContainer.js 
The element that is used in Background3.js. Consisting of a text title and body.

Here are the different pages in the project, and the different components that were used when creating it.
For the larger pages, namely Aesperia/Vera/Domain 9:
-Background2.js 

The smaller regions were made using similar components. These components include:
-Background3.js

Future Plans for this website 
-Making a login form submission using php
-Check user credentials from a file(in an array)
-New users credentials get added into that array, and are able to login
-What the users see once logged in varies slightly (editing privledge follow below)
