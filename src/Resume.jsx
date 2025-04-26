import React from 'react';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-indigo-600">John Doe</h1>
          <p className="text-lg text-gray-600">Full Stack Developer</p>
        </div>
        <div className="text-sm text-gray-500 space-y-1">
          <p>Email: john.doe@example.com</p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Location: New York, NY</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
        </div>
      </header>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
        <p className="text-sm text-gray-700">
          Passionate Full Stack Developer with 5+ years building scalable web apps using React, Node.js, and Python.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience</h2>
        <div className="space-y-4 text-sm text-gray-700 list-disc list-inside">
          <div>
            <h3 className="font-semibold">Software Engineer | TechCorp</h3>
            <p className="text-gray-600">Jun 2020 – Present</p>
            <ul className="list-disc pl-5">
              <li>Built web apps with React and Node.js, improving performance by 30%.</li>
              <li>Collaborated in agile teams to ship features weekly.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Junior Developer | WebWorks</h3>
            <p className="text-gray-600">Jan 2018 – May 2020</p>
            <ul className="list-disc pl-5">
              <li>Implemented client-side features in JavaScript and jQuery.</li>
              <li>Maintained project documentation and conducted code reviews.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
        <div className="text-sm text-gray-700">
          <h3 className="font-semibold">B.Sc. in Computer Science</h3>
          <p className="text-gray-600">University of Technology, 2017</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
        <p className="text-sm text-gray-700">
          JavaScript, React, Node.js, MongoDB, Tailwind CSS
        </p>
      </section>
    </div>
  );
}
