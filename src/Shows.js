import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import './Shows.css'

function Shows() {
  return (
    <div className="show">
        <div className="show__header">
         <h1><span>Up</span>coming Shows </h1>
         <button>View all</button>
        </div>
        <div className="show__main">
          <div className="show__details">
          <img src="/images/bd.jpg" alt="" />
            <div className="show__info-bottom">
            <p>Folk</p>
            <h2>Benny Dayal</h2>
            <div className="show__footer">
              <div>
              <button>More info <ArrowForwardIcon className="show__icon" /> </button>
              </div>
              <ConfirmationNumberIcon  className="show__icon-confirm"/>
            </div>
            </div>
           

          </div>
         <div className="show__details">
            <img src="/images/vj.jpg" alt="" />
            <div className="show__info-bottom">
            <p>Bollywood</p>
            <h2>Vijay Yesudas</h2>
            <div className="show__footer">
              <div>
              <button>More info <ArrowForwardIcon className="show__icon" /> </button>
              </div>
              <ConfirmationNumberIcon  className="show__icon-confirm"/>
            </div>
            </div>
          </div>
          <div className="show__details">
          <img src="/images/aj.jpg" alt="" />
          <div className="show__info-bottom">
            <p> Folk</p>
            <h2>Andrea Jeremiah</h2>
            <div className="show__footer">
              <div>
              <button>More info <ArrowForwardIcon className="show__icon" /> </button>
              </div>
              <ConfirmationNumberIcon  className="show__icon-confirm"/>
            </div>
            </div>

          </div>
          <div className="show__details">
          <img src="/images/sr.jpg" alt="" />
          <div className="show__info-bottom">
            <p>Folk</p>
            <h2>Shilpa Rao</h2>
            <div className="show__footer">
              <div>
              <button>More info <ArrowForwardIcon className="show__icon" /> </button>
              </div>
              <ConfirmationNumberIcon  className="show__icon-confirm"/>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shows
