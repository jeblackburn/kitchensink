# The Kitchen Sink

## Developer Setup

### Prerequisites
1. Docker installed.
2. Node installed
3. A JDK installed (tested against JDK21, but no features past 17 are used)
4. Gradle installed

### Starting the server
1. cd server/docker
2. run ```docker compose up -d```
 
   *This spins up postgres and MongoDB locally*
3. cd ..
4. run ```gradle flywayMigrate -i```
    
   *This runs the flyway migrations to create the local database.*
5. run ```gradle bootRun```

   *This starts the server at port 8080*

### Useful Endpoints
1. GET http://localhost:8080/api/ - lists the endpoints published by the server
2. GET http://localhsot:8080/api/members - List the members in JSON
3. POST http://localhsot:8080/api/members - Create a new member. Json looks like:
   ```
   {
       "name": "Ringo Starr",
        "email": "ringo@thebeatles.com",
        "phoneNumber": "8005882300"
   }
   ```
