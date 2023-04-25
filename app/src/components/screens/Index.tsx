
import { useRef, useState } from 'react';
import { useAuthState } from '../../context/userContext';
import { SignInButton } from '../domain/auth/SignInButton';
import { SignOutButton } from '../domain/auth/SignOutButton';


function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <div className="mt-[125px] min-h-screen">
        <div className="text-center hero-content">
          <div>
            <h1 className="text-3xl font-bold">
              <a className="link link-primary" target="_blank" href="https://vitejs.dev/" rel="noreferrer">
                Vite
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://reactjs.org/" rel="noreferrer">
                React
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://www.typescriptlang.org/" rel="noreferrer">
                TypeScript
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://tailwindcss.com/" rel="noreferrer">
                TailwindCSS
              </a>{' '}
              Starter
            </h1>
            <p className="mt-4 text-lg">
              For fast <b>prototyping</b>. Already set up{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/firebase/firebase-js-sdk"
                rel="noreferrer"
              >
                Firebase(v9)
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://daisyui.com/" rel="noreferrer">
                daisyUI
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://github.com/eslint/eslint" rel="noreferrer">
                ESLint
              </a>
              ,{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/prettier/prettier"
                rel="noreferrer"
              >
                Prettier
              </a>
              .
            </p>
            <div className="mt-4 grid gap-2">
               <SignInButton />  
               <SignOutButton />
              {/* <button onClick={() => setIsOpen(true)}>Display Dialog</button> */}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Index;