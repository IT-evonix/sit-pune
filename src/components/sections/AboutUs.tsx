import React from 'react'
import Rounded_CTA from '../ui/Rounded_CTA'

const aboutus = () => {
  return (
    <div>
        <div className="Aboutus_section">
            <div className="Aboutus_inner">
                <div className="container">
                    <div className="Aboutus_left">
                        {/* <span className="heading_small">Why Choose SIT</span> */}
                        <div className="heading">Why <span>Choose SIT</span></div>
                        <p className="p-0 m-0">At SIT Pune, we blend rigorous academics with cutting-edge research and  unmatched industry connections to prepare you for a future without  limits.</p>
                        <Rounded_CTA label="Explore More" link="/apply" bgColor = "transparent" textColor="#10467F" borderColor="#10467F" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default aboutus
