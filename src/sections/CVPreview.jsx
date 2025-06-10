import MailIcon from "../components/MailIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import PhoneIcon from "../components/PhoneIcon";

const CvPreviewHeader = ({ fullName, email, phoneNumber, linkedInLink }) => {
    if (!fullName && !email && !phoneNumber && !linkedInLink) return null;

    return (
        <header className="text-center mb-10">
            {fullName && <h1 className="text-5xl font-bold tracking-tight text-[#1E293B] mb-4">{fullName}</h1>}
            <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap text-gray-600">
                {email && <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-[#0E7490]"><MailIcon /> {email}</a>}
                {phoneNumber && <div className="flex items-center gap-2"><PhoneIcon /> {phoneNumber}</div>}
                {linkedInLink && <a href={`https://${linkedInLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#0E7490]"><LinkedInIcon /> {linkedInLink}</a>}
            </div>
        </header>
    );
};

const CvSection = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-[#1E293B] pb-2 mb-4 text-[#1E293B]">
            {title}
        </h2>
        {children}
    </section>
);

const ExperienceItem = ({ startDate, endDate, title, subtitle, location, description }) => (
    <div className="mb-6">
        <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm font-medium text-gray-500">{startDate} - {endDate}</p>
        </div>
        <div className="flex justify-between items-baseline mb-2">
            <p className="text-lg italic text-gray-600">{subtitle}</p>
            <p className="text-sm font-medium text-gray-500">{location}</p>
        </div>
        {description && <p className="text-gray-700">{description}</p>}
    </div>
);


export default function CvPreview({ generalInfo, eduExperiences, practicalExperiences }) {
    return (
        <div className="a4-container">
            <CvPreviewHeader {...generalInfo} />
            
            <main>
                {generalInfo.description && (
                    <CvSection title="Profile">
                        <p className="text-gray-700">{generalInfo.description}</p>
                    </CvSection>
                )}

                {eduExperiences.length > 0 && eduExperiences[0].school && (
                    <CvSection title="Education">
                        {eduExperiences.map(exp => (
                            <ExperienceItem
                                key={exp.id}
                                startDate={exp.startDate}
                                endDate={exp.endDate}
                                title={exp.degree}
                                subtitle={exp.school}
                                location={exp.location}
                            />
                        ))}
                    </CvSection>
                )}

                {practicalExperiences.length > 0 && practicalExperiences[0].company && (
                    <CvSection title="Professional Experience">
                        {practicalExperiences.map(exp => (
                            <ExperienceItem
                                key={exp.id}
                                startDate={exp.startDate}
                                endDate={exp.endDate}
                                title={exp.position}
                                subtitle={exp.company}
                                location={exp.location}
                                description={exp.description}
                            />
                        ))}
                    </CvSection>
                )}
            </main>
        </div>
    );
}