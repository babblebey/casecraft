import appScreen from '../img/app-screen3.svg';

const PhotosAndPatterns = () => {
    return ( 
        <div className="-mb-20 md:-mb-40 relative">
            <div className="w-8/12 max-w-[1600px] m-auto ">
                <p className="italic font-semibold text-sm md:text-base text-primary-200">
                    Get full access to
                </p>
                <h2 className="italic font-bold text-3xl sm:text-[40px] md:text-[50px] leading-10 sm:my-3 text-secondary">
                    Photos & Partners
                </h2>
                <p className="italic font-medium text-sm text-primary-200">
                    Explore photos, patterns, colors & gradients designed by the best designers or simply use yours.
                </p>
            </div>
            <img src={appScreen} alt="App Screen" className="w-full relative -left-0 sm:-left-10 md:-left-14 object-cover"/>
        </div>
     );
}
 
export default PhotosAndPatterns;