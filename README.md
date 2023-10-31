## Project To Do app with React

### The goal of this project is to practice working with React, React Router and local storage

We will be using HTML, CSS, JavaScript and React

**Basic functionality:** the user can create a To Do card with a title and a description and the card is stored in local storage in the browser. Local storage can act as a small database: read about local storage [here](https://www.digitalocean.com/community/tutorials/js-introduction-localstorage-sessionstorage) and [here](https://javascript.info/localstorage)

For the navigation, we will be using React Router. Read more [here](https://www.w3schools.com/react/react_router.asp) and [this website](https://v5.reactrouter.com/web/example/basic) has a lot of examples as well as guides


---

### For more advanced students
**Steps**  
1. Create a React app using `npx create-react-app project-todo-app`
1. Delete the css from the App.css file and use this file for your css
1. Delete the code in the App.js file between `<div className="App">` and the closing `</div>`
1. Add a folder called `components` in the src folder
1. Add a new file and create a function component called `ToDo`, with a form: a field for title, a text area for the to do description, and a field for tags, plus a submit button
1. Create a hook for the ToDo card with the three values, and setState to an empty card object
1. The ToDo card is an object and local storage expects key/value pairs. Use [date&time](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript) as key and the object as value (remember: localStorage only accepts strings)
1. Add functions to handle entering and submitting data (remember: when the card state is set, all old values are overwritten .... ask for help or check the hints, but make sure you understand what is happening!!)
1. Add the ToDo component to App.js so that you can check what it looks like on the screen
1. Test if local storage works correctly by adding at least three ToDo cards (you use the inspector tool to see the browser storage that contains Local Storage)
1. Add a function to clear the card fields after saving the data to local storage (the fields should clear two seconds after the user has submitted, so that they can see what data is stored)
1. Add a new file and create a function component called ToDoOverview (this will show all ToDo cards on the page)
1. Add the ToDoOverview component to App.js so that you can check what happens with your component
1. The ToDo cards should load when the page loads
1. Create a hook for the todoList, and set the state to an empty array
1. Write a function getTodoStorage that uses an empty array `cards` to push all cards to 
1. Use the array of keys to iterate over and push each card from local storage onto the `cards` array, and return the array (hint: use JSON.parse to get the cards as an object)
1. If you are stuck, ask for help or look at the hints (but make sure you understand what is happening in that piece of code!)
1. Now you can use the `getToDoStorage` function with `useEffect()` to set the `todoList` to what the function returns, when the page loads
1. The ToDoOverview component should return each card with Title, Description and Tags

**Routing**  
1. Create a Homepage component with two buttons: `Create new ToDo` and `ToDo overview`
1. Import `useNavigate` and create onClick functions: button `Create new ToDo` redirects to `/todo`, and `Create new ToDo` to `/todooverview` ([read about the useNavitate() hook](https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop))
1. Also here, ask for help if you get stuck, or look at the hints (but make sure you understand what is happening in that piece of code!)
1. App.js needs to have all routing; for this you import BrowserRouter, Routes and Route
1. Create routes for all paths and set the element for each path
1. Create an Error component that is used with the path `path="*"` (this covers any non-existing path that the user enters as URL, and will show the error page)
1. Add an error message to the Error component, add a back button that navigates to the homepage
1. With the routing in place, the homepage buttons should redirect to the ToDo form and the ToDo overview (you may have to move code from App.js to the ToDo overview component for this)
1. All layout and styling is up to you: make it into an attractive app with clear navigation, your preferred language, and be as creative as you like

---
**Additional functionality (for graduates):** 
* Complete this project with CRUD functionality
* Add option that the user can check a box when a task is completed, and can search cards

---

## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). We can do this together during a CodeWomen coding session: it is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`.
To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.


---
