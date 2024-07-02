import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import logging_1 from '../../assets/logging_1.png';
import logout_1 from '../../assets/logout_1.png';
import logout_2 from '../../assets/logout_2.png';
import logout_3 from '../../assets/logout_3.png';
import forgot_1 from '../../assets/forgot_1.png';
import forgot_2 from '../../assets/forgot_2.png';
import forgot_3 from '../../assets/forgot_3.png';
import forgot_4 from '../../assets/forgot_4.png';
import e_process_order_1 from '../../assets/employee_process_order_1.png';
import e_process_order_2 from '../../assets/employee_process_order_2.png';
import e_process_order_3 from '../../assets/employee_process_order_3.png';
import e_process_order_4 from '../../assets/employee_process_order_4.png';
import e_payment_1 from '../../assets/employee_payment_1.png';
import e_payment_2 from '../../assets/employee_payment_2.png';
import e_payment_3 from '../../assets/employee_payment_3.png';
import e_queue_1 from '../../assets/employee_queue_1.png';
import e_transac_history from '../../assets/employee_transac_history.png';
import e_inventory_1 from '../../assets/employee_inventory_1.png';
import e_inventory_2 from '../../assets/employee_inventory_2.png';

export const EmployeeTutorialScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const screen = [
        {
            "Account": [
                {
                    "name": "Log-In/Log-Out",
                    "link": "./login-logout"
                }
            ]
        },
        {
            "Processing Orders": [
                {
                    "name": "Product Selection",
                    "link": "./product-selection"
                },
                {
                    "name": "Payment",
                    "link": "./payment"
                }
            ]
        },
        {
            "Order Queue Management": [
                {
                    "name": "Queue",
                    "link": "./queue"
                }
            ]
        },
        {
            "Inventory Management": [
                {
                    "name": "Inventory",
                    "link": "./inventory"
                },
            ]
        },
        {
            "Transaction History": [
                {
                    "name": "Transactions",
                    "link": "./transaction-history"
                }
            ]
        },
    ];

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('/admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">[Cashier] Tutorial Screen</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="flex-1 overflow-y-scroll">
                {
                    screen.map((item, key) => {
                        const categoryName = Object.keys(item)[0];
                        return (
                            <div className="w-full bg-[#56524D] my-4 rounded-3xl overflow-hidden" key={key}>
                                <div 
                                    className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#676460] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                                    onClick={() => handleCategoryClick(categoryName)}
                                >
                                    <h1>{categoryName}</h1>
                                    <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === categoryName ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`transition-max-height duration-300 ease-in-out ${selectedCategory === categoryName ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                    {
                                        item[categoryName].map((subcategory, subkey) => {
                                            return (
                                                <div className="w-inherit mx-8 my-4 px-8 py-4 bg-[#89827A] rounded-3xl text-[#DDDDDD] text-[40px] font-bold cursor-pointer" onClick={() => navigate(subcategory["link"])} key={subkey}>
                                                    {subcategory["name"]}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export const EmployeeLoginLogoutTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Log in", "Log out", "Forgout Password"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../employee/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Log in / Log out</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#67625C] rounded-3xl overflow-scroll">
                {/* LOGGING IN */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Logging In</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={logging_1} alt="Logging In image 1" className='w-2/3'/>
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                <ol className='list-decimal list-inside'>
                                    <li>Access the link and go to the login screen.</li>
                                    <li className='mt-4'>Click the PIN entry field to activate it.</li>
                                    <li className='mt-4'>Input your PIN using the numeric keypad (5 attempts, wait 3 minutes after).</li>
                                    <li className='mt-4'>Click sign-in to access the dashboard.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LOGGING OUT */}
                <div className="w-full bg-[#56524C] mt-4 rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Logging Out</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-col gap-4 p-8">
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-1/3 bg-[#746F69] rounded-3xl flex items-center justify-center px-8 text-[#fff] text-[32px] font-bold shadow-3xl">
                                    <ol>
                                        <li>If you would like to log out</li>
                                        <li className="mt-4">Click on your profile.</li>
                                    </ol>
                                </div>
                                <img src={logout_1} alt="Log Out" className="w-2/3" />
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <img src={logout_2} alt="Log Out" className="w-2/3" />
                                <div className="w-1/3 bg-[#746F69] rounded-3xl flex items-center justify-center px-8 text-[#fff] text-[32px] font-bold shadow-3xl">
                                    Click the "Sign Out" Button
                                </div>
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-2/3 bg-[#746F69] rounded-3xl flex items-center justify-center px-8 text-[#fff] text-[32px] font-bold">
                                    Click the "Confirm" button to log out.
                                </div>
                                <img src={logout_3} alt="Log Out" className="w-1/3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORGOT PASSWORD */}
                <div className="w-full bg-[#56524C] mt-4 rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Forgot Password</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-col gap-4 p-8">
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-1/3 bg-[#746F69] rounded-3xl flex items-center px-8 text-[#fff] text-[32px] font-bold">
                                    <ol className="list-decimal ml-8">
                                        <li>On the login screen, locate and click the " I forgot my PIN" 
                                        link.</li>
                                    </ol>
                                </div>
                                <img src={forgot_1} alt="Log Out" className="w-2/3" />
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <img src={forgot_2} alt="Log Out" className="w-2/3" />
                                <div className="w-1/3 bg-[#746F69] rounded-3xl flex items-center justify-center px-8 text-[#fff] text-[32px] font-bold shadow-3xl">
                                    <ol className="ml-8 list-decimal" start="2">
                                        <li>You will be directed to a screen where you need to enter your registered email address.</li>
                                        <li className="mt-4">Enter your email address in the provided field.</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-2/3 bg-[#746F69] rounded-3xl flex items-center justify-center px-8 text-[#fff] text-[32px] font-bold">
                                    <ol className="ml-8 list-decimal" start="4">
                                        <li>The system requires you to enter the 2FA code sent to your registered email address and then click Confirm.</li>
                                    </ol>
                                </div>
                                <img src={forgot_3} alt="Log Out" className="w-1/3" />
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <img src={forgot_4} alt="Log Out" className="w-1/3" />
                                <div className="w-2/3 bg-[#746F69] rounded-3xl flex items-center justify-center px-8 text-[#fff] text-[32px] font-bold">
                                    <ol className="ml-8 list-decimal" start="5">
                                        <li>Enter your new PIN in the "New PIN" field.</li>
                                        <li className="mt-4">Confirm your new PIN by entering it again in the "Confirm PIN" field.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EmployeeProductSelectionTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Category", "Sub-Category", "Product Customization", "Product Management"];

    return (
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../employee/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Product Selection</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#67625C] rounded-3xl overflow-scroll">
                {/* CATEGORY */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Category</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={e_process_order_1} alt="Logging In image 1" className='w-2/3'/>
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                Here, on this screen, you will be prompted to select the category in which the order is being requested.
                            </div>
                        </div>
                    </div>
                </div>

                {/* SUB-CATEGORY */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Sub-Category</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                Here are the subcategories. You can select the precise order that the customer is placing
                            </div>
                            <img src={e_process_order_2} alt="Logging In image 1" className='w-2/3'/>
                        </div>
                    </div>
                </div>

                {/* PRODUCT CUSTOMIZATION */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Product Customization</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={e_process_order_3} alt="Logging In image 1" className='w-2/3'/>
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>After selecting an order, choose hot or cold sizes. N/A if not relevant. The price will be shown.</li>
                                    <li className="mt-4">View available add-ons for the customer's order.</li>
                                    <li className="mt-4">Click the link to select a discount type (senior, PWD, or voucher).</li>
                                    <li className="mt-4">Click "Confirm Item" when the order is complete.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT MANAGEMENT */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[3])}
                    >
                        <h1>Product Management</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[3] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[3] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>The selected order displays the name, size, price, and total amount.</li>
                                    <li className="mt-4">Remove the incorrect order if needed using DEL button.</li>
                                    <li className="mt-4">Adjust the quantity using "+" and "-" buttons.</li>
                                    <li className="mt-4">Click "Confirm Order" when the order is complete.</li>
                                </ol>
                            </div>
                            <img src={e_process_order_4} alt="Logging In image 1" className='w-2/3'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EmployeePaymentTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Payment Method", "Discount", "Receipt"];

    return (
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../employee/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Payment</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#67625C] rounded-3xl overflow-scroll">
                {/* PAYMENT METHOD */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Payment Method</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Payment can be made via Gcash or Cash.</li>
                                    <li className="mt-4">Choose Dine-in or takeout.</li>
                                    <li className="mt-4">Select any available discount.</li>
                                    <li className="mt-4">The Order Total will be displayed.</li>
                                    <li className="mt-4">Enter the received amount and click the check button to see the change.</li>
                                    <li className="mt-4">Click "ADD TO QUEUE" to start order preparation.</li>
                                </ol>
                            </div>
                            <img src={e_payment_1} alt="Logging In image 1" className='w-2/3'/>
                        </div>
                    </div>
                </div>

                {/* DISCOUNT */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Discount</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={e_payment_2} alt="Logging In image 1" className='w-2/3'/>
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                For a discount, select the order that will be discounted. Then, if everything is in order, click "Confirm."
                            </div>
                        </div>
                    </div>
                </div>

                {/* RECEIPT */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Receipt</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={e_payment_3} alt="Logging In image 1" className='w-2/3'/>
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                After clicking the confirm button, you will be directed to this page, where you can view the receipt and ensure that it matches the order. After that, click the confirmation button to print the receipt.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EmployeeQueueTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Queue"];

    return (
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../employee/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Queue Management</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#67625C] rounded-3xl overflow-scroll">
                {/* QUEUE */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Queue</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={e_queue_1} alt="Logging In image 1" className='w-2/3'/>
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                <ol className='list-decimal ml-8'>
                                    <li>On this page, you can see the orders that are in the queue. If the order is complete, click the check button.</li>
                                    <li className="mt-4">You can sort the orders in ascending order by clicking the "Sort Ascendingly" button.</li>
                                    <li className="mt-4">The number on the left side indicates how many orders are in the queue.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EmployeeInventoryManagementTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Inventory", "Filtration"];

    return (
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../employee/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Inventory Management</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#67625C] rounded-3xl overflow-scroll">
                {/* INVENTORY */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Inventory</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={e_inventory_1} alt="Logging In image 1" className='w-2/3'/>
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                <p>
                                    You can adjust the amount of raw materials by entering the quantity of the raw materials in order for the admin to be notified.<br /><br />
                                    After filling all the necessary inputs, you can now click the save button at the upper right corner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FILTRATION */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Filtration</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                <p>
                                    You can filter the inventory based on date by simply selecting the desired date and specifying its name.<br /><br />
                                    Take note, you can't change the quantity if the system date is not real-time. You can only view the state of that inventory.
                                </p>
                            </div>
                            <img src={e_inventory_2} className='w-2/3'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EmployeeTransactionHistoryTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Transactions"];

    return (
        <div className="h-screen w-full flex flex-col bg-[#443F39] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../employee/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Transaction History</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#67625C] rounded-3xl overflow-scroll">
                {/* TRANSACTION HISTORY */}
                <div className="w-full bg-[#56524C] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#494745] rounded-3xl text-[#E3E3E3] text-[60px] font-bold cursor-pointer"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Transactions</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#746F69] rounded-3xl flex flex-col justify-center px-8 text-[#fff] text-[32px] font-bold shadow-2xl">
                                This page shows the transaction logs for the previous transactions.
                                <br /><br />
                                You can also filter the content of the transaction history by selecting a specific date.
                                <br /><br />
                                You can also filter the content of the transaction by specifying its order number.
                            </div>
                            <img src={e_transac_history} alt="Logging In image 1" className='w-2/3'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}