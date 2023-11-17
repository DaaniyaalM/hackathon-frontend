import '../Footer/Footer.scss';
import blackicon from '../../assets/logo/blacklogo.png';

function Footer() {
  return (
    <div className="footer">
      <div class="footer-container">
        <div className="footer__section1">
          <div className="footer__icon-container">
            <img
              className="footer__icon"
              src={blackicon}
              alt="shopify black ion"
            />
          </div>
          <div class="footer-column">
            <h4>Shopify</h4>

            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Press and Media</li>
              <li>Partners</li>
              <li>Affiliates</li>
              <li>Legal</li>
              <li>Service status</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Merchant Support</li>
              <li>Service Status</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Developers</h4>
            <ul>
              <li>Shopify.dev</li>
              <li>API Documentation</li>
              <li>Hire a Partner</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Products</h4>
            <ul>
              <li>Shop</li>
              <li>Shopify Plus</li>
              <li>Shop Pay</li>
            </ul>
          </div>
        </div>
        <div className="footer__section2">
          <div class="footer-column">
            <h4>Global Impact</h4>
            <ul>
              <li>Shop</li>
              <li>Shopify Plus</li>
              <li>Shop Pay</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>Shop</li>
              <li>Shopify Plus</li>
              <li>Shop Pay</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
