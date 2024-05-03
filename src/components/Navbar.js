import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";

function Navbar() {
    return (
        <div className="navbar--container">
            <div className="navbar">
                <div className="logo--container"></div>
                <div className="links--container">

                </div>
                <div className="cta--container">
                    <Button title='Signup' radius='full' className="bg-slate-950 text-white"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar