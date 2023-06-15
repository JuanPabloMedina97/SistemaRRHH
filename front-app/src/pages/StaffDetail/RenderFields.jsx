

const RenderFields = (field, editing, editedData, handleEdit,setEditing) => {

   

    return (
        <>
            {field.map((field) => (
                <div className="field" key={field.name}>
                    <label>{field.label}:</label>
                    {editing ? (
                        field.options ? (
                            <select
                                value={editedData[field.name] || ''}
                                onChange={(e) => handleEdit(field.name, e.target.value)}
                                disabled={field.disabled}
                            >
                                <option value="">Seleccionar</option>
                                {field.options.map((option) => (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type="text"
                                value={editedData[field.name] || ''}
                                onChange={(e) => handleEdit(field.name, e.target.value)}
                                disabled={field.disabled}
                                placeholder={field.placeholder}
                            />
                        )
                    ) : (
                        <div onDoubleClick={() => setEditing(true)}>{editedData[field.name]}</div>
                    )}
                </div>
            ))
            }
        </>
    )
}

export default RenderFields