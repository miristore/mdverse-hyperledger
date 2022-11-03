# mdverse-hyperledger

1. we have to use the same crypto material that is in your sample network.
2. If we don't have an Identity into the wallet then we have to create it.
3. before creating identity we have to start fabric ca server
    FABRIC CA SERVER :
        1. for ca-server we have to use . env script that is present in organiziations  folder 
        2. after this we can start server by using "fabric-ca-server start" command.
        
4. Now we can execute node enrollAdmin.js file to create Admin.
5. Same for the enrollUser.js file for creating user Identity.
6. now In gen contract we have to update the userName.

now we can start the app by running "npm start" command.
7. http://localhost:3006/api-docs/#/ using this command we can se the swagger UI.