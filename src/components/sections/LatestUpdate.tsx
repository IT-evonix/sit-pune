import React from 'react'
import Image from 'next/image'

const LatestUpdate = () => {
  return (
    <div>
        <div className="latestupdate">
            <div className="latestupdateicon">
              <Image
                src="/images/home/annousment-icon.png"
                alt="Announcement"
                width={90}
                height={90}
                className="Announcementannimi"
              />
              <span className="ms-2"><b>Latest</b> Update</span>
            </div>
            <div className="latestupdatepoints marquee">
                <div className="marquee-track">
                    <ul>
                        <li>JEE (Main) 2nd Merit list has been declared</li>
                        <li>JEE (Main) 2nd Merit list has been declared</li>
                        <li>JEE (Main) 2nd Merit list has been declared</li>
                        <li>JEE (Main) 2nd Merit list has been declared</li>
                        <li>JEE (Main) 2nd Merit list has been declared</li>
                        <li>JEE (Main) 2nd Merit list has been declared</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default LatestUpdate
