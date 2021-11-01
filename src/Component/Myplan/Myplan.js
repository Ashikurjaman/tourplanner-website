import React, { useEffect, useState } from 'react';
import Plan from './Plan/Plan';

const Myplan = () => {
    const [myplan, setMyplan] = useState([]);
    useEffect( () => {
        fetch("https://limitless-dawn-39820.herokuapp.com/setplan")
        .then(res => res.json())
        .then(data => setMyplan(data));
    },[])
    return (
        <div>
            <h3>My plan</h3>
            <div>
                {
                    myplan.map(plan =><Plan key={plan._id} 
                    plan={plan}
                    
                    >

                    </Plan>)
                }

            </div>
        </div>
    );
};

export default Myplan;