'use client';

import Header from '@/app/components/header';
import { useEffect } from 'react';

function Story() {
  console.log('++++++++++=');
  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://be-myprofile.onrender.com/api/v1/work/getWorks',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main></main>
    </div>
  );
}

export default Story;
