'use client';

import { motion } from 'framer-motion';
import { Activity, ExternalLink, GitBranch, Github, Network, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from './theme-provider';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Modern E-Commerce App',
    description:
      'Full-stack e-commerce platform with multi-payment support (PayPal, Stripe, cash on delivery), product catalog, and a protected admin dashboard. Features auth, order management, and real-time sales analytics.',
    image: '/project-1.jpg',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'ZOD',
      'Shadcn',
      'PayPal',
      'Stripe',
      'PostgreSQL',
      'Jest',
      'Recharts',
    ],
    live: 'https://web-app-iota-three.vercel.app',
    github: 'https://github.com/Danielpinedasalazar/WebApp.git',
    category: 'Web Development',
    wide: true,
  },
  {
    title: 'NestJS Blogs API',
    description:
      'Production-ready REST API for a blogging platform with JWT & Google OAuth, media via AWS, Swagger docs, and E2E tests deployed on AWS EC2.',
    image: '/project-2.jpg',
    technologies: [
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'Swagger',
      'JWT',
      'Google OAuth',
      'AWS',
      'Jest',
    ],
    live: 'http://ec2-3-138-192-158.us-east-2.compute.amazonaws.com/api#/',
    github: 'https://github.com/Danielpinedasalazar/BlogPosts.git',
    category: 'Web Development',
    wide: false,
  },
  {
    title: 'Airline Booking Application',
    description:
      'Full-stack airline booking app — Spring Boot REST API + React SPA. Role-based access (Customer, Admin, Pilot), seat reservation, and automated email notifications.',
    image: '/project-3.png',
    technologies: ['Spring Boot', 'Java', 'MySQL', 'React', 'JavaScript', 'JWT', 'Vite'],
    live: 'https://daniel-airlines.vercel.app/home',
    github: 'https://github.com/Danielpinedasalazar/Booking-Flights.git',
    category: 'Web Development',
    wide: false,
  },
];

const mlProjects = [
  {
    title: 'Regression Models',
    description:
      'Predictive modeling with linear, polynomial and gradient boosting regression. Feature engineering, cross-validation, and performance evaluation on real datasets.',
    icon: TrendingUp,
    gradient: 'from-violet-600/20 to-indigo-600/10',
    iconColor: 'text-violet-400',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Classification Models',
    description:
      'Binary and multiclass classifiers using Random Forest, SVM, XGBoost, and neural networks. Metrics: precision, recall, F1, ROC-AUC.',
    icon: GitBranch,
    gradient: 'from-indigo-600/20 to-blue-600/10',
    iconColor: 'text-indigo-400',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Seaborn', 'Jupyter'],
  },
  {
    title: 'Time Series Forecasting',
    description:
      'Temporal data analysis and forecasting with ARIMA, Prophet, and LSTM networks. Stationarity tests, decomposition, and multi-step ahead prediction.',
    icon: Activity,
    gradient: 'from-blue-600/20 to-cyan-600/10',
    iconColor: 'text-blue-400',
    technologies: ['Python', 'Pandas', 'Statsmodels', 'Keras', 'Matplotlib'],
  },
  {
    title: 'Clustering & Segmentation',
    description:
      'Unsupervised learning with K-Means, DBSCAN, and hierarchical clustering. Dimensionality reduction via PCA and t-SNE for pattern discovery.',
    icon: Network,
    gradient: 'from-cyan-600/20 to-teal-600/10',
    iconColor: 'text-cyan-400',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Jupyter'],
  },
];

const cardBase =
  'bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl overflow-hidden group transition-all duration-500 hover:bg-white/[0.06] hover:border-violet-500/25 hover:shadow-[0_0_35px_rgba(124,58,237,0.12)] rounded-2xl h-full relative';

export default function ProjectSection() {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            <span
              className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
            >
              Featured
            </span>{' '}
            Projects
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
            Real-world applications built with modern technologies, shipped to production.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={project.wide ? 'lg:col-span-2' : ''}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={cardBase}>
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${project.wide ? 'lg:flex lg:flex-row' : ''}`}
                >
                  <div
                    className={`relative overflow-hidden flex-shrink-0 ${project.wide ? 'lg:w-[45%]' : ''}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={350}
                      className={`object-cover group-hover:scale-[1.04] transition-transform duration-700 ${
                        project.wide ? 'w-full h-48 lg:h-full' : 'w-full h-44 sm:h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-black/50 text-white/90 border-0 backdrop-blur-sm text-[10px]">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col ${project.wide ? 'lg:flex-1' : ''} p-5 sm:p-6 space-y-4`}
                  >
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-white/70 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2.5 pt-1">
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 text-xs h-8"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-white/[0.05] text-white/80 border-white/[0.10] hover:bg-white/[0.10] hover:border-violet-500/30 text-xs h-8"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-1.5" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bento CTA slot */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-full min-h-[110px] rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/[0.08] to-indigo-600/[0.04] p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-violet-600/10 blur-[60px] pointer-events-none" />
              <div className="relative">
                <h3 className="text-white font-bold text-lg mb-1">Want to see more?</h3>
                <p className="text-white/50 text-sm">
                  All source code is publicly available on GitHub.
                </p>
              </div>
              <Button
                asChild
                size="sm"
                className="relative flex-shrink-0 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-violet-500/20"
              >
                <a
                  href="https://github.com/Danielpinedasalazar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Currently Building — ML */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/[0.06]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
            <h3 className="text-white font-semibold text-lg tracking-tight">Currently Studying</h3>
            <span className="text-white/30 text-sm hidden sm:inline">— Machine Learning</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mlProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="h-full rounded-2xl border border-dashed border-white/[0.10] bg-white/[0.02] hover:bg-white/[0.04] hover:border-violet-500/20 hover:shadow-[0_0_25px_rgba(124,58,237,0.08)] transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Icon placeholder */}
                  <div
                    className={`relative flex items-center justify-center h-28 bg-gradient-to-br ${project.gradient} border-b border-white/[0.05]`}
                  >
                    <project.icon className={`w-10 h-10 ${project.iconColor} opacity-60`} />
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-white/50 text-[10px] font-medium tracking-wide">
                      In Development
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1 gap-3">
                    <div>
                      <h4 className="text-white/90 font-semibold text-sm mb-1.5">
                        {project.title}
                      </h4>
                      <p className="text-white/45 text-xs leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.07] text-white/55 text-[10px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
