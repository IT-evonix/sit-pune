// Admission Start Here -----------------------------------------------------------------------
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
// Lateral Entry Start Here -----------------------------------------------------------------------
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
// Lateral Entry End Here -----------------------------------------------------------------------

// M.TECH Start Here -----------------------------------------------------------------------
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
// M.TECH End Here -----------------------------------------------------------------------

// SIT -Deakin University Partnership Page Tables Start Here -----------------------------
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
// SIT -Deakin University Partnership Tables Start Here ------------------------------
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
// SIT -Deakin University Partnership Tables End Here ------------------------------------

// University of East Anglia Tables Start Here -------------------------------------------
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
// University of East Anglia Tables End Here --------------------------------------------

// --------Admission Fee Structure Start Here --------------------------------------------
// --------SIT Pune BTech Fee Structure 2026-27 Start Here ---------------------------------------
// Indian Students Start Here --------
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
// Indian Students End Here --------
// NRI/PIO/OCI Start Here-----------
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
// NRI/PIO/OCI End Here---------------------
// Foreign Nationals Start Here-------------
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
// Foreign Nationals End Here--------------
// Hostel & Mess Start Here----------------
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
// Hostel & Mess Start Here----------------
// --------SIT Pune BTech Fee Structure 2026-27 End Here ---------------------------------------




