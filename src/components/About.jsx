import React from 'react';

const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">
                    I am currently pursuing a Bachelor of Engineering (Honours) in Information Technology with a specialization in AI & ML at <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.osmania.ac.in/" target="_blank" rel="noreferrer">Osmania University</a>, Hyderabad. With a GPA of 8.3/10, I have built a strong foundation in algorithms, data structures, and web technologies.
                </p>
                <p className="mb-4">
                    My experience includes a Springboard Internship at <span className="font-medium text-slate-200">Infosys</span>, where I developed text summarization models using T5 and spaCy. I enjoy bridging the gap between complex backend logic and intuitive user interfaces, utilizing stacks like React, Node.js, and FastAPI.
                </p>
                <p className="mb-4">
                    I am proficient in C/C++, Java, Python, and JavaScript, and I love working with modern frameworks like ReactJS, ExpressJS, and databases such as MongoDB and PostgreSQL.
                </p>
            </div>
        </section>
    );
};

export default About;
