import Link from 'next/link';
import { useRouter } from 'next/router';



export default function Nav(){
    const router = useRouter();
    const isActive = (path)=> router.pathname === path;

    return(
        <>
            <nav>
                <Link 
                    className={isActive('/') ? 'active' : ''}
                href='/'>
                    nav
                </Link>

                <Link 
                    className={isActive('/') ? 'news' : ''}
                href='news'>
                    news
                </Link>
            </nav>
        </>
    )
}