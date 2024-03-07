import { isUndefined } from "util";
import "./dataCard.css";
import { _USER_DATA } from "@/types";

const Field = ({ prop, value }: { prop: String; value: String | number }) => {
  return (
    <div className="flex border-2 border-[color:rgb(var(--pine-rgb))] rounded-2xl grid-item ">
      <div className=" bg-[rgb(var(--pine-rgb))] p-3 pr-8 rounded-r-[45px] rounded-l-2xl  text-black font-bold text-left">
        {prop}
      </div>
      <div className=" p-3">{value}</div>
    </div>
  );
};

const DataCard = ({ data }: { data: _USER_DATA | undefined }) => {
  const data1 = {
    AadharCardNo: "",
    Awd: "",
    Batch: "S",
    BelongstoMinority: "",
    Bhawan: "",
    BloodGroup: "",
    Category: "GEN",
    Categoryrank: "",
    City: "",
    ContactNo: "",
    DateofBirth: "2004-06-05T00:00:00",
    DepartmentAlphaCode: "MA",
    DepartmentID: "15",
    DepartmentName: "Mathematics",
    DisabilityType: "",
    EmailID: "ameykhandalkar5921@gmail.com",
    EnrollmentNo: "22323004",
    ExamQualified: "JEE Advanced 2022",
    Expr1: "1",
    FatherIncome: "",
    FatherMobileNo: "9850302025",
    FatherOccupation: "",
    Fathersname: "RAVINDRA KHANDALKAR",
    FellowShip: "",
    Gender: "Male",
    IITREmailID: "amey_rk@ma.iitr.ac.in",
    IsPrep: "F",
    LocalGaurdian: "",
    LocalGaurdianAddress: "",
    LocalGaurdianPhone: "",
    MaritalStatus: "",
    Mobileno: "9284803409",
    MotherIncome: "",
    MotherMobileNo: "9518550115",
    MotherName: "AKANKSHA KHANDALKAR",
    MotherOccupation: "",
    Name: "AMEY RAVINDRA KHANDALKAR",
    NameH: "",
    NameofMinority: "",
    Nationality: "INDIAN",
    PEmailid: "",
    P_Email: "",
    Pcountry: "India",
    PermanentAddress:
      "ROONGTA VILLA, 296, , RAJEEV GANDHI NAGAR, KOTA, RAJASTHAN, 324005",
    PersonwithDisability: "False",
    Pincode: "",
    Prgname: "BSMS",
    ProgramAlphaCode: "BSMSMA",
    ProgramID: "323",
    ProgramName: "BS-MS (MATHEMATICS AND COMPUTING)",
    RegCode: "8",
    Religion: "",
    Remark: "Temp password = EE&$*+Q",
    RoomNo: "",
    Score_Rank: "1545",
    SemNo: "",
    SemesterID: "121",
    StPic: "~/Student/images/22323004.jpg",
    StSig: "~/Student/signature/22323004.jpg",
    StStatus: "1",
    StartSession: "",
    State: "MAHARASHTRA",
    StateofDomicile: "MAHARASHTRA",
    StatusPHD: "19",
    StructureID: "161",
    SubBatch: "S3",
    SubCategory: "",
    SuperviserDetail: "",
    TitleofTheses: "",
    ValidityUpto: "",
    id: 5987,
  };

  return (
      <div className="w-screen md:w-[60%] p-6  rounded-3xl datacontainer">
        <span className="text-4xl border-b-2 border-[color:rgb(var(--iris-rgb))] font-bold ">
          {data?.Name}
        </span>
        <div className="   grid-container mt-8 ">
          {data == undefined ||
            data == null ||
            Object?.keys(data).map((key, index) => {
              if (key === "id" || key === "StSig") return null;
              return (
                <Field
                  key={index}
                  prop={key}
                  value={data[key as keyof _USER_DATA]}
                />
              );
            })}
        </div>
      </div>
  );
};

export default DataCard;
