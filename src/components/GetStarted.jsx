import appScreen from '../img/app-screen4.svg';

const GetStarted = () => {
    return ( 
        <div className="text-center mt-[3em] md:mt-[10em]">
            <h2 className="font-bold italic text-[25px] md:text-[70px] text-primary-300 mb-4 md:mt-2">
                Get started now
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center mt-10 mb-[7em]">
                <button className="flex items-center justify-center rounded-full gradient-bg py-4 px-8 mt-4 mx-4">
                    <svg className="w-6 md:w-8 mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.963 25.036">
                        <path id="logo" d="M6.365,25.036c-1.51,0-2.653-1.5-3.786-3.17A15.957,15.957,0,0,1,.2,15.831a10.092,10.092,0,0,1,.825-6.579A6.319,6.319,0,0,1,3.184,6.981,5.692,5.692,0,0,1,6.1,6.113h.062a6.722,6.722,0,0,1,2.467.644,4.587,4.587,0,0,0,1.519.446,4.675,4.675,0,0,0,1.468-.439,7.8,7.8,0,0,1,2.835-.727,3.811,3.811,0,0,1,.39.02,5.648,5.648,0,0,1,4.482,2.479l-.019.012A5.627,5.627,0,0,0,16.674,13.3a5.5,5.5,0,0,0,3.283,5.06l.006,0-.008.025a13.894,13.894,0,0,1-1.69,3.536C17.31,23.354,16.227,24.97,14.514,25H14.44a4.152,4.152,0,0,1-1.824-.469,4.814,4.814,0,0,0-2.149-.526,5.116,5.116,0,0,0-2.255.543,4.578,4.578,0,0,1-1.763.483ZM10.2,5.78c-.083,0-.167,0-.248-.01a5.289,5.289,0,0,1,1.3-3.874A5.443,5.443,0,0,1,14.862,0a5.61,5.61,0,0,1-1.276,4A4.576,4.576,0,0,1,10.2,5.78Z" fill="#f6f6f9"/>
                    </svg>
                    <div className="text-left">
                        <p className="text-white font-medium text-[10px] md:text-[14px] -mb-1 opacity-[0.5]">Download on the</p>
                        <p className="text-white font-semibold text-[15px] md:text-[20px]">App Store</p>
                    </div>
                </button>
                <button className="flex items-center justify-center rounded-full gradient-bg py-4 px-8 mt-4 mx-2">
                    <svg className="w-6 md:w-8 mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.309 25.036">
                        <path id="logo" d="M1.1,25.036h0A1.888,1.888,0,0,1,0,23.324V1.715A1.89,1.89,0,0,1,1.108,0l12.93,12.516L1.1,25.035Zm2.9-.651h0l11.147-10.79,2.988,2.892-14.134,7.9ZM19.554,15.7h0l-3.286-3.181,3.284-3.179L22.536,11a1.869,1.869,0,0,1,.022,3.014l-3,1.679Zm-4.4-4.26h0L4.011.652,18.139,8.547l-2.985,2.889Z" fill="#f6f6f9"/>
                    </svg>
                    <div className="text-left">
                        <p className="text-white font-medium text-[10px] md:text-[14px] -mb-1 opacity-[0.5]">Get it on</p>
                        <p className="text-white font-semibold text-[15px] md:text-[20px]">Play Store</p>
                    </div>
                </button>
            </div>
            <img src={appScreen} alt="App Screen" className="w-full" />
        </div>
     );
}
 
export default GetStarted;