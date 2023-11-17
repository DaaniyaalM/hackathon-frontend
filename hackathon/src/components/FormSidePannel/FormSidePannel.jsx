import frame from './../../assets/icons/Frame.svg';
import frame2 from './../../assets/icons/frame_2.svg';
import arrow from './../../assets/icons/arrow.svg';
import './FormSidePannel.scss';

const FormSidePannel = () => {
  return (
    <>
    

    
      <div className="wrapper">
        <div className="side-container">
          <div className="side-container__form-side-card">
            <h2>Start your online business today. For free.</h2>
            <p>Sign up for Shopify's free trial to access all of the tools and services you need to start, run, and grow your business.</p>
            <div className="side-container__filed">
              
              <input
                className="side-container__input-2"
                type="text"
                placeholder="Enter email"
              />
            </div>
            <button className="side-container__form-side-btn">Start Free Trial</button>
          </div>
        </div>

        <div className="side-container__card-2">
          <div className="side-container__img-card">
            <img src={frame}></img>
            <h4 className="side-container__title">Quickstart Guides</h4>
          </div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">Business Ideas</h4>
            <p className="side-container__desc">
              Find a niche or business idea and get started
            </p>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              Start an Ecommerce Business
            </h4>
            <p className="side-container__desc">
              Practical steps for starting a business from scratch
            </p>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              How to Start a Business
            </h4>
            <p className="side-container__desc">
              Learn the 11 steps to starting a business
            </p>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">Trending Products</h4>
            <p className="side-container__desc">
              Start a business selling in-demand products
            </p>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              Start a T-Shirt Business
            </h4>
            <p className="side-container__desc">
              Everything you need to know about selling t-shirts
            </p>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              What is Print on Demand?
            </h4>
            <p className="side-container__desc">
              Sell customized products without holding inventory
            </p>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">What is Dropshipping?</h4>
            <p className="side-container__desc">
              Learn about dropshipping and how it works
            </p>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              Shopify Store Examples
            </h4>
            <p className="side-container__desc">
              Get inspired and launch your own store
            </p>
          </div>
          <div className="side-container__h-line"></div>
        </div>

        {/* ------- */}

        <div className="side-container__card-2">
          <div className="side-container__img-card">
            <img src={frame2}></img>
            <h4 className="side-container__title"> Popular</h4>
          </div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              How to Start an Ecommerce Business
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              Find Online Store Name Ideas
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              Home Business Ideas You Can Start on the Side
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              Things to Make and Sell: The Business of DIY
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              Print-On-Demand Services for Selling Your Own Custom Products
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              How to Find a Manufacturer or Supplier for Your Product Idea
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              T-Shirt Templates and Mockups For Your Clothing Line
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              7 Best Ways to Make Money on Instagram
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              How to Drive Traffic to Your Website
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text">
            <h4 className="side-container__sub-title">
              How to Make Money Online: 30 Realistic Ideas
            </h4>
          </div>
          <div className="side-container__h-line"></div>

          <div className="side-container__text side-container__text--last ">
            <p className="side-container__desc">
              View more popular blog posts 
            </p>
            <img className="side-container__img-arrow" src={arrow} alt="" />
          </div>
        </div>
      </div>


      
    </>
  );
};
export default FormSidePannel;