// --------SIT Pune BTech 2nd Subsequent Fees 2026-27 Start Here ---------------------------------------
// Indian Students Start Here --------
// Section A: Annual Academic Fees --------
export const btech2ndFeestructure2026_27SecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "batch",
    title: "Batch",
  },
  {
    key: "feetype",
    title: "Fee Type",
  },
  {
    key: "yearlyfees",
    title: "Yearly Fees FY 2026-27 (₹)",
  },
  {
    key: "feehead",
    title: "Installment 1 (₹)",
  },
  {
    key: "installment1",
    title: "Installment 2 (₹)",
  },
];
export const btech2ndFeestructure2026_27SecAData = [
  {
    programmename: "Civil, Mech, Robotics & Auto, E&TC, CSE, AIML",
    batch: "2023–2027",
    feetype: "Academic Fees",
    yearlyfees: "₹3,30,000",
    installment1: "₹1,65,000",
    installment2: "₹1,65,000",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation, E&TC",
    batch: "2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "₹3,21,000",
    installment1: "₹1,60,500",
    installment2: "₹1,60,500",
  },
  {
    programmename: "CSE, AIML",
    batch: "2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "₹3,53,000",
    installment1: "₹1,76,500",
    installment2: "₹1,76,500",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "₹3,12,000",
    installment1: "₹1,56,000",
    installment2: "₹1,56,000",
  },
  {
    programmename: "E&TC",
    batch: "2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "₹3,38,000",
    installment1: "₹1,69,000",
    installment2: "₹1,69,000",
  },
  {
    programmename: "CSE, AIML",
    batch: "2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "₹3,90,000",
    installment1: "₹1,95,000",
    installment2: "₹1,95,000",
  },
];
// Section B: Annual Academic Fees --------
export const btech2ndFeestructure2026_27SecBColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "batch",
    title: "DSY Batch",
  },
  {
    key: "feetype",
    title: "Fee Type",
  },
  {
    key: "yearlyfees",
    title: "Yearly Fees FY 2026-27 (₹)",
  },
  {
    key: "installment1",
    title: "Installment 1 (₹)",
  },
  {
    key: "installment2",
    title: "Installment 2 (₹)",
  },
];
export const btech2ndFeestructure2026_27SecBData = [
  {
    programmename: "Civil, Mech, Robotics & Auto, E&TC, CSE, AIML",
    batch: "DSY 2023–2027",
    feetype: "Academic Fees",
    yearlyfees: "₹3,30,000",
    installment1: "₹1,65,000",
    installment2: "₹1,65,000",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation, E&TC",
    batch: "DSY 2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "₹3,21,000",
    installment1: "₹1,60,500",
    installment2: "₹1,60,500",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "₹3,53,000",
    installment1: "₹1,76,500",
    installment2: "₹1,76,500",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "DSY 2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "₹3,12,000",
    installment1: "₹1,56,000",
    installment2: "₹1,56,000",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "DSY 2025–2029",
    feetype: "Institute Deposit (Refundable)",
    yearlyfees: "₹20,000",
    installment1: "₹20,000",
    installment2: "—",
  },
  {
    programmename: "E&TC",
    batch: "DSY 2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "₹3,38,000",
    installment1: "₹1,69,000",
    installment2: "₹1,69,000",
  },
  {
    programmename: "E&TC",
    batch: "DSY 2025–2029",
    feetype: "Institute Deposit (Refundable)",
    yearlyfees: "₹20,000",
    installment1: "₹20,000",
    installment2: "—",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "₹3,90,000",
    installment1: "₹1,95,000",
    installment2: "₹1,95,000",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2025–2029",
    feetype: "Institute Deposit (Refundable)",
    yearlyfees: "₹20,000",
    installment1: "₹20,000",
    installment2: "—",
  },
];
// Indian Students End Here --------
// NRI/PIO/OCI Start Here-----------
// Section A: Annual Academic Fees --------
export const btech2ndFeestructure2026_27NRISecAColumns = [
  {
    key: "programmename",
    title: "Programme(s)",
  },
  {
    key: "batch",
    title: "Batch",
  },
  {
    key: "feetype",
    title: "Fee Type",
  },
  {
    key: "yearlyfees",
    title: "Yearly Fees (USD)",
  },
  {
    key: "installment1",
    title: "Installment 1",
  },
  {
    key: "installment2",
    title: "Installment 2",
  },
];
export const btech2ndFeestructure2026_27NRISecAData = [
  {
    programmename: "Civil, Mech, Robotics & Auto, E&TC, CSE, AIML",
    batch: "2023–2027",
    feetype: "Academic Fees",
    yearlyfees: "$5,976",
    installment1: "$2,988",
    installment2: "$2,988",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation, E&TC",
    batch: "2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "$5,809",
    installment1: "$2,905",
    installment2: "$2,904",
  },
  {
    programmename: "CSE, AIML",
    batch: "2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "$6,368",
    installment1: "$3,184",
    installment2: "$3,184",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "$5,875",
    installment1: "$2,938",
    installment2: "$2,937",
  },
  {
    programmename: "E&TC",
    batch: "2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "$6,100",
    installment1: "$3,050",
    installment2: "$3,050",
  },
  {
    programmename: "CSE, AIML",
    batch: "2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "$7,000",
    installment1: "$3,500",
    installment2: "$3,500",
  },
];
// Section B: Annual Academic Fees --------
export const btech2ndFeestructure2026_27NRISecBColumns = [
  {
    key: "programmename",
    title: "Programme(s)",
  },
  {
    key: "batch",
    title: "DSY Batch",
  },
  {
    key: "feetype",
    title: "Fee Type",
  },
  {
    key: "yearlyfees",
    title: "Yearly Fees (USD)",
  },
  {
    key: "installment1",
    title: "Instalment 1",
  },
  {
    key: "installment2",
    title: "Instalment 2",
  },
];
export const btech2ndFeestructure2026_27NRISecBData = [
  {
    programmename: "Civil, Mech, Robotics & Auto, E&TC, CSE, AIML",
    batch: "DSY 2023–2027",
    feetype: "Academic Fees",
    yearlyfees: "$5,976",
    installment1: "$2,988",
    installment2: "$2,988",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation, E&TC",
    batch: "DSY 2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "$5,809",
    installment1: "$2,905",
    installment2: "$2,904",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2024–2028",
    feetype: "Academic Fees",
    yearlyfees: "$6,368",
    installment1: "$3,184",
    installment2: "$3,184",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "DSY 2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "$5,875",
    installment1: "$2,938",
    installment2: "$2,937",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "DSY 2025–2029",
    feetype: "Institute Deposit",
    yearlyfees: "$275",
    installment1: "$275",
    installment2: "—",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "DSY 2025–2029",
    feetype: "SCIE Admin Fees",
    yearlyfees: "$550",
    installment1: "$550",
    installment2: "—",
  },
  {
    programmename: "E&TC",
    batch: "DSY 2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "$6,100",
    installment1: "$3,050",
    installment2: "$3,050",
  },
  {
    programmename: "E&TC",
    batch: "DSY 2025–2029",
    feetype: "Institute Deposit",
    yearlyfees: "$275",
    installment1: "$275",
    installment2: "—",
  },
  {
    programmename: "E&TC",
    batch: "DSY 2025–2029",
    feetype: "SCIE Admin Fees",
    yearlyfees: "$550",
    installment1: "$550",
    installment2: "—",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2025–2029",
    feetype: "Academic Fees",
    yearlyfees: "$7,000",
    installment1: "$3,500",
    installment2: "$3,500",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2025–2029",
    feetype: "Institute Deposit",
    yearlyfees: "$275",
    installment1: "$275",
    installment2: "—",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2025–2029",
    feetype: "SCIE Admin Fees",
    yearlyfees: "$550",
    installment1: "$550",
    installment2: "—",
  },
];
// NRI/PIO/OCI End Here-----------------

