import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import review from "@/assets/images/review.webp";
import review1 from "@/assets/images/review1.webp";
import review2 from "@/assets/images/review2.webp";

export const navData = [
  {
    id: "1",
    name: "Platform",
    path: "/",
  },
  {
    id: "2",
    name: "Jobs",
    path: "/jobs",
  },
  {
    id: "3",
    name: "About us",
    path: "/about-us",
  },

  {
    id: "4",
    name: "Contact us",
    path: "/contact-us",
  },
];

export const footerData = [
  {
    icon: <MdOutlineEmail />,
    text: "hello@mycompany.com",
  },
  {
    icon: <FiPhoneCall />,
    text: "+1 (650) 555-0111",
  },
];

export const footerNavLinksA = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Jobs",
    link: "/jobs",
  },
  {
    title: "About us",
    link: "/blogs",
  },
];
export const footerNavLinksB = [
  {
    title: "Get Started",
    link: "/auth/register",
  },
  {
    title: "Terms of Services",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
];

export const testimonialData = [
  {
    img: review,
    text: "The results of the service were nothing short of remarkable. The end product far exceeded my expectations, showcasing the team's commitment to delivering excellence. It's clear that they take great pride in their work, and that pride shines through...",
    reviewer: "Chloe Anderson",
    title: "CTO",
  },
  {
    img: review1,
    text: "I would wholeheartedly recommend this service to anyone in need. This is a team that is not only skilled and dedicated but also genuinely cares about their clients' satisfaction. If you're looking for a service that combines expertise, professionalism, and a personal touch, look no further this is it!",
    reviewer: "First Bank",
    title: "Managing Director",
  },

  {
    img: review2,
    text: "I recently had the pleasure of experiencing an absolutely outstanding service that left me thoroughly impressed. From start to finish, every aspect of the service rendered was handled with the utmost professionalism, care, and attention to detail.",
    reviewer: "Victor Gbenga",
    title: "Operations Manager",
  },
  {
    img: review,
    text: "The results of the service were nothing short of remarkable. The end product far exceeded my expectations, showcasing the team's commitment to delivering excellence. It's clear that they take great pride in their work, and that pride shines through...",
    reviewer: "Chloe Anderson",
    title: "CTO",
  },
  {
    img: review1,
    text: "I would wholeheartedly recommend this service to anyone in need. This is a team that is not only skilled and dedicated but also genuinely cares about their clients' satisfaction. If you're looking for a service that combines expertise, professionalism, and a personal touch, look no further this is it!",
    reviewer: "First Bank",
    title: "Managing Director",
  },

  {
    img: review2,
    text: "I recently had the pleasure of experiencing an absolutely outstanding service that left me thoroughly impressed. From start to finish, every aspect of the service rendered was handled with the utmost professionalism, care, and attention to detail.",
    reviewer: "Victor Gbenga",
    title: "Operations Manager",
  },
];

export const FaqData = [
  {
    question: "How do I search for jobs?",
    answer:
      "To search for jobs, use the search bar on the homepage and enter keywords related to the type of job you are looking for. You can also use filters to narrow down your search results.",
  },
  {
    question: "Can I save job listings?",
    answer:
      'Yes, you can save job listings by clicking on the "Save" button next to the job posting. You can view your saved jobs in your profile.',
  },
  {
    question: "How do I apply for a job?",
    answer:
      'To apply for a job, click on the "Apply Now" button on the job posting and follow the instructions provided by the employer. Some employers may require you to submit your resume and cover letter online.',
  },
  {
    question: "What should I include in my profile?",
    answer:
      "In your profile, you should include information about your education, work experience, skills, and any other relevant details that will help employers understand your qualifications.",
  },
  {
    question: "Can I edit my application after submitting it?",
    answer:
      "Once you have submitted your application, you may not be able to edit it. However, you can withdraw your application and submit a new one if necessary.",
  },
  {
    question: "How do I contact support?",
    answer:
      "If you need assistance or have any questions, you can contact our support team by sending an email to support@example.com. We will respond to your inquiry as soon as possible.",
  },
];

export const JobsData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Totogi",
    location: "Remote",
    salary: "$60,000/year USD",
    type: "Full time",
    summary:
      "You'll be instrumental in crafting AI tools that clarify complex concepts, employing the latest in technology to upgrade your coding skills to superhero-level.",
    posted: "2 days ago",
    description:
      "We are looking for a Full Stack Developer to join our team. You will be responsible for developing and maintaining web applications, as well as designing and implementing user interfaces. You should have a strong understanding of front-end and back-end technologies and be able to work in a fast-paced environment. If you are passionate about technology and want to work on cutting-edge projects, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in web development",
      "Proficient in HTML, CSS, JavaScript, and other front-end technologies",
      "Experience with back-end technologies such as Node.js, Python, or Ruby on Rails",
      "Familiarity with databases such as MySQL, MongoDB, or PostgreSQL",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork skills",
    ],
    responsibilities: [
      "Developing front-end and back-end web applications",
      "Designing and implementing user interfaces",
      "Testing and debugging code",
      "Collaborating with team members to achieve project goals",
      "Staying up-to-date with the latest technologies and trends",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Flexible work hours and remote work options",
      "Opportunities for professional development and training",
      "Dynamic and collaborative work environment",
      "Opportunity to work on cutting-edge projects",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "TechCo",
    location: "San Francisco, CA",
    salary: "$100,000/year USD",
    type: "Full time",
    summary:
      "Join our team of talented software engineers and work on innovative projects that push the boundaries of technology.",
    posted: "1 day ago",
    description:
      "We are seeking a skilled Software Engineer to join our team. In this role, you will be responsible for designing, developing, and maintaining software applications. You should have a strong understanding of software development principles and be proficient in programming languages such as Java, C++, or Python. If you are passionate about technology and enjoy working in a collaborative environment, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficient in programming languages such as Java, C++, or Python",
      "Experience with software development frameworks and tools",
      "Knowledge of database systems and SQL",
      "Strong problem-solving and analytical skills",
      "Excellent communication and teamwork abilities",
    ],
    responsibilities: [
      "Designing and developing software applications",
      "Collaborating with cross-functional teams to define project requirements",
      "Testing and debugging code",
      "Implementing software solutions based on technical specifications",
      "Participating in code reviews and providing feedback",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity for career growth and advancement",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Dynamic and innovative work environment",
    ],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataTech",
    location: "New York, NY",
    salary: "$120,000/year USD",
    type: "Full time",
    summary:
      "Join our team of data scientists and work on cutting-edge projects that leverage data to drive insights and innovation.",
    posted: "3 days ago",
    description:
      "We are looking for a talented Data Scientist to join our team. In this role, you will be responsible for analyzing large datasets, developing statistical models, and generating insights to support business decision-making. You should have a strong background in data analysis, machine learning, and programming. If you are passionate about data and enjoy solving complex problems, we would love to hear from you.",
    requirements: [
      "Master's or Ph.D. degree in a quantitative field (e.g., Statistics, Mathematics, Computer Science)",
      "3+ years of experience in data analysis and modeling",
      "Proficiency in programming languages such as Python or R",
      "Experience with data visualization tools",
      "Knowledge of machine learning algorithms and techniques",
      "Strong analytical and problem-solving skills",
      "Excellent communication and presentation abilities",
    ],
    responsibilities: [
      "Analyzing large datasets and identifying patterns and trends",
      "Developing statistical models and algorithms",
      "Building predictive models and conducting data-driven research",
      "Collaborating with cross-functional teams to define project objectives",
      "Presenting findings and insights to stakeholders",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity to work on cutting-edge projects",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Collaborative and inclusive work environment",
    ],
  },
  {
    id: 4,
    title: "UX Designer",
    company: "DesignCo",
    location: "Seattle, WA",
    salary: "$90,000/year USD",
    type: "Full time",
    summary:
      "Join our team of talented UX designers and create intuitive and user-friendly experiences for our customers.",
    posted: "2 days ago",
    description:
      "We are seeking a skilled UX Designer to join our team. In this role, you will be responsible for designing and prototyping user interfaces for web and mobile applications. You should have a strong understanding of user-centered design principles and be proficient in design tools such as Sketch or Figma. If you are passionate about creating exceptional user experiences and enjoy working in a collaborative environment, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Design, Human-Computer Interaction, or related field",
      "3+ years of experience in UX design",
      "Proficiency in design tools such as Sketch or Figma",
      "Knowledge of user-centered design principles and best practices",
      "Experience with prototyping tools",
      "Strong visual and communication skills",
      "Ability to work collaboratively in cross-functional teams",
    ],
    responsibilities: [
      "Creating wireframes, mockups, and prototypes for web and mobile applications",
      "Conducting user research and usability testing",
      "Collaborating with stakeholders to define project requirements",
      "Iterating on designs based on user feedback",
      "Working closely with developers to ensure design implementation",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity for career growth and advancement",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Collaborative and creative work environment",
    ],
  },
  {
    id: 5,
    title: "Product Manager",
    company: "TechStart",
    location: "Austin, TX",
    salary: "$110,000/year USD",
    type: "Full time",
    summary:
      "Join our team of product managers and drive the development and launch of innovative products.",
    posted: "4 days ago",
    description:
      "We are looking for a talented Product Manager to join our team. In this role, you will be responsible for defining product strategy, conducting market research, and collaborating with cross-functional teams to deliver successful products. You should have a strong understanding of product management principles and be able to translate customer needs into product requirements. If you are passionate about technology and enjoy working in a dynamic environment, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "3+ years of experience in product management",
      "Knowledge of product management frameworks and methodologies",
      "Experience with market research and competitive analysis",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Ability to work collaboratively in cross-functional teams",
    ],
    responsibilities: [
      "Defining product vision and strategy",
      "Conducting market research and identifying customer needs",
      "Collaborating with engineering and design teams to develop product requirements",
      "Managing the product development lifecycle",
      "Analyzing product performance and making data-driven decisions",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity to work on innovative products",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Collaborative and dynamic work environment",
    ],
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "WebTech",
    location: "London, UK",
    salary: "£50,000/year GBP",
    type: "Full time",
    summary:
      "Join our team of frontend developers and build responsive and user-friendly web applications.",
    posted: "3 days ago",
    description:
      "We are seeking a skilled Frontend Developer to join our team. In this role, you will be responsible for developing and maintaining frontend applications, as well as implementing user interfaces. You should have a strong understanding of frontend technologies such as HTML, CSS, and JavaScript, and be proficient in frontend frameworks such as React or Angular. If you are passionate about web development and enjoy working in a collaborative environment, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in frontend development",
      "Proficient in HTML, CSS, and JavaScript",
      "Experience with frontend frameworks such as React or Angular",
      "Knowledge of responsive design principles",
      "Strong problem-solving and debugging skills",
      "Excellent communication and teamwork abilities",
    ],
    responsibilities: [
      "Developing frontend applications and user interfaces",
      "Implementing responsive and accessible designs",
      "Collaborating with backend developers to integrate frontend and backend functionality",
      "Testing and debugging frontend code",
      "Staying up-to-date with the latest frontend technologies and trends",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity for career growth and advancement",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Collaborative and innovative work environment",
    ],
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Berlin, Germany",
    salary: "€70,000/year EUR",
    type: "Full time",
    summary:
      "Join our team of DevOps engineers and help build and maintain scalable and reliable infrastructure.",
    posted: "2 days ago",
    description:
      "We are looking for a talented DevOps Engineer to join our team. In this role, you will be responsible for designing, implementing, and maintaining infrastructure and deployment pipelines. You should have a strong understanding of cloud platforms such as AWS or Azure, as well as experience with configuration management tools and containerization technologies. If you are passionate about infrastructure automation and enjoy working in a collaborative environment, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in DevOps or infrastructure engineering",
      "Proficient in cloud platforms such as AWS or Azure",
      "Experience with configuration management tools such as Ansible or Terraform",
      "Knowledge of containerization technologies such as Docker or Kubernetes",
      "Strong scripting and automation skills",
      "Excellent communication and teamwork abilities",
    ],
    responsibilities: [
      "Designing and implementing scalable and reliable infrastructure",
      "Automating deployment and configuration processes",
      "Monitoring and troubleshooting infrastructure issues",
      "Collaborating with development teams to optimize application performance",
      "Implementing security best practices",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity to work with cutting-edge technologies",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Collaborative and dynamic work environment",
    ],
  },
  {
    id: 8,
    title: "Mobile App Developer",
    company: "AppTech",
    location: "Toronto, Canada",
    salary: "$80,000/year CAD",
    type: "Full time",
    summary:
      "Join our team of mobile app developers and create innovative and user-friendly mobile applications.",
    posted: "1 day ago",
    description:
      "We are seeking a skilled Mobile App Developer to join our team. In this role, you will be responsible for developing and maintaining mobile applications for iOS and Android platforms. You should have a strong understanding of mobile app development frameworks such as React Native or Flutter, as well as experience with native app development. If you are passionate about mobile app development and enjoy working in a collaborative environment, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in mobile app development",
      "Proficient in mobile app development frameworks such as React Native or Flutter",
      "Experience with native app development for iOS and Android",
      "Knowledge of mobile app design principles and best practices",
      "Strong problem-solving and debugging skills",
      "Excellent communication and teamwork abilities",
    ],
    responsibilities: [
      "Developing mobile applications for iOS and Android platforms",
      "Implementing user interfaces and app functionality",
      "Testing and debugging mobile app code",
      "Collaborating with backend developers to integrate app with server-side functionality",
      "Staying up-to-date with the latest mobile app development trends and technologies",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity for career growth and advancement",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Collaborative and innovative work environment",
    ],
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    company: "SecureTech",
    location: "Sydney, Australia",
    salary: "$90,000/year AUD",
    type: "Full time",
    summary:
      "Join our team of cybersecurity analysts and help protect our systems and data from cyber threats.",
    posted: "3 days ago",
    description:
      "We are looking for a talented Cybersecurity Analyst to join our team. In this role, you will be responsible for monitoring and analyzing security events, conducting vulnerability assessments, and implementing security controls. You should have a strong understanding of cybersecurity principles and best practices, as well as experience with security tools and technologies. If you are passionate about cybersecurity and enjoy working in a dynamic environment, we would love to hear from you.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in cybersecurity or information security",
      "Knowledge of cybersecurity principles and best practices",
      "Experience with security tools and technologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and teamwork abilities",
    ],
    responsibilities: [
      "Monitoring and analyzing security events",
      "Conducting vulnerability assessments and penetration testing",
      "Implementing and maintaining security controls",
      "Investigating and responding to security incidents",
      "Providing security recommendations and guidance",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Opportunity to work on challenging cybersecurity projects",
      "Flexible work hours and remote work options",
      "Training and professional development opportunities",
      "Collaborative and dynamic work environment",
    ],
  },
];
