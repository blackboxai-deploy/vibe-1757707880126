'use client'

export default function Projects() {
  const projects = [
    {
      title: "UniqGuard",
      subtitle: "Advanced Anti-Cheat System",
      description: "Revolutionary anti-cheat solution with AI-powered detection algorithms, real-time threat analysis, and adaptive protection mechanisms.",
      features: ["Real-time Detection", "AI-Powered Analysis", "Adaptive Protection", "Zero False Positives"],
      tech: ["Lua", "C++", "Machine Learning", "FiveM API"],
      status: "Production",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/412a2136-1677-4437-b849-aa3ac9cfb4ff.png",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "ESX Framework+",
      subtitle: "Enhanced ESX Scripts",
      description: "Custom ESX framework extensions with performance optimizations, advanced features, and seamless integration capabilities.",
      features: ["Performance Optimized", "Extended Features", "Easy Integration", "Custom Modules"],
      tech: ["Lua", "JavaScript", "MySQL", "ESX Core"],
      status: "Active Development",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc5c0c0e-a774-4aa7-bc42-7abcbff0bfd5.png",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "QBCore Enhanced",
      subtitle: "Advanced QBCore Solutions",
      description: "Cutting-edge QBCore modifications and additions that bring new possibilities to server owners and players alike.",
      features: ["Modern Architecture", "Scalable Design", "Rich Features", "Community Support"],
      tech: ["Lua", "Node.js", "React", "QBCore"],
      status: "Beta Testing",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c893833-d362-4bc2-8035-a92d0bcd153b.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Hub",
      subtitle: "Developer Collaboration Platform",
      description: "Centralized platform for script sharing, collaborative development, and community-driven innovation in the FiveM ecosystem.",
      features: ["Script Repository", "Collaboration Tools", "Version Control", "Community Feedback"],
      tech: ["React", "Node.js", "MongoDB", "Git"],
      status: "Coming Soon",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4e2b7d61-9c5e-40d7-a5da-ee5ed0ec6081.png",
      gradient: "from-green-500 to-teal-500"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'Active Development': return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'Beta Testing': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      case 'Coming Soon': return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our
            </span>{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge solutions that are reshaping the FiveM landscape. 
            From security systems to framework enhancements, we build tools that matter.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-gray-800 hover:border-cyan-500/30 overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">🚀</div>
                    <p>{project.title}</p>
                  </div>
                </div>
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="relative p-6 space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded border border-gray-700 hover:border-cyan-500/30 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-xs text-white rounded border border-current border-opacity-20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <button className={`w-full py-3 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white font-semibold rounded-lg border border-current border-opacity-30 hover:bg-opacity-20 transition-all duration-300 group-hover:shadow-lg`}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyan-400/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-8">
            Interested in collaborating or need custom development?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}