// Admission Start Here ----------------
export const eligibilityAdmissionColumns = [
  {
    key: "diploma",
    title: "Diploma",
  },
  {
    key: "bsc",
    title: "BSc",
  },
  {
    key: "vocationalCourse",
    title: "Vocational Course",
  },
];
export const eligibilityAdmissionBranchwise = [
  {
    srNo: "01",
    diploma: "Diploma mark lists till V sem/ VI Sem of passed Diploma",
    bsc: "Mark list of BSc final year",
    vocationalCourse: "Mark lists of vocational course",
  },
  {
    srNo: "02",
    diploma: "10 th Marks list",
    bsc: "Certificate of passing of BSc",
    vocationalCourse: "Certificate of passing of vocational course",
  },
  {
    srNo: "03",
    diploma: "10 th Certificate",
    bsc: "HSC (12th Class)mark list",
    vocationalCourse: "Migration certificate",
  },
  {
    srNo: "04",
    diploma: "12 th Mark list(if applicable)",
    bsc: "HSC (12th Class) certificate",
    vocationalCourse: "Transfer Certificate",
  },
  {
    srNo: "05",
    diploma: "12 th Certificate(if applicable)",
    bsc: "Migration certificate",
    vocationalCourse: "Gap Certificate (if Applicable)",
  },
  {
    srNo: "06",
    diploma: "Migration certificate",
    bsc: "Transfer Certificate",
    vocationalCourse: "Caste certificate(if applicable)",
  },
  {
    srNo: "07",
    diploma: "Transfer Certificate",
    bsc: "Gap Certificate (if Applicable)",
    vocationalCourse:
      "Address Proof(Electricity Bill/ Aadhar Card/ Driving License)",
  },
  {
    srNo: "08",
    diploma: "Gap Certificate (if Applicable)",
    bsc: "Caste certificate(if applicable)",
    vocationalCourse: "Passport Size photo",
  },
  {
    srNo: "09",
    diploma: "Caste certificate(if applicable)",
    bsc: "Address Proof(Electricity Bill/ Aadhar Card/ Driving License)",
    vocationalCourse: "",
  },
  {
    srNo: "10",
    diploma: "Address Proof(Electricity Bill/ Aadhar Card/ Driving License)",
    bsc: "Passport Size photo",
    vocationalCourse: "",
  },
  {
    srNo: "11",
    diploma: "Passport Size photo",
    bsc: "",
    vocationalCourse: "",
  },
];
// Lateral Entry Start Here
export const AdmissionProcessEnquiryColumns = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "contactNumber",
    title: "Contact No",
  },
];
export const AdmissionProcessEnquiryData = [
  {
    name: "Landline number",
    contactNumber: "6193 6419",
  },
  {
    name: "Landline number",
    contactNumber: "6193 6464",
  },
];

export const BranchSpecificEnquiryColumns = [
  {
    key: "name",
    title: "Direct Second Year (Lateral Entry)",
  },
  {
    key: "contactPerson",
    title: "Contact Person",
  },
  {
    key: "contactNumber",
    title: "Contact Number",
  },
];
export const BranchSpecificEnquiryData = [
  {
    name: "B.Tech Artificial Intelligence and Machine Learning",
    contactPerson: "Ms. Vaishnavi Waychal",
    contactNumber: "7262890505",
  },
  {
    name: "B.Tech Civil Engineering",
    contactPerson: "Dr. Sagar Kolekar",
    contactNumber: "7741805435",
  },
  {
    name: "B.Tech Computer Science and Engineering	",
    contactPerson: "Ms. Sonali Kadam",
    contactNumber: "9112290236",
  },
  {
    name: "B.Tech Electronics and Telecommunication Engineering",
    contactPerson: "Ms. Prajala Adhav / Ms. Priti Kulkarni",
    contactNumber: "7262810404",
  },
  {
    name: "B.Tech Mechanical Engineering",
    contactPerson: "Mr. Vishal Sharma",
    contactNumber: "7262850404",
  },
  {
    name: "B.Tech Robotics and Automation",
    contactPerson: "Mr. Narayan Sutar",
    contactNumber: "8087864775",
  },
];
// Lateral Entry End Here

