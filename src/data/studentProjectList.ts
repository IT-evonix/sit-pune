export interface StudentProject {
  id: number;
  title: string;
}

export interface ProjectYearData {
  year: string;
  projects: StudentProject[];
}

export interface DepartmentProjectData {
  department: string;
  years: ProjectYearData[];
}

export const studentProjectsData: DepartmentProjectData[] = [
  // =====================================================
  // AIML
  // =====================================================
  {
    department: "AIML",
    years: [
      {
        year: "2023-27",
        projects: [
          {
            id: 1,
            title:
              "Supplier Item Intelligence Agent (Domain: Supplier Network)",
          },
          {
            id: 2,
            title: "Develop an AI-powered, multi-agent financial assistant",
          },
          {
            id: 3,
            title: "Smart Crop Advisory System for Small and Marginal Farmers",
          },
          {
            id: 4,
            title:
              "Multimodal Deep Learning Framework for Automated Detection and Localization of Dental Diseases Using Dental Radiographs",
          },
          {
            id: 5,
            title:
              "Build a Multi Agentic Pipeline for safe C to Rust Migration",
          },
          {
            id: 6,
            title:
              "Cryptocurrency Trading with Ensemble Reinforcement Learning",
          },
          {
            id: 7,
            title:
              "Development of an Artificial Intelligence-based model for extraction of data",
          },
          {
            id: 8,
            title: "AI as Audit Subject",
          },
          {
            id: 9,
            title:
              "Conversational SIEM Assistant for Investigation and Automated Threat Reporting using NLP",
          },
          {
            id: 10,
            title:
              "Post-Quantum Secure Deterministic Networking using ML-KEM and ML-DSA",
          },
          {
            id: 11,
            title:
              "AI-Powered Intelligent Ticket Routing and Resolution Agent using Agentic AI and Retrieval-Augmented Generation",
          },
          {
            id: 12,
            title:
              "Build an AI-driven or advanced computational pipeline to analyze environmental DNA (eDNA) data to identify eukaryotic taxa and evaluate marine/aquatic biodiversity",
          },
          {
            id: 13,
            title:
              "AI as Audit Tool"
          },
          {
            id: 14,
            title:
              "Build an AI-powered Industrial Knowledge Intelligence platform"
          },
          {
            id: 15,
            title:
              "CURVIO:AI personalized Learning Multi-agentic System"
          },
          {
            id: 16,
            title:
              "Cloud Cost Optimization using Agentic AI"
          },
          {
            id: 17,
            title:
              "Agentic Web-App Test Executor"
          },
          {
            id: 18,
            title:
              "Implementing an integrated traffic management system (ITMS) to improve driver behavior in metro cities"
          },
          {
            id: 19,
            title:
              "AI-powered MSME Credit Assessment using Alternative Data"
          },
          {
            id: 20,
            title:
              "Develop an AI-powered fraud detection and prevention system for UPI and digital payment transactions"
          },
          {
            id: 21,
            title:
              "Real-Time Language Tech for Bharat"
          },
          {
            id: 22,
            title:
              "AI-Powered Decentralized Startup Evaluation & Investment Platform"
          },
          {
            id: 23,
            title:
              "Prepare Standard Classification"
          },
          {
            id: 24,
            title:
              "Intelligent governance framework for secure AI agent deploymen"
          },
          {
            id: 25,
            title:
              "Al-Based Smart Allocation Engine for PM Internship Scheme"
          },
          {
            id: 26,
            title:
              "Prepare portfolio structure based on product catalog"
          },
          {
            id: 27,
            title:
              "Multi-Agent Orchestration Platform"
          },
          {
            id: 28,
            title:
              "ClearPath AI: AI native sales & marketing platform"
          },
          {
            id: 29,
            title:
              "Early Stage Routing Congestion Prediction in Chip Physical Design"
          },
          {
            id: 30,
            title:
              "AI-Driven Quantitative Asset Management and Research Platform"
          },
          {
            id: 31,
            title:
              "Intelligent Multi-Agent Framework for Natural Language to SQL Query Generation"
          },
          {
            id: 32,
            title:
              "Vision-Guided Autonomous Warehouse System Using Edge AI"
          },
          {
            id: 33,
            title:
              "Development of Autonomous Mobile Robot with Natural Language Processing and Operational Dashboard"
          },
          {
            id: 34,
            title:
              "Computer Vision Based Weld Quality Detection"
          },
          {
            id: 35,
            title:
              "Robotic Arm Task Planning Using Optimized Prompt Engineering"
          },
          {
            id: 36,
            title:
              "Vision-Based Robotic Arm for Intelligent Object Detection and Manipulation"
          },
          {
            id: 37,
            title:
              "Autonomous Pipeline Inspection Robot for AI-Enabled Crowd Management and Smart City Infrastructure Monitoring System"
          },
          {
            id: 38,
            title:
              "AI-Based Multimodal Infrastructure and Crowd Analytics Engine using Stationary Sensors and Simulated Feeds"
          },
        ],
      },

      {
        year: "2022-26",
        projects: [
          {
            id: 1,
            title: "Computer vision based parts identification with emphasis on small object identification",
          },
          {
            id: 2,
            title: "AI-Driven Improvements in Demand Forecasting & Safety Stock Optimization for BAL",
          },
          {
            id: 3,
            title: "ConstitutionalGPT: A Generative AI Framework for Exploring the Indian Constitution",
          },
          {
            id: 4,
            title: "Al enabled sensitive data masking tool for use with development teams",
          },
          {
            id: 5,
            title: "zkTEE-ML: Verifiable Machine Learning Inference in TEEs",
          },
          {
            id: 6,
            title: "InsightChain: AI Agent for Data-Driven Supplier Risk and Performance Insights",
          },
          {
            id: 7,
            title: "Intelligent Agent for Secure Micropayment Tickets with Lockable Signature",
          },
          {
            id: 8,
            title: "MedScan: Medical Tablet Info from Prescription Image",
          },
          {
            id: 9,
            title: "Data Observability from Source to Data Warehouse –Machine Learning and Alert Mechanism for (data flow) process exceptions",
          },
          {
            id: 10,
            title: "Deepfake Studio Video detection and Knowledge Graph Extraction from Videos",
          },
          {
            id: 11,
            title: "Vision Language Assistive System for the Visually Impaired People",
          },
          {
            id: 12,
            title: "Generative Knowledge and Smart Document Management System",
          },
          {
            id: 13,
            title: "MCP-Aware Cognitive Agent for Verifiable Intent Encoding",
          },
          {
            id: 14,
            title: "Improving churn prediction models for BAL",
          },
          {
            id: 15,
            title: "Multimodal Memory Journal using AI",
          },
          {
            id: 16,
            title: "LegalBot: Indian Law Assistant Using LLM",
          },
          {
            id: 17,
            title: "Kitchen Vendor Automation Layer",
          },
          {
            id: 18,
            title: "Let AI speak to your money",
          },
          {
            id: 19,
            title: "Predictive Model for warranty cost disbursment projection",
          },
          {
            id: 20,
            title: "Enrichment of network recommendation model through enhanced feature engineering",
          },
          {
            id: 21,
            title: "Sales & Customer Behavior Analytics Dashboard for Mealawe",
          },
          {
            id: 22,
            title: "Customer Lifetime Value for BAL",
          },
          {
            id: 23,
            title: "Kitchen Performance Dashboard using AI  ",
          },
          {
            id: 24,
            title: "Improving lead scoring model for BAL businesses",
          },
          {
            id: 25,
            title: "Intelligent RPA Bot Tracking and Performance Management",
          },
          {
            id: 26,
            title: "AI-Driven Virtual Planner for Project Management using RAG and Autonomous Agents",
          },
          {
            id: 27,
            title: "Intelligent Prediction of Impacted Items and Organizations",
          },
          {
            id: 28,
            title: "Image to Price: Intelligent Grocery Price Comparator",
          },
          {
            id: 29,
            title: "AI based augmented data quality to improve quality of data for model training",
          },
          {
            id: 30,
            title: "AgriForecast: Crop Price Prediction Using Time Series",
          },
          {
            id: 31,
            title: "Routing and Loading Optimization for Auto vehicles Logistic Management",
          },
          {
            id: 32,
            title: "PramaanAI: Zero-Knowledge Proofs for Verifiable AI Predictions",
          },
          {
            id: 33,
            title: "Proactive Loan Default Prediction",
          },
          {
            id: 34,
            title: "Medfusion: A Dual-Head Multimodal Deep Learning Framework for Chest X-Ray Disease Classification and Automated Report Consistency Verification",
          },
        ],
      }
      ,
    ],
  },

  // =====================================================
  // CIVIL ENGINEERING
  // =====================================================
  {
    department: "Civil Engineering",
    years: [
      {
        year: "2023-27",
        projects: [
          {
            id: 1,
            title: "Sustainable Construction Materials Using Industrial Waste",
          },
          {
            id: 2,
            title: "Smart Building Monitoring System",
          },
          {
            id: 3,
            title: "Rainwater Harvesting and Groundwater Recharge System",
          },
          {
            id: 4,
            title: "Analysis and Design of Sustainable Concrete Structures",
          },
        ],
      },

      {
        year: "2022-26",
        projects: [
          {
            id: 1,
            title: "Green Building Design and Energy Efficiency Analysis",
          },
          {
            id: 2,
            title: "Traffic Management and Road Safety Analysis",
          },
          {
            id: 3,
            title: "Wastewater Treatment and Reuse System",
          },
        ],
      },
    ],
  },

  // =====================================================
  // ELECTRONICS
  // =====================================================
  {
    department: "Electronics",
    years: [
      {
        year: "2023-27",
        projects: [
          {
            id: 1,
            title: "IoT Based Smart Home Automation System",
          },
          {
            id: 2,
            title: "Wireless Sensor Network for Environmental Monitoring",
          },
          {
            id: 3,
            title: "Smart Energy Meter Using IoT",
          },
          {
            id: 4,
            title: "Embedded System Based Industrial Monitoring System",
          },
        ],
      },

      {
        year: "2022-26",
        projects: [
          {
            id: 1,
            title: "IoT Based Health Monitoring System",
          },
          {
            id: 2,
            title: "Smart Agriculture Monitoring System",
          },
          {
            id: 3,
            title: "Digital Security and Access Control System",
          },
        ],
      },
    ],
  },

  // =====================================================
  // ENTC
  // =====================================================
  {
    department: "ENTC",
    years: [
      {
        year: "2023-27",
        projects: [
          {
            id: 1,
            title:
              "IoT-Based Enterprise Network Security System with Hardware Network Access Control and Real-Time SOC Dashboard",
          },
          {
            id: 2,
            title: "Utilization of nano 33 sense board for Photovoltaic Solar powered monitoring and optimization  (Title by Faculty)",
          },
          {
            id: 3,
            title: "OvaEdge: An Embedded Artificial Intelligence Approach for Ovarian Cancer Screening",
          },
          {
            id: 4,
            title:
              "Design of a Traction Inverter for Electric Mobility Applications for the Specially-Abled",
          },
          {
            id: 5,
            title:
              "Low Power Oscillator for High Frequency Communications",
          },
          {
            id: 6,
            title:
              "AI-Based Predictive Maintenance of Industrial Machines using IoT Sensors.",
          },
          {
            id: 7,
            title:
              "AI Accelerator on FPGA",
          },
          {
            id: 8,
            title: "Parameterized Matrix Multiplier Accelerator with UVM Verification",
          },
          {
            id: 9,
            title: "FastDepth-Based Predictive Monocular Depth Estimation on Embedded Systems ",
          },
          {
            id: 10,
            title: "Smart Robot for Cleaning Solar Panels in Large-Scale Solar Farms ",
          },
          {
            id: 11,
            title: "Automated Marine Plastic Accumulation Tracker via Hyperspectral Signatures ",
          },
          {
            id: 12,
            title: "Deep Learning-Based PCB Defect Detection and Quality Inspection (Title by Faculty)",
          },
          {
            id: 13,
            title: "Edge-AI Behavioral Anomaly Sentinel for Unmanaged Networks ",
          },
          {
            id: 14,
            title: "Machine learning- Based Gait Analysis for Assessment and Rehabilitation of Neurodegenerative Disorders.",
          },
          {
            id: 15,
            title: "Distributed Edge AI Platform for Autonomous Multi-Service Inference ",
          },
          {
            id: 16,
            title: " NUMA-inspired Distributed Real-Time Data Storage and Computing Platform for Self-Healing Embedded LoRa Mesh Networks ",
          },
          {
            id: 17,
            title: "IOT-Enabled Smart Bio Air Purifier with Real-Time AQI Monitoring ",
          },
          {
            id: 18,
            title: "Metadata and Data Discovery at Enterprise Platform Agnostic ",
          },
          {
            id: 19,
            title: " AI-Driven Smart Microgrid Energy Management System with Predictive Demand Response and Intelligent Energy Optimization ",
          },
          {
            id: 20,
            title: "Computer Vision-Based Physical Therapy & Gym Form Tracker ",
          },
          {
            id: 21,
            title: "AI-Powered Smart Water Management & Autonomous Rationing System ",
          },
          {
            id: 22,
            title: "Edge AI-Based Predictive Maintenance of BLDC Motors using Multi-Sensor Fusion and Frequency Domain Analysis  ",
          },
          {
            id: 23,
            title: "Complete ASIC Design in 45nm: MAC/Multiplier/Image Processing Blocks/DSP Blocks/CNN/Accelerators; Followed by FPGA Verification ",
          },
          {
            id: 24,
            title: "Machine Learning-Based Automated Arrhythmia Detection from ECG Signal",
          },
          {
            id: 25,
            title: "Industrial Robot Arm Controller Using QNX RTOS ",
          },
          {
            id: 26,
            title: "Adaptive Resource Allocation for Edge Vision Systems using Reinforcement Learning  ",
          },
          {
            id: 27,
            title: "Vision-Based PPE Compliance Monitoring for Industrial Workers.(Title by Faculty) ",
          },
          {
            id: 28,
            title: "IRON MAN: A Standalone Embedded Network Defense Appliance  ",
          },
          {
            id: 29,
            title: "Topic is NOT FINALISED ,in discussion with Mentor . ",
          },
          {
            id: 30,
            title: "Precision Antenna Alignment and Tracking Unit (PAATU) using blynk2.0 ",
          },
          {
            id: 31,
            title: "Intelligent Resouce Optimization in Next Gneration Communication System (B5G)   ",
          },
          {
            id: 32,
            title: "Automatic Diverse Epileptic Seizure Detection Model Using Artificial intelligence  ",
          },
          {
            id: 33,
            title: "QNX-based automotive CAN BUS analyzer ",
          },
          {
            id: 34,
            title: "Ai-Assisted Automotive (SDVs) Observability Platform ",
          },
          {
            id: 35,
            title: "Edge AI system for real time human fault detection using LSTM and IMU Sensors ",
          },

        ],
      },

      {
        year: "2022-26",
        projects: [
          {
            id: 1,
            title: "SMART IT based EV charger with OTP Authentication",
          },
          {
            id: 2,
            title: "Smart water quality monitoring system",
          },
          {
            id: 3,
            title: "Smart Sign Language Translator Glove with Real -Time Al Processing",
          },
          {
            id: 4,
            title: "Real-time Image Capturing and transmission over TCP-IP using Zynq Processor",
          },
          {
            id: 5,
            title: "Design of 5-Stage RISC-V Processor: RTL to GDSII",
          },
          {
            id: 6,
            title: "Design of Memristor based circuit on cadence and its application in AI domain",
          },
          {
            id: 7,
            title: "Design of custom RISC-V SoC with ...Assistive Technology",
          },
          {
            id: 8,
            title: "FPGA based Implementation of Machine Learning Algorithm with Scalable Accelerating   For Edge AI Applicationss",
          },
          {
            id: 9,
            title: "8-bit ALU Design and Verification using Verilog",
          },
          {
            id: 10,
            title: "APB3 Slave Design and Verification using Verilog",
          },
          {
            id: 11,
            title: "SPI Design and Verification",
          },
          {
            id: 12,
            title: "Power-Optimized Adaptive Monitoring IoT System for Plant Health and Environmental Monitoring",
          },
          {
            id: 13,
            title: "Enhanced facial biometric & Raspberry Pi ",
          },
          {
            id: 14,
            title: " Edge deployed multimodal drive state analysis using TinyML and sensor fusion",
          },
          {
            id: 15,
            title: "Contactless gesture controlled door less system",
          },
          {
            id: 16,
            title: "Vision-based Audio Assistance for the Visually Impaired using OpenCV and Arduino",
          },
          {
            id: 17,
            title: "Surveillance Robot with real-time video monitoring",
          },
          {
            id: 18,
            title: "IoT based Solar Energy Monitoring System using Python & NodeMCU",
          },
          {
            id: 19,
            title: "Smart integrated AI and IoT hydroponic system",
          },
          {
            id: 20,
            title: "Industry 4.0 based unified monitoring system for industrial machinery",
          },
          {
            id: 21,
            title: "LOQL - AI Translator with Location Aware Context",
          },
          {
            id: 22,
            title: "Smart Bio-Air purifier air quality monitoring",
          },
          {
            id: 23,
            title: "AI Powered Traffic Prediction",
          },
          {
            id: 24,
            title: "AI Agent based traffic optimization",
          },
          {
            id: 25,
            title: "Optimization of motor for SPV embedded system on wiping technology",
          },
          {
            id: 26,
            title: "Solar tracker with INC / P&O MPPT",
          },
          {
            id: 27,
            title: "Bluetooth Low Energy based project using Arduino Nano 33 BLE Sense to monitor solar   photovoltaic parameters",
          },
          {
            id: 28,
            title: "Real-Time Turret Tracking of Target using OpenCV AI",
          },
          {
            id: 29,
            title: "Sustainable Energy Optimization and Management for Smart Buildings using Compact Sensory   Module",
          },
          {
            id: 30,
            title: "IoT enabled motion based SMART highway lighting with real time obstacle alterting",
          },
          {
            id: 31,
            title: "Comprehensive Simulation of a BLDC Motor Circuit using OrCAD Capture",
          },
        ],
      }
      ,
    ],
  },


];
