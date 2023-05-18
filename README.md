## MERN Stack

# Fixed this outdated tutorial.
- `https://www.mongodb.com/languages/mern-stack-tutorial`

Follow all the initial setup listed in the tutorial until you successfully ran `npm install mongodb express cors dotenv`
Then just use the code here instead of the code provided in the tutorial. 

* Referenced in the tutorial link, make sure to set up your own `config.env` file in `mern/server`
* example:
  * ATLAS_URI=mongodb+srv://[YourUsername]:[YourPassword]@[YourCluster].mongodb.net/?retryWrites=true&w=majority
    PORT=5000
  
# Issue Solved: mongodb v5 switched from callbacks to promises.
- `https://github.com/mongodb-developer/mern-stack-example/issues/27`

# Run it
- [if relevant] disconnect from VPN.
- Open 2 terminal tabs.
- cd mern, cd server `node server.js`
- login to `cloud.mongodb.com` to make sure there's a connection.
- cd mern, cd client `npm start`
- Click `Create Record` fill out the form, and it should work.
- When finished `^C` to exit client/server, and if applicable re-connect to your VPN.

