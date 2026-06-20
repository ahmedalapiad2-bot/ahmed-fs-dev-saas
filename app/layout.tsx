import type { Metadata } from 'next';
// @ts-ignore
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import DirProvider from '@/components/DirProvider';
import { Providers } from './providers';
import DeviceExperiencePrompt from '@/components/DeviceExperiencePrompt';

export const metadata: Metadata = {
  title: 'Ahmed FS Dev | Ahmed Saeed - Full Stack Developer & Programming Projects',

  description:
    'Ahmed FS Dev portfolio by Ahmed Saeed. Explore Next.js, React, TypeScript, SaaS, dashboard, web development, and full stack programming projects.',

  keywords: [
    'Ahmed FS Dev',
    'Ahmed Saeed',
    'Ahmed Said',
    'Ahmed FS',
    'أحمد سعيد',
    'احمد سعيد',
    'Full Stack Developer',
    'Frontend Developer',
    'Web Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript',
    'Programming Projects',
    'Web Development',
    'SaaS Development',
    'Dashboard Development',
    'Portfolio Website',
    'مبرمج',
    'مطور مواقع',
    'برمجة مواقع',
    'مشاريع برمجة',
    'تطوير الويب',
    'مطور ويب',
    'مطور Full Stack'
  ],

  authors: [{ name: 'Ahmed Saeed' }],
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">



      <body className="min-h-screen bg-background text-white">
        <Providers>
          <DeviceExperiencePrompt />
          <DirProvider />
          <div className="relative isolate overflow-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}



