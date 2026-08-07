"use client";

import { useState } from "react";

export interface TabItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id ?? "");

  return (
    <div className="customTabs">
      {/* Tab Buttons */}

      <div className="customTabs__nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={
              activeTab === tab.id
                ? "customTabs__button active"
                : "customTabs__button"
            }
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}

      <div className="customTabs__content">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className="customTabs__pane">
              {tab.content}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default Tabs;
