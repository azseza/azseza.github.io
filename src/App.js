import './App.css';
import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import ChillContainer from './containers/ChillContainer';
import AboutContainer from './containers/AboutContainer';
import ResumeContainer from './containers/ResumeContainer';
import HomeContainer from './containers/HomeContainer';
import Contact from './containers/ContactContainer';
import NotFound from './components/NotFound';
import linkedInLogo from './media/linkedin-icon.svg';
import gitHubLogo from './media/github-icon.svg';

class App extends React.Component {

  state = {
    forceUpdate: false
  }

  handleForceUpdateTrue = () => {
    this.setState ({
      forceUpdate: true
    })
  }

  handleForceUpdateFalse = () => {
    this.setState ({
      forceUpdate: false
    })
  }
  
  renderChillContainer = () => <ChillContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderAboutContainer = () => <AboutContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderResumeContainer = () => <ResumeContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />


  render() {

    return (

      <div id="homepage">
  
        <div id="navbar">   
          <NavLink to='/' exact className="navbar-links" >
              <img src={require("./media/logo.png")} alt='' id="logo" />
          </NavLink>     
          <NavLink to='/contact' exact className="navbar-links" >05. Contact</NavLink>
          <NavLink to='/about' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >04. About</NavLink>
          <NavLink to='/resume' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >03. Résumé</NavLink>
          <NavLink to='/chill' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >02. Chill</NavLink>
          <NavLink to='/' exact className="navbar-links" >01. Home</NavLink>
        </div >
  
        <div id="social-links-div">
          <a href="https://github.com/azseza" >
            <img src={gitHubLogo} alt='Link to github profile' className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/azer-ltifi-528284120/" >
            <img src={linkedInLogo} alt='Link to LinkedIn profile' className="icons" />
          </a>
          <a href={`mailto:azeer.ltifi@gmail.com`} >
            <img src={require("./media/send.png")} alt='Send me an e-mail' className="icons" />
          </a>
        </div>     
  
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/about' component={this.renderAboutContainer} />
          <Route exact path='/chill' component={this.renderChillContainer} />
          <Route exact path='/resume' component={this.renderResumeContainer} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound}/>
        </Switch>
  
      </div>
    
    );

  }

}
export default App;
