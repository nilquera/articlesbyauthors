import React, { useState, useEffect } from 'react';
import Multiselect from 'react-widgets/lib/DropdownList'

import { listAuthors } from '../../services/authors';

function RegionDropdown({ value, onChange }) {
    const [authors, setAuthors] = useState([]);


    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            setAuthors(data);
        };

        fetchAuthors();
    }, [])

    return (
        <div className="RegionDropdown">
            <Multiselect
                value={ value }
                data={ authors.map(author => `${author.firstName} ${author.lastName}`) }
                textField="name"
                valueField="id"
                onChange={ onChange }
                allowCreate={ false }
            />
        </div>
    );
}

export default RegionDropdown;
