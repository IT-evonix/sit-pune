// import Image from "next/image";
// import Rounded_CTA from "../ui/Rounded_CTA";

import Image from "next/image";
import Link from "next/link";

const SITPuneExperience = () => {
  return (
    <section className="main_content ">
      <div className="heading innerpageheading">The SIT Pune Experience</div>
      <div className="SITPuneExperience">
        <div className="Experienceinner">
          <div className="ExperienceImage">
            <Image
              src="/images/campus-life/sit-experience/bandhara.webp"
              alt="collage image"
              width={1200}
              height={800}
            />
          </div>
          <div className="ExperienceContent">
            <div className="ExperienceHeading">Bandhara</div>
            <div className="heading innerpageheading">Bandhara</div>
            <p>
              The Symbiosis International (Deemed University) Lavale campus
              features water-storage reservoirs that contribute to rainwater
              conservation and sustainable campus water management. These water
              bodies support the campus's ecological balance and biodiversity,
              providing habitats for aquatic vegetation and birdlife. The
              surrounding landscape also offers a scenic natural environment for
              the university community.
            </p>
          </div>
        </div>

        <div className="Experienceinner">
          <div className="ExperienceImage">
            <Image
              src="/images/campus-life/sit-experience/sandipani.webp"
              alt="collage image"
              width={1200}
              height={800}
            />
          </div>
          <div className="ExperienceContent">
            <div className="ExperienceHeading">Sandipani Hometel</div>
            <div className="heading innerpageheading">Sandipani Hometel</div>
            <p>
              Symbiosis is the only University hotel in India. It provides
              beautifully curated suites and rooms near Symbiosis International
              University, Lavale, Pune. Sandipani Hometel is equipped with a
              total of 98 rooms divided into two categories. Varying in space
              and ambience, each of these rooms is furnished with modern
              amenities and is a complete value-for-money option for modern
              travellers. All rooms offer exquisite city-lights views or
              golf-course views, with a private balcony.
            </p>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.sandipanihometel.com" className="ExploreMore sitExperienceButton rounded-pill transition rounded_cta m-0">
              Explore <span> More</span>
            </Link>
          </div>
        </div>

        <div className="Experienceinner">
          <div className="ExperienceImage">
            <Image
              src="/images/campus-life/sit-experience/SIU-Iamge.webp"
              alt="collage image"
              width={1200}
              height={800}
            />
          </div>
          <div className="ExperienceContent">
            <div className="ExperienceHeading">Medical Facilities</div>
            <div className="heading innerpageheading">Medical Facilities at Campus</div>
            <div className="subheading18">
              Symbiosis International (Deemed University) is committed to promote the spirit and essence of Wellness amongst all stakeholders.
            </div>
            <p>
              As a Health Promoting University, SIU is focused on Emotional Wellbeing, Healthcare Services, Nutrition and Dietetics, Sports & Fitness and Community Outreach which have been identified through consultation with our community and informed by research.
            </p>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.siu.edu.in/about-us/why-us/health-promoting-university" className="ExploreMore sitExperienceButton rounded-pill transition rounded_cta m-0">
              Explore <span> More</span>
            </Link>
          </div>
        </div>

        <div className="Experienceinner">
          <div className="ExperienceImage">
            <Image
              src="/images/campus-life/sit-experience/bus-facility.webp"
              alt="collage image"
              width={1200}
              height={800}
            />
          </div>
          <div className="ExperienceContent">
            <div className="ExperienceHeading">Bus Facility</div>
            <div className="heading innerpageheading">Bus Facility</div>
            <p>
              We offer a paid bus facility covering 23 routes across the city.
            </p>
          </div>
        </div>

        <div className="CampusGreeneryImg">
          <Image
              src="/images/campus-life/sit-experience/collage-image.webp"
              alt="collage image"
              width={1200}
              height={800}
            />
        </div>
        

      </div>      
    </section>
  );
};

export default SITPuneExperience;
