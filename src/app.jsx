import { Logo } from './logo'

export function App(props) {
  return (
    <>
    
      <Logo />
      <p className=" text-white text-2xl text-center " >
        Hello!</p>
      <p className=" text-white pt-10 text-center">
        <a
          class=" hover:bg-red-400 bg-red-500 p-4 mt-16 link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
      
    </>
  )
}
