import React, { useState } from 'react';

export const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        {
            title: 'Design',
            icon: '/assets/design.svg',
            skills: [
                { name: 'Photoshop', icon: '/assets/skills/photoshop.svg' },
                { name: 'Illustrator', icon: '/assets/skills/illustrator.svg' },
                { name: 'InDesign', icon: '/assets/skills/indesign.svg' },
                { name: 'Premier Pro', icon: '/assets/skills/premierpro.svg' },
                { name: 'Fresco', icon: '/assets/skills/fresco.svg' },
                { name: 'Acrobat Pro', icon: '/assets/skills/acrobatpro.svg' },
                { name: 'Procreate', icon: '/assets/skills/procreate.svg' },
                { name: 'Figma', icon: '/assets/skills/figma.svg' },
                { name: 'Canva', icon: '/assets/skills/canva.svg' },
            ],
            extraSkills: [],
        },
        {
            title: 'Hard Skills',
            icon: '/assets/hardskills.svg',
            skills: [
                {
                    name: 'Creative Cloud',
                    icon: '/assets/skills/creativecloud.svg',
                },
                { name: 'SharePoint', icon: '/assets/skills/sharepoint.svg' },
                {
                    name: 'Sales Navigator',
                    icon: '/assets/skills/salesnavigator.svg',
                },
                { name: 'Salesforce', icon: '/assets/skills/salesforce.svg' },
                {
                    name: 'Microsoft 365',
                    icon: '/assets/skills/microsoft365.svg',
                },
                { name: 'SAP', icon: '/assets/skills/sap.svg' },
            ],
            extraSkills: [
                { name: 'MARCOM tools', icon: '/assets/skills/marcom.svg' },
                {
                    name: 'Lead management',
                    icon: '/assets/skills/leadmanagement.svg',
                },
            ],
        },
        {
            title: 'Soft Skills',
            icon: '/assets/softskills.svg',
            skills: [
                { name: 'Management', icon: '/assets/skills/management.svg' },
                { name: 'Autonomy', icon: '/assets/skills/autonomy.svg' },
                {
                    name: 'Learning agility',
                    icon: '/assets/skills/learning.svg',
                },
                {
                    name: 'Cooperativity',
                    icon: '/assets/skills/cooperativity.svg',
                },
                { name: 'Training', icon: '/assets/skills/training.svg' },
                {
                    name: 'Adaptability',
                    icon: '/assets/skills/adaptability.svg',
                },
                {
                    name: 'Critical thinking',
                    icon: '/assets/skills/critical.svg',
                },
                {
                    name: 'Innovative mindset',
                    icon: '/assets/skills/innovative.svg',
                },
                { name: 'Creativity', icon: '/assets/skills/creativity.svg' },
            ],
            extraSkills: [],
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
                            ? isMiddle
                                ? 'scale-[1.13]'
                                : 'md:scale-[1.0] scale-[1.13]'
                            : isMiddle
                              ? 'md:scale-[1.05] scale-100'
                              : 'md:scale-[0.95] scale-100';

                        return (
                            <div
                                key={index}
                                className={`w-full max-w-[395px] min-h-[470px] mx-auto
                                    ${index === 0 ? 'md:mr-[-30px]' : ''}
                                    ${index === 2 ? 'md:ml-[-30px]' : ''}
                                    ${scaleClass}
                                    transition-transform duration-300 ease-out transform-gpu
                                    relative rounded-[25px] overflow-hidden
                                    ${isHovered ? 'z-10' : isMiddle ? 'z-[5]' : 'z-0'}
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
                                    } z-10 flex flex-col p-6 pb-8`}
                                >
                                    <img
                                        src={card.icon}
                                        className={`mx-auto mb-4 transition-transform duration-300 ${
                                            isHovered
                                                ? 'scale-125'
                                                : 'scale-100'
                                        }`}
                                        alt={card.title}
                                    />
                                    <h3 className="text-3xl text-center font-extrabold mb-6">
                                        {card.title}
                                    </h3>

                                    <div className="grid grid-cols-3 gap-x-1 gap-y-4 mt-2">
                                        {card.skills.map(
                                            (skill, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="flex flex-col items-center"
                                                >
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="w-14 h-14 object-contain mb-2"
                                                    />
                                                    <span className="text-center text-xs text-gray-300">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Extra skills (MARCOM and Lead management) */}
                                    {card.extraSkills.length > 0 && (
                                        <div className="flex justify-center gap-8 mt-2 lg:mt-6">
                                            {card.extraSkills.map(
                                                (skill, skillIndex) => (
                                                    <div
                                                        key={skillIndex}
                                                        className="flex flex-col items-center"
                                                    >
                                                        <img
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            className="w-14 h-14 object-contain mb-2"
                                                        />
                                                        <span className="text-center text-xs text-gray-300">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
