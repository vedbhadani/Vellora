import { motion } from 'framer-motion';
import { Target, PenTool, Layers, Code, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We dive deep into your brand, audience, and objectives to define a strategic roadmap that aligns with your business goals.',
        icon: Target,
    },
    {
        number: '02',
        title: 'Concept & Design',
        description: 'Our design team crafts premium, user-centric interfaces with a focus on high-end aesthetics, typography, and conversion psychology.',
        icon: PenTool,
    },
    {
        number: '03',
        title: 'Technical Architecture',
        description: 'We architect scalable, secure, and high-performance foundations using the most advanced and reliable technology stacks.',
        icon: Layers,
    },
    {
        number: '04',
        title: 'Development & Polish',
        description: 'Meticulous engineering brings the design to life, complete with cinematic animations, smooth interactions, and rigorous quality assurance.',
        icon: Code,
    },
    {
        number: '05',
        title: 'Launch & Evolution',
        description: 'We deploy your platform with zero downtime and provide ongoing optimization to ensure continuous growth and peak performance.',
        icon: Rocket,
    },
];

const Process = () => {
    return (
        <section className="process section" id="process">
            {/* Background elements */}
            <div className="process__bg-orb" />

            <div className="container">
                <motion.div
                    className="process__header"
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>How We Work</span>
                    <h2 className="section-title text-center">
                        Our battle-tested<br />
                        <span className="process__title-accent">5-step methodology</span>
                    </h2>
                </motion.div>

                <div className="process__flow">
                    <div className="process__grid">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                className="process__card-container"
                                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: i * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="process__card">
                                    {/* Front Face */}
                                    <div className="process__card-face process__card-front">
                                        <div className="process__card-corner process__card-corner-tl" />
                                        <div className="process__card-corner process__card-corner-tr" />
                                        <div className="process__card-corner process__card-corner-bl" />
                                        <div className="process__card-corner process__card-corner-br" />
                                        <div className="process__card-glow" />
                                        <div className="process__card-content">
                                            <div className="process__card-icon-wrapper">
                                                <step.icon className="process__card-icon" strokeWidth={1.5} />
                                            </div>
                                            <span className="process__card-number">{step.number}</span>
                                            <h3 className="process__card-title">{step.title}</h3>
                                        </div>
                                    </div>

                                    {/* Back Face */}
                                    <div className="process__card-face process__card-back">
                                        <div className="process__card-corner process__card-corner-tl" />
                                        <div className="process__card-corner process__card-corner-tr" />
                                        <div className="process__card-corner process__card-corner-bl" />
                                        <div className="process__card-corner process__card-corner-br" />
                                        <div className="process__card-glow" />
                                        <div className="process__card-content">
                                            <span className="process__card-number-bg">{step.number}</span>
                                            <p className="process__card-desc">{step.description}</p>
                                        </div>
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

export default Process;
