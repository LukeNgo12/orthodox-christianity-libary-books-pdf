'use client'; // This directive marks the file as a Client Component

import React, { useState } from 'react'
import { Button } from "flowbite-react";
import { Label, Select } from "flowbite-react";

export default function Card({ title, description, ...props }) {
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hebrew', name: 'Hebrew' },
        { code: 'afrikaans', name: 'Afrikaans' },
        { code: 'amharic', name: 'Amharic' },
        { code: 'arabic', name: 'Arabic' },
        { code: 'aramaic', name: 'Aramaic' },
        { code: 'armenian', name: 'Armenian' },
        { code: 'bahasa', name: 'Bahasa' },
        { code: 'belarus', name: 'Belarusian' },
        { code: 'bul', name: 'Bulgarian' },
        { code: 'burmese', name: 'Burmese' },
        { code: 'cn', name: 'Chinese' },
        { code: 'croatia', name: 'Croatian' },
        { code: 'czech', name: 'Czech' },
        { code: 'danish', name: 'Danish' },
        { code: 'dutch', name: 'Dutch' },
        { code: 'esp', name: 'Spanish' },
        { code: 'fin', name: 'Finnish' },
        { code: 'fr', name: 'French' },
        { code: 'georgia', name: 'Georgian' },
        { code: 'german', name: 'German' },
        { code: 'greek', name: 'Greek' },
        { code: 'hindi', name: 'Hindi' },
        { code: 'hungary', name: 'Hungarian' },
        { code: 'ita', name: 'Italian' },
        { code: 'jp', name: 'Japanese' },
        { code: 'khmer', name: 'Khmer' },
        { code: 'kr', name: 'Korean' },
        { code: 'kyrgyz', name: 'Kyrgyz' },
        { code: 'laos', name: 'Lao' },
        { code: 'latin', name: 'Latin' },
        { code: 'mongolian', name: 'Mongolian' },
        { code: 'nw', name: 'Norwegian' },
        { code: 'pashtun', name: 'Pashtun' },
        { code: 'persian', name: 'Persian' },
        { code: 'polish', name: 'Polish' },
        { code: 'portuguese', name: 'Portuguese' },
        { code: 'romanian', name: 'Romanian' },
        { code: 'russia', name: 'Russian' },
        { code: 'serb', name: 'Serbian' },
        { code: 'swe', name: 'Swedish' },
        { code: 'tamil', name: 'Tamil' },
        { code: 'thai', name: 'Thai' },
        { code: 'ukr', name: 'Ukrainian' },
        { code: 'vi', name: 'Vietnamese' },

    ];
    const handleDownload = () => {
        // Create an anchor element
        const link = document.createElement('a');
        link.href = `/Books/daily-prayers/orthodox-prayer-${selectedLanguage}.pdf`; // URL of the file
        link.download = `orthodox-prayer-${selectedLanguage}.pdf`; // Desired file name for the download

        // Append the link to the body, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>

            <a href="#" className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{title}</h5>
                <p className="text-body">{description}</p>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Select your country</Label>
                    </div>
                    <Select onChange={(e) => setSelectedLanguage(e.target.value)} id="countries" required>
                        <option selected>Languages</option>
                        {
                            languages.map((language) => {
                                return <option value={language.code}>{language.name}</option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <Button onClick={()=>{handleDownload()}}>Download</Button>
                </div>
            </a>

        </div>
    )
}
