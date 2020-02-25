# Web Service Name

    GraphQL-api RegulonDB

## Description

    API to connect RegulonDB database

## Category

    [RegulonDB database]

## Usage examples

    Install the following dependencies (it's a global install)
    
    $ npm install -g babel-cli
    $ npm install -g nodemon
    $ npm install -g pm2
    
    Starting up in production
    $ pm2 start pm2ProductionConfig.json

    Starting up in development
    $ pm2 start pm2DevelopmentConfig.json
    
    Now the GraphQL Playgroud will run at http://localhost:4000/graphql

    Note: In case that Playground cannot be reached, please reinstall Nodemon, it can be the problem
    
    
    ## Notes
    - In case that Playground cannot be reached, please reinstall Nodemon, it can be the problem
    - Sometimes Nodemon doesn't restart the port correctly, in that case:
    	-$ lsof -i :4000 to know the PID that use port 4000
    	-$ kill -9 <PID> to terminate process 
    	-Start again the Playground


​    

## License

    [License details]

## Author

    [Author details]
