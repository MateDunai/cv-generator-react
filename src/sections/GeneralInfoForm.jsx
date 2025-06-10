import Input from '../components/InputField';
import TextArea from '../components/TextArea';

export default function GeneralInfoForm({ generalInfo, onChange }) {
    return (
        <section className='form-section'>
            <h2>Personal Details</h2>
            <Input
                label="Full Name"
                htmlFor="fullName"
                placeholder="First and Last Name"
                type="text"
                id="fullName"
                name="fullName"
                onChange={onChange}
                value={generalInfo.fullName} />
            <Input label="Email"
                htmlFor="email"
                placeholder="Enter email"
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                value={generalInfo.email} />
            <Input
                label="LinkedIn"
                htmlFor="linkedInLink"
                placeholder="linkedin.com/in/username"
                type="text"
                id="linkedInLink"
                name="linkedInLink"
                onChange={onChange}
                value={generalInfo.linkedInLink} />
            <Input
                label="Phone Number"
                htmlFor="phoneNumber"
                placeholder="Enter phone number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                onChange={onChange}
                value={generalInfo.phoneNumber} />
            <TextArea
                label="Description"
                htmlFor="description"
                placeholder="Write something about yourself"
                id="description"
                name="description"
                onChange={onChange}
                value={generalInfo.description} />
        </section>
    );
}