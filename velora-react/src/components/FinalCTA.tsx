import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
    const scrollTo = useScrollTo();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/xbdaeypw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('success');
                setTimeout(() => {
                    setIsFormOpen(false);
                    setFormStatus('idle');
                    setFormData({ name: '', email: '', phone: '', message: '' });
                }, 3000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <section className="final-cta" id="contact">
            {/* Animated background */}
            <div className="final-cta__bg">
                <div className="final-cta__orb final-cta__orb--1" />
                <div className="final-cta__orb final-cta__orb--2" />
                <div className="final-cta__orb final-cta__orb--3" />
                <div className="final-cta__grid-lines">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="final-cta__grid-line" />
                    ))}
                </div>
            </div>

            <div className="container">
                <motion.div
                    className="final-cta__content"
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)', scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="final-cta__card">
                        {/* Decorative Architectural Corners */}
                        <div className="final-cta__corner final-cta__corner-tl" />
                        <div className="final-cta__corner final-cta__corner-tr" />
                        <div className="final-cta__corner final-cta__corner-bl" />
                        <div className="final-cta__corner final-cta__corner-br" />

                        <motion.span
                            className="section-label"
                            style={{ justifyContent: 'center' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Let's Work Together
                        </motion.span>

                        <h2 className="final-cta__title">
                            Ready to Build<br />Something{' '}
                            <span className="final-cta__accent">Exceptional?</span>
                        </h2>

                        <p className="final-cta__subtitle">
                            Let's discuss how Velora can transform your vision into a
                            high-converting digital reality.
                        </p>

                        <div className="final-cta__actions">
                            <button
                                onClick={() => setIsFormOpen(true)}
                                className="btn btn-primary final-cta__btn"
                            >
                                <span>Start a Conversation</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <a href="#pricing" className="btn btn-outline" onClick={scrollTo}>View Pricing</a>
                        </div>

                        <p className="final-cta__note">
                            <span className="final-cta__note-dot" />
                            Free consultation · No commitment · Response within 24h
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Contact Form Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <motion.div
                        className="cta-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="cta-modal__overlay" onClick={() => setIsFormOpen(false)} />

                        <motion.div
                            className="cta-modal__content"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div className="cta-modal__card">
                                {/* Corners mirroring the FinalCTA card */}
                                <div className="final-cta__corner final-cta__corner-tl" />
                                <div className="final-cta__corner final-cta__corner-tr" />
                                <div className="final-cta__corner final-cta__corner-bl" />
                                <div className="final-cta__corner final-cta__corner-br" />

                                <button
                                    className="cta-modal__close"
                                    onClick={() => setIsFormOpen(false)}
                                >
                                    <X size={20} />
                                </button>

                                {formStatus === 'success' ? (
                                    <motion.div
                                        className="cta-modal__success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <CheckCircle2 size={64} className="cta-modal__success-icon" />
                                        <h3>Message Received</h3>
                                        <p>Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="cta-modal__header">
                                            <span className="section-label">Contact VELORA</span>
                                            <h2>Start a Conversation</h2>
                                            <p>Tell us about your project and vision.</p>
                                        </div>

                                        <form className="cta-modal__form" onSubmit={handleSubmit}>
                                            <div className="cta-modal__row">
                                                <div className="cta-modal__group">
                                                    <label htmlFor="name">Full Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="John Doe"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className="cta-modal__group">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        placeholder="john@example.com"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="cta-modal__group">
                                                <label htmlFor="phone">Phone Number (Optional)</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>

                                            <div className="cta-modal__group">
                                                <label htmlFor="message">How can we help?</label>
                                                <textarea
                                                    id="message"
                                                    placeholder="Tell us about your project, goals, and timeline..."
                                                    rows={4}
                                                    required
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary cta-modal__submit"
                                                disabled={formStatus === 'submitting'}
                                            >
                                                {formStatus === 'submitting' ? (
                                                    <Loader2 className="animate-spin" />
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <Send size={16} />
                                                    </>
                                                )}
                                            </button>

                                            {formStatus === 'error' && (
                                                <p className="cta-modal__error">Something went wrong. Please try again or email us directly at hello@veloratech.com</p>
                                            )}
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FinalCTA;
