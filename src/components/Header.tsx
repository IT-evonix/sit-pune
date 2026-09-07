"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { menuData } from "../data/MenuData";
import "../app/css/Header.css";
import Topstrip from "./Topstrip";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<number[]>([]);
  const [activeNestedMenu, setActiveNestedMenu] = useState<number[]>([]);

  const headerRef = useRef<HTMLElement>(null);

  /* ===============================
      Mobile Body Scroll Lock
  =============================== */

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", mobileMenuOpen);
    document.body.classList.toggle("menu-open", mobileMenuOpen);

    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  /* ========= ESC Close ========= */

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveMobileMenu([]);
        setActiveNestedMenu([]);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* ========= Outside Click Close ========= */

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
        setActiveMobileMenu([]);
        setActiveNestedMenu([]);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  /* ========= Accordion ========= */

  const toggleAccordion = (id: number) => {
    setActiveMobileMenu((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const toggleNestedAccordion = (id: number) => {
    setActiveNestedMenu((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileMenu([]);
    setActiveNestedMenu([]);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <Topstrip />
      <div className="container-fluid">
        <div className="header-wrapper">
          {/* ================= Logo ================= */}

          <Link href="/" className="logo">
            <Image
              className="mainlogo"
              src="/images/common/Logo.webp"
              alt="Logo"
              width={350}
              height={65}
              priority
            />
          </Link>

          {/* ================= Desktop Menu ================= */}

          <nav className="desktop-menu">
            <ul>
              {menuData.map((menu, index) => (
                <li
                  key={menu.id}
                  className={`
                    ${menu.hasMegaMenu ? "has-mega-menu" : ""}
                    ${index >= menuData.length - 2 ? "mega-right" : ""}
                  `}
                >
                  <Link href={menu.href || "#"}>
                    {menu.title}

                    {menu.hasMegaMenu && <span className="arrow">▼</span>}
                  </Link>

                  {menu.hasMegaMenu && menu.columns && (
                    <div className="mega-menu">
                      <div className="mega-menu-inner g-0">
                        {menu.columns.map((column) => (
                          <div className=" mega-column" key={column.id}>
                            <h5>{column.heading}</h5>

                            <ul>
                              {column.links.map((item) => (
                                <li key={item.id}>
                                  {item.children?.length ? (
                                    <>
                                      <button
                                        className="mobile-inner-accordion"
                                        onClick={() =>
                                          toggleNestedAccordion(item.id)
                                        }
                                      >
                                        <span>{item.title}</span>

                                        <i>
                                          {activeNestedMenu.includes(item.id)
                                            ? "−"
                                            : "+"}
                                        </i>
                                      </button>

                                      <div
                                        className={`mobile-inner-submenu ${
                                          activeNestedMenu.includes(item.id)
                                            ? "show"
                                            : ""
                                        }`}
                                      >
                                        <ul>
                                          {item.children.map((child) => (
                                            <li key={child.id}>
                                              <Link
                                                href={child.href}
                                                onClick={closeMobileMenu}
                                              >
                                                {child.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </>
                                  ) : (
                                    <Link
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                    >
                                      {item.title}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= Hamburger ================= */}

          <button
            className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* ---------- Part 3B pasun Mobile Menu suru hoil ---------- */}

      {/* ================= Overlay ================= */}

      <div
        className={`mobile-overlay ${mobileMenuOpen ? "show" : ""}`}
        onClick={closeMobileMenu}
      />

      {/* ================= Mobile Menu ================= */}

      <div className={`mobile-menu ${mobileMenuOpen ? "show" : ""}`}>
        <ul>
          {menuData.map((menu) => (
            <li key={menu.id}>
              {!menu.hasMegaMenu ? (
                <Link href={menu.href || "#"} onClick={closeMobileMenu}>
                  {menu.title}
                </Link>
              ) : (
                <>
                  <button
                    className={`mobile-accordion ${
                      activeMobileMenu.includes(menu.id) ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(menu.id)}
                  >
                    <span>{menu.title}</span>

                    <i>{activeMobileMenu.includes(menu.id) ? "−" : "+"}</i>
                  </button>

                  <div
                    className={`mobile-submenu ${
                      activeMobileMenu.includes(menu.id) ? "show" : ""
                    }`}
                  >
                    {menu.columns?.map((column) => (
                      <div className="mobile-column" key={column.id}>
                        <h6>{column.heading}</h6>

                        <ul>
                          {column.links.map((item) => (
                            <li key={item.id}>
                              {item.children?.length ? (
                                <>
                                  <button
                                    className="mobile-inner-accordion"
                                    onClick={() =>
                                      toggleNestedAccordion(item.id)
                                    }
                                  >
                                    <span>{item.title}</span>

                                    <i>
                                      {activeNestedMenu.includes(item.id)
                                        ? "−"
                                        : "+"}
                                    </i>
                                  </button>

                                  <div
                                    className={`mobile-inner-submenu ${
                                      activeNestedMenu.includes(item.id)
                                        ? "show"
                                        : ""
                                    }`}
                                  >
                                    <ul>
                                      {item.children.map((child) => (
                                        <li key={child.id}>
                                          <Link
                                            href={child.href}
                                            onClick={closeMobileMenu}
                                          >
                                            {child.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                >
                                  {item.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
