import React from 'react';
import Game from '../components/Game'; // Changed Tetris to Game
import VolenteerExperience from '../components/VolenteerExperience';

class ChillContainer extends React.Component {

    state = {
        currentlyShowing: "Chill"
      }
    
      handleShowingChange = (event) => {
        this.setState ({
          currentlyShowing: event.target.name
        })
      }
    
      componentDidMount() {
        this.props.handleForceUpdateFalse()
      }
    
      componentDidUpdate() {
        if (this.props.forceUpdate === true) {
          this.setState ({
            currentlyShowing: "About"
          })
          this.props.handleForceUpdateFalse()
        }
      }
    
      render() {
    
        return (
    
          <div className="containers one-second-animation" id="about-container">
              <h2 className="h2" >Hello!</h2>
              {this.state.currentlyShowing === "Chill"
                ?
                <div>
                  <Game rows={20} columns={10} /> {/* Replaced Tetris with Game */}
                  {/* <button className="buttons about-buttons" name="More" onClick={this.handleShowingChange} >Besides Coding...</button> */}
                </div>
                : 
                <div>
                  <VolenteerExperience />
                </div>
              }
          </div>
          
        );
    
      }
    
      
    }
    
    export default ChillContainer;