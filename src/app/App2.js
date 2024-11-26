import UserCard from "./UserCard"

export default function App2(){
    const users = [{nombre:"Pedro",apellido:"Garcia", edad:"40"},{nombre:"Lucia", apellido:"Martinez", edad:"30"}]
    return(
        <div>
            <h2>Users</h2>
            <UserCard users={users}></UserCard>
        </div>
    )

}