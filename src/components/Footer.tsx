'use client'

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Testimonials', href: '#testimonials' }
  ]

  const resourceLinks = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'Best Practices', href: '#' }
  ]

  const socialLinks = [
    {
      name: 'Discord',
      href: '#',
      icon: '💬',
      color: 'hover:text-purple-400'
    },
    {
      name: 'GitHub',
      href: '#',
      icon: '⚡',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: '🐦',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      href: '#',
      icon: '📺',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 left-1/4 w-8 h-8 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-1/3 w-4 h-4 bg-yellow-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-12 left-1/2 w-6 h-6 bg-blue-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    UNIQ
                  </span>{' '}
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                    FOR DEV
                  </span>
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Empowering FiveM developers with cutting-edge tools, security solutions, 
                  and a collaborative community that drives innovation in roleplay gaming.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <span className="text-cyan-400">📧</span>
                  <span>contact@uniqfordev.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <span className="text-green-400">⚡</span>
                  <span>24/7 Community Support</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <span className="text-purple-400">🌍</span>
                  <span>Global Developer Community</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center space-x-2 text-gray-400 transition-colors duration-300 ${social.color} group`}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400"></div>
              </h4>
              <ul className="space-y-4">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-8">
              Get the latest updates on new tools, community events, and exclusive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Uniq For Dev. All rights reserved. Built with ❤️ for the FiveM community.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
    </footer>
  )
}