Bridge between your local PC and a cloud9 workspace for the phillips hue. 

### Server Installation
- git clone to your cloud9 workspace
- npm install
- node server.js
- In hue.js set your bridgeIp to 127.0.0.1:8000 

### Client installation
- git clone to somewhere on your pc
- open client.js
- set workspaceUrl to your cloud9 workspace url (e.g. https://hackathon-timjrobinson.c9.io/)
- set bridgeIp to the ip of the hue device you are connecting to
- npm install
- node client.js

Now you should be able to use the API in your node workspace and all requests will go to 127.0.0.1:8000 which will send them to your local PC which will then forward them onto the Phillips HUE device. 
