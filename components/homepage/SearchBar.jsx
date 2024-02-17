"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (router) {
            router.push(`/search/${query}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="search" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search Mockups, Logos..." 
                required 
            />
            <button type="submit">Search</button>
        </form>
    );
}