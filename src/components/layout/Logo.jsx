import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div>
          <Image src="/assets/logo.png" alt="Logo" width={75} height={50} />  
        </div>
    );
};

export default Logo;