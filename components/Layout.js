import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <h1>
            <span>Jason's Classic</span>
            <span>RECIPES</span>
          </h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Jason's Classic Recipes 2023 ©</p>
      </footer>
    </div>
  );
}
