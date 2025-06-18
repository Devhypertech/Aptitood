"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import Button from "@/components/Button";
import { Eye, X } from "lucide-react";
import DashboardLayout from "@/components/Layouts/dashboardLayout";

export default function CandidateProfilePage() {
  const [profilePhoto, setProfilePhoto] = useState("/images/avatar.png");
  const [portfolioFiles, setPortfolioFiles] = useState<File[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isContactOpen, setContactOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

const [experiences, setExperiences] = useState<
  {
    title: string;
    company: string;
    description: string;
    from: string;
    to: string;
  }[]
>([]);

const [jobTitle, setJobTitle] = useState("");
const [companyName, setCompanyName] = useState("");
const [description, setDescription] = useState("");
const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");

const [educationList, setEducationList] = useState<
  {
    school: string;
    degree: string;
    field: string;
    from: string;
    to: string;
  }[]
>([]);

const [schoolName, setSchoolName] = useState("");
const [degreeName, setDegreeName] = useState("");
const [fieldName, setFieldName] = useState("");
const [eduFrom, setEduFrom] = useState("");
const [eduTo, setEduTo] = useState("");

const [certList, setCertList] = useState<
  {
    institute: string;
    course: string;
    duration: string;
    year: string;
  }[]
>([]);

const [instituteName, setInstituteName] = useState("");
const [courseName, setCourseName] = useState("");
const [certDuration, setCertDuration] = useState("");
const [certYear, setCertYear] = useState("");

const [contactInfo, setContactInfo] = useState<{
  email: string;
  phone: string;
  address: string;
  aboutMe?: string;
} | null>(null);
const [aboutMe, setAboutMe] = useState("");

const [skills, setSkills] = useState<string[]>([]);
const [newSkill, setNewSkill] = useState("");
const [isSkillOpen, setSkillOpen] = useState(false);

  const [educationInput, setEducationInput] = useState("");
  const [certInput, setCertInput] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [isExperienceOpen, setExperienceOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);
  const [isCertOpen, setCertOpen] = useState(false);

  const handlePortfolioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const valid = files.filter(file => ["image/png", "image/jpeg"].includes(file.type));
    if (portfolioFiles.length + valid.length > 8) {
      alert("You can only upload up to 8 portfolio images.");
      return;
    }
    setPortfolioFiles(prev => [...prev, ...valid]);
  };

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf" && file.size <= 2 * 1024 * 1024) {
      setCvFile(file);
    } else {
      alert("Please upload a PDF under 2MB.");
    }
  };

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && ["image/png", "image/jpeg"].includes(file.type)) {
      const objectUrl = URL.createObjectURL(file);
      setProfilePhoto(objectUrl);
    }
  };

  const removeImage = (index: number) => {
    setPortfolioFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getGridCols = (count: number) => {
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-2";
    if (count === 3) return "grid-cols-3";
    return "grid-cols-4";
  };

  return (
  <DashboardLayout>
    <main className="bg-white py-10 px-4 font-sans animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24">
              <Image
                key={profilePhoto}
                src={profilePhoto || "/images/avatar.png"}
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full object-cover border border-gray-300 w-24 h-24"
              />
              <label className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 bg-[#A28367] text-white text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-[#C7AE87] shadow">
                Upload
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleProfilePhotoChange}
                  className="hidden"
                />
              </label>
              {profilePhoto !== "/images/avatar.png" && (
                <button
                  onClick={() => setProfilePhoto("/images/avatar.png")}
                  className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-full hover:bg-red-700 shadow"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">Name</h2>
              <Button
                className="mt-1 text-sm text-white bg-[#A28367] hover:bg-[#C7AE87] px-3 py-1 rounded"
                onClick={() => {
                  // Pre-fill modal fields with current contact info if available
                  if (contactInfo) {
                    setEmail(contactInfo.email || "");
                    setPhone(contactInfo.phone || "");
                    setAddress(contactInfo.address || "");
                    setAboutMe(contactInfo.aboutMe || "");
                  }
                  setContactOpen(true);
                }}
              >
                Contact Info ✎
              </Button>
  {contactInfo && (
  <div className="mt-2 text-sm space-y-1">
    <p>Email: {contactInfo.email}</p>
    <p>Phone: {contactInfo.phone}</p>
    <p>Address: {contactInfo.address}</p>
    {contactInfo.aboutMe && (
      <p className="text-gray-600 italic pt-2">“{contactInfo.aboutMe}”</p>
    )}
  </div>
)}

            </div>
          </div>
          <Button className="bg-[#C7AE87]">Save changes</Button>
        </div>

        <section className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <label className={`px-4 py-1 rounded cursor-pointer text-white ${portfolioFiles.length >= 8 ? "bg-gray-400 cursor-not-allowed" : "bg-[#A28367] hover:bg-[#C7AE87]"}`}>
              Upload
              <input
                type="file"
                accept="image/png, image/jpeg"
                multiple
                onChange={handlePortfolioUpload}
                className="sr-only"
                disabled={portfolioFiles.length >= 8}
              />
            </label>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <div className="grid gap-4">
              <div className={`grid gap-4 ${getGridCols(Math.min(4, portfolioFiles.length))}`}>
                {portfolioFiles.slice(0, 4).map((file, index) => (
                  <div key={index} className="relative group overflow-hidden rounded h-24">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`portfolio-${index}`}
                      className="object-cover w-full h-full rounded transition duration-300 group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                      <button onClick={() => removeImage(index)} className="bg-red-600 text-white text-xs p-2 rounded-full hover:bg-red-700">
                        <X size={14} />
                      </button>
                      <button onClick={() => setSelectedImage(URL.createObjectURL(file))} className="bg-[#A28367] text-white text-xs p-2 rounded-full hover:bg-[#C7AE87]">
                        <Eye size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {portfolioFiles.length > 4 && (
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {portfolioFiles.slice(4).map((file, index) => (
                    <div key={index + 4} className="relative group overflow-hidden rounded h-24">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={`portfolio-${index + 4}`}
                        className="object-cover w-full h-full rounded transition duration-300 group-hover:opacity-30"
                      />
                      <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <button onClick={() => removeImage(index + 4)} className="bg-red-600 text-white text-xs p-2 rounded-full hover:bg-red-700">
                          <X size={14} />
                        </button>
                        <button onClick={() => setSelectedImage(URL.createObjectURL(file))} className="bg-[#A28367] text-white text-xs p-2 rounded-full hover:bg-[#C7AE87]">
                          <Eye size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center animate-fadeIn">
            <div className="relative">
              <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-white text-3xl hover:text-red-400">
                <X />
              </button>
              <Image
                src={selectedImage}
                alt="Full Preview"
                className="max-h-screen max-w-full rounded shadow-lg"
              />
            </div>
          </div>
        )}



     <section className="mt-10">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-semibold text-gray-800">CV</h3>
    <label className="flex items-center gap-2 bg-[#A28367] text-white px-4 py-1 rounded cursor-pointer hover:bg-[#C7AE87] transition duration-300 ease-in-out">
      Upload PDF
      <input
        type="file"
        accept="application/pdf"
        onChange={handleCvUpload}
        className="sr-only"
      />
    </label>
  </div>
  <div className="bg-gray-100 p-6 rounded min-h-[150px] flex items-center justify-center shadow-sm transition duration-500 animate-fadeIn">
    {cvFile ? (
      <p className="text-sm font-medium text-gray-700">
        📄 Uploaded: <span className="font-semibold">{cvFile.name}</span>
      </p>
    ) : (
      <p className="text-gray-500 text-sm italic">No CV uploaded yet</p>
    )}
  </div>
</section>

<section className="mt-10 space-y-8">
  {/* Experience Section */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-gray-800">Experiences</h3>
      <Button onClick={() => setExperienceOpen(true)} className="text-sm px-3 py-1 rounded bg-[#A28367] text-white hover:bg-[#C7AE87] transition">
        ＋ Add
      </Button>
    </div>
<ul className="mt-2 space-y-1 text-sm text-gray-700">
  {experiences.map((exp, idx) => (
    <li key={idx} className="bg-gray-100 p-3 rounded space-y-1">
      <p className="font-semibold">{exp.title} @ {exp.company}</p>
      <p className="text-xs text-gray-500">
        {exp.from} → {exp.to}
      </p>
      <p>{exp.description}</p>
    </li>
  ))}
</ul>

  </div>

  {/* Education Section */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-gray-800">Education</h3>
      <Button onClick={() => setEducationOpen(true)} className="text-sm px-3 py-1 rounded bg-[#A28367] text-white hover:bg-[#C7AE87] transition">
        ＋ Add
      </Button>
    </div>
<ul className="mt-2 space-y-1 text-sm text-gray-700">
  {educationList.map((edu, idx) => (
    <li key={idx} className="bg-gray-100 p-3 rounded space-y-1">
      <p className="font-semibold">{edu.degree} in {edu.field}</p>
      <p className="text-sm text-gray-600">{edu.school}</p>
      <p className="text-xs text-gray-500">
        {edu.from} → {edu.to}
      </p>
    </li>
  ))}
</ul>
  </div>

  {/* Certifications Section */}
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
      <Button onClick={() => setCertOpen(true)} className="text-sm px-3 py-1 rounded bg-[#A28367] text-white hover:bg-[#C7AE87] transition">
        ＋ Add
      </Button>
    </div>
<ul className="mt-2 space-y-1 text-sm text-gray-700">
  {certList.map((cert, idx) => (
    <li key={idx} className="bg-gray-100 p-3 rounded space-y-1">
      <p className="font-semibold">{cert.course}</p>
      <p className="text-sm text-gray-600">{cert.institute}</p>
      <p className="text-xs text-gray-500">Duration: {cert.duration} | Year: {cert.year}</p>
    </li>
  ))}
</ul>

  </div>
</section>

<div className="flex justify-between items-center mb-4 mt-6">
  <h3 className="text-xl font-semibold">Skills</h3>
  <Button onClick={() => setSkillOpen(true)}>Add Skill</Button>
</div>

<div className="flex flex-wrap gap-2 mt-2">
  {skills.length > 0 ? (
    skills.map((skill, idx) => (
      <span
        key={idx}
        className="px-3 py-1 bg-[#A28367] text-white text-sm rounded-full hover:bg-[#C7AE87] transition"
      >
        {skill}
      </span>
    ))
  ) : (
    <p className="text-gray-500 text-sm">No skills added yet.</p>
  )}
</div>


<Modal isOpen={isExperienceOpen} onClose={() => setExperienceOpen(false)} title="Add Experience">
  <input
    type="text"
    placeholder="Job Title"
    className="w-full p-2 border rounded mb-2"
    value={jobTitle}
    onChange={(e) => setJobTitle(e.target.value)}
  />
  <input
    type="text"
    placeholder="Company Name"
    className="w-full p-2 border rounded mb-2"
    value={companyName}
    onChange={(e) => setCompanyName(e.target.value)}
  />
  <textarea
    placeholder="Job Description"
    className="w-full p-2 border rounded mb-2"
    rows={3}
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
  <div className="flex gap-4 mb-2">
    <div className="flex-1">
      <label className="text-sm text-gray-700 mb-1 block">From</label>
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />
    </div>
    <div className="flex-1">
      <label className="text-sm text-gray-700 mb-1 block">To</label>
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />
    </div>
  </div>
  <Button
    className="mt-2"
    onClick={() => {
      setExperiences([
        ...experiences,
        {
          title: jobTitle,
          company: companyName,
          description,
          from: fromDate,
          to: toDate,
        },
      ]);
      setJobTitle("");
      setCompanyName("");
      setDescription("");
      setFromDate("");
      setToDate("");
      setExperienceOpen(false);
    }}
  >
    Save
  </Button>
</Modal>

<Modal isOpen={isEducationOpen} onClose={() => setEducationOpen(false)} title="Add Education">
  <input
    type="text"
    placeholder="School Name"
    className="w-full p-2 border rounded mb-2"
    value={schoolName}
    onChange={(e) => setSchoolName(e.target.value)}
  />
  <input
    type="text"
    placeholder="Degree Name"
    className="w-full p-2 border rounded mb-2"
    value={degreeName}
    onChange={(e) => setDegreeName(e.target.value)}
  />
  <input
    type="text"
    placeholder="Field of Study"
    className="w-full p-2 border rounded mb-2"
    value={fieldName}
    onChange={(e) => setFieldName(e.target.value)}
  />
  <div className="flex gap-4 mb-2">
    <div className="flex-1">
      <label className="text-sm text-gray-700 mb-1 block">From</label>
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={eduFrom}
        onChange={(e) => setEduFrom(e.target.value)}
      />
    </div>
    <div className="flex-1">
      <label className="text-sm text-gray-700 mb-1 block">To</label>
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={eduTo}
        onChange={(e) => setEduTo(e.target.value)}
      />
    </div>
  </div>
  <Button
    className="mt-2"
    onClick={() => {
      setEducationList([
        ...educationList,
        {
          school: schoolName,
          degree: degreeName,
          field: fieldName,
          from: eduFrom,
          to: eduTo,
        },
      ]);
      // reset fields
      setSchoolName("");
      setDegreeName("");
      setFieldName("");
      setEduFrom("");
      setEduTo("");
      setEducationOpen(false);
    }}
  >
    Save
  </Button>
</Modal>

<Modal isOpen={isCertOpen} onClose={() => setCertOpen(false)} title="Add Certification">
  <input
    type="text"
    placeholder="Institute Name"
    className="w-full p-2 border rounded mb-2"
    value={instituteName}
    onChange={(e) => setInstituteName(e.target.value)}
  />
  <input
    type="text"
    placeholder="Course Name"
    className="w-full p-2 border rounded mb-2"
    value={courseName}
    onChange={(e) => setCourseName(e.target.value)}
  />
  <input
    type="text"
    placeholder="Duration (e.g., 6 Months)"
    className="w-full p-2 border rounded mb-2"
    value={certDuration}
    onChange={(e) => setCertDuration(e.target.value)}
  />
  <input
    type="text"
    placeholder="Year"
    className="w-full p-2 border rounded mb-2"
    value={certYear}
    onChange={(e) => setCertYear(e.target.value)}
  />
  <Button
    className="mt-2"
    onClick={() => {
      setCertList([
        ...certList,
        {
          institute: instituteName,
          course: courseName,
          duration: certDuration,
          year: certYear,
        },
      ]);
      setInstituteName("");
      setCourseName("");
      setCertDuration("");
      setCertYear("");
      setCertOpen(false);
    }}
  >
    Save
  </Button>
</Modal>


    <Modal
  isOpen={isContactOpen}
  onClose={() => setContactOpen(false)}
  title={contactInfo ? "Edit Your Contact Information" : "Upload Your Contact Information"}
>
  <input
    type="email"
    placeholder="Email Address"
    className="w-full p-2 border rounded mb-2"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full p-2 border rounded mb-2"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />
  <input
    type="text"
    placeholder="Address"
    className="w-full p-2 border rounded mb-2"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
  />
  <textarea
    placeholder="About Me (short summary)"
    className="w-full p-2 border rounded mb-2"
    rows={4}
    value={aboutMe}
    onChange={(e) => setAboutMe(e.target.value)}
  />
  <Button
    className="mt-2"
    onClick={() => {
      setContactInfo({ email, phone, address, aboutMe });
      setEmail("");
      setPhone("");
      setAddress("");
      setAboutMe("");
      setContactOpen(false);
    }}
  >
    Save
  </Button>
</Modal>

<Modal isOpen={isSkillOpen} onClose={() => setSkillOpen(false)} title="Add a Skill">
  <input
    type="text"
    placeholder="e.g., React.js"
    className="w-full p-2 border rounded mb-2"
    value={newSkill}
    onChange={(e) => setNewSkill(e.target.value)}
  />
  <Button
    className="mt-2"
    onClick={() => {
      if (newSkill.trim()) {
        setSkills(prev => [...prev, newSkill.trim()]);
        setNewSkill("");
        setSkillOpen(false);
      }
    }}
  >
    Save
  </Button>
</Modal>

      </div>
    </main>
    </DashboardLayout>
  );
}