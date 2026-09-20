import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import brandLogo from '../assets/logo-text.png'

const groups = [
  { title: 'Product', links: [{ label: 'Home', href: '#home' }, { label: 'Technologies', href: '#technologies' }, { label: 'Projects', href: '#projects' }] },
  { title: 'Company', links: [{ label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }, { label: 'Careers', href: '#careers' }] },
  { title: 'Legal', links: [{ label: 'Privacy Policy', href: '#privacy' }, { label: 'Terms of Service', href: '#terms' }] },
]

export function Footer() {
  return <footer id="about"><div className="footer-top"><div className="footer-brand"><img className="footer-logo" src={brandLogo} alt="Dev Stack" /><p>Curated tools, technologies, and resources for developers building modern software.</p><div className="socials"><a href="https://github.com" aria-label="GitHub"><FaGithub /> GitHub</a><a href="https://x.com" aria-label="Twitter"><FaXTwitter /> Twitter</a><a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /> LinkedIn</a></div></div>{groups.map(({ title, links }) => <div className="footer-group" key={title}><h4>{title}</h4>{links.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 Dev Stack. All rights reserved.</span><span><a href="#privacy">Privacy</a><a href="#terms">Terms</a></span></div></footer>
}
