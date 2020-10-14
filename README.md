**Fetch Rewards Coding Exercise - Software Engineering - Mobile**
<br/>


**Problem Statement:**  
Please write an (Android/iOS) app that retrieves the data from (link).
Display this list of items to the user based on the following requirements:
1.	Display all the items grouped by "listId"
2.	Sort the results first by "listId" then by "name" when displaying.
3.	Filter out any items where "name" is blank or null.<br/>
The final result should be displayed to the user in an easy-to-read list. Please make the project buildable on the latest (non-pre release) tools and supporting the current release mobile OS.

**Implementation**<br/>
This project is implemented as a React Native app. It has two components- Home.js(responsible for fetching and setting up the Home screen) and ListCard.js (displays all entries corresponding to a listId).
This project assumes that the json data being fetched is of the same format as the sample file and is hosted at the link provided in the description.

**Usage and Testing**<br/>
You will need node.js installed on your computer to use npm. The instructions are to run the app in an android emulator through android studio.
1. Clone the repository:<br/>
git clone https://github.com/asaran2/fetchCodingChallenge.git <br/>
2. Through command prompt window, go to the project directory and install the dependencies: npm install <br/>
3. Run the emulator from android studio. <br/>
4. Start running the project: npm start<br/>
5. Open another command prompt window, go to the project directory and type: react-native run-android <br/>

The app should be running in the emulator.
