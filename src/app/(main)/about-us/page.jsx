export const metadata = {
  title: "About Us | NewsPulse",
  description: "Learn more about NewsPulse, our mission, vision, and editorial values.",
};

const AboutUsPage = () => {
    return (
        <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-semibold">
          About NewsPulse
        </span>

        <h1 className="text-5xl font-bold mt-5 mb-6">
          Trusted News. Honest Journalism.
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          NewsPulse is a modern digital newspaper dedicated to delivering
          accurate, timely, and unbiased news from around the world. Our goal is
          to keep readers informed through credible journalism and insightful
          reporting.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="bg-white shadow-md rounded-2xl p-8 border">
          <div className="text-4xl mb-4">🎯</div>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

          <p className="text-gray-600 leading-7">
            Our mission is to provide trustworthy news that empowers people to
            make informed decisions. We believe journalism should be factual,
            transparent, and accessible to everyone.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 border">
          <div className="text-4xl mb-4">🌍</div>

          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>

          <p className="text-gray-600 leading-7">
            We envision a world where quality journalism strengthens democracy,
            encourages meaningful conversations, and connects communities across
            the globe.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">✔️</div>
            <h3 className="font-bold text-xl mb-2">Accuracy</h3>
            <p className="text-gray-600">
              Every story is carefully researched and verified before
              publication.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="font-bold text-xl mb-2">Integrity</h3>
            <p className="text-gray-600">
              We maintain editorial independence and fairness in every report.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-xl mb-2">Speed</h3>
            <p className="text-gray-600">
              Breaking news reaches our readers quickly without compromising
              accuracy.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-xl mb-2">Trust</h3>
            <p className="text-gray-600">
              Building long-term trust with our readers is our highest priority.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-100 rounded-2xl py-14 px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-pink-600">250K+</h3>
            <p className="text-gray-600 mt-2">Monthly Readers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-600">10K+</h3>
            <p className="text-gray-600 mt-2">Published Articles</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-600">40+</h3>
            <p className="text-gray-600 mt-2">Professional Journalists</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-600">24/7</h3>
            <p className="text-gray-600 mt-2">News Coverage</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Readers Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-3">
              📰 Breaking News
            </h3>

            <p className="text-gray-600">
              Stay updated with the latest events as they happen around the
              world.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-3">
              📊 In-Depth Analysis
            </h3>

            <p className="text-gray-600">
              Go beyond headlines with expert opinions and detailed reporting.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-3">
              🌐 Global Coverage
            </h3>

            <p className="text-gray-600">
              From local events to international affairs, we cover stories that
              matter.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 rounded-2xl text-white text-center py-16 px-8">
        <h2 className="text-4xl font-bold mb-5">
          Stay Informed Every Day
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-pink-100">
          Join thousands of readers who trust NewsPulse for reliable news,
          thoughtful analysis, and real-time updates.
        </p>

        <button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Explore Latest News
        </button>
      </section>
    </main>
    );
};

export default AboutUsPage;