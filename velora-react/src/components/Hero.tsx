import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import './Hero.css';

const Hero = () => {
    const meshRef = useRef<HTMLCanvasElement>(null);
    const scrollTo = useScrollTo();

    useEffect(() => {
        const canvas = meshRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener('resize', resize);

        // Animated gradient blobs — fewer, more subtle
        const blobs = [
            { x: 0.7, y: 0.3, r: 400, color: [181, 136, 99], speed: 0.0002, phase: 0 },
            { x: 0.3, y: 0.65, r: 320, color: [16, 35, 36], speed: 0.0003, phase: 2 },
            { x: 0.85, y: 0.75, r: 280, color: [61, 77, 85], speed: 0.00025, phase: 4 },
        ];

        const draw = () => {
            time++;
            const w = window.innerWidth;
            const h = window.innerHeight;
            ctx.clearRect(0, 0, w, h);

            blobs.forEach((blob) => {
                const bx = w * (blob.x + 0.1 * Math.sin(time * blob.speed + blob.phase));
                const by = h * (blob.y + 0.08 * Math.cos(time * blob.speed * 0.8 + blob.phase));

                const grd = ctx.createRadialGradient(bx, by, 0, bx, by, blob.r);
                const [r, g, b] = blob.color;
                grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.14)`);
                grd.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.04)`);
                grd.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(bx, by, blob.r, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40, filter: 'blur(12px)', scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }
        },
    };

    const fadeIn = {
        hidden: { opacity: 0, filter: 'blur(12px)' },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }
        },
    };

    return (
        <section className="hero" id="hero">
            <canvas ref={meshRef} className="hero__mesh" />

            <div className="hero__content container">
                <motion.div
                    className="hero__text"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero__badge" variants={fadeIn}>
                        <span className="hero__badge-dot" />
                        <span>Premium Digital Agency</span>
                    </motion.div>

                    <motion.h1 className="hero__title" variants={fadeUp}>
                        <span className="hero__title-line">We Architect</span>
                        <span className="hero__title-line">
                            <span className="hero__title-accent">High-Converting</span>
                        </span>
                        <span className="hero__title-line">Digital Experiences<span className="hero__title-dot">.</span></span>
                    </motion.h1>

                    <motion.div className="hero__bottom" variants={fadeUp}>
                        <p className="hero__subtitle">
                            Velora Tech builds premium websites and platforms<br />
                            for ambitious brands that demand excellence.
                        </p>

                        <div className="hero__actions">
                            <a href="#contact" className="btn btn-primary hero__btn-primary" onClick={scrollTo}>
                                <span>Start Your Project</span>
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#portfolio" className="btn btn-outline" onClick={scrollTo}>View Our Work</a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats strip */}
                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {[
                        { value: '50+', label: 'Projects' },
                        { value: '98%', label: 'Satisfaction' },
                        { value: '4.9★', label: 'Rating' },
                        { value: '$2M+', label: 'Revenue Generated' },
                    ].map((stat, i) => (
                        <div key={stat.label} className="hero__stat">
                            {i > 0 && <div className="hero__stat-divider" />}
                            <div className="hero__stat-content">
                                <span className="hero__stat-number">{stat.value}</span>
                                <span className="hero__stat-label">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="hero__scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
