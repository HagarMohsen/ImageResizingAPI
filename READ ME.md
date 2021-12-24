/* The scripts needed to test/start/build the application */

- In order to start Runing the API you'll need to run the following Script :
    npm run start
this script will perform both tasks: building and running the converted ts to js node file, which will be in the bath "dist/index.js" 
    here's the corresponding script:
    "start": "tsc && node dist/index.js",

- In order to Test the Application you'll need to run the following Script :
     npm run test
this script will perform both tasks: bulding the application then running the test>     
     here's the corresponding script:
     "test": "npm run build && npm run jasmine"

                            //****-----------****//

          /* Any other functionality you have included in the    
          project to ensure the reviewer knows what to expect */

- there is a validation function in the (main server that in the following path: src/index.ts) to check and ensure that the resizedimages folder whill be created at the first use of the app, since sometimes the empty folder get erased at githup.
     

- there is a validation rules for the input parameters, to ensure that the name of the required image, also to ensure that the incoming width and hight parameters are actually numbers. thoses validation rules will be in the API endpoint in the following path:
        src/routes/index.ts

- the main image processing resizing function have been added to a new ts file in the folloing path:
        src/Utilities/imageResizing.ts


                                    //****-----------****//

                                    /* Styling and Rules */

- the whole project have been run correctly without any prettier or eslint errors. the script that used for this task is:
 "lint:f": "eslint src/**/**.ts --fix" which have plugins and rules with prettier to ensure that both tools working together. although they're a development dependancies, but I wanted to mention that the code has been rivised by the both tols and got fixed by runinf the script:
       npm run lint:f                                     