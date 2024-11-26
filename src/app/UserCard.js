export default function UserCard({users}){
    return(
        <div>
            {users.map((usuario, index) => (
                <div key={index}>
                    <p>{usuario.nombre}</p>
                    <p>{usuario.apellido}</p>
                    <p>{usuario.edad}</p>
                </div>
            ))}
        </div>
    );
}