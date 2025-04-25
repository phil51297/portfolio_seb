import React, { useState } from 'react';

export const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        {
            title: 'Design',
            icon: '/assets/design.svg',
            skills: [
                'Photoshop',
                'Procreate',
                'Fresco',
                'Canva',
                'Figma',
                'Acrobat Pro',
                'Illustrator',
                'Premier Pro',
                'InDesign',
            ],
        },
        {
            title: 'Hard Skills',
            icon: '/assets/hardskills.svg',
            skills: [
                'Adobe Creative Cloud',
                'SharePoint',
                'Microsoft 365',
                'SalesForce',
                'SAP',
                'Hubspot',
                'Sales Navigator',
                'MARCOM tools',
                'Lead management',
            ],
        },
        {
            title: 'Soft Skills',
            icon: '/assets/softskills.svg',
            skills: [
                'Management',
                'Autonomy',
                'Training',
                'Cooperativity',
                'Team spirit',
            ],
        },
    ];

    return (
        <section id="skills" className="min-h-screen flex justify-center py-25">
            <div className="w-full max-w-7xl mx-auto px-4 mt-4">
                <h2 className="text-4xl text-center font-extrabold font-[Poppins]">
                    My <span className="text-[#F43F5E]">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mt-25">
                    {cards.map((card, index) => {
                        const isHovered = hoveredIndex === index;
                        const isMiddle = index === 1;

                        const shadowStyle = isHovered
                            ? {
                                  boxShadow:
                                      '0 10px 25px rgba(240, 20, 50, 0.5)',
                              }
                            : {};

                        const scaleClass = isHovered
                            ? `md:scale-${isMiddle ? '[1.13]' : '[1.0]'} scale-[1.13]`
                            : `md:scale-${isMiddle ? '[1.05]' : '[0.95]'} scale-100`;

                        return (
                            <div
                                key={index}
                                className={`w-full max-w-[395px] min-h-[470px] mx-auto
                                        ${index === 0 ? 'md:mr-[-30px]' : ''}
                                        ${index === 2 ? 'md:ml-[-30px]' : ''}
                                        ${scaleClass}
                                        transition-transform duration-300 ease-out transform-gpu
                                        relative rounded-[25px] overflow-hidden
                                        ${isHovered ? 'z-10' : index === 1 ? 'z-[5]' : 'z-0'}
                                    `}
                                style={shadowStyle}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(30,30,30,0.74)_39.67%,_rgba(51,33,36,0.71)_49.67%,_rgba(110,42,54,0.64)_66.17%,_rgba(191,55,78,0.57)_79.67%,_rgba(218,59,86,0.64)_96.17%,_rgba(244,63,94,0.71)_100%)] rounded-[25px]"></div>

                                <div
                                    className={`absolute inset-0 rounded-[25px] ${
                                        isHovered
                                            ? 'border border-[#911111]'
                                            : ''
                                    } z-10 flex flex-col p-10 pb-14`}
                                >
                                    <img
                                        src={card.icon}
                                        className={`mx-auto mb-6 transition-transform duration-300 ${
                                            isHovered
                                                ? 'scale-125'
                                                : 'scale-100'
                                        }`}
                                        alt={card.title}
                                    />
                                    <h3 className="text-3xl text-center font-extrabold mb-8">
                                        {card.title}
                                    </h3>
                                    <div className="flex justify-center">
                                        <ul className="space-y-1 text-left text-gray-300 font-[Roboto]">
                                            {card.skills.map(
                                                (skill, skillIndex) => (
                                                    <li key={skillIndex}>
                                                        {skill}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
