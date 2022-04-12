import React from 'react'
import Typewriter from 'typewriter-effect'
//documention here: https://www.npmjs.com/package/typewriter-effect


class Typew extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
        
        <div className="typing">
            <Typewriter
            options={{
                strings: ['Trying', 'Inspiring', 'Moving', 'Helpful'],
                autoStart: true,
                loop: true,
            }}
            />

        </div>
        
        );
    }
}


export default Typew;