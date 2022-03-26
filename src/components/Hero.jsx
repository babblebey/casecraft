import heroImg from '.././img/hero.svg';

const Hero = () => {
    return ( 
        <div className="w-full max-w-[1600px] m-auto relative top-0 md:-top-24 z-0">
            <div className="flex flex-col md:flex-row justify-around px-4 md:px-10 lg:px-24 items-center">
                {/* Call-to-action */}
                <div className="m-auto w-full md:w-auto text-center md:text-left">
                    <h1 className="text-primary-300 font-bold italic text-[35px] sm:text-[45px] lg:text-[60px] leading-[40px] md:leading-[50px] lg:leading-[60px] mb-2">
                        <span className="text-secondary">Design</span> <br />cases <br />for your <br />gadgets
                    </h1>
                    <button className="rounded-full gradient-bg py-4 px-8 mt-4">
                        <p className="text-white font-semibold italic text-[11px]">Download app</p>
                    </button>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-[70%] ml-auto">
                    <img className="w-full" src={heroImg} alt="Hero" />
                </div>
            </div>

            {/* Scroll Down Icon */}
            <div className="flex items-center justify-center">
                <svg className="w-3 md:w-5 animate-bounce" xmlns="http://www.w3.org/2000/svg" width="24" height="41" viewBox="0 0 24 41">
                    <g id="Mouse_Icon" data-name="Mouse Icon" transform="translate(-627 -724)">
                        <g id="Rectangle_10676" data-name="Rectangle 10676" transform="translate(627 724)" fill="#f6f6f9" stroke="#e1e2eb" stroke-width="2">
                            <rect width="24" height="41" rx="12" stroke="none"/>
                            <rect x="1" y="1" width="22" height="39" rx="11" fill="none"/>
                        </g>
                        <path id="Path_15843" data-name="Path 15843" d="M5586.5-891.724v6.468" transform="translate(-4947 1625)" fill="#f6f6f9" stroke="#e1e2eb" stroke-linecap="round" stroke-width="4"/>
                    </g>
                </svg>
            </div>
        </div>
     );
}
 
export default Hero;