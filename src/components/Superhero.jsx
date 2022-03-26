import appScreen from '../img/app-screen2.svg'

const Superhero = () => {
    return ( 
        <div className="-mb-5 md:-mb-20">
            <div className="w-8/12 max-w-[1600px] m-auto">
                <p className="italic font-semibold text-sm md:text-base text-primary-200">
                    A tool that makes you
                </p>
                <h2 className="italic font-bold text-3xl sm:text-[40px] md:text-[50px] leading-10 sm:my-3 text-secondary">
                    A Superhero
                </h2>
                <p className="italic font-medium text-sm text-primary-200">
                    Stand upright, wear your cape and put on some tight superman pants.
                </p>
            </div>
            <img src={appScreen} alt="App Screen" className="w-full relative -right-10 sm:-right-20 md:-right-32 lg:-right-[14rem]"/>
        </div>
     );
}
 
export default Superhero;  