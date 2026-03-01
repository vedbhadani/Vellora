import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import './Portfolio.css';

const projects = [
    {
        title: 'Meridian Finance',
        category: 'SaaS Platform',
        metric: '+340%',
        metricLabel: 'User Engagement',
        gradient: 'linear-gradient(135deg, #102324 0%, #1a3a3a 50%, #0D1B1C 100%)',
    },
    {
        title: 'Apex Retail',
        category: 'E-Commerce',
        metric: '2.4x',
        metricLabel: 'Conversion Rate',
        gradient: 'linear-gradient(135deg, #1e1a16 0%, #2a2218 50%, #161618 100%)',
    },
    {
        title: 'Vertex Studios',
        category: 'Brand Website',
        metric: '180k',
        metricLabel: 'Monthly Visitors',
        gradient: 'linear-gradient(135deg, #14201e 0%, #1a2e28 50%, #0D1B1C 100%)',
    },
    {
        title: 'Catalyst Labs',
        category: 'Web Application',
        metric: '99.9%',
        metricLabel: 'Uptime SLA',
        gradient: 'linear-gradient(135deg, #1a1822 0%, #221e2a 50%, #161618 100%)',
    },
];

const Portfolio = () => {
    const scrollTo = useScrollTo();
    return (
        <section className="portfolio section" id="portfolio">
            <div className="portfolio__bg-line" />
            <div className="container">
                <motion.div
                    className="portfolio__header"
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label">Selected Work</span>
                    <h2 className="section-title">Projects that speak<br />for themselves</h2>
                    <p className="section-subtitle">
                        Each engagement is a partnership forged around results, precision, and lasting impact.
                    </p>
                </motion.div>

                <div className="portfolio__grid">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href="#contact"
                            onClick={(e) => scrollTo(e as any)}
                            className="portfolio__card"
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: i * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="portfolio__preview" style={{ background: project.gradient }}>
                                {/* Browser Mockup */}
                                <div className="portfolio__mockup">
                                    <div className="portfolio__mockup-bar">
                                        <div className="portfolio__mockup-dots">
                                            <span /><span /><span />
                                        </div>
                                        <div className="portfolio__mockup-url">
                                            <span>{project.title.toLowerCase().replace(' ', '')}.com</span>
                                        </div>
                                    </div>
                                    <div className="portfolio__mockup-body">
                                        <div className="portfolio__mockup-hero" />
                                        <div className="portfolio__mockup-lines">
                                            <div className="portfolio__mockup-line" style={{ width: '70%' }} />
                                            <div className="portfolio__mockup-line" style={{ width: '50%' }} />
                                            <div className="portfolio__mockup-line" style={{ width: '35%' }} />
                                        </div>
                                        <div className="portfolio__mockup-grid">
                                            <div /><div /><div />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover icon */}
                                <div className="portfolio__card-icon">
                                    <ExternalLink size={16} />
                                </div>
                            </div>

                            <div className="portfolio__info">
                                <div className="portfolio__info-left">
                                    <h3 className="portfolio__name">{project.title}</h3>
                                    <span className="portfolio__category">{project.category}</span>
                                </div>
                                <div className="portfolio__metric-wrap">
                                    <span className="portfolio__metric">{project.metric}</span>
                                    <span className="portfolio__metric-label">{project.metricLabel}</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
