/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
	isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
	title: "Bolles's Portfolio",
	description:
		"Experienced Web Developer with a demonstrated history of working in the program development industry, Co-founder of Leafunder and student at 1337 Future Is Loading.",
	og: {
		title: "Yassir Bolles Portfolio",
		type: "website",
		url: "http://ysrbolles.me",
	},
};

//Home Page
const greeting = {
	title: "Yassir Bolles",
	logo_name: "YassirBolles",
	nickname: "Ysrbolles",
	subTitle:
		"Experienced Web Developer with a demonstrated history of working in the program development industry, Co-founder of Leafunder and student at 1337 Future Is Loading.",
	// resumeLink:
	// 	"https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
	portfolio_repository: "https://github.com/Ysrbolles/Portfolio",
	githubProfile: "https://github.com/ysrbolles",
};

const socialMediaLinks = [
	/* Your Social Media Link */


	{
		name: "Github",
		link: "https://github.com/ysrbolles",
		fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
		backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/ysrbolles",
		fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
		backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
	},
	{
		name: "Gmail",
		link: "mailto:ysrbolles@gmail.com",
		fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
		backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
	},
	{
		name: "Twitter",
		link: "https://twitter.com/BollesYassir",
		fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
		backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/Ysrbolles",
		fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
		backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/ysrbolles/",
		fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
		backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
	},
];

const skills = {
	data: [
		{
			title: "Full Stack Development",
			fileName: "FullStackImg",
			skills: [
				"⚡ Building resposive website front end using ReactJs-Redux",
				"⚡ Developing mobile applications using React Native",
				"⚡ Creating application backend in Node, Express, MongoDB"
			],
			softwareSkills: [
				{
					skillName: "HTML5",
					fontAwesomeClassname: "simple-icons:html5",
					style: {
						color: "#E34F26",
					},
				},
				{
					skillName: "CSS3",
					fontAwesomeClassname: "fa-css3",
					style: {
						color: "#1572B6",
					},
				},
				{
					skillName: "Sass",
					fontAwesomeClassname: "simple-icons:sass",
					style: {
						color: "#CC6699",
					},
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "simple-icons:javascript",
					style: {
						backgroundColor: "#000000",
						color: "#F7DF1E",
					},
				},
				{
					skillName: "ReactJS",
					fontAwesomeClassname: "simple-icons:react",
					style: {
						color: "#61DAFB",
					},
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "simple-icons:node-dot-js",
					style: {
						color: "#339933",
					},
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "simple-icons:npm",
					style: {
						color: "#CB3837",
					},
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "simple-icons:yarn",
					style: {
						color: "#2C8EBB",
					},
				}
			],
		},
		{
			title: "Cloud Infra-Architecture",
			fileName: "CloudInfraImg",
			skills: [
				"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
			],
			softwareSkills: [
				{
					skillName: "Firebase",
					fontAwesomeClassname: "simple-icons:firebase",
					style: {
						color: "#FFCA28",
					},
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "simple-icons:mongodb",
					style: {
						color: "#47A248",
					},
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "simple-icons:docker",
					style: {
						color: "#1488C6",
					},
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "simple-icons:kubernetes",
					style: {
						color: "#326CE5",
					},
				},
			],
		},
		{
			title: "UI/UX Design",
			fileName: "DesignImg",
			skills: [
				"⚡ Designing highly attractive user interface for mobile and web applications",
				"⚡ Customizing logo designs and building logos from scratch",
				"⚡ Creating the flow of application functionalities to optimize user experience",
			],
			softwareSkills: [
				{
					skillName: "Adobe XD",
					fontAwesomeClassname: "simple-icons:adobexd",
					style: {
						color: "#FF2BC2",
					},
				},
				{
					skillName: "Figma",
					fontAwesomeClassname: "simple-icons:figma",
					style: {
						color: "#F24E1E",
					},
				},
				{
					skillName: "Adobe Photoshop",
					fontAwesomeClassname: "simple-icons:adobephotoshop",
					style: {
						color: "#FF7C00",
					},
				},

			],
		},
	],
};

// Education Page
const competitiveSites = {
	competitiveSites: [
		{
			siteName: "HackerRank",
			iconifyClassname: "simple-icons:hackerrank",
			style: {
				color: "#2EC866",
			},
			profileLink: "https://www.hackerrank.com/ysrbolles",
		},
		{
			siteName: "Udacity",
			iconifyClassname: "simple-icons:udacity",
			style: {
				color: "#2EC866",
			},
			profileLink: "https://www.udacity.com/",
		},
	],
};

const degrees = {
	degrees: [
		{
			title: "1337 FUTURE IS LOADING",
			subtitle: "1337-Khouribga / 42 Network",
			logo_path: "1337.png",
			alt_name: "OFPPT",
			duration: "2018 - Present",
			descriptions: ["⚡ Algorithms & AI",
				"⚡ Neworkin & System Administration",
				"⚡ Web Development",
				"⚡ Unix"
			],
			website_link: "http://www.ofppt.ma",
		},
		{
			title: "SPECIALIZED TECHNICIAN, SECTOR ''IT DEVELOPMENT''",
			subtitle: "Specialized Institute of Applied Technology in Taza",
			logo_path: "Logo_ofppt.png",
			alt_name: "OFPPT",
			duration: "2018 - Present",
			descriptions: [],
			website_link: "http://www.ofppt.ma",
		},
	],
};

const certifications = {
	certifications: [
		// 	{
		// 		title: "Cloud Architecture",
		// 		subtitle: "- Qwiklabs",
		// 		logo_path: "gcp_logo.png",
		// 		certificate_link:
		// 			"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
		// 		alt_name: "GCP",
		// 		color_code: "#4285F499",
		// 	},
	],
};

// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work and Internship",
	description:
		"",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Co-Founder & CTO",
					company: "Leafunder",
					company_url: "https://leafunder.com/",
					logo_path: "legato_logo.png",
					duration: "Oct 2020 - Present",
					location: "Khouribga, Morocco",
					description: "",
					color: "#0879bf",
				}
			],
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "FULL STACK DEVELOPER",
					company: "AgriEdge/um6p",
					company_url: "https://agriedge.um6p.ma/",
					logo_path: "delhivery_logo.png",
					duration: "Mar 2020 - Sep 2020",
					location: "Ben Guerir, Rehamna, Morocco",
					description: "",
					color: "#ee3c26",
				},
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description: "My projects makes use of vast variety of latest technology tools.",
	avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
	title: "Publications",
	description:
		"I have worked on and published a few research papers and publications of my own.",
	avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "blogs_image.svg",
		description:
			"I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, React-Native and Opensource Development.",
	},

	addressSection: {
		title: "Address",
		subtitle:
			"Khouribga, Morocco",
		avatar_image_path: "address_image.svg"
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+212 684 73 66 77",
	},
};

export {
	settings,
	seo,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	publicationsHeader,
	contactPageData,
};
