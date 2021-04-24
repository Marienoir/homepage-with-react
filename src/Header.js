import React from 'react'

function Header(){
    return(
        <div className = "header">
            <div className = "logo">
                <h1>LOGO</h1>
            </div>
            <div className = "balance">
                <h1>WALLET BALANCE:</h1>
                <h1>TOKEN BALANCE:</h1>
                <h1>NAIRA BALANCE:</h1>
            </div>
            <div className="currency">
                <h3>Select Currency:</h3>
            </div>
        </div>
    )
}

export default Header