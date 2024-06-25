import { useParams } from 'react-router-dom';

import useFetch from '../useFetch';

const UserDetails = () => {

    const { id } = useParams();

    const { data: user, error, isPending } = useFetch("http://localhost:8000/users/" + id);

    return (

        <>

            <section>

                {isPending && <p>Loading user details...</p>}

                {error && <p>{error}</p>}

                {user && (

                    <>

                        <h1>Miles Griffith</h1>

                        <h1>User {user.id} Details</h1>

                        <h2>Camera Description: {user.CAM_DESC}</h2>

                        <p>Camera Type: {user.TYPE}</p>

                        <p>Latitude: {user.LATITUDE}</p>

                        <p>Longitude: {user.LATITUDE}</p>

                    </>

                )}

            </section>

        </>

    );

};

export default UserDetails;