
"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const InnerpageBanner = () => {
  return (
    <div>
        <section className="innerbannersection">
            <div className="container">
                <div className="innerbannerinner">
                    <h1 className="text-white innerbannerheading">
                        B.Tech in Artificial Intelligence <br /> Machine Learning
                    </h1>
                    <div className="breadcrumb_links">
                        <Link href="/" className="homepagelink">Home</Link>
                        <span className="opacity-75">Programmes</span>
                        <span className="opacity-50">|</span>
                        <span className="currentpage">
                        B Tech (Artificial Intelligence and Machine Learning)
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default InnerpageBanner