// Foreign Nationals Start Here---------
// Section A: Annual Academic Fees --------
export const btech2ndFeestructure2026_27ForeignNationalSecAColumns = [
  {
    key: "programmename",
    title: "Programme(s)",
  },
  {
    key: "batch",
    title: "Batch",
  },
  {
    key: "fullacademicfees",
    title: "Full Academic Fees",
  },
  {
    key: "goldenjubileescholarship",
    title: "GJ Scholarship",
  },
  {
    key: "academicfeespayable",
    title: "Academic Fee Payable",
  },
  {
    key: "institutedeposit",
    title: "Inst. Deposit",
  },
  {
    key: "adminfees",
    title: "SCIE Admin",
  },
  {
    key: "academicfeeinstallment1",
    title: "Academic Fee Instalment 1",
  },
  {
    key: "academicfeeinstallment2",
    title: "Academic Fee Instalment 2",
  },
];
export const btech2ndFeestructure2026_27ForeignNationalSecAData = [
  {
    programmename: "Civil, Mech, Robotics & Auto, E&TC, CSE, AIML",
    batch: "2023–2027",
    fullacademicfees: "$5,976",
    goldenjubileescholarship: "$4,676",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    adminfees: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation, E&TC",
    batch: "2024–2028",
    fullacademicfees: "$5,809",
    goldenjubileescholarship: "$4,509",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    adminfees: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "CSE, AIML",
    batch: "2024–2028",
    fullacademicfees: "$6,368",
    goldenjubileescholarship: "$5,068",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    adminfees: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "2025–2029",
    fullacademicfees: "$5,875",
    goldenjubileescholarship: "$4,575",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    adminfees: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "E&TC",
    batch: "2025–2029",
    fullacademicfees: "$6,100",
    goldenjubileescholarship: "$4,800",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    adminfees: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "CSE, AIML",
    batch: "2025–2029",
    fullacademicfees: "$7,000",
    goldenjubileescholarship: "$5,700",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    adminfees: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
];
// Section B: Annual Academic Fees --------
export const btech2ndFeestructure2026_27ForeignNationalSecBColumns = [
  {
    key: "programmename",
    title: "Programme(s)",
  },
  {
    key: "batch",
    title: "DSY Batch",
  },
  {
    key: "fullacademicfees",
    title: "Full Academic Fees",
  },
  {
    key: "goldenjubileescholarship",
    title: "GJ Scholarship",
  },
  {
    key: "academicfeespayable",
    title: "Academic Fee Payable",
  },
  {
    key: "institutedeposit",
    title: "Inst. Deposit",
  },
  {
    key: "scieadmin",
    title: "SCIE Admin",
  },
  {
    key: "academicfeeinstallment1",
    title: "Academic Fee Instalment 1",
  },
  {
    key: "academicfeeinstallment2",
    title: "Academic Fee Instalment 2",
  },
];
export const btech2ndFeestructure2026_27ForeignNationalSecBData = [
  {
    programmename: "Civil, Mech, Robotics & Auto, E&TC, CSE, AIML",
    batch: "DSY 2023–2027",
    fullacademicfees: "$5,976",
    goldenjubileescholarship: "$4,676",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    scieadmin: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation, E&TC",
    batch: "DSY 2024–2028",
    fullacademicfees: "$5,809",
    goldenjubileescholarship: "$4,509",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    scieadmin: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2024–2028",
    fullacademicfees: "$6,368",
    goldenjubileescholarship: "$5,068",
    academicfeespayable: "$1,300",
    institutedeposit: "—",
    scieadmin: "—",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "Civil, Mech, Robotics & Automation",
    batch: "DSY 2025–2029",
    fullacademicfees: "$5,875",
    goldenjubileescholarship: "$4,575",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    scieadmin: "$275",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "E&TC",
    batch: "DSY 2025–2029",
    fullacademicfees: "$6,100",
    goldenjubileescholarship: "$4,800",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    scieadmin: "$275",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
  {
    programmename: "CSE, AIML",
    batch: "DSY 2025–2029",
    fullacademicfees: "$7,000",
    goldenjubileescholarship: "$5,700",
    academicfeespayable: "$1,300",
    institutedeposit: "$275",
    scieadmin: "$275",
    academicfeeinstallment1: "$650",
    academicfeeinstallment2: "$650",
  },
];
// Foreign Nationals End Here--------------

// Hostel & Mess Start Here ---------------
export const btech2ndFeestructure2026_27HostelMessColumns = [
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
export const btech2ndFeestructure2026_27HostelMessData = [
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
// Hostel & Mess End Here -----------------
// --------SIT Pune BTech 2nd Subsequent Fees 2026-27 Start Here ---------------------------------------







// --------SIT Pune MTech Fee Structure 2026-27 Start Here ---------------------------------------
// Indian Students Start Here -------------
// Section A: Annual Academic Fees --------
export const MtechFeestructure2026_27SecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "academicfees",
    title: "Academic Fees (Per Annum)",
  },
  {
    key: "institutedeposit",
    title: "Institute Deposit (Refundable)",
  },
  {
    key: "totalpayable",
    title: "Total Payable",
  },
];
export const MtechFeestructure2026_27SecAData = [
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    academicfees: "₹3,00,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹3,20,000",
  },
  {
    programmename: "M.Tech Robotics & Artificial Intelligence",
    academicfees: "₹1,85,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹2,05,000",
  },
  {
    programmename: "M.Tech Automotive Technology",
    academicfees: "₹1,85,000",
    institutedeposit: "₹20,000",
    totalpayable: "₹2,05,000",
  },
];
// Section B: Annual Academic Fees --------
export const MtechFeestructure2026_27SecBColumns = [
  {
    key: "programmename",
    title: "Programme / Fee Head",
  },
  {
    key: "year",
    title: "Year",
  },
  {
    key: "feetype",
    title: "",
  },
  {
    key: "installment1",
    title: "Instalment 1",
  },
  {
    key: "installment2",
    title: "Instalment 2",
  },
];
export const MtechFeestructure2026_27SecBData = [
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    year: "1st Year",
    feetype: "Academic Fees (Per Annum)",
    installment1: "₹1,50,000",
    installment2: "₹1,50,000",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    year: "1st Year",
    feetype: "Institute Deposit (Refundable)",
    installment1: "₹20,000",
    installment2: "-",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    year: "1st Year",
    feetype: "Total Instalment",
    installment1: "₹1,70,000",
    installment2: "₹1,50,000",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    year: "1st Year",
    feetype: "Due Dates",
    installment1: "At Admission",
    installment2: "25-Nov-2026",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    year: "2nd Year",
    feetype: "Academic Fees (Per Annum)",
    installment1: "₹1,50,000",
    installment2: "₹1,50,000",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    year: "2nd Year",
    feetype: "Total Instalment",
    installment1: "₹1,50,000",
    installment2: "₹1,50,000",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    year: "2nd Year",
    feetype: "Due Dates",
    installment1: "25-Jun-2027",
    installment2: "25-Nov-2027",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    year: "1st Year",
    feetype: "Academic Fees (Per Annum)",
    installment1: "₹92,500",
    installment2: "₹92,500",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    year: "1st Year",
    feetype: "Institute Deposit (Refundable)",
    installment1: "₹20,000",
    installment2: "-",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    year: "1st Year",
    feetype: "Total Instalment",
    installment1: "₹1,12,500",
    installment2: "₹92,500",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    year: "1st Year",
    feetype: "Due Dates",
    installment1: "At Admission",
    installment2: "25-Nov-2026",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    year: "2nd Year",
    feetype: "Academic Fees (Per Annum)",
    installment1: "₹92,500",
    installment2: "₹92,500",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    year: "2nd Year",
    feetype: "Total Instalment",
    installment1: "₹92,500",
    installment2: "₹92,500",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    year: "2nd Year",
    feetype: "Due Dates",
    installment1: "25-Jun-2027",
    installment2: "25-Nov-2027",
  },
];
// Indian Students End Here ---------------
// NRI/PIO/OCI Start Here------------------
// Section A: Annual Academic Fees --------
export const MtechFeestructure2026_27NRISecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "academicfees",
    title: "Academic Fees (A)",
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
export const MtechFeestructure2026_27NRISecAData = [
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    academicfees: "$5,500",
    institutedeposit: "$275",
    adminfees: "$550",
    totalpayable: "$6,325",
  },
  {
    programmename: "M.Tech Robotics & Artificial Intelligence",
    academicfees: "$3,650",
    institutedeposit: "$275",
    adminfees: "$550",
    totalpayable: "$4,475",
  },
  {
    programmename: "M.Tech Automotive Technology",
    academicfees: "$3,650",
    institutedeposit: "$275",
    adminfees: "$550",
    totalpayable: "$4,475",
  },
];
// Section B: Annual Academic Fees --------
export const MtechFeestructure2026_27NRISecBColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "feetype",
    title: "",
  },
  {
    key: "installment1",
    title: "1st Year 2026–27 Inst. 1",
  },
  {
    key: "installment2",
    title: "1st Year 2026–27 Inst. 2",
  },
  {
    key: "installment2",
    title: "1st Year 2026–27 Inst. 3",
  },
  {
    key: "installment3",
    title: "2nd Year 2027–28 Inst. 1",
  },
  {
    key: "installment4",
    title: "2nd Year 2027–28 Inst. 2",
  },
];
export const MtechFeestructure2026_27NRISecBData = [
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    feetype: "Admin Fees (non-refund.)",
    installment1: "$550",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    feetype: "Academic Fees (per annum)",
    installment1: "$540",
    installment2: "$2,480",
    installment3: "$2,480",
    installment4: "$2,750",
    installment5: "$2,750",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    feetype: "Institute Deposit (refund.)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    feetype: "Total Instalment",
    installment1: "$1,365",
    installment2: "$2,480",
    installment3: "$2,480",
    installment4: "$2,750",
    installment5: "$2,750",
  },
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    feetype: "Due Date",
    installment1: "At offer acceptance",
    installment2: "At reporting",
    installment3: "25-Nov-2026",
    installment4: "25-Jun-2027",
    installment5: "25-Nov-2027",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Admin Fees (non-refund.)",
    installment1: "$550",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Academic Fees (per annum)",
    installment1: "$540",
    installment2: "$1,555",
    installment3: "$1,555",
    installment4: "$1,825",
    installment5: "$1,825",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Institute Deposit (refund.)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Total Instalment",
    installment1: "$1,365",
    installment2: "$1,555",
    installment3: "$1,555",
    installment4: "$1,825",
    installment5: "$1,825",
  },
  {
    programmename:
      "M.Tech Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Due Date",
    installment1: "At offer acceptance",
    installment2: "At reporting",
    installment3: "25-Nov-2026",
    installment4: "25-Jun-2027",
    installment5: "25-Nov-2027",
  },
];
// NRI/PIO/OCI End Here--------------------

// Foreign Nationals Start Here------------
// Section A: Annual Academic Fees --------
export const MtechFeestructure2026_27ForeignNationalSecAColumns = [
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
    title: "GJ Scholarship",
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
export const MtechFeestructure2026_27ForeignNationalSecAData = [
  {
    programmename: "M. Tech. (Artificial Intelligence & Machine Learning)",
    fullacademicfees: "$5,500",
    goldenjubileescholarship: "$3,550",
    academicfeespayable: "$1,950",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$2,500",
  },
  {
    programmename: "M.Tech Robotics & Artificial Intelligence",
    fullacademicfees: "$3,650",
    goldenjubileescholarship: "$1,700",
    academicfeespayable: "$1,950",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$2,500",
  },
  {
    programmename: "M.Tech Automotive Technology",
    fullacademicfees: "$3,650",
    goldenjubileescholarship: "$1,700",
    academicfeespayable: "$1,950",
    institutedeposit: "$275",
    adminfees: "$275",
    totalpayable: "$2,500",
  },
];
// Section B: Annual Academic Fees --------
export const MtechFeestructure2026_27ForeignNationalSecBColumns = [
  {
    key: "programmename",
    title: "Programme / Fee Head",
  },
  {
    key: "feetype",
    title: "",
  },
  {
    key: "installment1",
    title: "1st Year 2026–27 Inst. 1",
  },
  {
    key: "installment2",
    title: "1st Year 2026–27 Inst. 2",
  },
  {
    key: "installment3",
    title: "1st Year 2026–27 Inst. 3",
  },
  {
    key: "installment4",
    title: "2nd Year 2027–28 Inst. 1",
  },
  {
    key: "installment5",
    title: "2nd Year 2027–28 Inst. 2",
  },
];
export const MtechFeestructure2026_27ForeignNationalSecBData = [
  {
    programmename:
      "M. Tech. (Artificial Intelligence & Machine Learning) / Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Admin Fees (50% concession, non-refund.)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
  },
  {
    programmename:
      "M. Tech. (Artificial Intelligence & Machine Learning) / Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Academic Fees (per annum)",
    installment1: "$815",
    installment2: "$568",
    installment3: "$567",
    installment4: "$975",
    installment5: "$975",
  },
  {
    programmename:
      "M. Tech. (Artificial Intelligence & Machine Learning) / Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Institute Deposit (refundable)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
  },
  {
    programmename:
      "M. Tech. (Artificial Intelligence & Machine Learning) / Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Total Instalment",
    installment1: "$1,365",
    installment2: "$568",
    installment3: "$567",
    installment4: "$975",
    installment5: "$975",
  },
  {
    programmename:
      "M. Tech. (Artificial Intelligence & Machine Learning) / Robotics & Artificial Intelligence / Automotive Technology",
    feetype: "Due Date",
    installment1: "At offer acceptance",
    installment2: "At reporting",
    installment3: "25-Nov-2026",
    installment4: "25-Jun-2027",
    installment5: "25-Nov-2027",
  },
];
// Foreign Nationals End Here--------------

// Hostel & Mess Start Here ---------------
export const MtechFeestructure2026_27HostelMessColumns = [
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
export const MtechFeestructure2026_27HostelMessData = [
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
// Hostel & Mess End Here -----------------
// --------SIT Pune MTech Fee Structure 2026-27 End Here ---------------------------------------








// --------SIT Pune MTech ED Fee Structure 2026-27 Start Here ---------------------------------------
// Indian Students Start Here --------
// Section A: Annual Academic Fees --------
export const MtechEDFeestructure2026_27SecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "duration",
    title: "Duration",
  },
  {
    key: "firstyear",
    title: "1st Year",
  },
  {
    key: "secondyear",
    title: "2nd Year",
  },
  {
    key: "thirdyear",
    title: "3rd Year",
  },
  {
    key: "deposit",
    title: "Institute Deposit (Refundable)",
  },
];
export const MtechEDFeestructure2026_27SecAData = [
  {
    programmename: "M.Tech Engineering Design – Full Time",
    duration: "2 Years",
    firstyear: "₹40,000",
    secondyear: "₹40,000",
    thirdyear: "—",
    deposit: "₹ 20,000",
  },
  {
    programmename: "M.Tech Engineering Design – Part Time",
    duration: "3 Years",
    firstyear: "₹26,600",
    secondyear: "₹26,600",
    thirdyear: "₹26,800",
    deposit: "₹20,000",
  },
];
// Section B: Annual Academic Fees --------
export const MtechEDFeestructure2026_27SecBColumns = [
  {
    key: "feehead",
    title: "Fee Head",
    rowSpan: 2,
  },
  {
    key: "installment1",
    title: "Inst. 1",
  },
  {
    key: "installment2",
    title: "Inst. 2",
  },
  {
    key: "installment3",
    title: "Inst. 1",
  },
  {
    key: "installment4",
    title: "Inst. 2",
  },
];
export const MtechEDFeestructure2026_27SecBData = [
  {
    feehead: "Academic Fees (Per Annum)",
    installment1: "₹20,000",
    installment2: "₹20,000",
    installment3: "₹20,000",
    installment4: "₹20,000",
  },
  {
    feehead: "Institute Deposit (Refundable)",
    installment1: "₹20,000",
    installment2: "—",
    installment3: "—",
    installment4: "—",
  },
  {
    feehead: "Total Instalment",
    installment1: "₹40,000",
    installment2: "₹20,000",
    installment3: "₹20,000",
    installment4: "₹20,000",
    rowClass: "tableshighlight",
  },
  {
    feehead: "Due Date",
    installment1: "At Admission",
    installment2: "25-Nov-2026",
    installment3: "25-Jun-2027",
    installment4: "25-Nov-2027",
  },
];

// Section C: Annual Academic Fees --------
export const MtechEDFeestructure2026_27SecCColumns = [
  {
    key: "feehead",
    title: "Fee Head",
    rowSpan: 2,
  },
  {
    key: "installment1",
    title: "Inst. 1",
  },
  {
    key: "installment2",
    title: "Inst. 2",
  },
  {
    key: "installment3",
    title: "Inst. 1",
  },
  {
    key: "installment4",
    title: "Inst. 2",
  },
  {
    key: "installment5",
    title: "Inst. 1",
  },
  {
    key: "installment6",
    title: "Inst. 2",
  },
];
export const MtechEDFeestructure2026_27SecCData = [
  {
    feehead: "Academic Fees (Per Annum)",
    installment1: "₹13,300",
    installment2: "₹13,300",
    installment3: "₹13,300",
    installment4: "₹13,300",
    installment5: "₹13,400",
    installment6: "₹13,400",
  },
  {
    feehead: "Institute Deposit (Refundable)",
    installment1: "₹20,000",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
    installment6: "—",
  },
  {
    feehead: "Total Instalment",
    installment1: "₹33,300",
    installment2: "₹13,300",
    installment3: "₹13,300",
    installment4: "₹13,300",
    installment5: "₹13,400",
    installment6: "₹13,400",
    rowClass: "tableshighlight",
  },
  {
    feehead: "Due Date",
    installment1: "At Admission",
    installment2: "25-Nov-2026",
    installment3: "25-Jun-2027",
    installment4: "25-Nov-2027",
    installment5: "25-Jun-2028",
    installment6: "25-Nov-2028",
  },
];
// Indian Students End Here --------
// NRI/PIO/OCI Start Here-----------
// Section A: Annual Academic Fees --------
export const MtechEDFeestructure2026_27NRISecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "duration",
    title: "Duration",
  },
  {
    key: "firstyear",
    title: "1st Year",
  },
  {
    key: "secondyear",
    title: "2nd Year",
  },
  {
    key: "thirdyear",
    title: "3rd Year",
  },
  {
    key: "deposit",
    title: "Institute Deposit (Refundable)",
  },
];
export const MtechEDFeestructure2026_27NRISecAData = [
  {
    programmename: "M.Tech Engineering Design – Full Time",
    duration: "2 Years",
    firstyear: "$800",
    secondyear: "$800",
    thirdyear: "—",
    deposit: "$275",
  },
  {
    programmename: "M.Tech Engineering Design – Part Time",
    duration: "3 Years",
    firstyear: "$550",
    secondyear: "$550",
    thirdyear: "$550",
    deposit: "$275",
  },
];
// Section B: Annual Academic Fees --------
export const MtechEDFeestructure2026_27NRISecBColumns = [
  {
    key: "feehead",
    title: "Fee Head",
    rowSpan: 2,
  },
  {
    key: "installment1",
    title: "Inst. 1",
  },
  {
    key: "installment2",
    title: "Inst. 2",
  },
  {
    key: "installment3",
    title: "Inst. 1",
  },
  {
    key: "installment4",
    title: "Inst. 2",
  },
];
export const MtechEDFeestructure2026_27NRISecBData = [
  {
    feehead: "Academic Fees",
    installment1: "$400",
    installment2: "$400",
    installment3: "$400",
    installment4: "$400",
  },
  {
    feehead: "Institute Deposit (Refundable)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
  },
  {
    feehead: "Total Instalment",
    installment1: "$675",
    installment2: "$400",
    installment3: "$400",
    installment4: "$400",
    rowClass: "tableshighlight",
  },
  {
    feehead: "Due Date",
    installment1: "At offer acceptance",
    installment2: "25-Nov-2026",
    installment3: "25-Jun-2027",
    installment4: "25-Nov-2027",
  },
];
// Section C: Annual Academic Fees --------
export const MtechEDFeestructure2026_27NRISecCColumns = [
  {
    key: "feehead",
    title: "Fee Head",
    rowSpan: 2,
  },
  {
    key: "installment1",
    title: "Inst. 1",
  },
  {
    key: "installment2",
    title: "Inst. 2",
  },
  {
    key: "installment3",
    title: "Inst. 1",
  },
  {
    key: "installment4",
    title: "Inst. 2",
  },
  {
    key: "installment5",
    title: "Inst. 1",
  },
  {
    key: "installment6",
    title: "Inst. 2",
  },
];
export const MtechEDFeestructure2026_27NRISecCData = [
  {
    feehead: "Academic Fees",
    installment1: "$275",
    installment2: "$275",
    installment3: "$275",
    installment4: "$275",
    installment5: "$275",
    installment6: "$275",
  },
  {
    feehead: "Institute Deposit (Refundable)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
    installment6: "—",
  },
  {
    feehead: "Total Instalment",
    installment1: "$550",
    installment2: "$275",
    installment3: "$275",
    installment4: "$275",
    installment5: "$275",
    installment6: "$275",
    rowClass: "tableshighlight",
  },
  {
    feehead: "Due Date",
    installment1: "At offer acceptance",
    installment2: "25-Nov-2026",
    installment3: "25-Jun-2027",
    installment4: "25-Nov-2027",
    installment5: "25-Jun-2028",
    installment6: "25-Nov-2028",
  },
];
// NRI/PIO/OCI End Here-----------------

