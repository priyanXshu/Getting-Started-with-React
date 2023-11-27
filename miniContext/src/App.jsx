import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/USerContextProvider"


function App() {

  return (
    <UserContextProvider>
      <h1>React - context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
