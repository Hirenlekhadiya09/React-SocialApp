import React, { useEffect } from 'react'
import { useHistory  } from 'react-router-dom';

const Protected = (props) => {
    let Cmp = props.Cmp
    useEffect(() => {
        if(!localStorage.getItem('auth'))
        {
            history.push('/pages/login')
        }
    })
    const history = useHistory();
       
    return (
        <>
            <Cmp/>
        </>
    )
}

export default Protected