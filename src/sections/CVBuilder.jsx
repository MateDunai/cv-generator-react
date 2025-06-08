import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import CvPreview from "./CvPreview";
import { v4 as uuidv4 } from 'uuid';

export default function CvBuilder() {
    const [GeneralInfo, setGeneralInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        description: '',
        linkedInLink: ''
    });
    const [EduExperience, setEduExperience] = useState([
    {
        id: uuidv4(),
        school: '',
        location: '',
        startDate: '',
        endDate: '',
        degree: ''
        }]);
    
    const [PractExperience, setPractExperience] = useState([
    {
        id: uuidv4(),
        position: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
    }
    ])

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

    return (
        <main className="flex flex-row">
            <div className="w-2/5 m-3">
                <GeneralInfoForm generalInfo={GeneralInfo} onChange={handleGeneralInfoChange} />
                <EducationalExperience eduExperiences={EduExperience} onChange={handleEduExperienceChange} onAdd={addEducationalExperience} onDelete={deleteEducationalExperience} />
                <PracticalExperience practicalExperiences={PractExperience} onChange={handlePracticalExperienceChange} onAdd={addPracticalExperience} onDelete={deletePracticalExperience} />
            </div>
            <CvPreview className="w-3/5" generalInfo={GeneralInfo} eduExperiences={EduExperience} practicalExperiences={PractExperience} />
        </main>
    )
}
