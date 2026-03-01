import { useCallback } from 'react';

export const useScrollTo = () => {
    return useCallback((e: React.MouseEvent<HTMLAnchorElement>, target?: string) => {
        const href = target || e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
            const offset = 80; // navbar height
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);
};
