import React from 'react'
import InnerpageBanner from '@/components/InnerpageBanner'
import ContactForm from '@/components/form/ContactForm'
import EnquirySection from '@/components/sections/EnquirySection';

const btechenquiriesData = [
  {
    name: "Ms. Vaishnavi Waychal",
    designation: "B.Tech Artificial Intelligence and Machine Learning",
    phone: "7262890505",
  },
  {
    name: "Dr. Amar Jain",
    designation: "B.Tech Civil Engineering",
    phone: "7262830404",
  },
  {
    name: "Ms. Sonali Kadam",
    designation: "B.Tech Computer Science and Engineering",
    phone: "9112290236",
  },
  {
    name: "Ms. Prajala Adhav",
    designation: "B.Tech Electronics and Telecommunication Engineering",
    phone: "7262810404",
  },
  {
    name: "Ms. Priti Kulkarni",
    designation: "B.Tech Electronics and Telecommunication Engineering",
    phone: "7262810404",
  },
  {
    name: "Mr. Vishal Sharma",
    designation: "B.Tech Mechanical Engineering",
    phone: "7262850404",
  },
  {
    name: "Mr. Narayan Sutar",
    designation: "B.Tech Robotics and Artificial Intelligence",
    phone: "8087864775",
  },
  {
    name: "Mr. Sunil Chavat",
    designation: "B.Tech Robotics and Automation",
    phone: "7262044505",
  },
];

const directenquiriesData = [
  {
    name: "Ms. Vaishnavi Waychal",
    designation: "B.Tech Artificial Intelligence and Machine Learning",
    phone: "7262890505",
  },
  {
    name: "Dr. Sagar Kolekar",
    designation: "B.Tech Civil Engineering",
    phone: "7741805435",
  },
  {
    name: "Ms. Sonali Kadam",
    designation: "B.Tech Computer Science and Engineering",
    phone: "9112290236",
  },
  {
    name: "Ms. Prajala Adhav",
    designation: "B.Tech Electronics and Telecommunication Engineering",
    phone: "7262810404",
  },
  {
    name: "Ms. Priti Kulkarni",
    designation: "B.Tech Electronics and Telecommunication Engineering",
    phone: "7262810404",
  },
  {
    name: "Mr. Vishal Sharma",
    designation: "B.Tech Mechanical Engineering",
    phone: "7262850404",
  },
  {
    name: "Mr. Narayan Sutar",
    designation: "B.Tech Robotics and Automation",
    phone: "8087864775",
  },
];

const mtechenquiriesData = [
  {
    name: "Mr. Hemant kumar Dusane",
    designation: "M.Tech Artificial Intelligence and Machine Learning",
    phone: "9112290107",
  },
  {
    name: "Ms. Samruddhi Padale",
    designation: "M.Tech Engineering Design",
    phone: "9657296411",
  },
  {
    name: "Mr. Vishal Sharma",
    designation: "M.Tech Automotive Technology",
    phone: "7262850404",
  },
  {
    name: "Mr. Sunil Chavat",
    designation: "M.Tech Robotics and Artificial Intelligence",
    phone: "7262044505",
  },
];

