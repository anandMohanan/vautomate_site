import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
      { name: "Changelog", href: "/changelog" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/security" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-white text-muted-foreground py-16 relative overflow-hidden">
    
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-primary tracking-tight font-serif">Vautomate</span>
            </div>
            <p className="text-sm leading-relaxed">
              AI-powered growth engine for modern D2C brands.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-primary-foreground font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-16 pb-8">
       
          <p className="text-sm text-center text-muted-foreground">© 2025 Vautomate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
