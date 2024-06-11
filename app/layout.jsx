import NavBar from "../components/NavBar";
import './globals.css';
import { orbitron, exo2 } from './fonts';

export const metadata = {
    title: {
       default: 'Indie Gamer',
       template: '%s | Indie Gamer'
    },
    description: 'Indie Gamer -   Only the best indie games, reviewed for you'
}


export default function RootLayout({children}) {
 return(
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
        <body className="flex flex-col px-4 py-4 min-h-screen bg-orange-50">
            <header>
              <NavBar></NavBar>
            </header>
            <main className="py-3 grow">
            {children}
            </main>
            <footer className="border-t py-3 text-xs text-center text-slate-500">
                Game data and images courtesy of <a href="https:rawg.io" target="_blank" className="text-orange-800">RAWG</a>
            </footer>
        </body>
    </html>
 );
}