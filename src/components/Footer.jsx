import logo from '../img/logo.svg';

const Footer = () => {
    return ( 
        <footer>
            <div className="w-full lg:w-10/12 max-w-[1700px] mx-auto my-14 flex px-4 md:px-10 lg:px-32 py-4 items-start justify-between">
                <div className="w-full md:w-[40%]">
                    <img src={logo} alt="CaseCraft" className="mb-5 flex mx-auto md:block md:mx-0" />
                    <div className="flex items-center justify-center md:justify-start">
                        <svg className="mx-3 md:m-0 md:mr-6" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="Dribbble" d="M239.942,243.014c5.023-3.006,6.047-10.8,1.066-14.7a12.008,12.008,0,0,0-1.066-.757v1.5a3.76,3.76,0,0,1,.432.394,2.39,2.39,0,0,1-.432.553v1.769a16.3,16.3,0,0,0,1.4-1.229c.927.713,1.785,3.43,1.634,4.557a12.105,12.105,0,0,0-3.038-.373v1.362a13.969,13.969,0,0,1,2.972.38,7.824,7.824,0,0,1-2.972,4.99Zm-1.758.794a8.413,8.413,0,0,0,1.758-.794v-1.561a1.684,1.684,0,0,1-.361.186,22.063,22.063,0,0,0-.672-2.8c-.169-.6-.559-1.5-.724-2.186v4.85a3.015,3.015,0,0,1,.064.748l-.039.146-.025.012v1.4Zm1.758-16.255a8.376,8.376,0,0,0-1.758-.829V228.1a6.79,6.79,0,0,1,1.758.954v-1.5Zm0,2.445v1.769c-.19.149-.391.3-.61.465a8.459,8.459,0,0,1-1.148.681v-1.557A10.269,10.269,0,0,0,239.942,230Zm0,4.724v1.362c-.371.021-.86.083-1.758.177v-1.34C239.007,234.818,239.5,234.746,239.942,234.721Zm-3.124,9.406a8.888,8.888,0,0,0,1.366-.319v-1.4a6.274,6.274,0,0,1-1.366.429v1.288Zm1.366-17.4-.075-.025a8.862,8.862,0,0,0-1.292-.318v1.312a9.327,9.327,0,0,1,1.366.4v-1.372Zm0,4.631v1.557l-.025.013-1.273.633a4.256,4.256,0,0,0,.735,1.43l.562-.067v1.34l-.069.007a2.815,2.815,0,0,0,.069.388v4.85a33.445,33.445,0,0,0-1.366-4.589v-4.837A9.556,9.556,0,0,0,238.184,231.355Zm-4.114,12.8a9.805,9.805,0,0,0,2.424.013c.109-.013.217-.028.324-.044v-1.288a7.445,7.445,0,0,1-1.45.156,8.53,8.53,0,0,1-1.3-.092v1.255Zm2.748-17.778a8.81,8.81,0,0,0-2.748-.059v1.314a6.981,6.981,0,0,1,1.2-.119,7.553,7.553,0,0,1,1.548.176V226.38Zm0,5.7v4.837c-.038-.1-.075-.2-.109-.289a5.518,5.518,0,0,0-2.638,1.121v-1.595a6.557,6.557,0,0,1,2.083-.83,3.81,3.81,0,0,0-.62-1.341,10.333,10.333,0,0,1-1.462.413V232.9c.282-.054.553-.1.809-.129a7.658,7.658,0,0,0-.809-1.555v-2.227l2.18,3.276A3.929,3.929,0,0,0,236.818,232.078Zm-2.79-5.75a9.753,9.753,0,0,0-2.176.618v1.419c.041-.013.081-.024.12-.033.443.724,1.369,1.768,2.1,2.888v-2.227l-.809-1.215c.27-.043.537-.1.809-.143v-1.314l-.042.007Zm-2.176,17.245a9.033,9.033,0,0,0,2.218.585V242.9a6.742,6.742,0,0,1-2.218-.761v1.431ZM234.07,232.9v1.489c-.694.148-1.448.259-2.218.35v-1.387c.741-.124,1.511-.316,2.218-.453Zm0,3.247v1.595a14.969,14.969,0,0,0-2.218,1.838v-1.846c.156-.137.311-.265.461-.379A17.067,17.067,0,0,1,234.07,236.151Zm-2.218-9.205a8.9,8.9,0,0,0-5.5,9.456,8.991,8.991,0,0,0,5.5,7.171v-1.431c-.452-.238-.9-.51-1.417-.8a8.054,8.054,0,0,1,1.248-1.58c.051-.057.108-.118.169-.181v-1.846a22.324,22.324,0,0,0-2.395,2.546,5.785,5.785,0,0,1-1.363-2.2,6.342,6.342,0,0,1-.5-2.9c1.268-.164,2.792-.27,4.26-.444v-1.387q-.213.036-.422.063c-1.222.158-2.479.3-3.739.382a7.784,7.784,0,0,1,1.515-3.368,7.31,7.31,0,0,1,2.646-2.069Z" transform="translate(-226.267 -226.24)" fill="#2f2651"/>
                        </svg>
                        <svg className="mx-3 md:m-0 md:mr-6" id="Instagram" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="Body" d="M12.638,0H5.362A5.368,5.368,0,0,0,0,5.362v7.275A5.368,5.368,0,0,0,5.362,18h7.275A5.368,5.368,0,0,0,18,12.638V5.362A5.368,5.368,0,0,0,12.638,0Zm3.552,12.638a3.552,3.552,0,0,1-3.552,3.551H5.362a3.552,3.552,0,0,1-3.551-3.551V5.362A3.551,3.551,0,0,1,5.362,1.811h7.275a3.551,3.551,0,0,1,3.551,3.551v7.275Z" transform="translate(0)" fill="#2f2651"/>
                            <path id="Lens" d="M137.5,133a4.5,4.5,0,1,0,4.5,4.5A4.5,4.5,0,0,0,137.5,133Zm0,7.245a2.748,2.748,0,1,1,2.748-2.748A2.748,2.748,0,0,1,137.5,140.245Z" transform="translate(-128.497 -128.497)" fill="#2f2651"/>
                            <path id="Viewport" d="M1.156,0A1.156,1.156,0,1,1,0,1.156,1.156,1.156,0,0,1,1.156,0Z" transform="translate(12.484 3.247)" fill="#2f2651"/>
                        </svg>
                        <svg className="mx-3 md:m-0 md:mr-6" xmlns="http://www.w3.org/2000/svg" width="24.167" height="19.5" viewBox="0 0 24.167 19.5">
                            <path id="Twitter" d="M40.021,21.4A7.674,7.674,0,0,1,37.1,22.411h0A4.717,4.717,0,0,0,33.725,21a4.624,4.624,0,0,0-4.676,4.569,4.471,4.471,0,0,0,.118,1.02h0a13.056,13.056,0,0,1-9.64-4.743,4.512,4.512,0,0,0,1.418,6.039,3.059,3.059,0,0,1-2.042-.517,4.42,4.42,0,0,0,3.607,4.467,3.784,3.784,0,0,1-1.947.145c.149,1.344,2.074,3.1,4.18,3.1A8.441,8.441,0,0,1,18,36.979,14.293,14.293,0,0,0,25.315,39,12.832,12.832,0,0,0,38.4,25.652c0-.008,0-.016,0-.025s0-.038,0-.058,0-.045,0-.067a7.967,7.967,0,0,0,2.267-2.34,8.337,8.337,0,0,1-2.593.719A4.873,4.873,0,0,0,40.021,21.4" transform="translate(-17.25 -20.25)" fill="rgba(255,255,255,0)" stroke="#2f2651" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/>
                        </svg>
                    </div>
                    <p className="text-sm my-5 italic text-center md:text-left md:mr-6">
                        Coded with React, TailwindCSS  
                        <span className="animate-pulse mx-1 text-red-600">
                            ❤
                        </span> 
                        by  
                        <a href="https://instagram.com/babblebey" className="text-secondary mx-1" target="_blank">
                            @babblebey
                        </a>
                        from a UI Design by
                        <a href="https://dribbble.com/Abdulldsgnr" className="text-secondary mx-1" target="_blank">
                            @abdulldsgnr
                        </a>
                    </p>
                </div>

                <div className="w-[20%] hidden md:block">
                    <p className="italic font-semibold text-primary-300 mb-3">CaseCraft</p>
                    <ul>
                        {['Updates', 'Tutorials', 'Teams', 'Enterprise', 'Blog'].map((item, index) => (
                            <li key={index} className="text-xs italic font-semibold text-primary-100 mb-1 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-[20%] hidden md:block">
                    <p className="italic font-semibold text-primary-300 mb-3">Platform</p>
                    <ul>
                        <li className="text-xs italic font-semibold text-primary-100 mb-1 cursor-pointer">
                            Web (<a href="#" className="text-secondary">join waitlist</a>)
                        </li>
                        {['iOS', 'Android'].map((item, index) => (
                            <li key={index} className="text-xs italic font-semibold text-primary-100 mb-1 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-[20%] hidden md:block">
                    <p className="italic font-semibold text-primary-300 mb-3">About</p>
                    <ul>
                        {['Community', 'Company', 'Careers', 'Security'].map((item, index) => (
                            <li key={index} className="text-xs italic font-semibold text-primary-100 mb-1 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;