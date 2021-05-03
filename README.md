(Start - 02/21/2021)
Complete
Chrome extension template using React
Insertable table of passwords has been made interact-able through the extension

Pending
The login using Google Authentication is in the process of being completed. 100% functionality is still being implemented as there are still bugs preventing 100% functionality 
Making the data of the password table permanent. Make it so that the passwords are still there the next time that you open the extension
Once google authentication is worked through, add the capability to login with an account that takes you to the landing page

Members
Davin/Braden - Explored 2 different methods to create a Google Authentication for use of our app, coordinating the use of Firebase 
Koby - Setup React locally on his machine to prevent the use of scripts. Implemented chrome extension skeleton (manifest.json + info)
Adrian - Implemented a landing page that the user sees once they log into chrome extension (insertable table of passwords)

Upcoming
Braden and Davin will work to integrate the Firebase Authentication system with React mockup of our application and make sure the Authentication system works seamlessly through all the different pages of our app.
Adrian and Koby will continue to refine the pages associated with our app using React and begin to handle the storage of passwords.
Every team member will familiarize themselves with the current best security practices for application development and be sure that the code that is being written is safe and secure.

(02/21/2021 - 03/21/2021)
Progress
Able to link the Firebase database to a react version of our application, and was able to get the Google OAuth working within the React app and able to add user passwords, and have it show up visually on the app interface.

Pending
We are currently trying to get the Google OAuth to work within the chrome extension window, as we are still unable to sign in using Google from the OAuth


We will also work as a team to visually refine the homepage, where the user can see all their passwords that they have saved.

Members
Koby - 
Completed setting up a react version of our app that can use Google OAuth

Braden, Adrian, and Davin worked to help debug the code that Koby set up. Collectively as a group, we were able to get pretty close to getting the Google OAuth working within the Chrome extension.

Braden and Koby will work on storing the passwords within the Firebase database, once the chrome extension login can work.

Adrian and Davin will work on figuring out how to make our extension autofill passwords based on the site that the user is using.


(03/21/2021 - 04/11/2021)

We were able to get the Chrome extension version of our app running with the Google OAuth login. Creating a Chrome extension proved to be very difficult for us. We were also able to create userIDs associated with the Firebase database from the Chrome extension.

For the final assignment, we are going to touch up the extension with Semantic UI to make it more presentable. We will also be attaching each user's passwords to their userID and having a secure datastore for each user. We will also be fixing up security issues by adding more rules to our application in the Firebase console.

Braden, Adrian, and Davin worked to help debug the code that Koby set up. Collectively as a group, we were able to get pretty close to getting the Google OAuth working within the Chrome extension. 

Koby and Davin were finally able to get the Firebase authentication working from the Chrome extension. Koby and Davin will work collectively to get user passwords stored in an individual datastore.

Braden and Adrian worked on the front end of the app using React and Semantic UI. For the next assignment, Braden and Adrian will continue to make visual changes to the application.


(04/11/2021 - 5/2/21)

Koby is working on the final component for our application, which is to ensure that the passwords are being saved with each user ID.

Braden, Adrian, and Davin worked on the report and Wiki for the project, as well as minor visual changes to the application.

The only required software for our application that we know of is Google Chrome. We have not been able to test this across Chrome running on different Operating Systems other than macOS. Since our app is a Chrome extension every Chrome browser should be able to run the application. 

Installation and Usage instructions

1. Download the release from our project homepage

2. Once downloaded head to your extension manager through settings on chrome

3. Enable developer mode in the top right-hand corner 

4. Once enabled look for the "Load unpacked" and click 

5. Find the downloaded release in your file explorer and load it in

One major challenge we came across was getting the application to run as a chrome extension. For the majority of the semester, we were struggling to add the correct import and Content Security Policy scripts to get our application running as an extension rather than a native web app. Once we figured it out, the last thing we needed to do was to get each user's passwords associated with their account. We are very proud that we got our app running as a chrome extension, as this proved to be our biggest hurdle throughout the semester.
