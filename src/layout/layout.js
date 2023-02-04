import React, { useState } from "react";
import MyCalendar from "./calendar";
import Footer from "./footer";
import Header from "./header";



const Layout = () => {
    const [calendar, setcalendar] = useState({calendar: false});
    return (
        <div className="layout">
            <Header />
            {calendar === true ? <MyCalendar/>: null}
            <Footer />
        </div>
    )
}

export default Layout
