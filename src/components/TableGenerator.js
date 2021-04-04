function TableGenerator({data}) {
    return (
        <table border="7">
            {Object.entries(data).map(([key, value]) => (
                <tr key={JSON.stringify(key)}><td>{JSON.stringify(key)}</td><td>{JSON.stringify(value)}</td></tr>
            ))}
        </table>
    )
}

export default TableGenerator;
