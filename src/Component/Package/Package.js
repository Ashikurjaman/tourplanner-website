import React, { useEffect, useState } from 'react';

import SinglePackage from '../SinglePackage/SinglePackage';


const Package = () => {

    const [pack, setPack] =useState([]);
    useEffect( () => {
        fetch('https://limitless-dawn-39820.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPack(data))
    },[])
    return (
        <div className="mt-5 container">
            <h2>Package</h2>
            <hr/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        pack.map(packs =>
                        <SinglePackage
                        packs={packs}
                        key={packs.id}
                        >
                            </SinglePackage>)
                            
                    }
                    

                    </div>

        </div>
    );
};

export default Package;