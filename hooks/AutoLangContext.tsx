'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import i18nConfig from '@/i18nConfig';
import { ToastAction } from '@/components/ui/toast';

interface AutoLangContextProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const AutoLangContext = createContext<AutoLangContextProps | undefined>(undefined);

export const useAutoLang = () => {
  const context = useContext(AutoLangContext);
  if (!context) {
    throw new Error('useAutoLang must be used within a AutoLangProvider');
  }
  return context;
};

export const AutoLangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const { toast } = useToast();
  const [locale, setLocale] = useState<string>(i18n.language);
  const [userSetLocale, setUserSetLocale] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocale = async () => {
      try {
        const res = await fetch('http://ip-api.com/json');
        const data = await res.json();
        const countryCode = data.countryCode;
        let newLocale = i18nConfig.defaultLocale;

        // Determine locale based on country code
        if (countryCode === 'TR') {
          newLocale = 'tr';
        } else {
          newLocale = 'en';
        }

        if (!userSetLocale) {
          toast({
            title: `Hey, you're coming from ${data.country}!`,
            description: `Do you want the site in ${newLocale === 'en' ? 'English' : 'Turkish'}?`,
            action: (
              <ToastAction
                altText="Change language"
                onClick={() => handleChange(newLocale)}
              >
                Yes
              </ToastAction>
            ),
          });
        }
      } catch (error) {
        console.error('Failed to fetch locale:', error);
      }
    };

    fetchLocale();
  }, [userSetLocale]);

  const handleChange = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    i18n.changeLanguage(newLocale);
    setLocale(newLocale);
    setUserSetLocale(newLocale);
  };

  return (
    <AutoLangContext.Provider value={{ locale, setLocale: handleChange }}>
      {children}
    </AutoLangContext.Provider>
  );
};
