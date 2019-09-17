# A simple web site to serve as an internal tool
A central hub for all things <YOUR_COMPANY>, could be forked to fill other needs


## Local Setup - from the project root directory

npm i  
npm install -g @angular/cli ionic cordova

## Firebase Setup

If you don't already have an account navigate to www.firebase.google.com, and create an account

#### Perform the following steps from the context of www.console.firebase.google.com

- Click "Add Project"
- Enter a project name (ie "yourcompany-internal-site")
- If prompted, choose whether or not to enable Google Analytics, you may need to create one through the wizard.
- Click "create" or "continue"
- Once the project is ready, press "continue"

#### Add an "App" to your Firebase project

- Click the cog near the top-right of the left-nav of the firebase console
- Click "Project Settings"
- Under "General", scroll down to the "Your apps" section
- Click the `</>` icon
- Enter your app nickname (ie "yourcompany-internal-site"), and click "Register App"
- You are now presented with connection information, copy the firebaseConfig contents, and paste them in `src/app/app.module.ts`

#### Hosting Setup

I highly recommend hosting this site on Firebase (you can update your DNS setting for your own domain if you want to be fanc
- Click "Hosting" in the left-nav bar
- Click "Get started" and follow the instructions at the root of your project directory:
  - `npm install -g firebase-tools`
  - `firebase login`
  - `firebase init` (not needed, we already have the firebase.* files in the repo for you)
    - select (using the spacebar) "Firestore", "Functions", and "Hosting"... press enter
    - press enter to confirm "firebase.rules", and "N" to not overwrite the file
    - press enter to confirm "firestore.indexes.json", and "N" to not overwrite the file
    - Select "TypeScript" for Cloud Functions language.
    - Choose if you want the linter to enforce style and catch bugs
    - Choose "N" to not overwrite `functions/package.json`
    - Choose "N" to not overwrite `functions/tslint.json`
    - Choose "N" to not overwrite `functions/tsconfig.json`
    - Choose "N" to not overwrite `functions/src/index.ts`
    - Choose "N" to not overwrite `functions/.gitignore`
    - Choose "Y" to install dependencies with NPM
    - Type "www" for public directory
    - Choose "y" to configure as sigle-page app
    - Choose "N" to not overwrite `/index.html`
     

    
  - if you did everything right up to this point, we need to do a quick deploy
    - `ionic build && firebase deploy`
- Click "Continue to console"

#### Database setup 
(ie: https://console.firebase.google.com/project/your-company-internal/overview)

- Click on "Database" in the left-nav bar, in the "Develop" section
- Click "Create database"
- You will be prompted to choose initial security, choose "Start in locked mode", unless you don't care about someone deleting your data.
- Choose where you want your database to be located and click "Done". "nam5 (us-central)" is the default location.
- Nice! You just created a new Firestore a no-sql data-store for the site! 
- If you accidentally created the "Realtime Database," that's too bad, because this project doesn't use that!

#### Adding Firbase Config to the project


## Serving the project locally (dev)

ionic serve


# Deploy

deploy.sh

make sure you take a look at the contents of the script before running it. 

If you don't understand it, don't run it.