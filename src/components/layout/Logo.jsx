import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.png'

const Logo = () => {
    return (
        <div>
            <Image src={logo} alt="Logo"
                width={75}
                height={50} />
        </div>
    );
};

export default Logo;

// "/assets/logo.png"