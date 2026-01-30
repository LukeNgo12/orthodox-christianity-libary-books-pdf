'use client'; // This directive marks the file as a Client Component

import Image from "next/image";
import { Button } from "flowbite-react";
import { Label, Select } from "flowbite-react";
import { useState } from "react";
export default function Home() {
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
    <div className="container mx-auto px-4" >

      <nav className="bg-neutral-primary  w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">חֲנוּת סְפָרִים</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page"> בַּיִת</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"> אוֹדוֹת</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div>Book List</div>
        <main >
          <div className="grid grid-cols gap-4 ">
                  <div>

            <a href="#" className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">title</h5>
                <p className="text-body">description</p>
                <div className="max-w-md">
                    <div className="mb-2 block">
                    </div>
                    <Select onChange={(e) => setSelectedLanguage(e.target.value)} id="countries" required>
                        <option defaultValue={"selected"}>Languages</option>
                        {
                            languages.map((language, id) => {
                                return <option key={id} value={language.code}>{language.name}</option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <Button onClick={()=>{handleDownload()}}>Download</Button>
                </div>
            </a>

        </div>
         
          </div>



          <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default mt-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Paypal</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Facebook</a>
                </li>
              </ul>
            </div>
          </footer>

        </main>
      </div>
    </div>

  );
}
