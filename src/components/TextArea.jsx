export default function TextArea({ label, htmlFor, id, name, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={htmlFor}>{label}</label>
            <textarea
                className="bg-gray-700 text-white rounded-md p-2 border border-gray-600 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
}