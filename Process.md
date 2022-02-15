In my little time developing web application (just 1 project tbh!) I had never heard of sockets and socket io, so this challenge was interesting to me as it served an oppurtunity to understand how one server can stream files to multiple client instances at the same time. 

To fully understand how this could work and to give myself a value add I proceeded to create a react and node.js application that can be run!

Installed all the dependencies and got started with the code and the setup!

- The front end for this program is written in the file app.js, I added some css and styles just to make the player look good
- The backend is stored in a folder called backend and written in index.js (following naming conventions stated in tutorials and documentation)

- cd into the project directoru and type in the command winfow "npm start" starts the react app
- cd into the backend and type in node index and make sure you get the connected message to ensure the socket connection is made

Issues That I faced
- Starting out with web dev, i sttruggled a bit to get an understanding of all the moving parts but a little patience and I was good to go

- Faced cors issue which really slowed me down, fixed it following (https://www.educative.io/edpresso/how-to-fix-socketio-cors-error-in-react-with-node) It was basically an access issue I tried to solve with multiple lines of code, but this resource helped me out pretty quick.
- socket io documentaion was super helpful!!