// M.TECH Start Here
export const MtechAdmissionProcessEnquiryColumns = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "contactNumber",
    title: "Contact No",
  },
];
export const MtechAdmissionProcessEnquiryData = [
  {
    name: "Landline number",
    contactNumber: "6193 6419",
  },
  {
    name: "Landline number",
    contactNumber: "6193 6464",
  },
];
export const MtechBranchSpecificEnquiryColumns = [
  {
    key: "name",
    title: "M.Tech",
  },
  {
    key: "contactPerson",
    title: "Contact Person",
  },
  {
    key: "contactNumber",
    title: "Contact Number",
  },
];
export const MtechBranchSpecificEnquiryData = [
  {
    name: "M.Tech Artificial Intelligence and Machine Learning",
    contactPerson: "Mr. Pranav Gawande",
    contactNumber: "9112290107",
  },
  {
    name: "M.Tech Automotive Technology",
    contactPerson: "Mr. Vishal Sharma",
    contactNumber: "7262850404",
  },
  {
    name: "Robotics and Artificial Intelligence",
    contactPerson: "Mr. Sunil Chavat",
    contactNumber: "7262044505",
  },
  {
    name: "M.Tech Geoinformatics",
    contactPerson: "	Ms. Sonal / Ms. Vrushali",
    contactNumber: "7709998185",
  },
];
// M.TECH End Here

// SIT -Deakin University Partnership Page Tables Start Here --------
export const DualDegreecsColumns = [
  {
    key: "year",
    title: "Computer Science and Engineering",
    rowSpan: 2,
  },
  {
    key: "amount",
    title: "",
    rowSpan: 2,
  },
];
export const DualDegreecsData = [
  {
    year: { value: "Academic Fee", colSpan: 2 },
    amount: null,
    rowClass: "tableshighlight",
  },
  {
    year: "Year 1 (Pune)",
    amount: "₹ 4,22,000",
  },
  {
    year: "Year 2 (Pune)",
    amount: "₹ 4,22,000",
  },
  {
    year: "Year 3 (Australia)",
    amount: "₹ 22,55,000",
  },
  {
    year: "Year 4 (Australia)",
    amount: "₹ 22,55,000",
  },
  {
    year: { value: "Accommodation Charges", colSpan: 2 },
    amount: null,
    rowClass: "tableshighlight",
  },
  {
    year: "Year 1 (Hostel + Mess) Pune",
    amount: "₹ 2,57,000",
  },
  {
    year: "Year 2 (Hostel + Mess) Pune",
    amount: "₹ 2,57,000",
  },
  {
    year: "Year 3 (Approx. living cost), Australia",
    amount: "₹ 11,50,000",
  },
  {
    year: "Year 4 (Approx. living cost), Australia",
    amount: "₹ 11,50,000",
  },
  {
    year: "Total For Four Years",
    amount: "₹ 81,68,000",
    rowClass: "tableshighlight",
  },
];
// SIT -Deakin University Partnership Tables Start Here --------
export const DualDegreeceColumns = [
  {
    key: "year",
    title: "Civil Engineering",
    rowSpan: 2,
  },
  {
    key: "amount",
    title: "",
    rowSpan: 2,
  },
];
export const DualDegreeceData = [
  {
    year: { value: "Academic Fee", colSpan: 2 },
    amount: null,
    rowClass: "tableshighlight",
  },
  {
    year: "Year 1 (Pune)",
    amount: "₹ 3,37,500",
  },
  {
    year: "Year 2 (Pune)",
    amount: "₹ 3,37,500",
  },
  {
    year: "Year 3 (Australia)",
    amount: "₹ 24,09,000",
  },
  {
    year: "Year 4 (Australia)",
    amount: "₹ 24,09,000",
  },
  {
    year: { value: "Accommodation Charges", colSpan: 2 },
    amount: null,
    rowClass: "tableshighlight",
  },
  {
    year: "Year 1 (Hostel + Mess) Pune",
    amount: "₹ 2,57,000",
  },
  {
    year: "Year 2 (Hostel + Mess) Pune",
    amount: "₹ 2,57,000",
  },
  {
    year: "Year 3 (Approx. living cost), Australia",
    amount: "₹ 11,50,000",
  },
  {
    year: "Year 4 (Approx. living cost), Australia",
    amount: "₹ 11,50,000",
  },
  {
    year: "Total For Four Years",
    amount: "₹ 83,07,000",
    rowClass: "tableshighlight",
  },
];
// SIT -Deakin University Partnership Tables End Here --------

