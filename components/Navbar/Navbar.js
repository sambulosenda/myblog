import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {

    return (
        <div>
            <nav className="h-80px flex justify-between items-center p-7">
                <div>
                    <Link href='/' passHref>
                        <a>Sambulo senda</a>
                    </Link>
                </div>
                <div>
                    <Link href='/' passHref>
                        <a className="p-3">Home</a>
                    </Link>
                    <Link href='/about' passHref>
                        <a className="p-3">About</a>
                    </Link>
                    <Link href='/contact' passHref>
                        <a className="p-3">Contact</a>
                    </Link>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
