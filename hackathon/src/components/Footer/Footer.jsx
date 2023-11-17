import '../Footer/Footer.scss';
import blackicon from '../../assets/logo/blacklogo.png';

function Footer() {
  return (
    <>
      <div className="callout">
        <div className="callout__phrase">
          <p className="callout__text">Start your 3-day free trial today!</p>
        </div>
        <div className="callout__emailtrial">
          <div className="callout__emailtrial-container">
            <p className="callout__email">Enter your email address</p>
            <button className="callout__button">Start free trial</button>
          </div>
          <p className="callout__info">
            Try Shopify free for 3 days, no credit card required. By entering
            your email, <br />
            you agree to receive marketing emails from Shopify.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer__icon-container">
          <img
            className="footer__icon"
            src={blackicon}
            alt="shopify black ion"
          />
        </div>
        <div class="footer-container">
          <div className="footer__section1">
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
                <li>Merchant support</li>
                <li>Help center</li>
                <li>Hire a Partner</li>
                <li>Shopify Community</li>
                <li>Shopify Events</li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Developers</h4>
              <ul>
                <li>Shopify.dev</li>
                <li>API Documentation</li>
                <li>Dev Degree</li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Products</h4>
              <ul>
                <li>Shop</li>
                <li>Shop Pay</li>
                <li>Shopify Plus</li>
                <li>Shopify Fulfillment Network</li>
                <li>Linkpop</li>
                <li>Commerce Components</li>
              </ul>
            </div>
          </div>
          <div className="footer__section2">
            <div class="footer-column">
              <h4>Global Impact</h4>
              <ul>
                <li>Sustainability</li>
                <li>Social impact</li>
                <li>Build Black</li>
                <li>Build Black</li>
                <li>Build Native</li>
                <li>Research</li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li>Online store builder</li>
                <li>Website builder</li>
                <li>Ecommerce website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
