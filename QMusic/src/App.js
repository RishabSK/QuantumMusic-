

import Login from'./Login'
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './Dashboard';

//separating the code the redirect uri
const code = new URLSearchParams(window.location.search).get('code')
//sending the code for next level Authentication
function App() {
  return code ? <Dashboard code = {code}/> : <Login/>
}

export default App;