// University of East Anglia Tables Start Here --------
export const DualDegreemeColumns = [
  {
    key: "year",
    title: "Mechanical Engineering",
    rowSpan: 2,
  },
  {
    key: "amount",
    title: "",
    rowSpan: 2,
  },
];
export const DualDegreemeData = [
  {
    year: { value: "Academic Fee", colSpan: 2 },
    amount: null,
    rowClass: "tableshighlight",
  },
  {
    year: "Year 1 (Pune)",
    amount: "₹ 3,37,500",
  },
  {
    year: "Year 2 (Pune)",
    amount: "₹ 3,37,500",
  },
  {
    year: "Year 3 (UK)",
    amount: "₹ 26,76,800",
  },
  {
    year: "Year 4 (UK)",
    amount: "₹ 26,76,800",
  },
  {
    year: { value: "Accommodation Charges", colSpan: 2 },
    amount: null,
    rowClass: "tableshighlight",
  },
  {
    year: "Year 1 (Hostel + Mess) Pune",
    amount: "₹ 2,57,000",
  },
  {
    year: "Year 2 (Hostel + Mess), Pune",
    amount: "₹ 2,57,000",
  },
  {
    year: "Year 3 (Approx. living cost), UK",
    amount: "₹ 11,20,000",
  },
  {
    year: "Year 4 (Approx. living cost), UK",
    amount: "₹ 11,20,000",
  },
  {
    year: "Total For Four Years",
    amount: "₹ 87,81,032",
    rowClass: "tableshighlight",
  },
];
// University of East Anglia Tables End Here --------

// SIT Pune — B.Tech Fee Structure AY 2026–27 Indian Students Tables Start Here --------
// Section A: Annual Academic Fees --------
export const Feestructure2026_27SecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "academicfee",
    title: "Academic Fees (Per Annum)*",
  },
  {
    key: "institutedeposit",
    title: "Institute Deposit",
  },
  {
    key: "totalpayable",
    title: "Total Payable (1st Year)",
  },
];
export const Feestructure2026_27SecAData = [
  {
    programmename: "Computer Science and Engineering",
    academicfee: "₹4,00,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹4,20,000",
  },
  {
    programmename: "Electronics and Telecommunication Engineering",
    academicfee: "₹3,75,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹3,95,000",
  },
  {
    programmename: "Mechanical Engineering",
    academicfee: "₹3,00,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹3,20,000",
  },
  {
    programmename: "Civil Engineering",
    academicfee: "₹3,00,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹3,20,000",
  },
  {
    programmename: "Robotics & Automation",
    academicfee: "₹3,00,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹3,20,000",
  },
  {
    programmename: "Artificial Intelligence and Machine Learning",
    academicfee: "₹4,00,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹4,20,000",
  },
  {
    programmename: "Robotics and Artificial Intelligence",
    academicfee: "₹3,00,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹3,20,000",
  },
];

// Section B: Annual Academic Fees --------
export const Feestructure2026_27SecBColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "firstinstallment",
    title: "1st Installment",
  },
  {
    key: "secondinstallment",
    title: "2nd Installment",
  },
  {
    key: "total",
    title: "Total",
  },
  {
    key: "firstinstallmentdue",
    title: "1st Installment Due",
  },
  {
    key: "secondinstallmentdue",
    title: "2nd Installment Due",
  },
];
export const Feestructure2026_27SecBData = [
  {
    programmename: "Computer Science and Engineering",
    firstinstallment: "₹1,70,000",
    secondinstallment: "₹2,50,000",
    total: "₹4,20,000",
    firstinstallmentdue: "At time of Admission",
    secondinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Electronics and Telecommunication Engineering",
    firstinstallment: "₹1,70,000",
    secondinstallment: "₹2,25,000",
    total: "₹3,95,000",
    firstinstallmentdue: "At time of Admission",
    secondinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Mechanical Engineering",
    firstinstallment: "₹1,70,000",
    secondinstallment: "₹1,50,000",
    total: "₹3,20,000",
    firstinstallmentdue: "At time of Admission",
    secondinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Civil Engineering",
    firstinstallment: "₹1,70,000",
    secondinstallment: "₹1,50,000",
    total: "₹3,20,000",
    firstinstallmentdue: "At time of Admission",
    secondinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Robotics & Automation",
    firstinstallment: "₹1,70,000",
    secondinstallment: "₹1,50,000",
    total: "₹3,20,000",
    firstinstallmentdue: "At time of Admission",
    secondinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Artificial Intelligence and Machine Learning",
    firstinstallment: "₹1,70,000",
    secondinstallment: "₹2,50,000",
    total: "₹4,20,000",
    firstinstallmentdue: "At time of Admission",
    secondinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Robotics and Artificial Intelligence",
    firstinstallment: "₹1,70,000",
    secondinstallment: "₹1,50,000",
    total: "₹3,20,000",
    firstinstallmentdue: "At time of Admission",
    secondinstallmentdue: "25-Nov-2026",
  },
];
// SIT Pune — B.Tech Fee Structure AY 2026–27 Indian Students Tables End Here --------

