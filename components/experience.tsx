"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { useTheme } from "./theme-provider";
import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    company: "APPU",
    role: "Full-Stack Developer",
    period: "2024 – Present", // TODO: update with exact dates
    summary:
      "Built APPU, a multi-module POS & e-commerce platform for institutional cafeterias, deployed on AWS ECS Fargate via infrastructure-as-code (AWS SAM / CloudFormation).",
    bullets: [
      "Designed a DynamoDB data layer with 47+ repository modules accessed via boto3, plus Redis / AWS ElastiCache for distributed sessions and caching.",
      "Integrated Wompi payment gateway with webhook-based transaction confirmation and Contentful headless CMS for dynamic content.",
      "Implemented stateless JWT auth via custom middleware and an Outbox pattern over AWS SQS FIFO for eventual data synchronization.",
      "Delivered Excel reporting with XlsxWriter/openpyxl and analytics dashboards using Dash and Pandas.",
      "Containerized the full stack with Docker Compose (local DynamoDB), automated builds to AWS ECR, and Gunicorn with dynamic workers in production.",
      "Wrote integration tests with pytest and moto to mock DynamoDB.",
    ],
    technologies: [
      "Django 4.2",
      "Python",
      "AWS ECS Fargate",
      "DynamoDB",
      "Redis",
      "AWS SQS",
      "AWS S3",
      "Docker",
      "CloudFormation",
      "JWT",
      "Wompi",
      "Contentful",
      "pytest",
    ],
  },
  {
    company: "Molok",
    role: "Full-Stack Developer",
    period: "2024", // TODO: update with exact dates
    summary:
      "Built Molok, a full-cycle motorcycle credit platform covering inventory, loan origination, customer validation, portfolio tracking, and payment registration.",
    bullets: [
      "Implemented a SOAP integration with Procrédito (credit bureau) for real-time credit score lookups.",
      "Designed a combined risk engine for primary borrower and co-borrower, classifying clients across 6 risk levels based on delinquency, insolvency, and credit obligations — results cached 90 days in DynamoDB.",
      "Built management, advisor, and customer interfaces with Jinja2 templates and a custom vanilla CSS/JS design system.",
      "Secured multi-role access (management / advisor / customer) with JWT authentication and handled file storage on AWS S3.",
    ],
    technologies: [
      "Django 4.2",
      "Python",
      "DynamoDB",
      "Redis",
      "AWS S3",
      "JWT",
      "SOAP / Procrédito",
      "Jinja2",
      "JavaScript",
    ],
  },
];

export default function Experience() {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span
              className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
            >
              Work
            </span>{" "}
            Experience
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Professional projects where I designed and shipped production systems
            end-to-end.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full bg-gradient-to-br ${currentTheme.accent} items-center justify-center shadow-lg`}
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </div>

                {/* Card */}
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 sm:p-8 backdrop-blur-xl hover:bg-white/[0.06] hover:border-violet-500/25 hover:shadow-[0_0_35px_rgba(124,58,237,0.12)] transition-all duration-500 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentTheme.accent} opacity-[0.03] pointer-events-none`}
                  />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{exp.company}</h3>
                      <p className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent font-medium text-sm`}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/50 text-sm flex-shrink-0">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{exp.summary}</p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <div
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentTheme.accent} flex-shrink-0`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-white/10 text-white/80 border-white/20 hover:bg-white/20 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
