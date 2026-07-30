export const metadata = {
  title: "Dragon News | Career ",
  description:
    "Join NewsPulse and help shape the future of digital journalism.",
};

const jobs = [
  {
    id: 1,
    title: "Senior News Reporter",
    department: "Editorial",
    location: "Remote",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Sports Journalist",
    department: "Sports",
    location: "New York, USA",
    type: "Full Time",
  },
  {
    id: 3,
    title: "Video Producer",
    department: "Media",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 4,
    title: "Frontend Developer",
    department: "Technology",
    location: "Remote",
    type: "Full Time",
  },
  {
    id: 5,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Hybrid",
    type: "Full Time",
  },
  {
    id: 6,
    title: "Graphic Designer",
    department: "Creative",
    location: "Remote",
    type: "Part Time",
  },
];

export default function CareersPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero */}
      <section className="text-center mb-20">
        <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
          Careers at NewsPulse
        </span>

        <h1 className="text-5xl font-bold mt-6 mb-6">
          Build the Future of Journalism
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-8">
          Join a passionate team of journalists, developers, designers,
          photographers, and storytellers working together to deliver trusted
          news to millions of readers every day.
        </p>
      </section>

      {/* Why Join */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🚀</div>

            <h3 className="text-2xl font-bold mb-4">
              Career Growth
            </h3>

            <p className="text-gray-600 leading-7">
              Learn from experienced professionals and advance your career
              through mentorship, workshops, and exciting projects.
            </p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌍</div>

            <h3 className="text-2xl font-bold mb-4">
              Flexible Work
            </h3>

            <p className="text-gray-600 leading-7">
              Work remotely, in the office, or in a hybrid environment while
              collaborating with talented professionals worldwide.
            </p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">💡</div>

            <h3 className="text-2xl font-bold mb-4">
              Innovation
            </h3>

            <p className="text-gray-600 leading-7">
              We embrace creativity, technology, and fresh ideas to redefine
              digital journalism.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 rounded-3xl p-10 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Employee Benefits
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl mb-3">🏥</div>
            <h3 className="font-semibold text-lg">Health Insurance</h3>
          </div>

          <div>
            <div className="text-5xl mb-3">🏖️</div>
            <h3 className="font-semibold text-lg">Paid Time Off</h3>
          </div>

          <div>
            <div className="text-5xl mb-3">💻</div>
            <h3 className="font-semibold text-lg">Remote Work</h3>
          </div>

          <div>
            <div className="text-5xl mb-3">📚</div>
            <h3 className="font-semibold text-lg">Learning Budget</h3>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Current Openings
        </h2>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-2xl font-bold">
                  {job.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {job.department}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">
                  {job.location}
                </span>

                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                  {job.type}
                </span>
              </div>

              <button className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Hiring Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              1
            </div>

            <h3 className="mt-5 font-bold text-xl">
              Apply
            </h3>

            <p className="text-gray-600 mt-2">
              Submit your application online.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              2
            </div>

            <h3 className="mt-5 font-bold text-xl">
              Interview
            </h3>

            <p className="text-gray-600 mt-2">
              Meet our hiring team virtually.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              3
            </div>

            <h3 className="mt-5 font-bold text-xl">
              Assessment
            </h3>

            <p className="text-gray-600 mt-2">
              Complete a practical task related to the role.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              4
            </div>

            <h3 className="mt-5 font-bold text-xl">
              Welcome
            </h3>

            <p className="text-gray-600 mt-2">
              Join our growing team and start your journey.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 rounded-3xl text-white py-16 px-8 text-center">

        <h2 className="text-4xl font-bold mb-5">
          Don't See Your Dream Job?
        </h2>

        <p className="max-w-2xl mx-auto text-pink-100 mb-8">
          We're always looking for talented people. Send us your resume, and
          we'll contact you when a suitable opportunity becomes available.
        </p>

        <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Send Your Resume
        </button>

      </section>

    </main>
  );
}