import AddButton from "../components/AddButton"
import Input from "../components/InputField"
import TextArea from "../components/textArea"

export default function PracticalExperience({practicalExperiences, onChange, onAdd, onDelete}) {
    return (
        <section id="PracticalExperience" className='bg-white p-4 rounded-lg mb-6 flex flex-col items-center'>
            <h2 className="text-3xl wrap-break-word font-bold">Practial Experience</h2>
            {practicalExperiences.map((practical, index) => (
                <div key={practical.id} className="practical-entry">
                    <h3>{practical.company}</h3>
                    <Input
                        label="Company Name"
                        htmlFor={`company-${practical.id}`}
                        type="text"
                        placeholder="Enter Company Name"
                        name="company"
                        value={practical.company}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`company-${practical.id}`}
                    />
                    <Input
                        label="Position Title"
                        htmlFor={`position-${practical.id}`}
                        type="text"
                        placeholder="Enter Position Title"
                        name="position"
                        value={practical.position}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`position-${practical.id}`}
                    />
                    <Input
                        label="Location"
                        htmlFor={`location-${practical.id}`}
                        type="text"
                        placeholder="Enter Location"
                        name="location"
                        value={practical.location}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`location-${practical.id}`}
                    />
                    <Input
                        label="Start Date"
                        htmlFor={`startDate-${practical.id}`}
                        type="date"
                        placeholder="MM/YYYY"
                        name="startDate"
                        value={practical.startDate}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`startDate-${practical.id}`}
                    />
                    <Input
                        label="End Date"
                        htmlFor={`endDate-${practical.id}`}
                        type="date"
                        placeholder="MM/YYYY or Present"
                        name="endDate"
                        value={practical.endDate}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`endDate-${practical.id}`}
                    />
                    <TextArea
                        label="Description"
                        htmlFor={`description-${practical.id}`}
                        placeholder="Enter Description"
                        name="description"
                        value={practical.description}
                        onChange={(e) => onChange(e, practical.id)}
                        id={`description-${practical.id}`}
                    />

                    {practicalExperiences.length > 1 && (
                        <button type="button" onClick={() => onDelete(practical.id)}>Delete</button>
                    )}
                    <hr />
                </div>
            ))}

            <AddButton onClick={onAdd} />
        </section>
    );
}