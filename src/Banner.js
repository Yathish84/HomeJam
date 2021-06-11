import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className="banner__names banner__name">
                <FavoriteBorderIcon className="banner__icon" />
                <span>0</span>
                <p>Label</p>
            </div>
            <div className="banner__name">
            <FavoriteBorderIcon className="banner__icon" />
                <span>0</span>
                <p>Label</p>
            </div>
            <div className="banner__name">
            <FavoriteBorderIcon className="banner__icon" />
                <span>0</span>
                <p>Label</p>
            </div>
            <div className="banner__name">
            <FavoriteBorderIcon className="banner__icon" />
                <span>0</span>
                <p>Label</p>
            </div>
        </div>
    )
}

export default Banner
