# PeopleHelpPeople
Hackathon Project built for HackNITR 3.0

## Folder Structure

`/contracts` contains the contracts which are later used in ENV to fetch state
`/web` the react app to view the PHP website

## Quick Start

The project basically has two parts. The contracts and the React Client

### Step 1
Go inside each of the contract folder and run the following commands

```
npm install
npm run deploy
```

This will essentially deploy the contracts. Save the contract ID. THis will be used in Step 2

### Step 2

Update the Contract IDs from step 1 in .env file under `/web` folder. Use the example env file for reference.
Running `yarn start` should start the app.


## Guide

### Routes

- `/` : Home Route contains links to petitions and crowdsource collectins
- `/crowdsource` : lists all crowdsource listing from the state 
- `/petition` : lists all petitions listing from the state
- `/crowdsource/:id` : Corresponding view for the crowdsource collection with id=`id`
- `/petition/:id` : Corresponding view for the petition collection with id=`id`

## Key Functionalitis

- List, View and Sign Petition
- List, View and Donate Token to Crowdsource funds
- view records of transaction under a crowdsource fund

## To be implemented(Most Import)

- Currently there is no UI to Create a Petition or a crowdsource. After Manually deploying the contract from CLI. a payload with `enlist` has to be called using the Arweave CLI. 
Due to time constraint on hackathon deadline, couldnt really implement this part
- The UI is very ugly. Despite using MUI somehow I managed to look this bad. Gotta work on that
- The react codebase is a mess. A lot of incosistency fixes and refactoring needs to be done.

P.S. Side effects of staying up all night to submit a decent hack
