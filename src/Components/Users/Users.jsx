import React from 'react';
import cl from './users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: "Dmitry",
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'},
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
            },
            {
                id: 2,
                followed: true,
                fullName: "Sasha",
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
            },
            {
                id: 3,
                followed: false,
                fullName: "Andrey",
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'},
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
            },
            {
                id: 4,
                followed: false,
                fullName: "Oleg",
                status: 'I am a boss too',
                location: {city: 'Krasnodar', country: 'Russia'},
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={cl.userPhoto} alt='userPhoto'/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;