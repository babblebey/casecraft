import vidCover from '../img/vid-cover.svg';

const HowItWorks = () => {

    const playVideo = () => {}

    return ( 
        <div className="relative cursor-pointer" onClick={playVideo}>
            <img src={vidCover} alt="Video Cover" className="w-full object-cover" />
            <div className="flex flex-col justify-center items-center absolute top-0 h-full w-full">
                <svg className="w-4 sm:w-6 md:w-10 h-8" xmlns="http://www.w3.org/2000/svg" width="48.509" height="54.814" viewBox="0 0 48.509 54.814">
                    <path id="Play" d="M21.853,3.177a6.444,6.444,0,0,1,11.109,0L53.915,38.8a6.444,6.444,0,0,1-5.554,9.711H6.454A6.444,6.444,0,0,1,.9,38.8Z" transform="translate(48.509) rotate(90)" fill="#f6f6f9"/>
                </svg>
                <p className="text-white font-semibold italic text-[13px] md:text-[18px] my-0 sm:my-1 md:my-4 items-center">
                    How CaseCraft works
                </p>
            </div>
        </div>
     );
}
 
export default HowItWorks;