import SpecialistDetails from '@/Dashboard/sidebarMenu/SpecialistDetails';
import React from 'react';

const page = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <SpecialistDetails  id= {id} />
        </div>
    );
};

export default page;