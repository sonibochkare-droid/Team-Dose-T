export function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                <img src="/images/team-20dose-t.png" alt="Team Dose-T" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-primary">Team Dose-T</h3>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Professional endurance coaching built on discipline and real-world experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/coach" className="text-muted-foreground hover:text-primary transition">
                  About Coach
                </a>
              </li>
              <li>
                <a href="/programs" className="text-muted-foreground hover:text-primary transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="/join" className="text-muted-foreground hover:text-primary transition">
                  Join
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/team_dose_t/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/prashantnraut411/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@emotionmanagement1857/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Team Dose-T. All rights reserved. Built on Discipline & Endurance.
          </p>
        </div>
      </div>
    </footer>
  )
}
