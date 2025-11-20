import React, { useMemo } from 'react';
import useActiveSection from '../hooks/useActiveSection';

const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
];

const Sidebar = () => {
    const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
    const activeSection = useActiveSection(sectionIds);

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Anurag Dupakuntla</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Information Technology Student
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    I build accessible, pixel-perfect, performant, and inclusive web products.
                </p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <li key={link.name}>
                                    <a className={`group flex items-center py-3 ${isActive ? 'active' : ''}`} href={`#${link.id}`}>
                                        <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                                        <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://github.com/anuragdvs07" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/anurag-dupakuntla/" target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.75 1.75 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-1.77-1.38-1.77-1.55 0-2 1.08-2 2.35V19h-3v-9h3v1.3c.75-1.1 1.55-1.68 2.93-1.68 2.6 0 3.45 1.8 3.45 4.6z"></path></svg>
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="mailto:anuragdvs07@gmail.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">Email</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Sidebar;
