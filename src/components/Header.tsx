"use client";
import React, { useState } from 'react'
import Topstrip from './Topstrip'
import Link from 'next/link'
import Image from "next/image";

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)

  const menuItems = [
    {
      label: 'Home',
      href: '/',
      submenu: null
    },
    {
      label: 'About Us',
      href: '#',
      submenu: [
        { label: 'Institute Overview', href: '#' },
        { label: 'Mission & Vision', href: '#' },
        { label: 'History', href: '#' },
        { label: 'Director', href: '#' },
        { label: 'Faculty', href: '#' },
      ]
    },
    {
      label: 'Academics',
      href: '#',
      submenu: [
        { label: 'Programs Offered', href: '#' },
        { label: 'Departments', href: '#' },
        { label: 'Curriculum', href: '#' },
        { label: 'Research', href: '#' },
      ]
    },
    {
      label: 'Students',
      href: '#',
      submenu: [
        { label: 'Student Life', href: '#' },
        { label: 'Clubs & Activities', href: '#' },
        { label: 'Accommodations', href: '#' },
        { label: 'Support Services', href: '#' },
      ]
    },
    {
      label: 'Admissions',
      href: '#',
      submenu: [
        { label: 'Undergraduate', href: '#' },
        { label: 'Postgraduate', href: '#' },
        { label: 'Application Process', href: '#' },
        { label: 'Scholarships', href: '#' },
      ]
    },
    {
      label: 'Placement & Industry',
      href: '#',
      submenu: [
        { label: 'Placement Records', href: '#' },
        { label: 'Recruiters', href: '#' },
        { label: 'Alumni Network', href: '#' },
        { label: 'Industry Connect', href: '#' },
      ]
    },
    {
      label: 'Internationalization',
      href: '#',
      submenu: [
        { label: 'Exchange Programs', href: '#' },
        { label: 'International Partnerships', href: '#' },
        { label: 'Study Abroad', href: '#' },
        { label: 'Global Opportunities', href: '#' },
      ]
    },
  ]

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div>
      <Topstrip />
      <nav className="navbar mainmenu navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2 p-0">
            <Image
              src="/images/common/Logo.webp"
              alt="Logo"
              width={320}
              height={50}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex justify-content-center flex-grow-1 ms-4">
            <ul className="navbar-nav gap-2">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item dropdown position-relative">
                  <Link
                    href={item.href}
                    className={`nav-link ${item.submenu ? "dropdown-toggle" : ""}`}
                    style={{ fontSize: "14px", fontWeight: "500" }}
                    onClick={(e) => item.submenu && e.preventDefault()}
                  >
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <ul className="dropdown-menu">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <Link
                            href={subitem.href}
                            className="dropdown-item"
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Toggle */}
          <button
            className="canvastoggle"
            type="button"
            onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
          >
            <i className={`bi ${isOffcanvasOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>

        </div>
      </nav>

      {/* Offcanvas Mobile Menu */}
      {isOffcanvasOpen && (
        <>
          {/* Backdrop */}
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setIsOffcanvasOpen(false)}
            style={{ display: 'block' }}
          />

          {/* Offcanvas Panel */}
          <div
            className="offcanvas offcanvas-end show"
            style={{
              visibility: 'visible',
              transform: 'translateX(0)',
              width: '320px',
            }}
          >
            <div className="offcanvas-header text-white">
              <h5 className="offcanvas-title fw-bold">Menu</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setIsOffcanvasOpen(false)}
              />
            </div>

            <div className="offcanvas-body p-0">
              <ul className="list-unstyled">
                {menuItems.map((item, index) => (
                  <li key={index} className="border-bottom">
                    {item.submenu ? (
                      <>
                        <button
                          className="w-100 text-start py-3 px-4 btn btn-link text-dark text-decoration-none fw-500 d-flex justify-content-between align-items-center"
                          onClick={() => toggleSubmenu(index)}
                          style={{ fontSize: '14px' }}
                        >
                          {item.label}
                          <i
                            className={`bi bi-chevron-right ${openSubmenu === index ? 'rotate-90' : ''}`}
                            style={{
                              transition: 'transform 0.3s',
                              transform: openSubmenu === index ? 'rotate(90deg)' : 'rotate(0deg)',
                            }}
                          />
                        </button>

                        {/* Mobile Submenu */}
                        <div
                          style={{
                            maxHeight: openSubmenu === index ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease-in-out',
                          }}
                        >
                          <ul className="list-unstyled bg-light">
                            {item.submenu.map((subitem, subindex) => (
                              <li key={subindex}>
                                <Link
                                  href={subitem.href}
                                  className="d-block py-2 px-6 text-dark text-decoration-none"
                                  onClick={() => setIsOffcanvasOpen(false)}
                                  style={{ fontSize: '13px', paddingLeft: '2.5rem' }}
                                >
                                  {subitem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="d-block py-3 px-4 text-dark text-decoration-none fw-500"
                        onClick={() => setIsOffcanvasOpen(false)}
                        style={{ fontSize: '14px' }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      <style>{`
        .navbar .dropdown:hover .dropdown-menu {
          display: block;
        }

        .dropdown-menu {
          border: none;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          border-radius: 0.375rem;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #dc3545 !important;
        }

        .offcanvas {
          box-shadow: -0.5rem 0 1rem rgba(0, 0, 0, 0.15);
        }

        .btn-link {
          color: inherit !important;
        }

        .btn-link:hover {
          color: #dc3545 !important;
        }

        .rotate-90 {
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  )
}

export default Header
