import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";
import QualitiesList from "./qualitiesList";

const User = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.fetchById(userId).then((info) => setUser(info));
    });

    const handleClick = () => {
        history.replace("/users");
    };

    return (
        (user && (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <h2>Completed meetings: {user.completedMeetings}</h2>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleClick}>Все пользователи</button>
            </div>
        )) || <h1>loading</h1>
    );
};

User.propTypes = {
    userId: PropTypes.string.isRequired
};

export default User;
