#  Websocket Project

This test project is confidential. {Check the notes section at the bottom to learn how to run the application}

## Time frame

For this take-home test project, you are given roughly 36 hours to complete what you can. There is no set submission time. 

If you'd like extra time to complete, please contact your technical interviewer(s).

If you are working full-time and would like to do this at night instead of on a day off, please coordinate with your technical interviewer(s).

## Requirements

These requirements are listed by importance.

### Project
0. Create web socket setup that pipe audio from the `test_audio.mp3` file to through a socket set up within the `socket.js` file. 
1. Playback audio/PCM via socket to audiobuffer (Sa from a AudioContext) 


### Notes

### 1. Write code and comments that most junior-mid level developers can understand

Err on the side of clarity over brevity. 

This will make it easier for everyone to understand and will help more easily onboard new developers or seasoned polyglots picking up a new language.

Use standard naming conventions.

Be concise with your function and object names. 

Write inline comments to simply explain what your code does. 

It is easier to write even a poorly written comment than to revisit your code months later having forgotten what it was supposed to do. 

### 2. Document your code

Make inline comments that anyone can understand.

Key functions, extensions, classes, enums, etc. should be annotated with concise quick help information. 


## Notes from candidate
In my little time developing web applications, I had never heard of sockets and socket io, so this challenge was interesting to me as it served an oppurtunity to understand how one server can stream files to multiple client instances at the same time. 

To fully understand how this could work and to give myself a value add I proceeded to create a react and node.js application that can be run.

Installed all the dependencies and got started with the code and the setup!

- The front end for this program is written in the file app.js, I added some css and styles just to make the player look good
- The backend is stored in a folder called backend and written in index.js (following naming conventions stated in tutorials and documentation)


#### How to Run
- git clone this branch of the repository
- 
- cd into the project directory and type in the command window "npm start" this starts the react app
- cd into the backend and type in node index and make sure you get the connected message to ensure the socket connection is made
- A react app webpage should've opened up for you

#### Issues That I faced
- Starting out with web dev, i sttruggled a bit to get an understanding of all the moving parts but a little patience and I was good to go

- Faced cors issue which really slowed me down, fixed it following (https://www.educative.io/edpresso/how-to-fix-socketio-cors-error-in-react-with-node) It was basically an access issue I tried to solve with multiple lines of code, but this resource helped me out pretty quick.
- socket io documentaion was super helpful!!

#### UI
![alt text](https://github.com/nol-alb/Test-App/blob/master/Images/Screen%20Shot%202022-02-15%20at%2012.58.22%20PM.png)

