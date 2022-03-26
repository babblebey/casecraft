import appScreen from '../img/app-screen1.svg';
import shapeBg from '../img/shape.svg';

const About = () => {
    return ( 
        <>
            <div className="w-full max-w-[1600px] mx-auto bg-auto bg-no-repeat object-cover bg-center p-10 md:p-24 text-center" style={{backgroundImage: `url(${shapeBg})`}}>
                <h2 className="font-bold italic text-[25px] md:text-[45px] text-primary-300 mb-4 md:mt-4">
                    We're CaseCraft
                </h2>
                <p className="italic m-auto font-medium text-base w-full md:w-9/12 text-primary-200">
                    We bring your imaginations to life by giving you the power & ability to create amazing, outstanding, breathtaking & spectacular cases for your gadgets
                </p>
                <button className="rounded-full gradient-bg py-4 px-8 mt-4">
                    <p className="flex text-white font-semibold italic text-[11px] items-center">
                        <svg className="w-3 mr-2" xmlns="http://www.w3.org/2000/svg" width="15.055" height="17.012" viewBox="0 0 15.055 17.012">
                            <path id="Path_15848" data-name="Path 15848" d="M8.276,2.931a2,2,0,0,1,3.448,0l6.5,11.055A2,2,0,0,1,16.5,17H3.5a2,2,0,0,1-1.724-3.014Z" transform="translate(17 -1.494) rotate(90)" fill="#f6f6f9"/>
                        </svg>
                        How it works
                    </p>
                </button>
            </div>
            <div>
                <img src={appScreen} alt="App Screen" className="w-full"/>
            </div>
        </>
     );
}
 
export default About;