import React from 'react';
import '../css/LockScreen.css'

// Renderse lockscreen
class LockScreen extends React.Component {
    render() {
        return (
            <div>
                <div className="lock-display">
                    {/* <i className="fa fa-lock" aria-hidden="true"> */}
                        <img src="https://cdn-icons-png.flaticon.com/128/17/17354.png" alt="lock" />
                    {/* </i> */}
                </div>
                <div className="bottom-div-lock">
                    <h3>Press Centre Button to unlock!</h3>
                </div>
            </div>
        )
    }

}


export default LockScreen;