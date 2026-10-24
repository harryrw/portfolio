export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ResumeData {
  fullName: string;
  role: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    pdfDownloadUrl: string;
  };
  experience: WorkExperience[];
  education: EducationEntry[];
  skills: SkillCategory[];
}

export const resumeData: ResumeData = {
  fullName: 'Harry Rogers Woollett',
  role: 'Junior Systems Developer',
  summary:
    'Systems developer experienced in high-reliability financial reporting web applications, database architecture, and automation pipelines. Currently developing state-wide budgeting systems for 1,500+ schools, with a strong foundation in modern web frameworks, SQL optimization, and Agile release management.',
  contact: {
    email: 'harry.rw96@gmail.com',
    phone: '0431 421 058',
    linkedin: 'https://www.linkedin.com/in/harryrw',
    github: 'https://github.com/harryrw',
    pdfDownloadUrl: '/Harry_Rogers_Woollett_Resume.pdf',
  },
  experience: [
    {
      role: 'Junior Systems Developer',
      company: 'Department of Education — Financial Services Division',
      period: '2023 — Present',
      highlights: [
        'Develop budgeting and reporting websites for school financial teams, governing multi-billion-dollar state allocations for 1,500+ Victorian schools.',
        'Leverage T-SQL and VB.NET within an enterprise SQL Server and Visual Studio environment.',
        'Utilize Agile methodologies, incorporating ServiceNow and Team Foundation Server for release sprints, tracking, and version control.',
        'Completed a higher-duties secondment coordinating major patch releases and organizing development sprints.',
        "Served as Planning & Risk Coordinator, managing the creation and ongoing audit maintenance of the division's risk register.",
      ],
    },
    {
      role: 'Automation Engineer Intern',
      company: 'Winning Group',
      period: '2023',
      highlights: [
        'Designed, integrated, and executed end-to-end automated tests across the Winning Group e-commerce suite alongside QA engineers.',
        'Implemented TypeScript-based automated test frameworks utilizing Protractor and Cypress.',
        'Managed CI/CD deployment verification using Bamboo, Git, and Bitbucket.',
      ],
    },
    {
      role: 'Client Relationship Officer',
      company: 'APositive Workforce Finance',
      period: '2019 — 2022',
      highlights: [
        'Conducted credit analysis of current and prospective clients to identify and mitigate financial fraud with strict compliance auditing.',
        'Administered accounting databases and reporting systems using Excel, Dancerace, Word, and Google Workspace.',
        'Served as the primary liaison for external institutional stakeholders across multi-tier communication workflows.',
      ],
    },
  ],
  education: [
    {
      degree: 'Diploma of IT (Web Dev)',
      institution: 'Coder Academy',
      year: '2023',
    },
    {
      degree: 'Bachelor of Business (Economics & Finance)',
      institution: 'RMIT University',
      year: '2018',
    },
  ],
  skills: [
    {
      title: 'Languages & Core',
      skills: ['SQL (T-SQL)', 'VB.NET', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'SSMS'],
    },
    {
      title: 'Testing & Infrastructure',
      skills: ['Cypress', 'Jest', 'Mocha', 'Git', 'ServiceNow', 'TFS', 'CI/CD'],
    },
  ],
};
