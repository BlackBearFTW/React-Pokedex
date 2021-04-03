function TableGenerator({data}) {
    return (
        <table>
            {Object.entries(data).map(([key, value]) => (
                <tr key={key}><td>{key}</td><td>{value}</td></tr>
            ))}
        </table>
    )
}

export default TableGenerator;
