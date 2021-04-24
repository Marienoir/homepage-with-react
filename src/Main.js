import React from 'react'

function Main(){
    return(
        <div className = "main">
            {/* <div className="input">
                <h1>TOKEN</h1>
                <input type="number" placeholder="0.00000001"></input>
            </div> */}
            {/* <button>SEND</button>
            <button>RECEIVE</button> */}

            <div>
                <h4>Recent Activity</h4>
                <table>
                    <tr>
                        <td>Date</td>
                        <td>Description</td>
                        <td>Amount</td>
                    </tr>
                    <tr>
                        <td>1/1/21</td>
                        <td>Sent</td>
                        <td>N100.00</td>
                    </tr>
                    <tr>
                        <td>2/2/21</td>
                        <td>Received</td>
                        <td>N200.00</td>
                    </tr>
                    <tr>
                        <td>3/3/21</td>
                        <td>Sent</td>
                        <td>N300.00</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Main