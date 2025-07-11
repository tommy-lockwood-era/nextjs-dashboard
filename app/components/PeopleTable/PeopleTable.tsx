export default function PeopleTable() {
    const people = [
        {
            name: "Steve",
            job: "Landscaper"
        },
        {
            name: "Ankit",
            job: "Undertaker"
        },
        {
            name: "Mark",
            job: "Database Administrator"
        }
    ];

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
            <tr>
                <td>Steve</td>
                <td>Landscaper</td>
            </tr>
            {/* <...> */}

        </table>
    );
}



