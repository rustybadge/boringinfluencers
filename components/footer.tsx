export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Boring Influencers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Find the hidden influencers in your industry
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Construction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Haulage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Logistics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Manufacturing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  TikTok Influencers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn Creators
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Reddit Communities
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Boring Influencers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
