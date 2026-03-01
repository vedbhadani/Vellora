import { motion } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { ArrowUpRight } from 'lucide-react';
import './Pricing.css';

const buildPlans = [
    {
        id: 'build-1',
        name: 'Starter',
        price: 'Start at $12k',
        description: 'Perfect for startups establishing their digital foundation with a high-end presence.',
        features: ['Up to 5 Pages', 'Premium Animations', 'CMS Setup', 'Basic SEO'],
    },
    {
        id: 'build-2',
        name: 'Growth',
        price: 'Start at $20k',
        description: 'For brands ready to scale with a powerful, dynamic platform.',
        features: ['Up to 15 Pages', 'Advanced Layouts', 'CMS Integration', 'Analytics Dashboard'],
    },
    {
        id: 'build-3',
        name: 'Premium',
        price: 'Start at $35k',
        description: 'Market-leading experiences with interactive 3D and complex logic.',
        features: ['Unlimited Pages', 'WebGL / 3D Canvas', 'E-commerce Engine', 'Custom Backend'],
    },
    {
        id: 'build-4',
        name: 'Custom Enterprise',
        price: 'Bespoke',
        description: 'Tailored architecture for massive scale, deep integrations, and unique product requirements.',
        features: ['Dedicated Team', 'Microservices', 'AI Integrations', 'Bank-grade Security'],
    }
];

const maintenancePlans = [
    {
        id: 'maint-1',
        name: 'Essential Care',
        price: '$1.5k / mo',
        description: 'Keep your platform secure, fast, and up-to-date with routine technical oversight.',
        features: ['Uptime Monitoring', 'Security Patches', 'Content Updates', 'Monthly Analytics', 'Email Support'],
    },
    {
        id: 'maint-2',
        name: 'Growth Partner',
        price: '$4k / mo',
        description: 'Proactive optimization, A/B testing, and continuous feature development as an extension of your team.',
        features: ['Everything in Essential', 'Conversion Optimization', 'New Feature Sprints', 'Technical SEO', 'Priority Slack Channel'],
    }
];

const Pricing = () => {
    const scrollTo = useScrollTo();

    const mainBuildPlans = buildPlans.filter(p => p.name !== 'Custom Enterprise');
    const customPlan = buildPlans.find(p => p.name === 'Custom Enterprise');

    const renderFeatureList = (features: string[]) => (
        <ul className="pricing__features-list">
            {features.map((feature: string) => (
                <li key={feature}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                </li>
            ))}
        </ul>
    );

    return (
        <section className="pricing section" id="pricing">
            <div className="pricing__orb-left" />
            <div className="pricing__orb-right" />
            <div className="container">
                <motion.div
                    className="pricing__header"
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>Investment</span>
                    <h2 className="section-title">Transparent pricing,<br />exceptional value</h2>
                    <p className="section-subtitle">
                        Choose the engagement model that aligns with your vision. No hidden fees, just world-class execution.
                    </p>
                </motion.div>

                <div className="pricing__layout">

                    {/* BUILD & LAUNCH : 3 Tiers */}
                    <div className="pricing__category-header">
                        <h3 className="pricing__category-title">01. Build & Launch Projects</h3>
                        <div className="pricing__category-line" />
                    </div>

                    <div className="pricing__grid-3">
                        {mainBuildPlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                className={`pricing__card ${plan.name === 'Growth' ? 'pricing__card--featured' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="pricing__card-corner pricing__card-corner-tl" />
                                <div className="pricing__card-corner pricing__card-corner-tr" />
                                <div className="pricing__card-corner pricing__card-corner-bl" />
                                <div className="pricing__card-corner pricing__card-corner-br" />

                                {plan.name === 'Growth' && <div className="pricing__badge">Most Popular</div>}

                                <div className="pricing__card-header">
                                    <h4 className="pricing__card-name">{plan.name}</h4>
                                    <p className="pricing__card-desc">{plan.description}</p>
                                </div>

                                <div className="pricing__card-price-container">
                                    <div className="pricing__card-price">{plan.price}</div>
                                </div>

                                <div className="pricing__card-body">
                                    {renderFeatureList(plan.features)}
                                </div>

                                <div className="pricing__card-footer">
                                    <a href="#contact" className="pricing__btn" onClick={scrollTo}>
                                        Inquire <ArrowUpRight size={18} strokeWidth={2} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CUSTOM ENTERPRISE : Full Width */}
                    {customPlan && (
                        <motion.div
                            className="pricing__card pricing__card--custom"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="pricing__card-corner pricing__card-corner-tl" />
                            <div className="pricing__card-corner pricing__card-corner-tr" />
                            <div className="pricing__card-corner pricing__card-corner-bl" />
                            <div className="pricing__card-corner pricing__card-corner-br" />

                            <div className="pricing__custom-left">
                                <h4 className="pricing__card-name">{customPlan.name}</h4>
                                <div className="pricing__card-price">{customPlan.price}</div>
                                <p className="pricing__card-desc">{customPlan.description}</p>
                            </div>
                            <div className="pricing__custom-middle">
                                {renderFeatureList(customPlan.features)}
                            </div>
                            <div className="pricing__custom-right">
                                <a href="#contact" className="pricing__btn pricing__btn--outline" onClick={scrollTo}>
                                    Book Consultation <ArrowUpRight size={18} strokeWidth={2} />
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {/* MAINTENANCE RETAINERS : 2 Tiers */}
                    <div className="pricing__category-header" style={{ marginTop: '100px' }}>
                        <h3 className="pricing__category-title">02. Maintenance & Growth Retainers</h3>
                        <div className="pricing__category-line" />
                    </div>

                    <div className="pricing__grid-2">
                        {maintenancePlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                className="pricing__card pricing__card--maint"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="pricing__card-corner pricing__card-corner-tl" />
                                <div className="pricing__card-corner pricing__card-corner-tr" />
                                <div className="pricing__card-corner pricing__card-corner-bl" />
                                <div className="pricing__card-corner pricing__card-corner-br" />

                                <div className="pricing__card-header">
                                    <h4 className="pricing__card-name">{plan.name}</h4>
                                    <p className="pricing__card-desc">{plan.description}</p>
                                </div>
                                <div className="pricing__card-price-container">
                                    <div className="pricing__card-price">{plan.price}</div>
                                </div>
                                <div className="pricing__card-body">
                                    {renderFeatureList(plan.features)}
                                </div>
                                <div className="pricing__card-footer">
                                    <a href="#contact" className="pricing__btn" onClick={scrollTo}>
                                        Inquire <ArrowUpRight size={18} strokeWidth={2} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
