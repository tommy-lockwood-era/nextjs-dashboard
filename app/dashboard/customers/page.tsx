import PeopleTable from "@/app/components/PeopleTable/PeopleTable";
import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {

  const people = await fetchCustomers();

  return (
    <>
      <p>Customers Page</p>
      <PeopleTable people={people} />
    </>
  )
}