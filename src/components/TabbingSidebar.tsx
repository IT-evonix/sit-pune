"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SubTabItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabItem {
  id: string;
  title: string;
  content?: React.ReactNode;
  subTabs?: SubTabItem[];
}

interface TabbingSidebarProps {
  heading: string;
  tabs: TabItem[];
}

const TabbingSidebar = ({ heading, tabs }: TabbingSidebarProps) => {
  const firstTabId = tabs?.length ? tabs[0].id : "";

  const [activeTab, setActiveTab] = useState<string>(firstTabId);
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const [openSubmenu, setOpenSubmenu] = useState<string>("");

  // MAIN TAB CLICK
  const handleTabClick = (tab: TabItem) => {
    setActiveTab(tab.id);

    if (tab.subTabs && tab.subTabs.length > 0) {
      // NO SCROLL for tabs with sub-tabs
      setOpenSubmenu((prev) => (prev === tab.id ? "" : tab.id));

      setActiveSubTab(tab.subTabs?.[0]?.id || "");
    } else {
      // SCROLL for normal tabs only
      setOpenSubmenu("");
      setActiveSubTab("");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // SUB TAB CLICK (ONLY THIS SCROLLS)
  const handleSubTabClick = (subTabId: string) => {
    setActiveSubTab(subTabId);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="row">
      {/* Sidebar */}
      <div className="col-lg-3">
        <div className="tabbingSidebar">
          <div className="program-title">{heading}</div>

          <div className="tabbingSidebarmenus">
            <ul className="nav flex-column sidebar-menu">
              {tabs.map((tab) => (
                <li key={tab.id} className="sidebar-item">
                  <button
                    className={`sidebar-link nav-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(tab)}>
                    <span>{tab.title}</span>

                    {tab.subTabs?.length ? (
                      <span className="ms-2 subtabbingitem">
                        {openSubmenu === tab.id ? (
                          <ChevronUp size={22} strokeWidth={1.8} />
                        ) : (
                          <ChevronDown size={22} strokeWidth={1.8} />
                        )}
                      </span>
                    ) : null}
                  </button>

                  {/* Sub Tabs */}
                  {openSubmenu === tab.id && tab.subTabs?.length ? (
                    <ul className="nav flex-column">
                      {tab.subTabs.map((subTab) => (
                        <li key={subTab.id} className="sidebar-item">
                          <button
                            className={`sidebar-link nav-link ${
                              activeSubTab === subTab.id ? "active" : ""
                            }`}
                            onClick={() => handleSubTabClick(subTab.id)}
                            style={{
                              paddingLeft: "20px",
                              fontSize: "14px",
                            }}
                          >
                            {subTab.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="col-lg-9">
        <div className="tab-content-wrapper">
          {tabs.map((tab) => {
            // Normal tab
            if (activeTab === tab.id && !tab.subTabs) {
              return <div key={tab.id}>{tab.content}</div>;
            }

            // Sub tab
            if (activeTab === tab.id && tab.subTabs) {
              return tab.subTabs.map((subTab) => (
                <div
                  key={subTab.id}
                  className={
                    activeSubTab === subTab.id ? "d-block" : "d-none"
                  }
                >
                  {subTab.content}
                </div>
              ));
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default TabbingSidebar;