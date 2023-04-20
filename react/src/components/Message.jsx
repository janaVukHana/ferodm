
export default function Message() {

    return (
        <>
            <div style={{backgroundColor: 'red'}} className="row">
                <h2>My Messages</h2>
                {/* <Link to="/projects/new" className="btn-add">Add New</Link> */}
                <span className="btn btn-add">Add New</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>111</td>
                        <td>Kosacica</td>
                        <td>Slike</td>
                        <td>Show Delete Edit</td>
                    </tr>
                    <tr>
                        <td>222</td>
                        <td>Trimer</td>
                        <td>Slike</td>
                        <td>Show Delete Edit</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}