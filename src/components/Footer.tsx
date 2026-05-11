
import { Cpu, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-headline font-bold tracking-tighter">OPSIX</span>
          </Link>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Operational Process Solutions & Intelligent eXcellence. Transforming the core of business operations 
            through automation, intelligence, and data-driven excellence.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Twitter size={20} className="text-accent" />
            </Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Linkedin size={20} className="text-accent" />
            </Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <Github size={20} className="text-accent" />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-accent">Solutions</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li><Link href="#product" className="hover:text-white transition-colors">Magic Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">API Integrations</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">AI Agents</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Operational Dashboards</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-accent">Company</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Legal & Privacy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <p>© 2024 OPSIX Solutions. All rights reserved.</p>
        <p className="flex items-center gap-1 font-headline">
          Powered by <span className="text-primary font-bold">Intelligent eXcellence</span>
        </p>
      </div>
    </footer>
  );
}
