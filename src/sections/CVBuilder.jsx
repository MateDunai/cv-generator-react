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
    const [GeneralInfo, setGeneralInfo] = useState(INITIAL_GENERAL_INFO);
    const [EduExperience, setEduExperience] = useState(INITIAL_EDU_EXPERIENCE);
    const [PractExperience, setPractExperience] = useState(INITIAL_PRACTICAL_EXPERIENCE)

    function handleGeneralInfoChange(e) {
        const { name, value } = e.target; 
        setGeneralInfo(prevFormData => ({
            ...prevFormData, 
            [name]: value     
        }));
    }
    
    function handleEduExperienceChange(e ,id) {
        const { name, value } = e.target;
        setEduExperience(prevExperiences => {
            return prevExperiences.map(experience => {
                if (experience.id === id) {
                    return { ...experience, [name]: value };
                }
                return experience
            });
        });
    };

    function addEducationalExperience() {
        setEduExperience(prevExperiences => [...prevExperiences, {
            id: uuidv4(),
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            degree: ''
        }]);
    }

    function deleteEducationalExperience(id) {
        setEduExperience(prevExperiences => prevExperiences.filter(experience => experience.id !== id)
        );
    }

    function handlePracticalExperienceChange(e, id) {
        const { name, value } = e.target;
        setPractExperience(prevExperiences => {
            return prevExperiences.map(experience => {
                if (experience.id === id) {
                    return { ...experience, [name]: value };
                }
                return experience
            });
        });
    }

    function addPracticalExperience() {
        setPractExperience(prevExperiences => [...prevExperiences, {
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
        setPractExperience(prevExperiences => prevExperiences.filter(experience => experience.id !== id))
    }

    function handleclearAll() {
        setGeneralInfo(INITIAL_GENERAL_INFO);
        setEduExperience(INITIAL_EDU_EXPERIENCE);
        setPractExperience(INITIAL_PRACTICAL_EXPERIENCE)
    }

    function handleLoadExample() {
        setGeneralInfo({
            fullName: 'Máté Dunai',
            email: 'dunai.mate@gmail.com',
            phoneNumber: '+36111111111',
            description: "International Business student passionate about web development and AI applications. Completed Harvard’s CS50 course and currently learning React and full-stack development. Basic familiarity with ERP systems through logistics studies. Fast learner, highly motivated, and eager to grow in an entry-level or internship role focused on tech and AI-driven solutions.",
            linkedInLink: 'https://www.linkedin.com/in/matedunai/'
        })
        setEduExperience([{
            id: uuidv4(),
            school: 'Budapest Business University',
            location: 'Budapest',
            startDate: '2022',
            endDate: '2026',
            degree: 'BsC'
        }])
        setPractExperience([{
            id: uuidv4(),
            position: 'Web developer',
            company: 'Apple',
            location: 'California',
            startDate: '2026',
            endDate: 'Present',
            description: 'Just a basic job'
        }])
    }

    return (
        <main className="main-container flex flex-row">
            <div className="flex flex-col w-2/5 gap-4">
                <div className="container flex flex-row">
                    <Button className="flex-1/2" onClick={handleclearAll}>
                        Clear All
                    </Button>
                    <Button className="flex-1/2" onClick={handleLoadExample}>
                        Load Example
                    </Button>
                </div>
                <GeneralInfoForm generalInfo={GeneralInfo} onChange={handleGeneralInfoChange} />
                <EducationalExperience eduExperiences={EduExperience} onChange={handleEduExperienceChange} onAdd={addEducationalExperience} onDelete={deleteEducationalExperience} />
                <PracticalExperience practicalExperiences={PractExperience} onChange={handlePracticalExperienceChange} onAdd={addPracticalExperience} onDelete={deletePracticalExperience} />
            </div>
            <CvPreview generalInfo={GeneralInfo} eduExperiences={EduExperience} practicalExperiences={PractExperience} />
        </main>
    )
}
