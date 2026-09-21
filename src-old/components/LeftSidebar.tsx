'use client';

import Link from 'next/link';
import React from 'react';

interface SidebarItem {
  title: string;
  link: string;
}

interface LeftSidebarProps {
  heading: string;
  menuItems: SidebarItem[];
}

const LeftSidebar = ({
  heading,
  menuItems,
}: LeftSidebarProps) => {
  return (
    <div className="sidebar-wrapper">
      <div className="program-title">{heading}</div>

      <ul className="sidebar-menu list-unstyled mb-0">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <Link href={item.link} className="sidebar-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;