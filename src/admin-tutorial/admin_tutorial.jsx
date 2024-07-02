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
import a_sales_report_1 from '../../assets/admin_sales_report_1.png';
import a_sales_report_2 from '../../assets/admin_sales_report_2.png';
import a_forecast_report_1 from '../../assets/admin_forecast_report_1.png';
import a_forecast_report_2 from '../../assets/admin_forecast_report_2.png';
import a_transaction_1 from '../../assets/admin_transactions_1.png';
import a_transaction_2 from '../../assets/admin_transactions_2.png';
import a_activity_log_1 from '../../assets/admin_activity_log_1.png';
import a_activity_log_2 from '../../assets/admin_activity_log_2.png';
import a_inventory_1 from '../../assets/admin_inventory_1.png';
import a_inventory_2 from '../../assets/admin_inventory_2.png';
import a_inventory_3 from '../../assets/admin_inventory_3.png';
import a_inventory_4 from '../../assets/admin_inventory_4.png';
import a_inventory_5 from '../../assets/admin_inventory_5.png';
import a_order_settings_1 from '../../assets/admin_order_settings_1.png';
import a_order_settings_2 from '../../assets/admin_order_settings_2.png';
import a_order_settings_3 from '../../assets/admin_order_settings_3.png';
import a_order_settings_4 from '../../assets/admin_order_settings_4.png';
import a_category_1 from '../../assets/admin_category_1.png';
import a_category_2 from '../../assets/admin_category_2.png';
import a_category_3 from '../../assets/admin_category_3.png';
import a_voucher_1 from '../../assets/admin_voucher_1.png';
import a_voucher_2 from '../../assets/admin_voucher_2.png';
import a_voucher_3 from '../../assets/admin_voucher_3.png';
import a_product_1 from '../../assets/admin_product_1.png';
import a_product_2 from '../../assets/admin_product_2.png';
import a_product_3 from '../../assets/admin_product_3.png';
import a_product_4 from '../../assets/admin_product_4.png';
import a_branch_1 from '../../assets/admin_branch_1.png';
import a_branch_2 from '../../assets/admin_branch_2.png';
import a_branch_3 from '../../assets/admin_branch_3.png';
import a_branch_4 from '../../assets/admin_branch_4.png';
import a_employee_1 from '../../assets/admin_employee_1.png';
import a_employee_2 from '../../assets/admin_employee_2.png';
import a_employee_3 from '../../assets/admin_employee_3.png';
import a_bnr_1 from '../../assets/admin_backup_n_restore_1.png';
import a_bnr_2 from '../../assets/admin_backup_n_restore_2.png';
import a_archive_1 from '../../assets/admin_archive_1.png';
import a_archive_2 from '../../assets/admin_archive_2.png';
import a_archive_3 from '../../assets/admin_archive_3.png';
import a_as_1 from '../../assets/admin_account_setting_1.png';
import a_as_2 from '../../assets/admin_account_setting_2.png';
import a_as_3 from '../../assets/admin_account_setting_3.png';
import a_as_4 from '../../assets/admin_account_setting_4.png';
import a_as_5 from '../../assets/admin_account_setting_5.png';
import a_as_6 from '../../assets/admin_account_setting_6.png';
import a_as_7 from '../../assets/admin_account_setting_7.png';

