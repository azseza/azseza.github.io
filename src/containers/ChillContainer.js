import React from 'react';
import Tetris from '../components/Tetris';
import VolenteerExperience from '../components/VolenteerExperience';
import './ChillContainer.css';

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
    
          <div className="chill-container">
              <h2>Take a Break and Chill With Me!</h2>
              <p className="chill-intro">
                Choose between classic Tetris gameplay or live-code music with Strudel using the toggle below.
              </p>
              {this.state.currentlyShowing === "Chill"
                ?
                <div className="game-wrapper">
                  <Tetris rows={20} columns={10} />
                  <div className="game-controls">
                    <h3>Classic Tetris Controls:</h3>
                    <ul>
                      <li>← → : Move left/right</li>
                      <li>↑ : Rotate</li>
                      <li>↓ : Soft drop</li>
                      <li>Space : Hard drop</li>
                      <li>P : Pause</li>
                    </ul>
                    <p className="mobile-controls">On mobile: Swipe to move, tap to rotate</p>
                  </div>
                </div>
                : 
                <div className="volunteer-section">
                  <VolenteerExperience />
                </div>
              }
          </div>
          
        );
    
      }
    
      
    }
    
    export default ChillContainer;
