
# Used Technologies 
- ReactJs: Frontend development
- Typescript: For type checking
- Styled Components: For creating Ui

# Setup Details 
## System Requirements

- NodeJs v14 or above

## setup
```
> git clone https://github.com/anshuDev1/rezolute-test-task.git
> cd rezolute-test-task
> npm install
> npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Implemented Feature

### Created two pages/routes
1. `/`
- In Home page we have implement search feature
- User can search git gub user 
2. `/history`
- Created table store search history with search time
- User can `remove` the search result and able to `research` clicking on `searched key`

### Other Details

1. Used React/Hooks
- used `useLocation` `useEffect` `useState` `useNavigator`

2. Code Structure
- Used proper folder structure 
- Structure is scalable for new upcomming feature
- used reusable components for `navBar` `userDetail` `repoDetail`
- Created saprate directory for typesctipt `types` and styled component `styles`

5. Error handling
- Used `react-host-tost` for notifi for error.

6. Responsive
-  This app is mobile friendly UI Structure