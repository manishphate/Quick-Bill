import React, { useState } from 'react'
import user from "./user_dashboard.module.css"
import { HiOutlineHome } from "react-icons/hi2";
import { PiHandbagSimple } from "react-icons/pi";
import { TbInvoice } from "react-icons/tb";
import UserHome from '../home/UserHome';
import { useNavigate } from 'react-router-dom';
import Item from '../item/Item';
import Invoice from '../invoice/Invoice';
import { IoSearch } from "react-icons/io5";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";



const User_Dashboard = () => {

    // const navigate = useNavigate();
    let [homeDash, setHomeDash] = useState(true);
    let [item, setItem] = useState(false);
    let [invoice, setInvoice] = useState(false);

    let [sidebarExpanded, setSidebarExpanded] = useState(true);
    let [profileExpanded, setProfileExpanded] = useState(false);


    let toogle = (a) => {
        if (a === "item") {
            setHomeDash(false);
            setItem(true);
            setInvoice(false);
        } else if (a === "invoice") {
            setHomeDash(false);
            setItem(false);
            setInvoice(true);
        } else {
            setHomeDash(true);
            setItem(false);
            setInvoice(false);
        }

    }

    let toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    }

    let toggleProfile = () => {
        setProfileExpanded(!profileExpanded);
    }


    return (
        <>
            <nav className={user.navbar}>
                <div className={user.logo}>
                    <h1>Quick Bill</h1>
                </div>

                <div className={user.search}>
                    <div className={user.searchDiv}>
                        <IoSearch />
                        <input placeholder='Search' />
                    </div>
                </div>
                <div className={user.profile_div}>
                    <div className={user.profile} onClick={toggleProfile}>

                    </div>
                </div>
            </nav>

            <section  className={user.container}>

                <div className={user.sidebar}
                    style={{ width: sidebarExpanded ? "20%" : "4%" }}
                >
                    <div className={user.items_container}>
                        <div
                            className={`${user.items} ${homeDash === true ? user.active : ""}`}
                            onClick={() => toogle("home")}>

                            <HiOutlineHome />
                            {sidebarExpanded && <h3>Home</h3>}
                        </div>

                        <div
                            className={`${user.items} ${item === true ? user.active : ""}`}
                            onClick={() => toogle("item")}>

                            <PiHandbagSimple />
                            {sidebarExpanded && <h3>Items</h3>}
                        </div>

                        <div
                            className={`${user.items} ${invoice === true ? user.active : ""}`}
                            onClick={() => toogle("invoice")}>

                            <TbInvoice />
                            {sidebarExpanded && <h3>Invoice</h3>}
                        </div>
                    </div>

                    <div className={user.slidebar_btn} onClick={toggleSidebar}>
                        {sidebarExpanded ? <FaLessThan /> : <FaGreaterThan />}
                    </div>
                </div>

                <div className={user.container_2}>
                    {homeDash && <UserHome />}
                    {item && <Item />}
                    {invoice && <Invoice />}
                </div>

                <div
                    className={user.profileContainer}
                >
                    {/* <h1>prodile</h1> */}
                </div>
            </section>
            
        </>
    )
}

export default User_Dashboard