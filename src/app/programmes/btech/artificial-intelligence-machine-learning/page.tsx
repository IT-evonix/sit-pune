import React from 'react'
import InnerpageBanner from "@/components/InnerpageBanner";
import LeftSidebar from "@/components/LeftSidebar";

const page = () => {
  return (
    <div>
        <InnerpageBanner/>

        <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                LeftSideBar
              </div>
              <div className="col-md-9">
                Content Part
              </div>
            </div>
        </div>
        <LeftSidebar/>
    </div>
  )
}

export default page
