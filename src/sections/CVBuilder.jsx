import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import Button from "../components/Button";
import CvPreview from "./CVPreview";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_GENERAL_INFO = {
    fullName: '',
    email: '',
    phoneNumber: '',
    description: '',
    linkedInLink: ''
};

const INITIAL_EDU_EXPERIENCE = [{
    id: uuidv4(),
    school: '',
    location: '',
    startDate: '',
    endDate: '',
    degree: ''
}]

const INITIAL_PRACTICAL_EXPERIENCE = [{
    id: uuidv4(),
    position: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
}];


export default function CvBuilder() {
    const [generalInfo, setGeneralInfo] = useState(INITIAL_GENERAL_INFO);
    const [eduExperiences, setEduExperiences] = useState(INITIAL_EDU_EXPERIENCE);
    const [practExperiences, setPractExperiences] = useState(INITIAL_PRACTICAL_EXPERIENCE);

    function handleGeneralInfoChange(e) {
        const { name, value } = e.target;
        setGeneralInfo(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleEduExperienceChange(e, id) {
        const { name, value } = e.target;
        setEduExperiences(prevExperiences => {
            return prevExperiences.map(experience => {
                if (experience.id === id) {
                    return { ...experience, [name]: value };
                }
                return experience
            });
        });
    };

    function addEducationalExperience() {
        setEduExperiences(prevExperiences => [...prevExperiences, {
            id: uuidv4(),
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            degree: ''
        }]);
    }

    function deleteEducationalExperience(id) {
        setEduExperiences(prevExperiences => prevExperiences.filter(experience => experience.id !== id)
        );
    }

    function handlePracticalExperienceChange(e, id) {
        const { name, value } = e.target;
        setPractExperiences(prevExperiences => {
            return prevExperiences.map(experience => {
                if (experience.id === id) {
                    return { ...experience, [name]: value };
                }
                return experience
            });
        });
    }

    function addPracticalExperience() {
        setPractExperiences(prevExperiences => [...prevExperiences, {
            id: uuidv4(),
            position: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            description: ''
        }]);
    }

    function deletePracticalExperience(id) {
        setPractExperiences(prevExperiences => prevExperiences.filter(experience => experience.id !== id))
    }

    function handleClearAll() {
        setGeneralInfo(INITIAL_GENERAL_INFO);
        setEduExperiences(INITIAL_EDU_EXPERIENCE);
        setPractExperiences(INITIAL_PRACTICAL_EXPERIENCE);
    }

    function handleLoadExample() {
        setGeneralInfo({
            fullName: 'Máté Dunai',
            email: 'cvmail@gmail.com',
            phoneNumber: '+36 11 111 1111',
            description: "International Business student passionate about web development and AI applications. Completed Harvard’s CS50 course and currently learning React and full-stack development. Basic familiarity with ERP systems through logistics studies. Fast learner, highly motivated, and eager to grow in an entry-level or internship role focused on tech and AI-driven solutions.",
            linkedInLink: 'linkedin.com/in/matedunai'
        })
        setEduExperiences([{
            id: uuidv4(),
            school: 'Budapest Business University',
            location: 'Budapest, Hungary',
            startDate: '2022',
            endDate: '2026',
            degree: 'BSc in International Business'
        }])
        setPractExperiences([{
            id: uuidv4(),
            position: 'Web Developer Intern',
            company: 'Tech Solutions Inc.',
            location: 'Budapest, Hungary',
            startDate: 'Jun 2024',
            endDate: 'Present',
            description: 'Assisted the development team in building and maintaining client websites using React and Node.js. Collaborated on debugging and feature implementation.'
        }])
    }

    return (
        <main className="main-container">
            <div className="cv-forms-column">
                <div className="button-group">
                    <Button className="bg-red-600 hover:bg-red-700" onClick={handleClearAll}>
                        Clear All
                    </Button>
                    <Button className="bg-[#0E7490] hover:bg-cyan-700" onClick={handleLoadExample}>
                        Load Example
                    </Button>
                </div>
                <GeneralInfoForm generalInfo={generalInfo} onChange={handleGeneralInfoChange} />
                <EducationalExperience eduExperiences={eduExperiences} onChange={handleEduExperienceChange} onAdd={addEducationalExperience} onDelete={deleteEducationalExperience} />
                <PracticalExperience practicalExperiences={practExperiences} onChange={handlePracticalExperienceChange} onAdd={addPracticalExperience} onDelete={deletePracticalExperience} />
            </div>
            <div className="cv-preview-column">
                <CvPreview generalInfo={generalInfo} eduExperiences={eduExperiences} practicalExperiences={practExperiences} />
            </div>
        </main>
    )
}