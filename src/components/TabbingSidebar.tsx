"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SubTabItem {
  id: string;
  title: string;
  content?: React.ReactNode;
  subTabs?: SubTabItem[];
}

interface TabItem extends SubTabItem {
  href?: string;
  external?: boolean;
}

interface TabbingSidebarProps {
  heading: string;
  tabs: TabItem[];
  defaultActiveTabId?: string;
}

interface FirstLeaf {
  id: string;
  expandedIds: string[];
}

const getFirstLeaf = (tab: SubTabItem): FirstLeaf => {
  if (!tab.subTabs?.length) {
    return { id: tab.id, expandedIds: [] };
  }

  const firstChild = getFirstLeaf(tab.subTabs[0]);
  return {
    id: firstChild.id,
    expandedIds: [tab.id, ...firstChild.expandedIds],
  };
};

const getDescendantIds = (tab: SubTabItem): string[] =>
  (tab.subTabs ?? []).flatMap((subTab) => [
    subTab.id,
    ...getDescendantIds(subTab),
  ]);

const findContent = (
  tabs: SubTabItem[],
  activeId: string
): React.ReactNode | null => {
  for (const tab of tabs) {
    if (tab.id === activeId) {
      return tab.content ?? null;
    }

    if (tab.subTabs?.length) {
      const content = findContent(tab.subTabs, activeId);
      if (content !== null) {
        return content;
      }
    }
  }

  return null;
};

const TabbingSidebar = ({
  heading,
  tabs,
  defaultActiveTabId,
}: TabbingSidebarProps) => {
  const initialActiveTabId =
    defaultActiveTabId &&
    tabs.some((tab) => tab.id === defaultActiveTabId)
      ? defaultActiveTabId
      : tabs[0]?.id || "";

  const [activeTab, setActiveTab] = useState(initialActiveTabId);
  const [activeSubTab, setActiveSubTab] = useState("");
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleTabClick = (tab: TabItem) => {
    setActiveTab(tab.id);

    if (tab.subTabs?.length) {
      const firstLeaf = getFirstLeaf(tab.subTabs[0]);
      setActiveSubTab(firstLeaf.id);
      setOpenSubmenus((previous) =>
        previous.includes(tab.id)
          ? []
          : [tab.id, ...firstLeaf.expandedIds]
      );
    } else {
      setOpenSubmenus([]);
      setActiveSubTab("");
    }

    scrollToTop();
  };

  const handleSubTabClick = (subTab: SubTabItem) => {
    if (subTab.subTabs?.length) {
      const firstLeaf = getFirstLeaf(subTab.subTabs[0]);
      const descendantIds = getDescendantIds(subTab);
      setActiveSubTab(firstLeaf.id);
      setOpenSubmenus((previous) =>
        previous.includes(subTab.id)
          ? previous.filter(
              (id) => id !== subTab.id && !descendantIds.includes(id)
            )
          : [...new Set([...previous, subTab.id, ...firstLeaf.expandedIds])]
      );
    } else {
      setActiveSubTab(subTab.id);
    }

    scrollToTop();
  };

  const renderSubTabs = (
    subTabs: SubTabItem[],
    depth = 0
  ): React.ReactNode =>
    subTabs.map((subTab) => {
      const isOpen = openSubmenus.includes(subTab.id);

      return (
        <li key={subTab.id} className="sidebar-item">
          <button
            className={`sidebar-link nav-link ${
              activeSubTab === subTab.id ? "active" : ""
            }`}
            onClick={() => handleSubTabClick(subTab)}
            style={{
              paddingLeft: `${20 + depth * 16}px`,
              fontSize: "14px",
            }}
          >
            <span>{subTab.title}</span>
            {subTab.subTabs?.length ? (
              <span className="ms-2 subtabbingitem">
                {isOpen ? (
                  <ChevronUp size={18} strokeWidth={1.8} />
                ) : (
                  <ChevronDown size={18} strokeWidth={1.8} />
                )}
              </span>
            ) : null}
          </button>

          {isOpen && subTab.subTabs?.length ? (
            <ul className="nav flex-column">
              {renderSubTabs(subTab.subTabs, depth + 1)}
            </ul>
          ) : null}
        </li>
      );
    });

  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="tabbingSidebar">
          <div className="program-title">{heading}</div>

          <div className="tabbingSidebarmenus">
            <ul className="nav flex-column sidebar-menu">
              {tabs.map((tab) => (
                <li key={tab.id} className="sidebar-item">
                  {tab.href ? (
                    <a
                      className={`sidebar-link nav-link ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      href={tab.href}
                      target={tab.external ? "_blank" : undefined}
                      rel={
                        tab.external ? "noopener noreferrer" : undefined
                      }
                    >
                      <span>{tab.title}</span>
                    </a>
                  ) : (
                    <button
                      className={`sidebar-link nav-link ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      <span>{tab.title}</span>
                      {tab.subTabs?.length ? (
                        <span className="ms-2 subtabbingitem">
                          {openSubmenus.includes(tab.id) ? (
                            <ChevronUp size={22} strokeWidth={1.8} />
                          ) : (
                            <ChevronDown size={22} strokeWidth={1.8} />
                          )}
                        </span>
                      ) : null}
                    </button>
                  )}

                  {openSubmenus.includes(tab.id) && tab.subTabs?.length ? (
                    <ul className="nav flex-column">
                      {renderSubTabs(tab.subTabs)}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-9">
        <div className="tab-content-wrapper">
          {tabs.map((tab) => {
            if (activeTab !== tab.id) {
              return null;
            }

            if (!tab.subTabs?.length) {
              return <div key={tab.id}>{tab.content}</div>;
            }

            return (
              <div key={tab.id}>
                {findContent(tab.subTabs, activeSubTab)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabbingSidebar;
