'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Uniq For Dev completely transformed our server's security posture. UniqGuard has prevented countless attacks and the community support is phenomenal.",
      author: "Alex Rodriguez",
      role: "Server Owner",
      server: "Los Santos Roleplay",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c0558a9-6eb5-4a4a-8ec9-9a966550ba0d.png",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      quote: "The collaboration opportunities here are incredible. I've learned more in 6 months than I did in years of solo development. The community truly cares about growth.",
      author: "Sarah Chen",
      role: "FiveM Developer",
      server: "Independent Developer",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc502e2e-ba22-4049-8d95-55c9cb8e355c.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      quote: "Their ESX Framework+ saved us hundreds of development hours. The performance improvements and additional features are game-changing for any serious server.",
      author: "Marcus Thompson",
      role: "Lead Developer",
      server: "Eclipse Roleplay",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2861be20-ae02-4c4f-9cc7-de4051184f83.png",
      gradient: "from-green-500 to-teal-500"
    },
    {
      quote: "The mentorship I received from senior community members helped me land my first job in game development. This community genuinely invests in your success.",
      author: "Emma Wilson",
      role: "Junior Developer",
      server: "Career Transition",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/101f06a4-ac35-41ac-bfc0-cce028f5e49a.png",
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

  const collaborationHighlights = [
    {
      title: "Open Source Contributions",
      description: "Over 150 community-driven contributions to our open source projects",
      icon: "🔓",
      stats: "150+ PRs"
    },
    {
      title: "Knowledge Sharing",
      description: "Weekly workshops and tutorials by community experts",
      icon: "📚",
      stats: "50+ Sessions"
    },
    {
      title: "Collaborative Projects",
      description: "Multi-developer projects bringing innovation to the FiveM ecosystem",
      icon: "🤝",
      stats: "25+ Projects"
    },
    {
      title: "Mentorship Program",
      description: "Experienced developers guiding newcomers through their journey",
      icon: "🎯",
      stats: "100+ Mentees"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Success
            </span>{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our community members about their journey with Uniq For Dev and 
            how collaboration has driven their success in the FiveM development world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Testimonials Carousel */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-gray-800 p-8 min-h-[400px] overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-6xl">"</div>
                <div className="absolute bottom-4 left-4 text-6xl rotate-180">"</div>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="text-lg leading-relaxed text-gray-300 italic">
                    "{testimonials[activeTestimonial].quote}"
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-8">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={`${testimonials[activeTestimonial].author} avatar`}
                    className="w-16 h-16 rounded-full border-2 border-gray-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className={`hidden w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].gradient} flex items-center justify-center text-white font-bold text-xl`}>
                    {testimonials[activeTestimonial].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[activeTestimonial].author}</div>
                    <div className="text-sm text-gray-400">{testimonials[activeTestimonial].role}</div>
                    <div className={`text-sm bg-gradient-to-r ${testimonials[activeTestimonial].gradient} bg-clip-text text-transparent font-medium`}>
                      {testimonials[activeTestimonial].server}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-cyan-400 scale-110' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Collaboration Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Community Collaboration</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our strength lies in our collaborative spirit. From mentorship programs to 
                open-source contributions, we believe in growing together and supporting 
                each other's success.
              </p>
            </div>

            <div className="grid gap-6">
              {collaborationHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{highlight.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{highlight.title}</h4>
                        <span className="text-sm text-cyan-400 font-bold">{highlight.stats}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Growth Stats */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-6">Community Growth</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Member Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">200%</div>
                  <div className="text-sm text-gray-400">Year-over-Year Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">48h</div>
                  <div className="text-sm text-gray-400">Avg. Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">300+</div>
                  <div className="text-sm text-gray-400">Successful Collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Become part of a community that believes in your potential and supports your growth 
            every step of the way.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}