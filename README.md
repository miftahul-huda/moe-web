
## Authentication


This is a third party application to manage and authenticate user to be used by other application.

**API**

1. To get all the users:

    GET /user

Return example:

    {
      "success": true,
      "payload": [
        {
          "id": 1,
          "firstname": "Miftahul",
          "lastname": "Huda",
          "gender": "male",
          "photourl": null,
          "cityId": 2,
          "email": "hudabeybi@gmail.com",
          "lastLogin": "2021-1-29 3:28:3",
          "currentSessionID": "NwKQraUz3C",
          "sessionExpiredDate": "2021-1-29 11:28:3",
          "orgId": 2,
          "createdAt": "2020-12-21T17:53:27.283Z",
          "updatedAt": "2021-01-29T03:28:03.809Z"
        },
        {
          "id": 13,
          "firstname": "PT INALUM",
          "lastname": "UPLOADER",
          "gender": "male",
          "photourl": null,
          "cityId": 2,
          "email": "inalum@uploader",
          "lastLogin": "2020-12-22 3:4:22",
          "currentSessionID": "hx74pS4b2v",
          "sessionExpiredDate": "2020-12-22 11:4:22",
          "orgId": 9,
          "createdAt": "2020-12-21T05:35:45.198Z",
          "updatedAt": "2020-12-22T03:04:22.360Z"
        }]
     }

   
2. To create user

    POST  /user/register

 Example of POST body:

     {
      "firstname": "Miftahul",
      "lastname": "Huda",
      "gender": "male",
      "photourl": null,
      "cityId": 2,
      "email": "huda@uploader",
      "lastLogin": "2020-12-22 3:4:22",
      "orgId": 9,
      "createdAt": "2020-12-21T05:35:45.198Z",
      "updatedAt": "2020-12-22T03:04:22.360Z"
    }

3. To get list of organizations:

    GET /organization

Return Example:

    {
      "success": true,
      "payload": [
        {
          "id": 1,
          "orgname": "IPR",
          "orginfo": "IPR",
          "createdAt": "2021-01-20T17:31:13.492Z",
          "updatedAt": "2021-01-20T17:31:13.492Z"
        },
        {
          "id": 3,
          "orgname": "BIN",
          "orginfo": "BIN",
          "createdAt": "2021-01-20T17:31:29.593Z",
          "updatedAt": "2021-01-20T17:31:29.593Z"
        }]
    }
 
4. To create organization

    POST /organization/create

Example of POST body

    {
         "orgname": "IPR",
         "orginfo": "IPR"
     }


**User Management Web Application**

This application also provides web user interface to manage user and organization.

To Manage user

    http://<domain>/web/userlist

To Manage Organization

    http://<domain>/web/orglist


**Prerequisite**

Install Node JS and NPM.

**Download**

You can download using git:

    git clone https://github.com/miftahul-huda/authentication.git

**Install**

Go to "component-rating-backend" folder. Run:

    npm install

**Configuration**

This uses port 8080 to connect and PostgreSQL. To configure the PostgreSQL connection, open with text editor the file "initialization.js".

Modify this codes:

    const  sequelize  =  new  Sequelize('gcsfileuploader',  '<dbusername>',  '<dbpassword>',  {
    host:  '<dbhost>',
    dialect:  'postgres'
    });

**Run Locally**

To run locally, just type in the console in the root folder of this application:

    node app.js

**Deploy in App Engine**

To deploy to App Engine first you have to login first to GCP using command:

    gcloud auth login

Make sure you logged in using username who can access the GCP environment.

After login, deploy the application in app engine:

    gcloud app deploy

Once done, open the link that displayed in the output of the deploy command.
