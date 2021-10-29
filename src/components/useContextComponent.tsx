import { useState, useContext } from 'react';
import UserContext, { UserState } from '../store';

// children component that consume parent component
function ConsumerComponent() {
    const user = useContext<UserState>(UserContext)

    return (
        <div>
            <div>
                The First Name is : {user.firstName}
            </div>
            <div>
                The Last Name is : {user.lastName}
            </div>
        </div>
    )
}

// parent component
function UseContextComponent() {
    const [user, userSet] = useState<UserState>({
        firstName: "Dave",
        lastName: "Ibrahimovic Djoh Gah"
    })
    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button onClick={() => userSet({
                firstName: "Arjuna",
                lastName: "Djoh Gah"
            })}>Change Context now!</button>
        </UserContext.Provider>
    )
}


export default UseContextComponent