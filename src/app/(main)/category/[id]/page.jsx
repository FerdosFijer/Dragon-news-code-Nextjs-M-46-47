import React from 'react';

const NewsCatagoryPage = async ({params}) => {
    const {id} = await params;
    console.log(id, "it is n");
    
    return (
        <div>
            <p> News by Category </p>
        </div>
    );
};

export default NewsCatagoryPage;