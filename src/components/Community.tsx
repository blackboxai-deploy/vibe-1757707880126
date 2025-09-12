'use client'

export default function Community() {
  const communityStats = [
    {
      number: "1,200+",
      label: "Active Developers",
      icon: "👨‍💻"
    },
    {
      number: "50+",
      label: "Open Projects",
      icon: "🚀"
    },
    {
      number: "24/7",
      label: "Community Support",
      icon: "💬"
    },
    {
      number: "100%",
      label: "Open Source",
      icon: "🔓"
    }
  ]

  const discordChannels = [
    {
      name: "general-chat",
      description: "General discussions about FiveM development",
      members: "850+"
    },
    {
      name: "script-sharing",
      description: "Share and discover amazing scripts",
      members: "720+"
    },
    {
      name: "help-support",
      description: "Get help from experienced developers",
      members: "1100+"
    },
    {
      name: "showcase",
      description: "Show off your latest projects",
      members: "650+"
    }
  ]

  return (
    <section id="community" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Join Our
            </span>{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with passionate developers, share knowledge, and build the future of FiveM together. 
            Our Discord community is the heart of collaboration and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Discord Integration */}
          <div className="relative">
            {/* Main Discord Card */}
            <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-400/40 transition-all duration-500">
              {/* Discord Logo/Header */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Discord Community</h3>
                  <p className="text-purple-300">Where developers unite</p>
                </div>
              </div>

              {/* Server Info */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-300 leading-relaxed">
                  Join our vibrant Discord server where over 1,200 developers collaborate, 
                  share resources, get help, and showcase their latest creations. 
                  From beginners to experts, everyone has a place in our community.
                </p>

                {/* Channels Preview */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-4">Popular Channels:</h4>
                  {discordChannels.map((channel, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-colors duration-300"
                    >
                      <div>
                        <p className="text-white font-medium">#{channel.name}</p>
                        <p className="text-sm text-gray-400">{channel.description}</p>
                      </div>
                      <span className="text-sm text-purple-400 font-medium">{channel.members}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Button */}
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center group">
                <span className="mr-2">Join Discord Server</span>
                <div className="transform group-hover:translate-x-1 transition-transform duration-300">→</div>
              </button>

              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
          </div>

          {/* Right Content - Community Stats & Benefits */}
          <div className="space-y-8">
            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-6">
              {communityStats.map((stat, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Community Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Why Join Our Community?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-900/20 to-transparent rounded-lg border-l-4 border-green-500">
                  <div className="text-green-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Expert Mentorship</h4>
                    <p className="text-gray-400">Learn from experienced developers and security experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-900/20 to-transparent rounded-lg border-l-4 border-blue-500">
                  <div className="text-blue-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Exclusive Resources</h4>
                    <p className="text-gray-400">Access to premium scripts, tools, and documentation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-900/20 to-transparent rounded-lg border-l-4 border-purple-500">
                  <div className="text-purple-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Collaboration Opportunities</h4>
                    <p className="text-gray-400">Partner with other developers on exciting projects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-900/20 to-transparent rounded-lg border-l-4 border-yellow-500">
                  <div className="text-yellow-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Early Access</h4>
                    <p className="text-gray-400">First to try new tools and participate in beta testing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b06167d-3797-4e3e-9991-0bd121234dec.png" 
                alt="Active Discord community screenshot showing vibrant chat channels with developers sharing code snippets and collaborating on projects"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden w-full h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">👥</div>
                  <p>Community Collaboration</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}