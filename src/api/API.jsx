import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

import course1 from "../assets/courses1.jpg";
import course2 from "../assets/courses2.jpg";
import course3 from "../assets/courses3.jpg";
import course4 from "../assets/courses4.jpg";
import course5 from "../assets/courses5.jpg";
import course6 from "../assets/courses6.jpg";
import course7 from "../assets/courses7.jpg";
import course8 from "../assets/courses8.jpg";

import { BsBarChartLine } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdOutlineScience } from "react-icons/md";

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const categories = [
    {
        id: 0,
        title: "Design",
        icon: <GoPencil/>,
        text: "View More"
    },
    {
        id: 1,
        title: "Development",
        icon: <FaLaptopCode/>,
        text: "View More"
    },
    {
        id: 2,
        title: "Business",
        icon: <BsBarChartLine/>,
        text: "View More"
    },
    {
        id: 2,
        title: "Science",
        icon: <MdOutlineScience/>,
        text: "View More"
    },
]

export const courses = [
    {
        id: 0,
        title: "AI Development",
        description: "AI Development With Python (complete begginer course)",
        students: 500,
        stars: 4.9,
        price: "$105",
        image: course1
    },
    {
        id: 1,
        title: "AI Machine Learning",
        description: "AI Machine Learning With R",
        students: 500,
        stars: 4.4,
        price: "$200",
        image: course2
    },
    {
        id: 2,
        title: "Back-End Development",
        description: "Back-End Development With NodeJS",
        students: 500,
        stars: 4.2,
        price: "$100",
        image: course3
    },
    {
        id: 3,
        title: "Front-End Development",
        description: "Front-End Development With React",
        students: 500,
        stars: 5.0,
        price: "$85",
        image: course4
    },
    {
        id: 4,
        title: "Web Design",
        description: "The Complete Web Design",
        students: 500,
        stars: 4.9,
        price: "$105",
        image: course5
    },
    {
        id: 5,
        title: "Data Science",
        description: "Data Science With Python and R (complete begginer course)",
        students: 500,
        stars: 3.8,
        price: "$165",
        image: course6
    },
    {
        id: 6,
        title: "AI Training",
        description: "AI Development With Ruby (begginer course)",
        students: 500,
        stars: 4.9,
        price: "$150",
        image: course7
    },
    {
        id: 7,
        title: "AI Development",
        description: "AI Development With Python (complete begginer course)",
        students: 500,
        stars: 4.9,
        price: "$105",
        image: course8
    },

]
export const accordion = [
    {
        id: 0,
        title: "What is Educate?",
        answer: "The best platform of education in the Americas. Join thousands of learners who are transforming their lives through our comprehensive and engaging courses. Whether you're looking to expand your skills, advance your career, or explore new interests, we have something for everyone. "
    },
    {
        id: 1,
        title: "What can I learn from Educate?",
        answer: "You can learn through video, books, PDFs and classroom."
    },
    {
        id: 2,
        title: "Can I teach on Educate?",
        answer: "Sign up in our newsletter for the next interview. Stay updated on the latest industry insights, expert tips, and exclusive content delivered straight to your inbox. Don't miss out on this opportunity to level up your knowledge and stay ahead of the curve."
    },
    {
        id: 3,
        title: "What is included in my Educa membership?",
        answer: "All benefits plus 24/7 support and live assistance. Experience unparalleled convenience and peace of mind with round-the-clock support from our dedicated team. Whether you have a question, need technical assistance, or simply want guidance, our live support team."
    },
    {
        id: 4,
        title: "Where are you from?",
        answer: "We are from Brazil."
    },
]