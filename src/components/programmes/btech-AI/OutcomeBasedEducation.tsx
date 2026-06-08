'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  // Eye,
  // Target,
  Brain,
  Cpu,
  Globe,
  // GraduationCap,
  // ShieldCheck,
  BookOpen,
  Leaf,
  // Users,
  Briefcase,
} from 'lucide-react';

const Page = () => {
  const missionData = [
    {
      title: 'M1',
      desc: 'To empower students with comprehensive foundations in Artificial Intelligence and Machine Learning.',
    },
    {
      title: 'M2',
      desc: 'To promote innovation and applied research through collaborative partnerships.',
    },
    {
      title: 'M3',
      desc: 'To nurture ethically responsible AI professionals committed to lifelong learning.',
    },
    {
      title: 'M4',
      desc: 'To develop global competence through interdisciplinary learning.',
    },
  ];

  const peos = [
    {
      title: 'PEO 1',
      desc: 'Apply core and advanced AI & ML knowledge to solve real-world engineering problems.',
      icon: <Brain size={35} strokeWidth={1.5}/>,
    },
    {
      title: 'PEO 2',
      desc: 'Apply analytical and innovation skills to design intelligent systems.',
      icon: <Cpu size={35} strokeWidth={1.5}/>,
    },
    {
      title: 'PEO 3',
      desc: 'Apply ethical, leadership, and entrepreneurial skills effectively.',
      icon: <Globe size={35} strokeWidth={1.5}/>,
    },
  ];

  const pos = [
    {
      no: 1,
      title: 'Engineering Knowledge',
      desc: 'Apply mathematics, science, and engineering fundamentals.',
    },
    {
      no: 2,
      title: 'Problem Analysis',
      desc: 'Identify and analyze complex engineering problems.',
    },
    {
      no: 3,
      title: 'Design Solutions',
      desc: 'Design system components for societal needs.',
    },
    {
      no: 4,
      title: 'Research Methods',
      desc: 'Use research-based knowledge and experiments.',
    },
    {
      no: 5,
      title: 'Modern Tool Usage',
      desc: 'Apply modern engineering and IT tools.',
    },
    {
      no: 6,
      title: 'Engineer & Society',
      desc: 'Understand societal and cultural responsibilities.',
    },
  ];

  const psos = [
    {
      title: 'PSO 1',
      desc: 'Deploy AI & ML techniques to solve industry and societal problems.',
      icon: <Cpu size={35} strokeWidth={1.5}/>,
    },
    {
      title: 'PSO 2',
      desc: 'Implement advanced AI solutions like NLP, CV, RL, IoT and Generative AI.',
      icon: <Brain size={35} strokeWidth={1.5}/>,
    },
  ];

  const graduateAttributes = [
    {
      title: 'GA 1',
      subtitle: 'Scholarship',
      icon: <BookOpen size={35} strokeWidth={1.5}/>,
    },
    {
      title: 'GA 2',
      subtitle: 'Global Citizenship',
      icon: <Globe size={35} strokeWidth={1.5}/>,
    },
    {
      title: 'GA 3',
      subtitle: 'Eco-literate',
      icon: <Leaf size={35} strokeWidth={1.5} />,
    },
    {
      title: 'GA 4',
      subtitle: 'Employability',
      icon: <Briefcase size={34} strokeWidth={1.5}/>,
    },
  ];

  return (
    <div className="main_content">
      <div className="outcome_based_education_main">
      <div className="container">
        <div className="heading innerpageheading">Outcome Based Education</div>
        {/* Vision */}
        <div className="card provisionbox">
          <div className="d-flex align-items-start gap-3">
            <div className="visiontextleft">
              <div className="subheading">Vision</div>
              <p className="section-text">
                To evolve as a centre of excellence in Artificial Intelligence
                and Machine Learning by fostering quality education, research,
                and industry collaboration.
              </p>
            </div>
          </div>
        </div>
        {/* Mission */}
        <div className="card padding30">
          <div className="d-flex align-items-center gap-3 mb-3">
            {/* <div className="icon-box bg-info text-white">
              <Target size={35} />
            </div> */}
            <div className="subheading">Mission</div>
          </div>
          <div className="row g-4">
            {missionData.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="mission-card h-100">
                  <span className="badge mission-badge">{item.title}</span>

                  <p className="mt-3 mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* PEO */}
        <div className="card padding30">
          <div className="d-flex align-items-center gap-3 mb-3">
            {/* <div className="icon-box bg-success text-white">
              <GraduationCap size={35} />
            </div> */}
            <div className="subheading">
              Program Educational <span>Objectives (PEOs)</span>
            </div>
          </div>
          <div className="row g-4">
            {peos.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div className="custom-card h-100">
                  <div className="rediconcolor mb-3">{item.icon}</div>
                  <h5 className="subheading18">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* PO */}
        <div className="card padding30">
          <div className="d-flex align-items-center gap-3 mb-3">
            {/* <div className="icon-box bg-secondary text-white">
              <ShieldCheck size={35} />
            </div> */}
            <div className="subheading">
                Program <span>Outcomes (POs)</span>
            </div>
          </div>
          <div className="row g-4">
            {pos.map((item) => (
              <div className="col-lg-6" key={item.no}>
                <div className="po-card">
                  <div className="po-number">{item.no}</div>
                  <div>
                    <h5 className="subheading18">{item.title}</h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* PSO */}
        <div className="card padding30">
          <div className="d-flex align-items-center gap-3 mb-3">
            {/* <div className="icon-box bg-primary text-white">
              <Cpu size={35} />
            </div> */}
            <div className="subheading">
              Program Specific <span>Outcomes (PSOs)</span>
            </div>
          </div>
          <div className="row g-4">
            {psos.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className="custom-card h-100">
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h5 className="subheading18">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Graduate Attributes */}
        <div className="card padding30">
          <div className="d-flex align-items-center gap-3 mb-3">
            {/* <div className="icon-box bg-dark text-white">
              <Users size={35} />
            </div> */}
            <div className="subheading">
              Graduate <span>Attributes</span>
            </div>
          </div>
          <div className="row g-4">
            {graduateAttributes.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="custom-card h-100">
                  <div className="mb-3 blueiconcolor">{item.icon}</div>
                  <h5 className="subheading18">{item.title}</h5>
                  <p className="mb-0">{item.subtitle}</p>
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

export default Page;