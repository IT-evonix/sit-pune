'use client';

import { useState } from 'react';

interface TabItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabbingSidebarProps {
  heading: string;
  tabs: TabItem[];
}

const TabbingSidebar = ({
  heading,
  tabs,
}: TabbingSidebarProps) => {
  const [activeTab, setActiveTab] = useState(
    tabs[0]?.id
  );

  return (
    <div className="row">
      {/* Sidebar */}
      <div className="col-lg-3">
        <div className="tabbingSidebar">
          <div className="program-title">
            {heading}
          </div>

          <div className="tabbingSidebarmenus">
            <ul className="nav flex-column sidebar-menu">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className="sidebar-item"
                >
                  <button
                    className={`sidebar-link nav-link ${
                      activeTab === tab.id
                        ? 'active'
                        : ''
                    }`}
                    onClick={() =>
                      setActiveTab(tab.id)
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="col-lg-9">
        <div className="tab-content-wrapper">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={
                activeTab === tab.id
                  ? 'd-block'
                  : 'd-none'
              }
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbingSidebar;