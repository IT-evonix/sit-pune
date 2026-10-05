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
    vocationalCourse: "Address Proof(Electricity Bill/ Aadhar Card/ Driving License)",
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
    contactPerson:"Ms. Vaishnavi Waychal",
    contactNumber: "7262890505",
  },
  {
    name: "B.Tech Civil Engineering",
    contactPerson:"Dr. Sagar Kolekar",
    contactNumber: "7741805435",
  },
  {
    name: "B.Tech Computer Science and Engineering	",
    contactPerson:"Ms. Sonali Kadam",
    contactNumber: "9112290236",
  },
  {
    name: "B.Tech Electronics and Telecommunication Engineering",
    contactPerson:"Ms. Prajala Adhav / Ms. Priti Kulkarni",
    contactNumber: "7262810404",
  },
  {
    name: "B.Tech Mechanical Engineering",
    contactPerson:"Mr. Vishal Sharma",
    contactNumber: "7262850404",
  },
  {
    name: "B.Tech Robotics and Automation",
    contactPerson:"Mr. Narayan Sutar",
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
    contactPerson:"Mr. Pranav Gawande",
    contactNumber: "9112290107",
  },
  {
    name: "M.Tech Automotive Technology",
    contactPerson:"Mr. Vishal Sharma",
    contactNumber: "7262850404",
  },
  {
    name: "Robotics and Artificial Intelligence",
    contactPerson:"Mr. Sunil Chavat",
    contactNumber: "7262044505",
  },
  {
    name: "M.Tech Geoinformatics",
    contactPerson:"	Ms. Sonal / Ms. Vrushali",
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
