/* eslint-disable no-console */
import { useState, useEffect } from 'react';

export default function useCountry() {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    function getCookie(name: string): string | null {
      try {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        if (parts.length === 2) {
          return parts.pop()?.split(';').shift() || null;
        }
      } catch (error) {
        console.error('Error reading cookie:', error);
      }

      return null;
    }

    const cookieCountry = getCookie('country');

    if (cookieCountry) {
      setCountry(cookieCountry);
    } else {
      fetch('/country-code')
        .then((res) => res.json())
        .then((data) => {
          setCountry(`${data.country}`);
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    }
  }, []);

  return country;
}
