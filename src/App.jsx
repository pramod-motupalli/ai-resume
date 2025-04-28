import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import DownloadButton from "./components/DownloadButton";

export default function App() {
  const [formData, setFormData] = useState({
    name: "", title: "", email: "", linkedin: "", location: "",
    profilePic: null, summary: "",
    experiences: [], 
    projects: [],            // ← new  
    education: [], 
    skills: [], 
    languages: [],           // now array of { name, level }
    certifications: [],
  });
  

  return (
    <div className="min-h-screen flex">
      {/* Left Form Panel */}
      <div className="w-1/4 bg-white p-4 shadow-lg flex flex-col justify-between">
        <div className="overflow-y-auto">
          <ResumeForm formData={formData} setFormData={setFormData} />
        </div>
        {/* Download Button at bottom */}
        <div className="mt-4">
          <DownloadButton />
        </div>
      </div>

      {/* Right Resume Preview */}
      <div className="w-3/4 bg-gray-50 p-8 overflow-y-auto flex flex-col items-center">
        <div id="resume" className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-2xl">
          <ResumePreview formData={formData} />
        </div>
      </div>
    </div>
  );
}
