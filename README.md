# HRnet : P14 - Openclassrooms
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF) ![made-with-sass](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)   
![GitHub repo size](https://img.shields.io/github/repo-size/StephaneLi/StephaneLieumont_14_03062022)
![GitHub jest](https://img.shields.io/badge/coverage-85%25-yellow)  

## Project
The project concerns an internal web application, called HRnet, which manages employee records.

## Deliverables
[REACT APP](https://github.com/StephaneLi/StephaneLieumont_14_03062022)  
[DEMO](https://stephaneli.github.io/StephaneLieumont_14_03062022/)  

[PLUGIN REPO DROPDOWN](https://github.com/StephaneLi/lib_typescript-dropdown-react)  
[PLUGIN REPO DATEPICKER](https://github.com/StephaneLi/lib_typescript-datepicker-react)  
[PLUGIN REPO DIALOG](https://github.com/StephaneLi/lib_typescript-dialog-react)  
[PLUGIN REPO TABLE DATA](https://github.com/StephaneLi/lib_typescript-advanced-table-react)  
  
[PLUGIN NPM DROPDOWN](https://www.npmjs.com/package/@stephane1920/ts-dropdown-react)  
[PLUGIN NPM DATEPICKER](https://www.npmjs.com/package/@stephane1920/ts-datepicker-react)  
[PLUGIN NPM DIALOG](https://www.npmjs.com/package/@stephane1920/ts-dialog-react)  
[PLUGIN NPM TABLE DATA](https://www.npmjs.com/package/@stephane1920/ts-advanced-table-react)  
  
#### Available Scripts  
##### `npm start`
In the project directory, you can run:
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!  
Don't forget to add .env file with variables needed   

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run test`
run units test Jest application

##### `npm run test-coverage`
see test coverage of application

##### `npm run deploy`
Deploy website on github page  
Don't forget to add .env file with variables needed   


## Populate localhost

In order to test the application with random employee data, use the ```generateEmployees()``` function when launching the application. This function uses the ```randomuser.me``` API to complete user fields.  

```javascript
// App.tsx
// ... //
const App: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    generateEmployees(50) // Generate DATA for 50 employee
    dispatch(listEmployeesActions.initStore({}))
  }, [dispatch])

  return (
    <div data-testid="app" className="react-app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />        
        <main>
          <Slider />
          <div className='main-content'>
          <Routes>
            { RoutesApp.routeList.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} /> 
            ))}
          </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

// ... //
```

#### Instructions

1. Clone the repo onto your computer
2. Open a terminal window in the cloned project
3. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run start
```

## Author  
Stéphane LIEUMONT  
[Projects OpenClassrooms](https://oc.sli-3d.fr/)  
[Portfolio 3D](https://portfolio.sli-3d.fr/)  
