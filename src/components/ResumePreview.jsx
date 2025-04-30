import React from 'react';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';

export default function ResumePreview({ formData }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-8">
      {/* Header */}
      <div className="grid grid-cols-2 items-center mb-8">
        <div>
          <h1 className="text-5xl font-extrabold text-black">{formData.name || 'Your Name'}</h1>
          <p className="text-xl text-blue-600 mt-2">{formData.title || 'Your Title | Subtitle'}</p>
          <div className="flex flex-wrap gap-6 text-gray-600 mt-4">
            <div className="flex items-center gap-2"><Mail className="w-5 h-5" />{formData.email}</div>
            <div className="flex items-center gap-2"><Linkedin className="w-5 h-5" /><a href={formData.linkedin} className="hover:underline">{formData.linkedin}</a></div>
            <div className="flex items-center gap-2"><Github className="w-5 h-5" /><a href={formData.github} className="hover:underline">{formData.github}</a></div>
            <div className="flex items-center gap-2"><MapPin className="w-5 h-5" />{formData.location}</div>
          </div>
        </div>
        <div className="flex justify-end">
          {formData.photo && (
            <img src={formData.photo} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
          )}
        </div>
      </div>

      {/* Main two-column grid always active */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Skills */}
          {formData.skills?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Strengths */}
          {formData.strengths?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Strengths</h2>
              <ul className="space-y-4">
                {formData.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <s.icon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">{s.title}</p>
                      <p className="text-gray-700 text-sm">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {formData.languages?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Languages</h2>
              <ul className="space-y-3">
                {formData.languages.map((lang, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">{lang.name}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, idx) => (
                        <span
                          key={idx}
                          className={
                            idx < lang.level
                              ? 'w-3 h-3 rounded-full bg-blue-600'
                              : 'w-3 h-3 rounded-full bg-gray-300'
                          }
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {formData.certifications?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Certifications</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {formData.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Summary */}
          {formData.summary && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Summary</h2>
              <p className="text-gray-700">{formData.summary}</p>
            </section>
          )}

          {/* Experience */}
          {formData.experiences?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Experience</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {formData.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Projects */}
          {formData.projects?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Projects</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {formData.projects.map((p, i) => (
                  <li key={i}>
                    {p.name}
                    {p.git && (
                      <a href={p.git} className="ml-2 text-blue-600 hover:underline">
                        <Github className="w-4 h-4 inline" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {formData.education?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">Education</h2>
              <ul className="space-y-4 text-gray-800">
                {formData.education.map((edu, i) => (
                  <li key={i} className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-lg text-gray-900">{edu.institution}</p>
                    <p className="text-sm text-blue-600 mb-1">{edu.degree}</p>
                    <p className="text-sm">
                      {edu.from} &ndash; {edu.to} &bull; GPA: {edu.aggregate}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
