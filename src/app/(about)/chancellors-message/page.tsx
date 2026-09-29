import React from "react";

import LeadershipMessage from "@/components/about/LeadershipMessage";

const page = () => {
  const message = [
    "I am delighted to welcome you to the Symbiosis International (Deemed University). The University is part of the larger Symbiosis family, which is built on the core ideal of Vasudhaiv Kutumbakam—the world is one family.",

    "The University stands at the frontiers of global innovation in academics as well as all the other components that make education whole. I invite you to peruse the extensive range of resources and opportunities that we offer to all the members of the University. From classrooms to wellness centres, the amenities are both plenty and first-rate. Most important of all, the teaching and non-teaching staff at the University combine in them the calibre and culture to help students fulfil their higher education goals.",

    "At Symbiosis, we are keenly aware of the enormous responsibility that a higher education institution must bear. Besides imparting knowledge and know-how of the subject of choice, the institution must prepare the student to thrive in the career of his choice and contribute to the good of the global citizenry.",

    "The University makes every effort to live up to its institutional mission of internationalization. A quick tour of our campuses will confirm that our reputation of being an institution of international standing is well-earned. We take great pride in hosting students from eighty-five countries. The vision of internationalization finds expression at the University all the way from pedagogical practices to cultural activities.",

    "I hope that you will take the time to learn more about the University and be inspired to join hands.",
  ];

  return (
    <div className="mainpage-wrapper">
      <div className="leadership_page">
        <LeadershipMessage
          image="/images/innerpages/about/s-b-mujumdar.webp"
          name="Dr. S.B. Mujumdar"
          designation="Chancellor, Symbiosis International (Deemed University)"
          message={message}
        />
      </div>
    </div>
  );
};

export default page;
