/**
 * Page routing configuration.
 *
 * Base44 generated and rewrote this file automatically; it is now ordinary
 * source. Add a page by importing it and adding it to PAGES — the key becomes
 * the URL path, so "Services" is served at /Services.
 */
import type { ComponentType } from 'react';
import __Layout from './Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

export const PAGES: Record<string, ComponentType> = {
  Home,
  Services,
  Contact,
};

export const pagesConfig: {
  mainPage: string;
  Pages: Record<string, ComponentType>;
  Layout?: ComponentType<{ children: React.ReactNode; currentPageName: string }>;
} = {
  mainPage: 'Home',
  Pages: PAGES,
  Layout: __Layout,
};
