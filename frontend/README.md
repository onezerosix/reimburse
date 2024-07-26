# Welcome to the frontend
The graphical user interface lives here. This README describes how to get the frontend server up and running. To display and interact with data on the website, please run the backend server as well (see [../backend/README.md](../backend/README.md)).

## Requirements
In order to run the frontend, install NodeJS and pnpm, then run the following line to install the necessary packages:

`pnpm install`

## Run the program
At this time, only the homepage works without the backend running (see TODOs below). Please see [../backend/README.md](../backend/README.md) to run the backend then follow these instructions:

Run the following line to start this frontend program:

`pnpm dev`

The homepage should be at http://localhost:3000, but the output of the above command may be different - follow what the output states.

## Testing
This project has one unit test and TODO comments for further testing. Component, integration, E2E, and snapshot testing were not prioritized for the project so far. They would be added in the future if development were to continue. To run tests, run the following line:

`pnpm test`

## File orginazation
The files are organized in the following manner:
1. **src**: contains the program
2. **__tests__**: contains the tests - mainly TODO comments (only Home.test.tsx has an implemented test)

## Notes
Although I have used React before, this is my first project using NextJS and my first time in a while thinking about how to test a frontend project. I am intentionally limiting how much time I spend on this portion since it is a simple demonstration. If I had more time, I would read more about how to implement tests for NextJS. Having said that, the TODO comments for the testing here are not extensive and may include TODOs that would eventually get deleted (they may be unnecessary, impracticle, or impossible to implement).

## TODOs
- Add handling for backend being offline (i.e. ability to load frontend independently even if it has no data).
- Add "loading" page
- Add testing for boilerplate code from shadcn-ui@latest?
- Change tests indentation to 2 spaces instead of 4
