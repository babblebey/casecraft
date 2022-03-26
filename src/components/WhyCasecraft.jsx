import airpod from '../img/airpod.svg';

const WhyCasecraft = () => {
    return ( 
        <div className="flex flex-col md:flex-row justify-center items-center w-full p-10 lg:w-9/12 m-auto">
            <div className="w-full md:w-6/12 my-4 text-center sm:text-left">
                <h2 className="italic font-bold text-primary-300 my-7 text-lg lg:text-[30px]">
                    Why CaseCraft?
                </h2>
                <p className="italic font-medium text-sm text-primary-200 md:pr-4">
                    Your gadgets weep all day as they crave for a makeover or anything at all to cover their tender & expensive parts, now you'll not just be doing your wallet a favor by protecting them you'll also get to make them look good and blend with style.
                </p>
                <button className="rounded-full gradient-bg py-4 px-8 mt-7">
                    <p className="text-white font-semibold italic text-[11px]">Download app</p>
                </button>
            </div>
            <div className="w-full md:w-fit">
                <img src={airpod} alt="Airpod" className="w-full" />
                <p className="italic text-sm text-center relative -top-10">Most sold of the month</p>
            </div>
        </div>
    );
}
 
export default WhyCasecraft;