// SIT Pune — B.Tech Fee Structure AY 2026–27 | NRI / PIO / OCI Students (Annexure II-a) Start Here---------

// Section A: Annual Academic Fees --------
export const Feestructure2026_27NRISecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "academicfee",
    title: "Academic Fees (A)",
  },
  {
    key: "institutedeposit",
    title: "Institute Deposit (B)",
  },
  {
    key: "adminfee",
    title: "Admin Fees (C)",
  },
  {
    key: "totalpayable",
    title: "Total (A+B+C)",
  },
];
export const Feestructure2026_27NRISecAData = [
  {
    programmename: "Computer Science and Engineering",
    academicfee: "$7,000",
    institutedeposit: "$275",
    adminfee: "$550",
    totalpayable: "$7,825",
  },
  {
    programmename: "Electronics and Telecommunication Engineering",
    academicfee: "$6,600",
    institutedeposit: "$275",
    adminfee: "$550",
    totalpayable: "$7,425",
  },
  {
    programmename: "Mechanical Engineering",
    academicfee: "$5,875",
    institutedeposit: "$275",
    adminfee: "$550",
    totalpayable: "$6,700",
  },
  {
    programmename: "Civil Engineering",
    academicfee: "$5,875",
    institutedeposit: "$275",
    adminfee: "$550",
    totalpayable: "$6,700",
  },
  {
    programmename: "Robotics & Automation",
    academicfee: "$5,875",
    institutedeposit: "$275",
    adminfee: "$550",
    totalpayable: "$6,700",
  },
  {
    programmename: "Artificial Intelligence and Machine Learning",
    academicfee: "$7,000",
    institutedeposit: "$275",
    adminfee: "$550",
    totalpayable: "$7,825",
  },
  {
    programmename: "Robotics and Artificial Intelligence",
    academicfee: "$5,875",
    institutedeposit: "$275",
    adminfee: "$550",
    totalpayable: "$6,700",
  },
];

// Section B: Annual Academic Fees --------
export const Feestructure2026_27NRISecBColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "firstinstallment",
    title: "1st Installment",
  },
  {
    key: "secondinstallment",
    title: "2nd Installment",
  },
  {
    key: "thirdinstallment",
    title: "3rd Installment",
  },
  {
    key: "firstinstallmentdue",
    title: "1st Due",
  },
  {
    key: "secondinstallmentdue",
    title: "2nd Due",
  },
  {
    key: "thirdinstallmentdue",
    title: "3rd Due",
  },
];
export const Feestructure2026_27NRISecBData = [
  {
    programmename: "Computer Science and Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$3,230",
    thirdinstallment: "$3,230",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Electronics and Telecommunication Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$3,030",
    thirdinstallment: "$3,030",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Mechanical Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$2,670",
    thirdinstallment: "$2,665",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Civil Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$2,670",
    thirdinstallment: "$2,665",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Robotics & Automation",
    firstinstallment: "$1,365",
    secondinstallment: "$2,670",
    thirdinstallment: "$2,665",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Artificial Intelligence and Machine Learning",
    firstinstallment: "$1,365",
    secondinstallment: "$3,230",
    thirdinstallment: "$3,230",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Robotics and Artificial Intelligence",
    firstinstallment: "$1,365",
    secondinstallment: "$2,670",
    thirdinstallment: "$2,665",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
];

// SIT Pune — B.Tech Fee Structure AY 2026–27 | NRI / PIO / OCI Students (Annexure II-a) End Here---------

// SIT Pune — B.Tech Fee Structure AY 2026–27 | NRI / PIO / OCI Students (Annexure II-a) Start Here---------

// Section A: Annual Academic Fees --------
export const Feestructure2026_27ForeignNationalSecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "fullacademicfees",
    title: "Full Academic Fees",
  },
  {
    key: "goldenjubileescholarship",
    title: "Golden Jubilee Scholarship",
  },
  {
    key: "academicfeespayable",
    title: "Academic Fees Payable (A)",
  },
  {
    key: "institutedeposit",
    title: "Institute Deposit (B)",
  },
  {
    key: "adminfees",
    title: "Admin Fees (C)",
  },
  {
    key: "totalpayable",
    title: "Total (A+B+C)",
  },
];
export const Feestructure2026_27ForeignNationalSecAData = [
  {
    programmename: "Computer Science and Engineering",
    fullacademicfees: "$7,000",
    goldenjubileescholarship: "$5,700",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$1,850",
  },
  {
    programmename: "Electronics and Telecommunication Engineering",
    fullacademicfees: "$6,600",
    goldenjubileescholarship: "$5,300",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$1,850",
  },
  {
    programmename: "Mechanical Engineering",
    fullacademicfees: "$5,875",
    goldenjubileescholarship: "$4,575",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$1,850",
  },
  {
    programmename: "Civil Engineering",
    fullacademicfees: "$5,875",
    goldenjubileescholarship: "$4,575",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$1,850",
  },
  {
    programmename: "Robotics & Automation",
    fullacademicfees: "$5,875",
    goldenjubileescholarship: "$4,575",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$1,850",
  },
  {
    programmename: "Artificial Intelligence and Machine Learning",
    fullacademicfees: "$7,000",
    goldenjubileescholarship: "$5,700",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$1,850",
  },
  {
    programmename: "Robotics and Artificial Intelligence",
    fullacademicfees: "$5,875",
    goldenjubileescholarship: "$4,575",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$1,850",
  },
];

