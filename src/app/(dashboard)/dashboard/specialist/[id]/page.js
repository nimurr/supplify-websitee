 
import SpecialistProgram from '@/Dashboard/sidebarMenu/SpecialProgram';
import React from 'react';

const page = async ({params}) => {
    const {id} = await params;
    return (
        <div>
          
            <SpecialistProgram id={id} />
        </div>
    );
};

export default page;