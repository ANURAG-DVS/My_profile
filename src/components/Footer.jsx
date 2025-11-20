import React from 'react';

const Footer = () => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Built with <a href="https://react.dev/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">React</a>,{' '}
                <a href="https://vitejs.dev/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Vite</a>, and{' '}
                <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Tailwind CSS</a>.{' '}
                Deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Vercel</a>.{' '}
                Typeset in <a href="https://rsms.me/inter/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Inter</a>.
            </p>
        </footer>
    );
};

export default Footer;
