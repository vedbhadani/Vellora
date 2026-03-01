import { motion } from 'framer-motion';
import './TrustBar.css';

const logos = ['Meridian', 'Axiom', 'Vertex', 'Catalyst', 'Apex', 'Prism'];

const TrustBar = () => {
    return (
        <section className="trust" id="trust">
            <div className="container">
                <motion.div
                    className="trust__inner"
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="trust__line" />
                    <p className="trust__label">Trusted by <strong>50+</strong> ambitious brands worldwide</p>
                    <div className="trust__logos">
                        {logos.map((name, i) => (
                            <motion.div
                                key={name}
                                className="trust__logo"
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span>{name}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="trust__line" />
                </motion.div>
            </div>
        </section>
    );
};

export default TrustBar;
