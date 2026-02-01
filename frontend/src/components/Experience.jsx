import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { workExperience } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Work Experience
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Building quality into every line of code
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="timeline-line hidden md:block" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {workExperience.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={item.id}
                                        className={`relative animate-slide-up`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onMouseEnter={() => setHoveredId(item.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        <div
                                            className={`md:grid md:grid-cols-2 md:gap-8 ${isLeft ? '' : 'md:grid-flow-dense'
                                                }`}
                                        >
                                            {/* Content Card */}
                                            <div
                                                className={`${isLeft ? 'md:col-start-1' : 'md:col-start-2'
                                                    } mb-8 md:mb-0`}
                                            >
                                                <Card
                                                    className={`card-hover transition-all duration-300 ${hoveredId === item.id
                                                            ? 'shadow-lg scale-105 border-primary/50'
                                                            : ''
                                                        }`}
                                                >
                                                    <CardContent className="p-6">
                                                        {/* Icon & Role */}
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                                                                <Briefcase className="h-5 w-5" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h3 className="font-bold text-lg">
                                                                    {item.role}
                                                                </h3>
                                                                <p className="text-sm text-muted-foreground">
                                                                    {item.company}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Period & Location */}
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            <Badge variant="outline" className="text-xs">
                                                                {item.period}
                                                            </Badge>
                                                            <Badge variant="outline" className="text-xs">
                                                                {item.location}
                                                            </Badge>
                                                        </div>

                                                        {/* Achievements */}
                                                        <ul className="space-y-2 mb-4">
                                                            {item.achievements.map((achievement, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="text-sm text-foreground/80 flex items-start gap-2"
                                                                >
                                                                    <span className="text-primary mt-1">•</span>
                                                                    <span>{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        {/* Technologies */}
                                                        <div className="flex flex-wrap gap-2">
                                                            {item.technologies.map((tech, idx) => (
                                                                <span key={idx} className="tech-badge">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>

                                            {/* Timeline Node (Desktop) */}
                                            <div className="hidden md:flex items-center justify-center">
                                                <div
                                                    className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 ${hoveredId === item.id
                                                            ? 'bg-primary scale-150'
                                                            : 'bg-muted'
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;