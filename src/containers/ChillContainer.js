import React from 'react';
import { withTranslation } from 'react-i18next';
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
        const { t } = this.props;
        const controls = t('chill.controls', { returnObjects: true }) || [];

        return (

          <div className="chill-container">
              <h2>{t('chill.heading', { defaultValue: 'Take a Break and Chill With Me!' })}</h2>
              <p className="chill-intro">
                {t('chill.intro', { defaultValue: 'Choose between classic Tetris gameplay or live-code music with Strudel using the toggle below.' })}
              </p>
              {this.state.currentlyShowing === "Chill"
                ?
                <div className="game-wrapper">
                  <Tetris rows={20} columns={10} />
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
    
    export default withTranslation()(ChillContainer);
