import React from 'react';
import './index.css';
import { jsPDF } from 'jspdf';
import {
  Mail,
  Linkedin,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Badge,
  Globe,
} from "lucide-react";

const primaryColor = 'indigo-600'; 
const secondaryColor = 'gray-600';
const accentColor = 'indigo-500'; 
const backgroundColor = 'gray-50';
const cardBackgroundColor = 'white';

const resumeData = {
    // your resumeData remains the same
};

function Header({ personal = {} }) {
  return (
      <div className={`mb-6 border-b border-${accentColor}-200 pb-3`}>
          <h1 className={`text-3xl font-bold text-${primaryColor}`}>{personal.name || "Name Here"}</h1>
          <p className={`text-lg text-${secondaryColor}`}>{personal.title || "Title Here"}</p>
          <div className="flex items-center text-sm text-gray-600 mt-1">
              <Mail className="mr-2 h-4 w-4" />
              <a href={`mailto:${personal.email}`} className="mr-3 hover:text-blue-500">{personal.email || "email@example.com"}</a>
              <Linkedin className="mr-2 h-4 w-4" />
              <a href={personal.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="mr-3 hover:text-blue-500">{personal.linkedin || "linkedin.com"}</a>
              <MapPin className="mr-2 h-4 w-4" />
              <span>{personal.location || "Location"}</span>
          </div>
      </div>
  );
}


function SectionTitle({ title }) {
    return <h2 className={`text-2xl font-bold text-${primaryColor} mb-4 tracking-wide`}>{title.toUpperCase()}</h2>;
}

function Summary({ summary }) {
    return (
        <section className="mb-8">
            <SectionTitle title="Summary" />
            <p className={`text-${secondaryColor} leading-relaxed`}>{summary}</p>
        </section>
    );
}

function KeyAchievements({ achievements }) {
    return (
        <section className="mb-8">
            <SectionTitle title="Key Achievements" />
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                {achievements.map((achievement, index) => (
                    <li key={index}>
                        <span className={`font-bold text-${accentColor}`}>{achievement.title}:</span> {achievement.description}
                    </li>
                ))}
            </ul>
        </section>
    );
}

function ExperienceItem({ title, company, location, startDate, endDate, description }) {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
                <Briefcase className="h-4 w-4" /> {company}, {location} | {startDate} - {endDate}
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                {description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

function Experience({ experience }) {
    return (
        <section className="mb-8">
            <SectionTitle title="Experience" />
            {experience.map((item, index) => (
                <ExperienceItem key={index} {...item} />
            ))}
        </section>
    );
}

function EducationItem({ degree, university, startDate, endDate, location }) {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800">{degree}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
                <GraduationCap className="h-4 w-4" /> {university}, {location} | {startDate} - {endDate}
            </p>
        </div>
    );
}

function Education({ education }) {
    return (
        <section className="mb-8">
            <SectionTitle title="Education" />
            {education.map((item, index) => (
                <EducationItem key={index} {...item} />
            ))}
        </section>
    );
}

function Skills({ skills }) {
    return (
        <section className="mb-8">
            <SectionTitle title="Skills" />
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span key={index} className={`bg-${accentColor}-100 text-${accentColor}-700 border border-${accentColor}-300 rounded-full px-3 py-1 text-sm font-medium shadow-sm`}>
                        <Star className="inline-block h-4 w-4 mr-1" />
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

function Certifications({ certifications }) {
    return (
        <section className="mb-8">
            <SectionTitle title="Certifications" />
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                {certifications.map((certification, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Badge className="h-4 w-4 text-indigo-400" />
                        {certification}
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Languages({ languages }) {
    return (
        <section className="mb-8">
            <SectionTitle title="Languages" />
            <ul className="space-y-2">
                {languages.map((lang, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                        <Globe className="h-4 w-4 text-indigo-400" />
                        {lang.language}: <span className={`font-semibold text-${accentColor}`}>{lang.proficiency}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function App() {
    const downloadResumePdf = () => {
        const pdf = new jsPDF();
        const element = document.getElementById('resume-content');

        if (element) {
            pdf.html(element, {
                callback: (doc) => {
                    doc.save('ellen_johnson_resume.pdf');
                },
                margin: [10, 10, 10, 10],
                autoPaging: 'text',
                x: 0,
                y: 0,
                width: pdf.internal.pageSize.getWidth(),
                windowWidth: document.documentElement.offsetWidth,
            });
        } else {
            alert('Could not find resume content to download.');
        }
    };

    return (
        <div className={`bg-${backgroundColor} min-h-screen p-8 flex flex-col items-center`}>
            <div id="resume-content" className={`bg-${cardBackgroundColor} shadow-2xl rounded-2xl p-10 w-full max-w-4xl mb-8 animate-fadeIn`}>
                <Header personal={resumeData.personal} />
                <Summary summary={resumeData.summary} />
                <KeyAchievements achievements={resumeData.keyAchievements} />
                <Experience experience={resumeData.experience} />
                <Education education={resumeData.education} />
                <Skills skills={resumeData.skills} />
                <Certifications certifications={resumeData.certifications} />
                <Languages languages={resumeData.languages} />
            </div>
            <button
                className={`bg-${accentColor} hover:bg-${accentColor}-700 transition-colors duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg`}
                onClick={downloadResumePdf}
            >
                Download PDF
            </button>
        </div>
    );
}

export default App;
