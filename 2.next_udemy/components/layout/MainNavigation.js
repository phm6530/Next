import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MainNavigation() {
  const router = useRouter();

  
  const isActive = (path) =>{
      return router.pathname === path;        
  }
  

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li className={isActive('/') ? classes.active : ''} >
            <Link href='/'>All Meetups</Link>
          </li>

          <li className={isActive('/new-meetup') ? classes.active : ''} >
            <Link 
            href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
