import Input from '../components/InputField'; 
import TextArea from '../components/textArea';


export default function GeneralInfoForm({ generalInfo, onChange }) {
    return (
        <section id="generalInfoForm" className='bg-white p-4 rounded-lg mb-6 flex flex-col'>
        <h2 className="text-3xl wrap-break-word font-bold" >Personal Details</h2>
        <Input label="Full Name" htmlFor="fullName" placeholder="First and Last Name" type="text" id="fullName" name="fullName" onChange={onChange} value={generalInfo.fullName} />
        <Input label="Email" htmlFor="email" placeholder="Enter email" type="email" id="email" name="email" onChange={onChange} value={generalInfo.email} />
        <Input label="LinkedIn" htmlFor="linkedInLink" placeholder="Enter LinkedIn link" type="text" id="linkedInLink" name="linkedInLink" onChange={onChange} value={generalInfo.linkedInLink} /> 
        <Input label="Phone Number" htmlFor="phoneNumber" placeholder="Enter phone number" type="text" id="phoneNumber" name="phoneNumber" onChange={onChange} value={generalInfo.phoneNumber} />
        <TextArea label="Description" htmlFor="description" placeholder="Write something about yourself" id="description" name="description" onChange={onChange} value={generalInfo.description} />
    </section>
    )
}
