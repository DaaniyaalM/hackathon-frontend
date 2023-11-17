import cash from './../../assets/icons/cash.svg';
import checklist from './../../assets/icons/checklist.svg';
import legal from './../../assets/icons/legal.svg';
import mark from './../../assets/icons/mark.svg';
import secure from './../../assets/icons/secure.svg';
import store from './../../assets/icons/store.svg'; 
import './RoadMap.scss';


const RoadMap = () =>{
    return (
        <>
        <h1>Your road to success!</h1>
        <p>We’ve created the steps needed to get your business regulated</p>
        <div className='wrapper'>
        <div className="container">
            <div className="container__left-pannel">
                <div className='container__details-card'>
                    <div className='container__img-sec'>
                        <img className='container__img' src={store} alt="icon" />
                        <h2 className='container__card-title'>Register your business name</h2>
                    </div>
                    <div className='container__des-pannel'>
                        <p className='container__card-description'>Register your business name through the BC registry Services.</p>
                    </div>
                    <div className='container__btn-pannel'>
                        <button className='container__btn'>Go</button>
                    </div>
                </div>
                <div className='container__card-left'>
                    <h2 className='container__title'>Then here,</h2>
                </div>

                <div className='container__details-card'>
                    <div className='container__img-sec'>
                        <img className='container__img' src={checklist} alt="icon" />
                        <h2 className='container__card-title'>Work Safe BC</h2>
                    </div>
                    <div className='container__des-pannel'>
                        <p className='container__card-description'>Register your business name through the BC Registry Services.</p>
                    </div>
                    <div className='container__btn-pannel'>
                        <button className='container__btn'>Go</button>
                    </div>
                </div>
                <div className='container__card-left'>
                    <h2 className='container__title'>Almost here,</h2>
                </div>

                <div className='container__details-card'>
                    <div className='container__img-sec'>
                        <img className='container__img' src={secure} alt="icon" />
                        <h2 className='container__card-title'>Suggested Insurance (Optional)</h2>
                    </div>
                    <div className='container__des-pannel'>
                        <p className='container__card-description'>Consider getting business insurance for your distribution process.</p>
                    </div>
                    <div className='container__btn-pannel'>
                        <button className='container__btn'>Go</button>
                    </div>
                </div>

                <div className='container__card-left'>
                    <h2 className='container__title'>You are ready for success,</h2>
                </div>
            </div>

            {/* verticle line */}
            <div className='container__v-line'></div>

            <div className="container__right-pannel">
            <div className='container__card'>
                <h2>Start here,</h2>
            </div>

            <div className='container__details-card'>
                    <div className='container__img-sec'>
                        <img className='container__img' src={cash} alt="icon" />
                        <h2 className='container__card-title'>Register for taxes</h2>
                    </div>
                    <div className='container__des-pannel'>
                        <p className='container__card-description'>Register for the Provincial Sales Tax (PST) with BC Minister of Finance..</p>
                    </div>
                    <div className='container__btn-pannel'>
                        <button className='container__btn'>Go</button>
                    </div>
            </div>

            <div className='container__card'>
                <h2>And here,</h2>
            </div>

            <div className='container__details-card'>
                    <div className='container__img-sec'>
                        <img className='container__img' src={legal} alt="icon" />
                        <h2 className='container__card-title'>Permits and Licenses</h2>
                    </div>
                    <div className='container__des-pannel'>
                        <p className='container__card-description'>Register for the Provincial Sales Tax (PST) with BC Minister of Finance..</p>
                    </div>
                    <div className='container__btn-pannel'>
                        <button className='container__btn'>Go</button>
                    </div>
            </div>

            <div className='container__card'>
                <h2>One more,</h2>
            </div>

            <div className='container__details-card'>
                    <div className='container__img-sec'>
                        <img className='container__img' src={mark} alt="icon" />
                        <h2 className='container__card-title'>Incorporation (Optional)</h2>
                    </div>
                    <div className='container__des-pannel'>
                        <p className='container__card-description'>We suggest incorporating your business to protect your personal funds.</p>
                    </div>
                    <div className='container__btn-pannel'>
                        <button className='container__btn'>Go</button>
                    </div>
            </div>
          

            </div>

        </div>
        </div>
        </>
    );
}

export default RoadMap;