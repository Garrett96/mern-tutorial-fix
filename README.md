# MERN Stack

<img width="1015" alt="Screen Shot 2023-05-18 at 00 03 14" src="https://github.com/Garrett96/mern-tutorial-fix/assets/46694517/6ebb7129-4581-4557-90d8-66fed41c61dd">

<img width="1219" alt="Screen Shot 2023-05-18 at 00 04 14" src="https://github.com/Garrett96/mern-tutorial-fix/assets/46694517/e4d7aeae-fa0c-482d-9af9-a60d4918175b">

# Fixed this outdated tutorial.
- https://www.mongodb.com/languages/mern-stack-tutorial

# Issue Solved: mongodb v5 switched from callbacks to promises.
- https://github.com/mongodb-developer/mern-stack-example/issues/27

# How To
Follow all the initial setup listed in the tutorial until you successfully ran `npm install mongodb express cors dotenv`
Then just use the code here instead of the code provided in the tutorial. 

- Make sure `server.js` , `db` , and `routes` are added to `mern/server` directory.
- Make sure `src` and `public` are added to `mern/client` directory.

Referenced in the tutorial link, make sure to set up your own `config.env` file in `mern/server`
example:
 * `ATLAS_URI=mongodb+srv://[YourUsername]:[YourPassword]@[YourCluster].mongodb.net/?retryWrites=true&w=majority`
   `PORT=5000`

# Run it
- [if relevant] disconnect from VPN.
- Open 2 terminal tabs.
- cd mern, cd server `node server.js`
- cd mern, cd client `npm start`
- login to `cloud.mongodb.com` to make sure there's a connection.
- Click `Create Record` fill out the form, and it should work.
- When finished `^C` to exit client/server, and if applicable re-connect to your VPN.

