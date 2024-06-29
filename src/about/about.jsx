import React from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import image_1 from '../../assets/image_102.png';
import image_2 from '../../assets/image_103.png';

const About = () => {
    return(
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-10">
            <div className="w-full flex items-center gap-[40px]">
                <MdOutlineKeyboardArrowLeft size={160} color='#D15341' />
                <h1 className="text-[100px] font-bold text-[#D15341]">About Us</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]'/>
            <div className="h-auto w-full flex flex-col overflow-y-scroll gap-[40px] py-8">
                <div className="w-full flex flex-row p-4 gap-[40px] bg-[#706961] rounded-3xl">
                    <img src={image_1} alt="first image" className='h-[444px] w-[556px]' />
                    <div className="flex flex-col gap-[12px] text-[#ffffff] ">
                        <h1 className="text-[60px] font-bold">Inarawan Coffee</h1>
                        <p className="text-[40px]">Inarawan Cafe began as a humble pop-up stall selling coffee and water along Marilaque Road every Sunday. The business was a success, which led to them opening their own coffee shop in Concepcion Uno in December of 2020. The main cafe area is a narrow, roofed cage-like area with a rustic and artsy feel.</p>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-[40px]">
                    <div className="w-2/3 flex flex-col gap-[40px]">
                        <div className="w-full bg-[#706961] p-4 flex flex-row rounded-3xl justify-between gap-[20px]">
                            <div className="flex flex-col text-[#fff] gap-[20px]">
                                <h1 className="text-[52px] font-bold">The Developers</h1>
                                <ul className="text-[28px]">
                                    <li>- Bandril, Mark Christian (BSCS)</li>
                                    <li>- Batulan, Ayan (BSCS)</li>
                                    <li>- Cayetano, Shandeloh (BSCS)</li>
                                    <li>- Dollano, Melissa Pola Anthony (BSCS)</li>
                                    <li>- Rongavilla, Leon Carlos (BSCS)</li>
                                </ul>
                            </div>
                            <img src={image_2} alt="second image" className='h-[480px] w-[612px]'/>
                        </div>
                        <div className="w-full bg-[#706961] p-4 flex flex-col rounded-3xl text-[#fff]">
                            <h1 className="text-[56px] font-bold mt-4">Mission and Vission of Inarawan Coffee</h1>
                            <h3 className="text-[48px] font-bold">Mission:</h3>
                            <p className="text-[36px] indent-8">Inarawan’s mission is to support Filipino farmers by locally sourcing their coffee. Through their distinctive brewing process, Inarawan Coffee aims to delivery high-quality coffee to every customer</p>
                            <h3 className="text-[40px] font-bold mt-8">Vision:</h3>
                            <p className="text-[36px] indent-8">By maintaining exceptional service and products, Inarawan Coffee aspires to become renowned for serving uniquely brewed, top-notch coffee in every cup. They are committed to expanding their presence nationwide, championing and uplifting locally sourced coffee</p>
                        </div>
                    </div>
                    <div className="w-1/3 bg-[#706961] p-4 flex flex-col rounded-3xl text-[#fff]">
                        <h1 className="text-[56px] font-bold">System Info</h1>
                        <p className="text-[32px] indent-8">The system runs on a web platform made possible with these tools:</p>
                        <h3 className="text-[44px] font-bold">IDE:</h3>
                        <p className="text-[28px] indent-12">- Name: VS Code</p>
                        <p className="text-[28px] indent-12">- Version: 1.90.0 x64</p>
                        <h3 className="text-[44px] font-bold mt-8">Runtime Environment:</h3>
                        <p className="text-[28px] indent-12">- Name: Node JS</p>
                        <p className="text-[28px] indent-12">- Version: v20.11.1</p>
                        <h3 className="text-[44px] font-bold mt-8">Browser:</h3>
                        <p className="text-[28px] indent-12">a. Name: Microsoft Edge</p>
                        <p className="text-[28px] indent-16">Version: 125.0.2535.92 (Official build) (64-bit)</p>
                        <p className="text-[28px] indent-12">a. Name: Google Chrome</p>
                        <p className="text-[28px] indent-16">Version: 125.0.6422.142 (Official build) (64-bit)</p>
                        <h3 className="text-[44px] font-bold mt-8">API Development Platform:</h3>
                        <p className="text-[28px] indent-12">- Name: Postman</p>
                        <p className="text-[28px] indent-12">- Version: v11</p>
                        <h3 className="text-[44px] font-bold mt-8">Version Control</h3>
                        <p className="text-[28px] indent-12">- Name: Git</p>
                        <p className="text-[28px] indent-12">- Version: 2.44.0.windows.1</p>
                        <h3 className="text-[44px] font-bold mt-8">Database Management:</h3>
                        <p className="text-[28px] indent-12">- Name: pgAdmin 4</p>
                        <p className="text-[28px] indent-12">- Version: v8.8</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;