import React from 'react'
import Image from 'next/image'

const MajorsandMinors = () => {
  return (
    <div>
      <div className="heading"><span> Majors and Minors</span></div>
        <div className="MajorsandMinors_box">
            <Image 
                src="/images/innerpages/programe/robot-automation/majors-and-minors/Majors.webp"
                alt="Majors and Minors"
                width={700}
                height={600}
                className="img-fluid"
            />
        </div>
    </div>
  )
}

export default MajorsandMinors
