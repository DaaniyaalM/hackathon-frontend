import logo from '../../assets/logo/logo.png';
import hero from '../../assets/Images/hero1.jpeg';

import './Header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <ul className="header__left">
          <img src={logo} alt="header shopify logo" className="header__logo" />
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>What's new</li>
        </ul>
        <ul className="header__right">
          <li className="header__login">Log in</li>
          <li className="header__start">Start free trial</li>
        </ul>
      </header>
      <div className="hero">
        <div className="hero__container">
          <h2 className="hero__title">Selling Regulated Items</h2>
          <p className="hero__info">
            Shopify has everything you need to know to start selling regulated
            items
          </p>
          <button className="hero__button">Build your shop</button>
        </div>
        <img src={hero} alt="herobanner image" className="hero__image" />
      </div>

      <div>
        <h2>Don't worry, we believe in you.</h2>
      </div>
    </>
  );
}

export default Header;
