export default function CvPreview({generalInfo}) {
    return (
        <section id="preview-container">
            <div id="preview-header">
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