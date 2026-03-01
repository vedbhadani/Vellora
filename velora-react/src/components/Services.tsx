import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Layers, Settings } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import './Services.css';

const services = [
    {
        icon: Globe,
        title: 'Website Design & Development',
        description: 'Bespoke, high-performance websites that captivate your audience and drive measurable business growth.',
        number: '01',
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce Solutions',
        description: 'Scalable online stores engineered for conversion — from product discovery to seamless checkout.',
        number: '02',
    },
    {
        icon: Layers,
        title: 'SaaS Platforms',
        description: 'Full-stack SaaS development with robust architecture, intuitive interfaces, and infrastructure built to scale.',
        number: '03',
    },
    {
        icon: Settings,
        title: 'Maintenance & Optimization',
        description: 'Ongoing performance tuning, security updates, and strategic enhancements to keep you ahead.',
        number: '04',
    },
];

const Services = () => {
    const scrollTo = useScrollTo();
    return (
        <section className="services section" id="services">
            {/* Background decoration */}
            <div className="services__bg-orb" />

            <div className="container">
                <div className="services__layout">
                    <motion.div
                        className="services__header"
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="section-label">What We Build</span>
                        <h2 className="section-title">
                            Precision-crafted<br />
                            <span className="services__title-accent">digital solutions</span>
                        </h2>
                        <p className="section-subtitle">
                            Every project is an exercise in strategic design and technical excellence.
                        </p>
                    </motion.div>

                    <div className="services__grid">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                className="services__card"
                                initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: i * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="services__card-glow" />
                                <div className="services__card-inner">
                                    <div className="services__card-top">
                                        <div className="services__icon">
                                            <service.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <span className="services__number">{service.number}</span>
                                    </div>
                                    <h3 className="services__card-title">{service.title}</h3>
                                    <p className="services__card-desc">{service.description}</p>
                                    <div className="services__card-footer">
                                        <a href="#contact" className="services__learn-more" onClick={scrollTo}>
                                            Learn more
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
