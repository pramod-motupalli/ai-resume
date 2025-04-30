import { useState } from "react";

export default function ResumeForm({ formData, setFormData }) {
  const [experienceInput, setExperienceInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [languageInput, setLanguageInput] = useState({ name: "", level: 3 });
  const [certificationInput, setCertificationInput] = useState("");
  const [projectInput, setProjectInput] = useState({ name: "", git: "" });
  const [achievementInput, setAchievementInput] = useState("");
  // Education fields as an object
  const [educationInput, setEducationInput] = useState({
    institution: "",
    degree: "",
    from: "",
    to: "",
    aggregate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setFormData({ ...formData, photo: url });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, educationInput]
    });
    setEducationInput({ institution: "", degree: "", from: "", to: "", aggregate: "" });
  };

  return (
    <form className="flex flex-col space-y-6">
      {/* Personal Info */}
      <Section title="Personal Info">
        <div className="flex flex-col space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="input" onChange={handleInputChange} />
          <input type="text" name="title" placeholder="Title" className="input" onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" className="input" onChange={handleInputChange} />
          <input type="text" name="location" placeholder="Location" className="input" onChange={handleInputChange} />
          <input type="text" name="linkedin" placeholder="LinkedIn URL" className="input" onChange={handleInputChange} />
          <input type="text" name="github" placeholder="GitHub URL" className="input" onChange={handleInputChange} />
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleProfilePicUpload} className="mt-1" />
          </div>
          <textarea name="summary" rows="3" placeholder="Professional Summary" className="input w-full" onChange={handleInputChange}></textarea>
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <ListInput
          value={experienceInput}
          onChange={(v) => setExperienceInput(v)}
          onAdd={() => { setFormData({ ...formData, experiences: [...formData.experiences, experienceInput] }); setExperienceInput(""); }}
          placeholder="Add Experience"
        />
      </Section>

      {/* Education with detailed inputs */}
      <Section title="Education">
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Institution / College Name"
            className="input"
            value={educationInput.institution}
            onChange={(e) => setEducationInput({ ...educationInput, institution: e.target.value })}
          />
          <input
            type="text"
            placeholder="Degree (e.g., B.Sc Computer Science)"
            className="input"
            value={educationInput.degree}
            onChange={(e) => setEducationInput({ ...educationInput, degree: e.target.value })}
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="From Year (e.g., 2015)"
              className="input w-1/2"
              value={educationInput.from}
              onChange={(e) => setEducationInput({ ...educationInput, from: e.target.value })}
            />
            <input
              type="text"
              placeholder="To Year (e.g., 2019)"
              className="input w-1/2"
              value={educationInput.to}
              onChange={(e) => setEducationInput({ ...educationInput, to: e.target.value })}
            />
          </div>
          <input
            type="text"
            placeholder="Aggregate / GPA (e.g., 3.8)"
            className="input"
            value={educationInput.aggregate}
            onChange={(e) => setEducationInput({ ...educationInput, aggregate: e.target.value })}
          />
          <button
            type="button"
            className="btn bg-cyan-500 text-white px-4 py-2 rounded self-start"
            onClick={addEducation}
          >
            Add Education
          </button>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <ListInput
          value={skillInput}
          onChange={(v) => setSkillInput(v)}
          onAdd={() => { setFormData({ ...formData, skills: [...formData.skills, skillInput] }); setSkillInput(""); }}
          placeholder="Add Skill"
        />
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <div className="flex flex-col space-y-2">
          <input type="text" placeholder="Language" className="input" value={languageInput.name} onChange={(e) => setLanguageInput({ ...languageInput, name: e.target.value })} />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, idx) => (
              <button key={idx} type="button" className={idx < languageInput.level ? "text-yellow-500" : "text-gray-300"} onClick={() => setLanguageInput({ ...languageInput, level: idx + 1 })}>★</button>
            ))}
          </div>
          <button type="button" className="btn bg-cyan-500 text-white px-4 py-2 rounded self-start" onClick={() => { setFormData({ ...formData, languages: [...formData.languages, languageInput] }); setLanguageInput({ name: "", level: 3 }); }}>Add Language</button>
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <ListInput
          value={certificationInput}
          onChange={(v) => setCertificationInput(v)}
          onAdd={() => { setFormData({ ...formData, certifications: [...formData.certifications, certificationInput] }); setCertificationInput(""); }}
          placeholder="Add Certification"
        />
      </Section>

      {/* Achievements */}
      <Section title="Achievements">
        <ListInput
          value={achievementInput}
          onChange={(v) => setAchievementInput(v)}
          onAdd={() => { setFormData({ ...formData, achievements: [...formData.achievements, achievementInput] }); setAchievementInput(""); }}
          placeholder="Add Achievement"
        />
      </Section>
    </form>
  );
}

// Helper components
function Section({ title, children }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-cyan-700 border-b pb-2 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function ListInput({ value, onChange, onAdd, placeholder }) {
  return (
    <div className="flex flex-col">
      <input type="text" placeholder={placeholder} className="input" value={value} onChange={(e) => onChange(e.target.value)} />
      <button type="button" className="btn bg-teal-500 text-white px-4 py-2 rounded mt-2 self-start" onClick={onAdd}>Add</button>
    </div>
  );
}