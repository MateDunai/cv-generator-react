import MailIcon from "../components/MailIcon"
import LinkedInIcon from "../components/LinkedInIcon"
import PhoneIcon from "../components/PhoneIcon"

export default function CvPreview({ generalInfo }) {
    return (
        <section className="w-3/5 bg-white m-5">
            <div className="bg-blue-300 h-1/8">
                <div id="preview-fullName">{generalInfo.fullName}</div>
                <div id="preview-email">{generalInfo.email}</div>
                <div id="preview-linkedIn">{generalInfo.linkedInLink}</div>
                <div id="preview-phoneNumber">{generalInfo.phoneNumber}</div>
                <div id="description">{generalInfo.description}</div>
            </div>
            <div id="preview-main">
            </div>
        </section>
    )
}