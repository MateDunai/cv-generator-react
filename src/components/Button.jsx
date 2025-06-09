export default function Button({ onClick, children, className}) {
    return (
    <button className={`bg-[#B5C7EB] rounded-xl p-1 ${className || ''}`} type="button" onClick={onClick}>
        {children}
    </button>
    )
}