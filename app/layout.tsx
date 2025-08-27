import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Emir Koç - Software Engineer',
  description:
    'I’m a computer engineering student who builds practical tools with MATLAB, C++, JavaScript, and Python. I focus on clean, efficient code—numerical computing and signal/data analysis in MATLAB, high-performance systems in C++, quick automation and data pipelines in Python, and simple, interactive UIs with JavaScript. My goal is fast, reliable software that’s easy to use.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'Systems Engineer',
    'AI/ML',
    'Database Design',
    'Cloud Computing',
    'Microservices',
    'DevOps',
    'Emir Koç',
    'Node.js',
    'Python',
    'React',
    'MATLAB',
    'C++',
    'System Design',
    'Microcontrollers',
  ],
  authors: [{ name: 'Emir Koç' }],
  creator: 'Emir Koç',
  openGraph: {
    title: 'Emir Koç - Portfolio',
    description:
      'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
    url: 'https://personalwebsite.vercel.app',
    siteName: 'Emir Koç - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emir Koç - Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emir Koç - Software Developer',
    description:
      'Passionate software developer crafting scalable and efficient architectures. Explore my projects and technical expertise.',
    creator: 'Emir Koç',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


