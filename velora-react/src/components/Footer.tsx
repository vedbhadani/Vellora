import { useScrollTo } from '../hooks/useScrollTo';
import './Footer.css';

const Footer = () => {
    const scrollTo = useScrollTo();
    return (
        <footer className="footer">
            <div className="footer__top-line" />
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <a
                            href="#hero"
                            className="footer__logo"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        >
                            <span>VELORA</span>
                            <span className="footer__logo-dot" />
                        </a>
                        <p className="footer__tagline">
                            Architecting premium digital experiences
                            for brands that demand excellence.
                        </p>
                    </div>

                    <div className="footer__nav">
                        <div className="footer__col">
                            <h4 className="footer__col-title">Services</h4>
                            <a href="#services" className="footer__link" onClick={scrollTo}>Web Design</a>
                            <a href="#services" className="footer__link" onClick={scrollTo}>Development</a>
                            <a href="#services" className="footer__link" onClick={scrollTo}>E-commerce</a>
                            <a href="#services" className="footer__link" onClick={scrollTo}>3D Excellence</a>
                        </div>
                        <div className="footer__col">
                            <h4 className="footer__col-title">Company</h4>
                            <a href="#process" className="footer__link" onClick={scrollTo}>Our Process</a>
                            <a href="#portfolio" className="footer__link" onClick={scrollTo}>Case Studies</a>
                            <a href="#pricing" className="footer__link" onClick={scrollTo}>Investment</a>
                            <a href="#contact" className="footer__link" onClick={scrollTo}>Contact</a>
                        </div>
                        <div className="footer__col">
                            <h4 className="footer__col-title">Social</h4>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__link">Twitter / X</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer__link">Dribbble</a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="footer__link">Behance</a>
                        </div>
                        <div className="footer__col">
                            <h4 className="footer__col-title">Status</h4>
                            <div className="footer__status">
                                <span className="footer__status-dot" />
                                <span>Availability: Open for Projects</span>
                            </div>
                            <p className="footer__link footer__link--no-hover">HQ: Digital Nomad / Global</p>
                            <p className="footer__link footer__link--no-hover">Est. 2024</p>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">&copy; {new Date().getFullYear()} Velora Tech. All rights reserved.</p>
                    <div className="footer__legal">
                        <a href="#" className="footer__link">Privacy</a>
                        <a href="#" className="footer__link">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
