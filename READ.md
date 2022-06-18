node_api_concordia
example node_api

TO START PROJECT RUN:
```
yarn install
```
thenn:
```
yarn start
```

Our API has the following ENDPOINTS:

HTTP METHODS in plain English:
```
GET: To get a record/records from database. SHOULD NOT HAVE A BODY
POST: To create a record/records in the database. CAN HAVE A BODY
PUT: To update a record/records in the database. CAN HAVE A BODY
DELETE: To delete a record/records in the database. CAN HAVE A DELETE
```
This simple API was built to store, 
share and update movie records.

Remeber that the req object the routes/endpoints
have the following 3 properties. Which we can use to pass information.

There 3 are the following:
```
BODY: req.body
PARAMS: req.params
QUERY: req.query

```

Our API has the following ENDPOINTS:

```
GET /movies
POST /movies
PUT /movies/:id
DELETE /movies/:id
```