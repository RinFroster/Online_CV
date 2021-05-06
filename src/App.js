import './App.css';
import {BrowserRouter, Switch } from 'react-router-dom';
import {routeHome} from "./Route";
import HomeTemplate from "./Container/HomeTemplate";


function App() {
  const showLayoutHome = (route) => {
    if(route && route.length >0){
      return route.map((item,index)=>{
        return (
          <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routeHome)};
      </Switch>
    </BrowserRouter>
  );
}

export default App;
