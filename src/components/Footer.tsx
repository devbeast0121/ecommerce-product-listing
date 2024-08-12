'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-header-bg text-white py-4 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {currentYear} E-commerce Store. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Produced by Vitto Lewerissa</p>
                </div>
            </div>
        </footer>
    );
}