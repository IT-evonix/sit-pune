import React from "react";
import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";

const additionalFounderStories = [
  {
    name: "Sairaj Pisal",
    company: "Founder, Jugnu",
    batch: "Batch 2022-26",
    description:
      "Sairaj's entrepreneurial vision took flight with Jugnu, a startup focused on drone manufacturing and aerial advertising solutions. His ability to identify emerging opportunities in the drone ecosystem attracted ₹2 crore in investment, showcasing the confidence investors place in young innovators from SIT.",
  },
  {
    name: "Ayush Kumar",
    company: "Founders, Cyronix",
    batch: "Batch 2022-26",
    description:
      "Inspired by the potential of artificial intelligence in finance, Ayush Singh and Ayush Kumar founded Cyronix to simplify investment decisions through intelligent automated trading. Their startup represents the power of combining AI, data analytics, and entrepreneurship to create next-generation financial technology solutions.",
  },
  {
    name: "Chaitanya Yenge",
    company: "Founder, Oxobot Robotics",
    batch: "Batch 2022-26",
    description:
      "With a vision to modernize agriculture through robotics and AI, Chaitanya founded Oxobot Robotics to build autonomous farming solutions. His innovation has secured multiple grants and prestigious recognitions, reflecting his commitment to creating technology that improves productivity and sustainability in agriculture.",
  },
  {
    name: "Om Sonone",
    company: "Founder, MonkEco Tech",
    batch: "Batch 2024–28",
    description:
      "A Mechanical Engineering student, Om identified a practical challenge faced by cotton farmers and transformed it into an innovative agricultural solution. His startup, MonkEco Tech, earned First Prize and a ₹10 lakh grant at the NEST innovation competition, demonstrating that impactful entrepreneurship can begin early in an engineering journey.",
  },
  {
    name: "Avi Shah",
    company: "Founder, ReviewRewardz",
    batch: "Batch 2019–23",
    description:
      "Avi Shah transformed a simple observation about customer engagement into an entrepreneurial venture. Through ReviewRewardz, he is working towards helping businesses build stronger customer relationships by encouraging authentic feedback and improving digital reputation. His journey reflects the entrepreneurial mindset nurtured at Symbiosis Institute of Technology—identifying real-world challenges and converting them into scalable business opportunities.",
  },
  {
    name: "Jay Makwana",
    company: "Founder, Take Me Places",
    batch: "Batch 2017–21",
    description:
      "For Jay Makwana, entrepreneurship has always been about creating memorable experiences. With Take Me Places, he aims to simplify travel while enabling people to discover destinations through innovative and user-friendly solutions. His journey demonstrates how passion, curiosity, and determination can evolve into a successful entrepreneurial venture.",
  },
  {
    name: "Omkar Jagdale",
    company: "Founder, Jagson Buildcon Pvt. Ltd.",
    batch: "Batch 2021–22",
    description:
      "Omkar Jagdale chose to build his entrepreneurial journey in the infrastructure and construction sector. Through Jagson Buildcon Pvt. Ltd., he focuses on delivering quality, reliability, and sustainable development. His transition from engineering education to leading a growing enterprise reflects the confidence and leadership cultivated during his time at SIT.",
  },
  {
    name: "Arnav Chamadia",
    company: "Director, Chamadia Group of Industries",
    batch: "Batch 2016–20",
    description:
      "As a young business leader, Arnav Chamadia is carrying forward and strengthening the legacy of the Chamadia Group of Industries with a vision for innovation and growth. By blending engineering knowledge with business acumen, he represents the new generation of entrepreneurs who are driving transformation while creating value for industry and society.",
  },
  {
    name: "Dhruv Patel",
    company: "Founder, Krishna Realty",
    batch: "Batch 2017–21",
    description:
      "Dhruv Patel transformed his engineering education into a successful entrepreneurial journey in the real estate sector. As the founder of Krishna Realty, he is committed to delivering quality developments with a focus on customer trust, transparency, and sustainable growth. His journey reflects how technical expertise, combined with entrepreneurial vision, can create lasting value in the infrastructure industry.",
  },
  {
    name: "Tanay Agrawal",
    company: "Founder, Global Good",
    batch: "Batch 2017–21",
    description:
      "Driven by a vision to create meaningful impact, Tanay Agrawal founded Global Good, an enterprise focused on delivering solutions that combine innovation with social value. His entrepreneurial journey is a testament to the power of purpose-driven leadership, where technology, creativity, and business come together to address real-world challenges and build a better future.",
  },
  {
    name: "Shubham Shitole",
    company: "Founder, Rubicon Electricals",
    batch: "Batch 2017–21",
    description:
      "With a passion for engineering and a determination to build something of his own, Shubham Shitole established Rubicon Electricals. The company focuses on delivering reliable electrical solutions while embracing innovation and quality. His journey from engineering student to entrepreneur showcases the confidence, resilience, and problem-solving mindset fostered during his time at Symbiosis Institute of Technology.",
  },
  {
    name: "Raj Kalkute",
    company: "Founder, Chrazit Pvt. Ltd.",
    batch: "Batch 2016–20.",
    description:
      "Raj Kalkute's entrepreneurial journey began with a vision to build technology-driven solutions that solve real-world business challenges. As the founder of Chrazit Pvt. Ltd., he has transformed innovative ideas into practical solutions by combining technical expertise with an entrepreneurial mindset. His journey reflects the values of innovation, perseverance, and continuous learning instilled during his years at Symbiosis Institute of Technology.",
  },
  {
    name: "Ojus Shinde",
    company: "Founder, Vijaya Industries",
    batch: "Batch 2017–21",
    description:
      "Ojus Shinde turned his engineering education and entrepreneurial ambition into a successful business venture by founding Vijaya Industries. With a strong focus on quality, operational excellence, and customer satisfaction, he has built an enterprise that reflects innovation, reliability, and sustainable growth. His journey from an engineering student at Symbiosis Institute of Technology to an entrepreneur demonstrates the power of perseverance, technical expertise, and the confidence to pursue one's vision.",
  },
];