// Section B: Annual Academic Fees --------
export const Feestructure2026_27ForeignNationalSecBColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "firstinstallment",
    title: "1st Installment",
  },
  {
    key: "secondinstallment",
    title: "2nd Installment",
  },
  {
    key: "thirdinstallment",
    title: "3rd Installment",
  },
  {
    key: "firstinstallmentdue",
    title: "1st Due",
  },
  {
    key: "secondinstallmentdue",
    title: "2nd Due",
  },
  {
    key: "thirdinstallmentdue",
    title: "3rd Due",
  },
];
export const Feestructure2026_27ForeignNationalSecBData = [
  {
    programmename: "Computer Science and Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$240",
    thirdinstallment: "$245",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Electronics and Telecommunication Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$240",
    thirdinstallment: "$245",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Mechanical Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$240",
    thirdinstallment: "$245",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Civil Engineering",
    firstinstallment: "$1,365",
    secondinstallment: "$240",
    thirdinstallment: "$245",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Robotics & Automation",
    firstinstallment: "$1,365",
    secondinstallment: "$240",
    thirdinstallment: "$245",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Artificial Intelligence and Machine Learning",
    firstinstallment: "$1,365",
    secondinstallment: "$240",
    thirdinstallment: "$245",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
  {
    programmename: "Robotics and Artificial Intelligence",
    firstinstallment: "$1,365",
    secondinstallment: "$240",
    thirdinstallment: "$245",
    firstinstallmentdue: "At offer acceptance",
    secondinstallmentdue: "At reporting to SCIE",
    thirdinstallmentdue: "25-Nov-2026",
  },
];

// SIT Pune — B.Tech Fee Structure AY 2026–27 | NRI / PIO / OCI Students (Annexure II-a) End Here---------


// Section B: Annual Academic Fees --------
export const Feestructure2026_27HostelMessColumns = [
  {
    key: "feehead",
    title: "Fee Head",
  },
  {
    key: "indianstudents",
    title: "Indian Students (₹)",
  },
  {
    key: "nri",
    title: "NRI/PIO/OCI (USD)",
  },
  {
    key: "foreignnationals",
    title: "Foreign Nationals (USD)",
  },
];
export const Feestructure2026_27HostelMessData = [
  {
    feehead: "Mess Fees (Per Annum)",
    indianstudents: "₹1,19,600",
    nri: "$1,400",
    foreignnationals: "$560",
  },
  {
    feehead: "Hostel Deposit (Refundable)",
    indianstudents: "₹20,000",
    nri: "$250",
    foreignnationals: "$250",
  },
  {
    feehead: "Three-Sharing Hostel (Per Annum)",
    indianstudents: "₹1,68,900",
    nri: "$1,960",
    foreignnationals: "$650",
  },
  {
    feehead: "Four-Sharing Hostel (Per Annum)",
    indianstudents: "₹1,24,100",
    nri: "$1,440",
    foreignnationals: "$650",
  },
];

// SIT Pune — B.Tech Fee Structure AY 2026–27 | NRI / PIO / OCI Students (Annexure II-a) End Here---------
