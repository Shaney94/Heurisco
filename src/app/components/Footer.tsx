export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 500 }}>
              Heurisco
            </h3>
            <p className="text-gray-400 text-sm">
              Discovery and digital clarity
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm text-gray-500 uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors text-sm">Work</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors text-sm">Process</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm text-gray-500 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@heurisco.co.uk" className="text-gray-400 hover:text-white transition-colors text-sm">
                  hello@heurisco.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Heurisco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
