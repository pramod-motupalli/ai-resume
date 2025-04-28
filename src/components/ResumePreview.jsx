import React from 'react';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';

export default function ResumePreview({ formData }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Strip */}
      <div className="px-6 py-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-600">{formData.name || "Your Name"}</h1>
          <p className="text-lg">{formData.title || "Your Title"}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Contact Info with Icons Side by Side */}
        <div className="text-gray-700 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-teal-600" />
            <span>{formData.email || "your.email@example.com"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5 text-teal-600" />
            <a
              href={formData.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.linkedin || "linkedin.com/in/yourprofile"}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-teal-600" />
            <a
              href={formData.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.github || "github.com/yourusername"}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-600" />
            <span>{formData.location || "Your City, Country"}</span>
          </div>
        </div>

        {/* Summary */}
        {formData.summary && (
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Summary</h2>
            <p className="text-gray-800">{formData.summary}</p>
          </section>
        )}

        {/* Experience */}
        {formData.experiences?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Experience</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {formData.experiences.map((exp, idx) => (
                <li key={idx}>{exp}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Projects */}
        {formData.projects?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Projects</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {formData.projects.map((proj, idx) => (
                <li key={idx}>
                  <span className="font-medium">{proj.name}</span>{' '}
                  {proj.git && (
                    <a
                      href={proj.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      [GitHub]
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
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Education</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {formData.education.map((edu, idx) => (
                <li key={idx}>{edu}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {formData.skills?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Skills</h2>
            <ul className="flex flex-wrap gap-2 text-gray-800">
              {formData.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages with Star Rating */}
        {formData.languages?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Languages</h2>
            <div className="space-y-3">
              {formData.languages.map((lang, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm text-gray-700 mb-1">
                    <span>{lang.name}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, starIdx) => (
                        <svg
                          key={starIdx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={starIdx < lang.level ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 text-teal-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 17l3.09 1.545-1.182-3.634L18 10.362l-3.909-.455L12 7l-1.091 2.907L7 10.362l4.091 4.549L9.91 18.545z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {formData.certifications?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Certifications</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {formData.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {formData.achievements?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Achievements</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {formData.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
