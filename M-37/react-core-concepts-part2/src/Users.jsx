import { use } from "react";

export default function Users({fetchUsers}) {

const Users = use(fetchUsers);
console.log(Users);
    return (
        <div className="card">
            <h2>Users:{Users.length}</h2>
        </div>
    )
}