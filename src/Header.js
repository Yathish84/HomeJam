import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
function Header() {
    return (
        <div className="header" >
            <div className="header__fade" />
                <div>
                <img className="header__img" src="./images/cari.jpg" alt="" />
             </div>
            <div className="header__mainwrap">
               <div className="header__main"> 
                <div className="header__logo">
                    <a href="/home" className="header__names">HOMEJAM</a>
                </div>
                <div className="header__nav">
                    <div className="header__search" >
                        <SearchIcon />
                        <p className="header__name"> Search</p>
                    </div>
                    <a href="/accounts" className="header__name">Account</a>
                    <a href="/help" className="header__name">Help</a>
                    <LocalMallIcon />
                    <MenuIcon className="header__hidden" />
                </div>
            </div>
            <div className="header__bottom">
                <p className="header__btmname">Cari Cari</p>
                <div className="header__des">
                <p>Live from their sofa to yours.Get closer to your favorite
                artists, and never miss out</p>
                </div>
            </div>
            </div>
            
        </div>    
    )
}

export default Header
