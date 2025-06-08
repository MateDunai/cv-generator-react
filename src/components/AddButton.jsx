export default function AddButton({onClick}) {
    return (
        <button className="cursor-pointer bg-blue-400 rounded-md p-1  w-1/2 text-xs mt-3"  type="button" id="addButton" onClick={onClick}>
            + Add New
        </button>
    )
}