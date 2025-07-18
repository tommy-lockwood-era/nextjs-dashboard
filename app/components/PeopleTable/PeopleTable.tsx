import { fetchCustomers } from '@/app/lib/data';
import { CustomerField } from '@/app/lib/definitions';

export default async function PeopleTable({ people }: { people: CustomerField[] }) {
    // const people1 = [
    //     {
    //         name: "Steve",
    //         id: "Landscaper"
    //     },
    //     {
    //         name: "Ankit",
    //         id: "Undertaker"
    //     },
    //     {
    //         name: "Mark",
    //         id: "Database Administrator"
    //     }
    // ];
    function add(x: number, y: number) {
        return x + y;
    }

    const add2 = (x: number, y: number) => {
        return x + y;
    }

    const add3 = (x: number, y: number) => x + y;

    return (
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {people.map((person) => 
                    <tr>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