const page = () => {
    return (
        <main className="contactus_page_main">
            <InnerpageBanner
                title={`Contact Us`}
                breadcrumbs={[
                    // { label: "Programmes", href: "/programmes" },
                    { label: "Contact Us" },
                ]}
            />
            {/* Adderess and form section start */}
            <section className="adderess_form_section">
                <div className="contact_background_mainbox">
                    <div className="contact_background_leftbox"></div>
                    <div className="contact_background_rightbox"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="adderess_form_mainbox">
                                <div className="contact_adderess_mainbox">
                                    <h2 className="heading innerpageheading">Contact Address</h2>
                                    <div className="adderess_content_box">
                                        <div className="adderess_content_icon">
                                            <svg width="27" height="38" viewBox="0 0 27 38" fill="none">
                                                <path d="M13.5 18.05C12.2213 18.05 10.9949 17.5496 10.0907 16.6588C9.18654 15.768 8.67857 14.5598 8.67857 13.3C8.67857 12.0402 9.18654 10.832 10.0907 9.94124C10.9949 9.05044 12.2213 8.55 13.5 8.55C14.7787 8.55 16.0051 9.05044 16.9093 9.94124C17.8135 10.832 18.3214 12.0402 18.3214 13.3C18.3214 13.9238 18.1967 14.5415 17.9544 15.1177C17.7121 15.694 17.357 16.2177 16.9093 16.6588C16.4616 17.0998 15.93 17.4497 15.3451 17.6884C14.7601 17.9271 14.1332 18.05 13.5 18.05ZM13.5 0C9.91958 0 6.4858 1.40125 3.95406 3.89548C1.42232 6.38971 0 9.77262 0 13.3C0 23.275 13.5 38 13.5 38C13.5 38 27 23.275 27 13.3C27 9.77262 25.5777 6.38971 23.0459 3.89548C20.5142 1.40125 17.0804 0 13.5 0Z" fill="#B61A23"/>
                                            </svg>
                                        </div>
                                        <div className="adderess_content_adderess">
                                            <div className="adderess_content_heading">
                                                Symbiosis Institute of Technology
                                            </div>
                                            <div className="adderess_content_subheading">
                                                Constituent of SYMBIOSIS INTERNATIONAL (DEEMED UNIVERSITY)
                                            </div>
                                            <div className="adderess_content_para">
                                                Near Lupin Research Park, Gram: Lavale, <br /> Tal: Mulshi, Pune 412 115
                                            </div>
                                        </div>
                                    </div>
                                    <div className="adderess_inquiry_number_box">
                                        <div className="adderess_inquiry_number_left">
                                            <div className="adderess_inquiry_number_heading">
                                                Admission Inquiry No:
                                            </div>
                                            <div className="adderess_inquiry_number_listing">
                                                <a href="tel:+912061936300">+91-20-61936300/</a><a href="tel:+912061936464">6464/</a><a href="tel:+912061936419">6419</a>
                                            </div>
                                            <div className="adderess_inquiry_number_listing">
                                                <a href="tel:+912028116300">+91-20-28116300/</a><a href="tel:+912028116464">6464/</a><a href="tel:+912028116419">6419</a>
                                            </div>
                                            <div className="adderess_inquiry_number_para">
                                                Office timings : 8:30 AM to 4:30 PM <br />[Monday to Saturday]
                                            </div>
                                        </div>
                                        <div className="adderess_inquiry_number_right">
                                            <div className="adderess_inquiry_number_right_listing">
                                                <div className="adderess_inquiry_number_right_listing_left">First year B.Tech:</div>
                                                <div className="adderess_inquiry_number_right_listing_right">
                                                    <a href="tel:+919112299251">+91 9112299251</a>
                                                </div>
                                            </div>
                                            <div className="adderess_inquiry_number_right_listing">
                                                <div className="adderess_inquiry_number_right_listing_left">Eligibility Section:</div>
                                                <div className="adderess_inquiry_number_right_listing_right">
                                                    <a href="tel:+919112299250">+91 9112299250</a>
                                                </div>
                                            </div>
                                            <div className="adderess_inquiry_number_right_listing">
                                                <div className="adderess_inquiry_number_right_listing_left">Hostel Enquiry:</div>
                                                <div className="adderess_inquiry_number_right_listing_right">
                                                    <a href="tel:+917262830505">+91 7262830505</a>
                                                </div>
                                            </div>
                                            <div className="adderess_inquiry_number_right_listing">
                                                <div className="adderess_inquiry_number_right_listing_left">Direct Second Year:</div>
                                                <div className="adderess_inquiry_number_right_listing_right">
                                                    <a href="tel:+917262022404">+91 7262022404</a>
                                                </div>
                                            </div>
                                            <div className="adderess_inquiry_number_right_listing">
                                                <div className="adderess_inquiry_number_right_listing_left">First Year M.Tech:</div>
                                                <div className="adderess_inquiry_number_right_listing_right">
                                                    <a href="tel:+917262055404">+91 7262055404</a>
                                                </div>
                                            </div>
                                            <div className="adderess_inquiry_number_right_listing">
                                                <div className="adderess_inquiry_number_right_listing_left">Placement Cell:</div>
                                                <div className="adderess_inquiry_number_right_listing_right">
                                                    <a href="tel:+917262980404">+91 7262980404</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_form_mainbox">
                                    <h2 className="heading innerpageheading">Send us <span>Message</span></h2>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Adderess and form section ends  */}
            {/* B.Tech enquiries section start  */}
            <EnquirySection
                title="B.Tech"
                highlight="Enquiries"
                backgroundImage="/images/contact-us/btech-background-image.webp"
                enquiries={btechenquiriesData}
                className="btech_section"
            />
            {/* B.Tech enquiries section ends  */}
            {/* Direct second year enquiries section start  */}
            <EnquirySection
                title="Direct Second Year"
                highlight="(Lateral Entry)"
                backgroundImage="/images/contact-us/direct-second-year-background-image.webp"
                enquiries={directenquiriesData}
                className="direct_section"
            />
            {/* Direct second year enquiries section ends  */}
            {/* M.Tech enquiries section start  */}
            <EnquirySection
                title="M.Tech"
                highlight="Enquiries"
                backgroundImage="/images/contact-us/mtech-background-image.webp"
                enquiries={mtechenquiriesData}
                className="mtech_section"
            />
            {/* M.Tech enquiries section ends  */}
        </main>
    )
}

export default page