const page = () => {
  return (
    <div className="">
      <InnerpageBanner
        title={`Founder Stories`}
        breadcrumbs={[
          { label: "Founder Stories" },
          { label: "Founder Stories" },
        ]}
      />
      <div className="Innerpage_main">
        <div className="aicte_main">
          <div className="container">
            <div className="founder_stories_inner">
              <div className="founder_stories_box">
                <div className="founder_stories_text">
                  <p>
                    <Image
                      className="top_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                    What started as a desire to make physiotherapy more
                    accessible evolved into an award-winning MedTech startup. As
                    a Computer Science Engineering student at SIT, Yash combined
                    artificial intelligence, healthcare, and empathy to develop
                    PHYSIOMIZE—a smart remote rehabilitation platform. His
                    journey reflects how technology can create meaningful social
                    impact, earning recognition through 10+ national and
                    international awards.
                    <Image
                      className="bottom_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                  </p>

                  <div className="founder_name">Yash Parkhi</div>
                  <div className="company_name">
                    Founder, PHYSIOMIZE PRIVATE LIMITED
                  </div>
                  <div className="batchyear">Batch 2022-26</div>
                </div>

                <div className="founder_stories_img">
                  <div className="testimonials_line"></div>

                  <div className="founder_img">
                    <Image
                      className="img-fluid"
                      src="/images/innerpages/founder-stories/founder-img/founder.png"
                      alt="Asmita Kothari"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="founder_stories_box">
                <div className="founder_stories_text">
                  <p>
                    <Image
                      className="top_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                    Driven by a passion for robotics and national security, Tanisha transformed an innovative classroom idea into HoloScout, an intelligent surveillance robot for defence and rescue missions. Her entrepreneurial journey earned national recognition as a Top 50 finalist in the 5G Innovation Hackathon along with a ₹1 lakh grant, proving that student innovators can contribute to critical technologies.
                    <Image
                      className="bottom_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                  </p>

                  <div className="founder_name">Tanisha Vyas</div>
                  <div className="company_name">
                    Founder, PSY Technologies
                  </div>
                  <div className="batchyear">Batch 2022-26</div>
                </div>

                <div className="founder_stories_img">
                  <div className="testimonials_line"></div>

                  <div className="founder_img">
                    <Image
                      className="img-fluid"
                      src="/images/innerpages/founder-stories/founder-img/founder.png"
                      alt="Asmita Kothari"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              {additionalFounderStories.map((story) => (
                <div className="founder_stories_box" key={story.name}>
                  <div className="founder_stories_text">
                    <p>
                      <Image
                        className="top_icon"
                        src="/images/innerpages/founder-stories/founder-img/quotes.png"
                        alt="Quote"
                        width={50}
                        height={50}
                      />
                      {story.description}
                      <Image
                        className="bottom_icon"
                        src="/images/innerpages/founder-stories/founder-img/quotes.png"
                        alt="Quote"
                        width={50}
                        height={50}
                      />
                    </p>

                    <div className="founder_name">{story.name}</div>
                    <div className="company_name">{story.company}</div>
                    <div className="batchyear">{story.batch}</div>
                  </div>

                  <div className="founder_stories_img">
                    <div className="testimonials_line"></div>

                    <div className="founder_img">
                      <Image
                        className="img-fluid"
                        src="/images/innerpages/founder-stories/founder-img/founder.png"
                        alt={story.name}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
