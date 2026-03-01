import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const scrollTo = useScrollTo();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 60);
    });

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            id="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="navbar__inner container">
                <a
                    href="#hero"
                    className="navbar__logo"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                    <span className="navbar__logo-text">VELORA</span>
                    <span className="navbar__logo-dot" />
                </a>

                <div className="navbar__links">
                    {['Services', 'Process', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="navbar__link"
                            onClick={scrollTo}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a href="#contact" className="btn btn-primary navbar__cta" onClick={scrollTo}>
                    <span>Get Started</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