export const AdminTutorialScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const screen = [
        {
            "Log In": [
                {
                    "name": "Log-In/Log-Out",
                    "link": "./login-logout"
                }
            ]
        },
        {
            "Reports": [
                {
                    "name": "Sales Reports",
                    "link": "./sales-report"
                },
                {
                    "name": "Forecast Reports",
                    "link": "./forecast-report"
                },
                {
                    "name": "Transactions",
                    "link": "./transactions"
                },
                {
                    "name": "Activity Logs",
                    "link": "./activity-logs"
                }
            ]
        },
        {
            "Inventory Management": [
                {
                    "name": "Inventory",
                    "link": "./inventory-management"
                }
            ]
        },
        {
            "Order Settings": [
                {
                    "name": "Order settings",
                    "link": "./order-settings"
                },
                {
                    "name": "Categories",
                    "link": "./category"
                },
                {
                    "name": "Vouchers",
                    "link": "./voucher"
                },
                {
                    "name": "Products",
                    "link": "./product"
                }
            ]
        },
        {
            "Branch and Employee Settings": [
                {
                    "name": "Branch",
                    "link": "./branch"
                },
                {
                    "name": "Employee",
                    "link": "./employee"
                }
            ]
        },
        {
            "System Maintenance": [
                {
                    "name": "Backup & Restore",
                    "link": "./backup-and-restore"
                },
                {
                    "name": "Archive",
                    "link": "./archive"
                },
                {
                    "name": "Admin Account Settings",
                    "link": "./admin-account"
                }
            ]
        }
    ];

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('/employee/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">[Admin] Tutorial Screen</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="flex-1 overflow-y-scroll">
                {
                    screen.map((item, key) => {
                        const categoryName = Object.keys(item)[0];
                        return (
                            <div className="w-full bg-[#F9F1E7] my-4 rounded-3xl overflow-hidden" key={key}>
                                <div 
                                    className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                                    onClick={() => handleCategoryClick(categoryName)}
                                >
                                    <h1>{categoryName}</h1>
                                    <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === categoryName ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`transition-max-height duration-300 ease-in-out ${selectedCategory === categoryName ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                    {
                                        item[categoryName].map((subcategory, subkey) => {
                                            return (
                                                <div className="w-inherit mx-8 my-4 px-8 py-4 bg-[#FFFFFF] rounded-3xl text-[#7B6F6F] text-[40px] font-bold cursor-pointer shadow-xl" onClick={() => navigate(subcategory["link"])} key={subkey}>
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

export const AdminLoginLogoutTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Log in", "Log out", "Forgout Password"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Log in / Log out</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* LOGGING IN */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Logging In</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={logging_1} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[28px] font-bold shadow-2xl">
                                <ol className='list-decimal ml-8'>
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
                <div className="w-full bg-[#F9F1E7] mt-4 rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Logging Out</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-col gap-4 p-8">
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex items-center justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-3xl">
                                    <ol>
                                        <li>If you would like to log out</li>
                                        <li className="mt-4">Click on your profile.</li>
                                    </ol>
                                </div>
                                <img src={logout_1} alt="Log Out" className="w-2/3 shadow-2xl rounded-3xl" />
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <img src={logout_2} alt="Log Out" className="w-2/3 shadow-2xl rounded-3xl" />
                                <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex items-center justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-3xl">
                                    Click the "Sign Out" Button
                                </div>
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-2/3 shadow-2xl rounded-3xl bg-[#FCF4EA] rounded-3xl flex items-center justify-center px-8 text-[#A28F8F] text-[32px] font-bold">
                                    Click the "Confirm" button to log out.
                                </div>
                                <img src={logout_3} alt="Log Out" className="w-1/3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORGOT PASSWORD */}
                <div className="w-full bg-[#F9F1E7] mt-4 rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Forgot Password</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-col gap-4 p-8">
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex items-center px-8 text-[#A28F8F] text-[32px] font-bold">
                                    <ol className="list-decimal ml-8">
                                        <li>On the login screen, locate and click the " I forgot my PIN" 
                                        link.</li>
                                    </ol>
                                </div>
                                <img src={forgot_1} alt="Log Out" className="w-2/3 shadow-2xl rounded-3xl" />
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <img src={forgot_2} alt="Log Out" className="w-2/3 shadow-2xl rounded-3xl" />
                                <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex items-center justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-3xl">
                                    <ol className="ml-8 list-decimal" start="2">
                                        <li>You will be directed to a screen where you need to enter your registered email address.</li>
                                        <li className="mt-4">Enter your email address in the provided field.</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <div className="w-2/3 shadow-2xl rounded-3xl bg-[#FCF4EA] rounded-3xl flex items-center justify-center px-8 text-[#A28F8F] text-[32px] font-bold">
                                    <ol className="ml-8 list-decimal" start="4">
                                        <li>The system requires you to enter the 2FA code sent to your registered email address and then click Confirm.</li>
                                    </ol>
                                </div>
                                <img src={forgot_3} alt="Log Out" className="w-1/3" />
                            </div>
                            <div className="w-full flex flex-row gap-4">
                                <img src={forgot_4} alt="Log Out" className="w-1/3" />
                                <div className="w-2/3 shadow-2xl rounded-3xl bg-[#FCF4EA] rounded-3xl flex items-center justify-center px-8 text-[#A28F8F] text-[32px] font-bold">
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

export const AdminSalesReportsTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Report", "Report Visualization"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Sales Report</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* REPORT */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Data Report</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[24px] font-bold shadow-2xl">
                                <ol className='list-decimal list-inside'>
                                    <li>On this page, you can see the total sales, total orders, gross profit, net income, and the shop's ranking of products.  </li>
                                    <li className="mt-4">You can also filter the sales report by selecting the desired date and branch to view. </li>
                                    <li className="mt-4">By clicking the "Swap View" button, you can switch from the sales report's view to its data visualization.</li>
                                </ol>
                            </div>
                            <img src={a_sales_report_1} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* REPORT VISUALIZATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Report Visualization</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_sales_report_2} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                This is a data visualization view that displays the shop's net income over the course of a specified date.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminForecastReportTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Filtration", "Forecast"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Forecast Report</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* FILTRATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Filtration</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                You can also select which branch you want to view, as well as filter the date you want to view.
                            </div>
                            <img src={a_forecast_report_1} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* FORECAST */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden  mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Forecast</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_forecast_report_2} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>The top page displays the top five best-selling products in your shop.</li>
                                    <li className="mt-4">Also, the ranking of each product based on the number of orders sold, as well as the percentage to boost that particular product.</li> 
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminTransactionsTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Filtration", "Transactions"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Transactions History</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* FILTRATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Filtration</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                You can also select which branch you want to view, as well as filter the date you want to view as well as search the particular transaction through Order No..
                            </div>
                            <img src={a_transaction_1} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* TRANSACTIONS */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Transactions</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_transaction_2} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Under transactions, you’ll see the transaction history page. This provides a detailed record of all previous transactions done, It displays the date, order number, amount and the mode of payment done. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminActivityLogsTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Filtration", "Transactions"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Activity Logs</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* FILTRATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Filtration</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Simply selecting the desired date and time will also allow you to filter what you want to view. 
                            </div>
                            <img src={a_activity_log_1} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* ACTIVITIES */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Activities</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                This page allows you to view the previously completed activities.  Along with the various actions performed, it shows the time stamp and the user who initiated the activity.
                            </div>
                            <img src={a_activity_log_2} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminInventoryManagementTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["Filtration", "Transactions", "Add Inventory", "Add Stock"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Inventory Management</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* FILTRATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Filtration</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Pick a branch.</li>
                                    <li className="mt-4">Choose a specific date. If you don't select one, the current date will be used to display the inventories.</li>
                                    <li className="mt-4">You can search for a specific inventory item using Item ID.</li>
                                </ol>
                            </div>
                            <img src={a_inventory_1} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* INVENTORIES */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Inventories</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_inventory_2} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="4">
                                    <li>View current inventory details: item name, measurement, cost per measurement, critical level, and quantity.</li>
                                    <li className="mt-4">By selecting the "Add New Item Here" button, inventories can be added.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ADD INVENTORY */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Add Inventory</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[24px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Type in the item's name.</li>
                                    <li className="mt-4">Put the Pack Quantity in.</li> 
                                    <li className="mt-4">Specify the measurement (quantity (x), milliliter (mL), or grams (g).</li>
                                    <li className="mt-4">Please enter the product's exact measurement.</li>
                                    <li className="mt-4">Add the cost for each measurement.</li>
                                    <li className="mt-4">Take a Critical level.</li>
                                    <li className="mt-4">Select "Create" after it's finished.</li>
                                </ol>
                            </div>
                            <img src={a_inventory_3} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* ADD INVENTORY */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[3])}
                    >
                        <h1>Add Stock</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[3] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[3] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_inventory_4} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[24px] font-bold shadow-2xl">
                                To add stock, Click the “Add Stock” buttton
                            </div>
                        </div>
                    </div>
                    <div className={`transition-max-height duration-300 ease-in-out ${selectedCategory === indices[3] ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[24px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="2">
                                    <li>Enter the supplier's name, the date, and time of delivery.</li>
                                    <li className="mt-4">Enter the amount of stock.</li>
                                    <li className="mt-4">If everything has been completed, click the "Update Stock" button to add the stocks that have been entered.</li>
                                </ol>
                            </div>
                            <img src={a_inventory_5} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminOrderSettingsTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Order Settings</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* LOCATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Location</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Click the “Order Settings” on the Dashboard Menu
                            </div>
                            <img src={a_order_settings_1} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* BRANCH SELECT */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Select Branch</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_order_settings_2} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Select Branch to view the products of that branch.
                            </div>
                        </div>
                    </div>
                    <div className={`transition-max-height duration-300 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <div className="w-full flex flex-row px-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                From the Order Settings screen, we will see the order dashboard of all the available products in the menu. From here we can see different buttons from the upper right having: Category, Vouchers, and Add Item Buttons.
                            </div>
                            <img src={a_order_settings_3} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                    <div className={`transition-max-height duration-300 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_order_settings_4} alt="Logging In image 1" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Here are the clickable buttons from the menu.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminCategoriesTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Categories</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* LOCATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Location</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Click the “Order Settings” on the Dashboard Menu
                            </div>
                            <img src={a_category_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* ADD */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Add Category</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_category_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter the necessary  informations such as category name, Subcategories</li>
                                    <li className="mt-4">After filling out, click “Add” Button.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EDIT */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Edit Category</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Click the Edit</li>
                                    <li className="mt-4">After clicking, an edit icon button will appear in each category. Click the category that you want to edit.</li>
                                    <li className="mt-4">After completing everything, click save.</li>
                                </ol>
                            </div>
                            <img src={a_category_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminVouchersTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Products</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* LOCATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Location</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Click the “Order Settings” on the Dashboard Menu and click the Voucher at the upper right corner
                            </div>
                            <img src={a_voucher_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* ADD */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Add Voucher</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_voucher_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter the nacessary informations such as voucher name, Type of Voucher, Discount%, Voucher Description.</li>
                                    <li className="mt-4">After filling out, click “Save” Button.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EDIT */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Edit Voucher</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter the necessary  informations such as category name, Subcategories</li>
                                    <li className="mt-4">After filling out, click “Add” Button.</li>
                                </ol>
                            </div>
                            <img src={a_voucher_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminProductsTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[100px] font-bold text-[#D15341]">Products</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* ADD */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Add Product</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[4000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_product_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                At the upper right corner, clicking a "+ Product" will give you the capability to add a new Product to the system.
                            </div>
                        </div>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Upload the picture you want to add</li>
                                </ol>
                            </div>
                            <img src={a_product_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_product_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="2">
                                    <li>Provide the required information, including the product name, size selection, list of potential add-ons, price and value, and weight.</li>
                                    <li className="mt-4">After filling out, click “Confirm Item” Button.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="4">
                                    <li>If everything is correct, click the "Confirm" button to add the product to the menu.</li>
                                </ol>
                            </div>
                            <img src={a_product_4} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminBranchesTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[80px] font-bold text-[#D15341]">Branch Settings</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* LOCATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Location</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Click the “Branch and Employees Settings” on the Dashboard Menu
                            </div>
                            <img src={a_branch_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* ADD BRANCH */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Add Branch</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[5000px]' : 'max-h-0'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_branch_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                For adding Branch, Click the “+ Branch” 
                            </div>
                        </div>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter the branch name and address.</li>
                                    <li className="mt-4">If everything is finished, click "Save".</li>
                                </ol>
                            </div>
                            <img src={a_branch_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* EDIT BRANCH */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Edit Branch</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[5000px]' : 'max-h-0'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_branch_4} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                For editing Branch, Click the edit icon at the right end of the specific branch you want to edit
                            </div>
                        </div>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter the branch name and address.</li>
                                    <li className="mt-4">If everything is finished, click "Save".</li>
                                </ol>
                            </div>
                            <img src={a_branch_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminEmployeesTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[80px] font-bold text-[#D15341]">Employee Settings</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* LOCATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Location</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Click the “Branch and Employees Settings” on the Dashboard Menu
                            </div>
                            <img src={a_branch_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* ADD EMPLOYEE */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Add Employee</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[5000px]' : 'max-h-0'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_employee_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                For adding Employee, Click the “+ Employee 
                            </div>
                        </div>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[28px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Complete all required fields, including the employee's name, registered email, branch assignment, contact number, birthdate, date of hire, and specified PIN.</li>
                                    <li className="mt-4">Once all information is entered, click "Add" to finalize the process.</li>
                                </ol>
                            </div>
                            <img src={a_employee_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* EDIT EMPLOYEE */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Edit Employee</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[5000px]' : 'max-h-0'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_employee_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                For editing Emplpoyee, Click the edit icon and select which employee you want to edit
                            </div>
                        </div>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Edit the particular need for editing.</li>
                                    <li className="mt-4">If everything is finished, click the "Save" button.</li>
                                </ol>
                            </div>
                            <img src={a_employee_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AdminBackupAndRestoreTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[80px] font-bold text-[#D15341]">Backup and Restore</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* BACKUP */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Backup</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>You can view the backup histories.</li>
                                    <li className="mt-4">To create a backup, click the "Backup" button. The backup file will be saved in the backup history.</li>
                                </ol>
                            </div>
                            <img src={a_bnr_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* RESTORE */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Restore</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[1000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>To restore, click the "Restore" button.</li>
                                    <li className="mt-4">After clicking, the Restore screen will appear. Click the restore button again to restore the file</li>
                                </ol>
                            </div>
                            <img src={a_bnr_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export const AdminArchivesTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[80px] font-bold text-[#D15341]">Archive</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* FIELD SELECTION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Field Selection</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                In this page, you can select which classification of archive you want to go
                            </div>
                            <img src={a_archive_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* FILTRATION */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Filtration</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <img src={a_archive_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                In every classification, you are presented with the same layout.<br /><br />
                                You can filter every items if you want to see the active items or inactive by utilizing the select status.
                            </div>
                        </div>
                    </div>
                </div>

                {/* STATUS */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Status</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                Status indicates the state of the item, if the item is inactive, it will not reflect in your system and also in the cashier.<br /><br />
                                You will be prompted for confirmation if the button is clicked accidentally. This is to ensure that there's no loss in the system.
                            </div>
                            <img src={a_archive_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export const AdminAccountSettingsTutorial = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
    }
    const indices = ["a", "b", "c", "d"]

    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E0D6] px-20">
            <div className="w-full flex items-center gap-[40px] cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={120} color='#D15341' onClick={() => navigate('../admin/help')}/>
                <h1 className="text-[80px] font-bold text-[#D15341]">Admin Account Settings</h1>
            </div>
            <hr className='border-0 h-1 my-8 bg-[#D15341]' />
            <div className="p-4 bg-[#ccc5bd] rounded-3xl overflow-scroll">
                {/* CHANGE ADMIN EMAIL ACCOUNT */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[0])}
                    >
                        <h1>Change Admin Email Account</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[0] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[0] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter your registered email address.</li>
                                    <li className="mt-4">After entering, click "confirm."</li>
                                </ol>
                            </div>
                            <img src={a_as_1} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                        <div className="w-full flex flex-row px-8 gap-4 mb-8">
                            <img src={a_as_2} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="3">
                                    <li>Enter the two-factor authentication code that was sent to your registered email address.</li>
                                    <li className="mt-4">After entering, click "confirm."</li>
                                </ol>
                            </div>
                        </div>
                        <div className="w-full flex flex-row px-8 gap-4 mb-8">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="5">
                                    <li>Enter a new email address.</li>
                                    <li className="mt-4">After entering, click "confirm."</li>
                                </ol>
                            </div>
                            <img src={a_as_3} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* CHANGE ADMIN PIN */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[1])}
                    >
                        <h1>Change Admin PIN</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[1] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[1] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter your registered email address.</li>
                                    <li className="mt-4">After entering, click "confirm."</li>
                                </ol>
                            </div>
                            <img src={a_as_4} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                        <div className="w-full flex flex-row px-8 gap-4 mb-8">
                            <img src={a_as_5} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="3">
                                    <li>Enter the two-factor authentication code that was sent to your registered email address. </li>
                                    <li className="mt-4">After entering, click "confirm."</li>
                                </ol>
                            </div>
                        </div>
                        <div className="w-full flex flex-row px-8 gap-4 mb-8">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8" start="5">
                                    <li>Input a new PIN.</li>
                                    <li className="mt-4">Verify the new PIN by entering it again.</li>
                                    <li className="mt-4">Click "confirm" to proceed.</li>
                                </ol>
                            </div>
                            <img src={a_as_6} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>

                {/* CHANGE ADMIN DETATILS */}
                <div className="w-full bg-[#F9F1E7] rounded-3xl overflow-hidden mt-4">
                    <div 
                        className="w-full flex flex-row justify-between items-center px-8 py-4 bg-[#FFF9F1] rounded-3xl text-[#958989] text-[60px] font-bold cursor-pointer shadow-xl"
                        onClick={() => handleCategoryClick(indices[2])}
                    >
                        <h1>Change Admin Details</h1>
                        <IoMdArrowDropup className={`duration-300 transform ${selectedCategory === indices[2] ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-max-height duration-300 p-2 ease-in-out ${selectedCategory === indices[2] ? 'max-h-[5000px]' : 'max-h-0 p-2'}`}>
                        <div className="w-full flex flex-row p-8 gap-4">
                            <div className="w-1/3 bg-[#FCF4EA] rounded-3xl flex flex-col justify-center px-8 text-[#A28F8F] text-[32px] font-bold shadow-2xl">
                                <ol className="list-decimal ml-8">
                                    <li>Enter an updated name.</li>
                                    <li className="mt-4">Enter an updated birthdate.</li>
                                    <li className="mt-4">Enter an updated join date as an admin.</li>
                                    <li className="mt-4">Click "confirm" to proceed.</li>
                                </ol>
                            </div>
                            <img src={a_as_7} alt="" className='w-2/3 shadow-2xl rounded-3xl'/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