// Foreign Nationals Start Here---------
// Section A: Annual Academic Fees --------
export const MtechEDFeestructure2026_27ForeignNationalSecAColumns = [
  {
    key: "programmename",
    title: "Programme",
  },
  {
    key: "duration",
    title: "Duration",
  },
  {
    key: "fullacademicfees",
    title: "Full Fee",
  },
  {
    key: "goldenjubileescholarship",
    title: "GJ Scholarship",
  },
  {
    key: "firstyear",
    title: "1st Year",
  },
  {
    key: "secondyear",
    title: "2nd Year",
  },
  {
    key: "thirdyear",
    title: "3rd Year",
  },
  {
    key: "institutedeposit",
    title: "Institute Deposit (Refundable)",
  },
];
export const MtechEDFeestructure2026_27ForeignNationalSecAData = [
  {
    programmename: "M.Tech Engineering Design – Full Time",
    duration: "2 Years",
    fullacademicfees: "$800",
    goldenjubileescholarship: "$250",
    firstyear: "$550",
    secondyear: "$550",
    thirdyear: "—",
    institutedeposit: "$275",
  },
  {
    programmename: "M.Tech Engineering Design – Part Time",
    duration: "3 Years",
    fullacademicfees: "$550",
    goldenjubileescholarship: "$175",
    firstyear: "$375",
    secondyear: "$375",
    thirdyear: "$350",
    institutedeposit: "$275",
  },
];
// Section B: Annual Academic Fees --------
export const MtechEDFeestructure2026_27ForeignNationalSecBColumns = [
  {
    key: "feehead",
    title: "Fee Head",
    rowSpan: 2,
  },
  {
    key: "installment1",
    title: "Inst. 1",
  },
  {
    key: "installment2",
    title: "Inst. 2",
  },
  {
    key: "installment3",
    title: "Inst. 1",
  },
  {
    key: "installment4",
    title: "Inst. 2",
  },
];
export const MtechEDFeestructure2026_27ForeignNationalSecBData = [
  {
    feehead: "Academic Fees",
    installment1: "$275",
    installment2: "$275",
    installment3: "$275",
    installment4: "$275",
  },
  {
    feehead: "Institute Deposit (Refundable)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
  },
  {
    feehead: "Total Instalment",
    installment1: "$550",
    installment2: "$275",
    installment3: "$275",
    installment4: "$275",
    rowClass: "tableshighlight",
  },
  {
    feehead: "Due Date",
    installment1: "At offer acceptance",
    installment2: "25-Nov-2026",
    installment3: "25-Jun-2027",
    installment4: "25-Nov-2027",
  },
];
// Section C: Annual Academic Fees --------
export const MtechEDFeestructure2026_27ForeignNationalSecCColumns = [
  {
    key: "feehead",
    title: "Fee Head",
    rowSpan: 2,
  },
  {
    key: "installment1",
    title: "Inst. 1",
  },
  {
    key: "installment2",
    title: "Inst. 2",
  },
  {
    key: "installment3",
    title: "Inst. 1",
  },
  {
    key: "installment4",
    title: "Inst. 2",
  },
  {
    key: "installment5",
    title: "Inst. 1",
  },
  {
    key: "installment6",
    title: "Inst. 2",
  },
];
export const MtechEDFeestructure2026_27ForeignNationalSecCData = [
  {
    feehead: "Academic Fees",
    installment1: "$188",
    installment2: "$187",
    installment3: "$188",
    installment4: "$187",
    installment5: "$175",
    installment6: "$175",
  },
  {
    feehead: "Institute Deposit (Refundable)",
    installment1: "$275",
    installment2: "—",
    installment3: "—",
    installment4: "—",
    installment5: "—",
    installment6: "—",
  },
  {
    feehead: "Total Instalment",
    installment1: "$463",
    installment2: "$187",
    installment3: "$188",
    installment4: "$187",
    installment5: "$175",
    installment6: "$175",
    rowClass: "tableshighlight",
  },
  {
    feehead: "Due Date",
    installment1: "At offer acceptance",
    installment2: "25-Nov-2026",
    installment3: "25-Jun-2027",
    installment4: "25-Nov-2027",
    installment5: "25-Jun-2028",
    installment6: "25-Nov-2028",
  },
];
// Foreign Nationals End Here--------------

// Hostel & Mess Start Here ---------------
export const MtechEDFeestructure2026_27HostelMessColumns = [
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
export const MtechEDFeestructure2026_27HostelMessData = [
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
// Hostel & Mess End Here -----------------
// --------SIT Pune MTech ED Fee Structure 2026-27 End Here ---------------------------------------