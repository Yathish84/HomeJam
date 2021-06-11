import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Avatar } from '@material-ui/core';
import './Reviews.css'
function Reviews() {
    return (
        <div className="review">
            <div className="review__header">
                <h1><span>Re</span>views</h1>
                <div className="review__header-side">
                    <p><span>1</span>/ 12</p>
                    <ArrowBackIcon className="review__icon"/>
                    <ArrowForwardIcon className="review__icon"/>
                </div>
            </div>
            <div className="review__main">
                <div className="review__details">
                <div className="review__details-top">
                    <Avatar src="/images/dp1.jpeg"  />
                    <div>
                        <p>Hellen Jummy</p>
                        <div className="review__detail-bottom">
                            <img src="/images/aflag.png" width="30px" alt="" />
                            <p>PALO ALTO,CA</p>
                        </div>
                    </div>
                </div>
                <div className="review__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                </div>
                </div>

                <div className="review__details">
                <div className="review__details-top">
                    <Avatar src="/images/dp2.jpg"  />
                    <div>
                        <p>Issac Oluwatemilorun</p>
                        <div className="review__detail-bottom">
                            <img src="/images/iflag.png" width="30px" alt="" />
                            <p>PALO ALTO,CA</p>
                        </div>
                    </div>
                </div>
                <div className="review__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                </div>
                </div>

                <div className="review__details">
                <div className="review__details-top">
                    <Avatar src="/images/dp3.jpg"  />
                    <div>
                        <p>Hellen Jummy</p>
                        <div className="review__detail-bottom">
                            <img src="/images/aflag.png" width="30px" alt="" />
                            <p>PALO ALTO,CA</p>
                        </div>
                    </div>
                </div>
                <div className="review__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Reviews
