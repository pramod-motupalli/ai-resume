import { useState } from "react";

export default function ResumeForm({ formData, setFormData }) {
  const [experienceInput, setExperienceInput] = useState("");
  const [educationInput, setEducationInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [languageInput, setLanguageInput] = useState({ name: "", level: 3 });
  const [certificationInput, setCertificationInput] = useState("");
  const [projectInput, setProjectInput] = useState({ name: "", git: "" });
  const [achievementInput, setAchievementInput] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setFormData({ ...formData, profilePic: url });
  };

  const addExperience = () => {
    if (experienceInput) {
      setFormData({
        ...formData,
        experiences: [...formData.experiences, experienceInput],
      });
      setExperienceInput("");
    }
  };

  const addEducation = () => {
    if (educationInput) {
      setFormData({
        ...formData,
        education: [...formData.education, educationInput],
      });
      setEducationInput("");
    }
  };

  const addSkill = () => {
    if (skillInput) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput],
      });
      setSkillInput("");
    }
  };

  const addLanguage = () => {
    if (languageInput.name) {
      setFormData({
        ...formData,
        languages: [...formData.languages, languageInput],
      });
      setLanguageInput({ name: "", level: 3 });
    }
  };

  const addCertification = () => {
    if (certificationInput) {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, certificationInput],
      });
      setCertificationInput("");
    }
  };

  const addProject = () => {
    if (projectInput.name) {
      setFormData({
        ...formData,
        projects: [...formData.projects, projectInput],
      });
      setProjectInput({ name: "", git: "" });
    }
  };

  const addAchievement = () => {
    if (achievementInput) {
      setFormData({
        ...formData,
        achievements: [...formData.achievements, achievementInput],
      });
      setAchievementInput("");
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold text-cyan-600">Resume Builder</h2>

      {/* Personal Information */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="input"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="input"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        className="input"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        className="input"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        className="input"
        onChange={handleInputChange}
      />

      {/* Profile Picture Upload */}
      <input type="file" accept="image/*" onChange={handleProfilePicUpload} />

      {/* Professional Summary */}
      <textarea
        name="summary"
        rows="3"
        placeholder="Professional Summary"
        className="input"
        onChange={handleInputChange}
      ></textarea>

      {/* Experience */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-700">Experience</h3>
        <input
          type="text"
          placeholder="Add Experience"
          className="input"
          value={experienceInput}
          onChange={(e) => setExperienceInput(e.target.value)}
        />
        <button
          className="btn bg-teal-500 text-white px-4 py-2 rounded mt-2"
          onClick={addExperience}
        >
          Add Experience
        </button>
      </div>

      {/* Projects */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-700">Projects</h3>
        <input
          type="text"
          placeholder="Project Name"
          className="input"
          value={projectInput.name}
          onChange={(e) =>
            setProjectInput({ ...projectInput, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="GitHub Link"
          className="input"
          value={projectInput.git}
          onChange={(e) =>
            setProjectInput({ ...projectInput, git: e.target.value })
          }
        />
        <button
          className="btn bg-cyan-500 text-white px-4 py-2 rounded mt-2"
          onClick={addProject}
        >
          Add Project
        </button>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-700">Education</h3>
        <input
          type="text"
          placeholder="Add Education"
          className="input"
          value={educationInput}
          onChange={(e) => setEducationInput(e.target.value)}
        />
        <button
          className="btn bg-teal-500 text-white px-4 py-2 rounded mt-2"
          onClick={addEducation}
        >
          Add Education
        </button>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-700">Skills</h3>
        <input
          type="text"
          placeholder="Add Skill"
          className="input"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <button
          className="btn bg-teal-500 text-white px-4 py-2 rounded mt-2"
          onClick={addSkill}
        >
          Add Skill
        </button>
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-700">Languages</h3>
        <input
          type="text"
          placeholder="Language"
          className="input"
          value={languageInput.name}
          onChange={(e) =>
            setLanguageInput({ ...languageInput, name: e.target.value })
          }
        />
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`${
                index < languageInput.level ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() =>
                setLanguageInput({ ...languageInput, level: index + 1 })
              }
            >
              ★
            </button>
          ))}
        </div>
        <button
          className="btn bg-cyan-500 text-white px-4 py-2 rounded mt-2"
          onClick={addLanguage}
        >
          Add Language
        </button>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-700">Certifications</h3>
        <input
          type="text"
          placeholder="Add Certification"
          className="input"
          value={certificationInput}
          onChange={(e) => setCertificationInput(e.target.value)}
        />
        <button
          className="btn bg-teal-500 text-white px-4 py-2 rounded mt-2"
          onClick={addCertification}
        >
          Add Certification
        </button>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-700">Achievements</h3>
        <input
          type="text"
          placeholder="Add Achievement"
          className="input"
          value={achievementInput}
          onChange={(e) => setAchievementInput(e.target.value)}
        />
        <button
          className="btn bg-teal-500 text-white px-4 py-2 rounded mt-2"
          onClick={addAchievement}
        >
          Add Achievement
        </button>
      </div>
    </div>
  );
}
