'use client'

export default function About() {
  const features = [
    {
      title: "Expert Developers",
      description: "Passionate coders with years of FiveM experience, crafting innovative solutions for the roleplay community.",
      icon: "💻"
    },
    {
      title: "Security Focused",
      description: "Building robust anti-cheat systems and secure frameworks that protect servers from malicious activities.",
      icon: "🛡️"
    },
    {
      title: "Community Driven",
      description: "Collaborative development approach where knowledge sharing and mutual growth drive our success.",
      icon: "🤝"
    },
    {
      title: "Cutting-Edge Tech",
      description: "Leveraging the latest technologies and best practices to deliver high-performance, scalable solutions.",
      icon: "⚡"
    }
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About
            </span>{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a collective of dedicated developers, security specialists, and creative minds 
            united by our passion for building exceptional FiveM experiences and unbreakable server infrastructure.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                Who We Are
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Born from the FiveM community's need for robust, secure, and innovative solutions, 
                  Uniq For Dev represents the convergence of technical excellence and creative vision.
                </p>
                <p>
                  Our team combines deep expertise in server architecture, advanced scripting, 
                  and cybersecurity to deliver tools that don't just work—they excel.
                </p>
                <p>
                  From anti-cheat systems that adapt to emerging threats to custom frameworks 
                  that push the boundaries of what's possible in roleplay gaming, we build 
                  with purpose, precision, and passion.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
                <div className="text-sm text-gray-400">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d66f82f0-123e-47c8-928d-4cd27f07626f.png" 
                alt="Elite development team working on futuristic FiveM server architecture with multiple monitors showing code and security dashboards"
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden w-full h-64 bg-gradient-to-br from-blue-900/20 to-yellow-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-4">👥</div>
                  <p>Our Development Team</p>
                </div>
              </div>
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}