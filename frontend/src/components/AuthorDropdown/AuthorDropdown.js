import React, { useState, useEffect } from 'react';
import Multiselect from 'react-widgets/lib/DropdownList'

import { listAuthors } from '../../services/authors';

import { UNDEFINED_AUTHOR } from "../../constants"


function AuthorDropdown({ value = UNDEFINED_AUTHOR, onChange }) {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            console.log(data);
            setAuthors([...data, UNDEFINED_AUTHOR]);
        };

        fetchAuthors();
    }, [])

    return (
        <div className="RegionDropdown">
            <Multiselect
                value={ value }
                data={ authors }
                dataKey='id'
                textField="firstName"
                valueField="lastName"
                onChange={onChange}
                allowCreate={ false }
            />
        </div>
    );
}

export default AuthorDropdown;
