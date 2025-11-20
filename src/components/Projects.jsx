import React from 'react';

const projects = [
    {
        title: 'Cognivitta',
        url: 'https://github.com/anuragdvs07',
        description:
            'Engineered a front-end using React, integrating stock brokers’ APIs like Upstox to retrieve market data in real time and store it in PostgreSQL. Built the Node.js/Express backend to keep both data and UI in sync for power users.',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Upstox APIs'],
        timeline: 'Feb 2024 – Jun 2024',
    },
    {
        title: 'LAI Estimation for Yield Prediction',
        url: null,
        description:
            'Created a low-cost yield prediction pipeline that mixes RGB imagery, custom vegetation indices, and VGG-based feature extraction to predict Leaf Area Index for farmers with limited hardware.',
        technologies: ['Python', 'Computer Vision', 'VGG', 'ML Pipelines'],
        timeline: 'Sept 2023 – May 2024',
    },
    {
        title: 'Campus Connect',
        url: 'https://www.linkedin.com/in/anurag-dupakuntla/',
        description:
            'Designed a campus-wide portal where students can discover hackathons, track interview prep resources, and share study groups. Lean React architecture keeps the UI responsive even on low bandwidth networks.',
        technologies: ['React', 'Tailwind CSS', 'Supabase', 'Vercel'],
        timeline: 'Jan 2023 – Aug 2023',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <ul className="group/list">
                {projects.map((project) => {
                    const Wrapper = project.url ? 'a' : 'span';
                    const wrapperProps = project.url
                        ? {
                              href: project.url,
                              target: '_blank',
                              rel: 'noreferrer',
                              'aria-label': `${project.title} project`,
                          }
                        : {};

                    return (
                        <li key={project.title} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <Wrapper
                                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                            {...wrapperProps}
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {project.title}
                                                {project.url && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                )}
                                            </span>
                                        </Wrapper>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">{project.description}</p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.technologies.map((tech) => (
                                            <li key={tech} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="z-10 sm:order-1 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">{project.timeline}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Projects;
