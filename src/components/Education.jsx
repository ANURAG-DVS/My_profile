import React from 'react';

const Education = () => {
    return (
        <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
            </div>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.osmania.ac.in/" target="_blank" rel="noreferrer" aria-label="Osmania University">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Bachelor of Engineering (Honours) in Information Technology<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                        </a>
                    </h3>
                    <div className="text-slate-500" aria-hidden="true">Osmania University, Hyderabad</div>
                    <p className="mt-2 text-sm leading-normal">
                        Specialization in AI & ML. GPA: 8.3/10.
                    </p>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                        Coursework: Computational Intelligence, Reinforcement Learning, DBMS, Web Technologies, Algorithms, Data Structures, OS, Python, Java, C.
                    </p>
                </div>
                <div className="z-10 sm:order-1 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">Dec 2021 - May 2025</div>
            </div>
        </section>
    );
};

export default Education;
