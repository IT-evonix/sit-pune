import Image from "next/image";
import Rounded_CTA from "../ui/Rounded_CTA";

const SITPuneExperience = () => {
  return (
    <section className="main_content ">
      <div className="sit-experience">
        <div className="heading innerpageheading">The SIT Pune Experience</div>
        <div className="sit-experience-stories">
          <article className="sit-experience-story">
            <div className="sit-experience-media">
              <Image
                src="/images/gallery/campus1.webp"
                alt="Campus at Symbiosis Institute of Technology, Pune"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="sit-experience-image"
                priority
              />
            </div>
            <div className="sit-experience-copy">
              <div className="subheading">Sandipani Hometel</div>
              <p>
                Symbiosis is the only University hotel in India. It provides
                beautifully curated suites and rooms near Symbiosis
                International University, Lavale, Pune. Sandipani Hometel is
                equipped with a total of 98 rooms divided into two categories.
                Varying in space and ambience, each of these rooms is furnished
                with modern amenities and is a complete value-for-money option
                for modern travellers. All rooms offer exquisite city-lights
                views or golf-course views, with a private balcony.
              </p>
              <div className="mt-3">
                {/* <p>Visit the link for more information:</p> */}
                <Rounded_CTA
                  label="Sandipani Hometel"
                  link="https://www.sandipanihometel.com/?utm_source=chatgpt.com"
                  bgColor="transparent"
                  textColor="#10467F"
                  borderColor="#10467F"
                />
              </div>
            </div>
          </article>

          <article className="sit-experience-story">
            <div className="sit-experience-media">
              <Image
                src="/images/gallery/campus2.webp"
                alt="Students and campus facilities at SIT Pune"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="sit-experience-image"
              />
            </div>
            <div className="sit-experience-copy">
              <div className="subheading">Medical Facilities at campus</div>
              <p style={{lineHeight:"20px", color:"#C4161C", marginBottom:"10px"}}>
                Symbiosis International (Deemed University) is committed to
                promote the spirit and essence of Wellness amongst all
                stakeholders.
              </p>
              <p>
                As a Health Promoting University, SIU is focused on Emotional
                Wellbeing, Healthcare Services, Nutrition and Dietetics, Sports
                & Fitness and Community Outreach which have been identified
                through consultation with our community and informed by
                research.
              </p>

              <div className="mt-3">
                {/* <p>Please visit the website for more information:</p> */}
                <Rounded_CTA
                  label="SIU Health Promoting University"
                  link="https://www.siu.edu.in/about-us/why-us/health-promoting-university"
                  bgColor="transparent"
                  textColor="#10467F"
                  borderColor="#10467F"
                />
              </div>
            </div>
          </article>

          <article className="sit-experience-story">
            <div className="sit-experience-media">
              <Image
                src="/images/gallery/campus3.webp"
                alt="A view of the SIT Pune campus"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="sit-experience-image"
              />
            </div>
            <div className="sit-experience-copy">
              <div className="subheading">Bus Facility</div>
              <div className="subheading18">
                We offer a paid bus facility covering 23 routes across the city.
              </div>
            </div>
          </article>

          <article className="sit-experience-story">
            <div className="sit-experience-media">
              <Image
                src="/images/campus-life/sit-experience/bandhara.webp"
                alt="A view of the SIT Pune campus"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="sit-experience-image"
              />
            </div>
            <div className="sit-experience-copy">
              <div className="subheading">Bandhara </div>
              <p>
                The Symbiosis International (Deemed University) Lavale campus
                features water-storage reservoirs that contribute to rainwater
                conservation and sustainable campus water management. These
                water bodies support the campus's ecological balance and
                biodiversity, providing habitats for aquatic vegetation and
                birdlife. The surrounding landscape also offers a scenic natural
                environment for the university community.
              </p>
            </div>
          </article>
        </div>
      </div>
      <div className="collageImage">
        <Image
          src="/images/campus-life/sit-experience/collage-image.webp"
          alt="collage image"
          width={1200}
          height={800}
        />
      </div>
    </section>
  );
};

export default SITPuneExperience;



