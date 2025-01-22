export default function Footer() {
  return (
    <footer
      className="mx-auto flex w-full items-center justify-center"
      role="contentinfo"
      aria-label="Footer"
    >
      <section className="font-heading flex w-full max-w-screen-xl flex-col items-center justify-between gap-3 p-3 px-3 text-base font-light md:flex-row">
        <p>
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          By Swastik Dan
        </p>
        <a
          href="https://github.com/Swastikdan/Film-Fanatic"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
          aria-label="Github repository for Film Fanatic"
        >
          Github
        </a>
      </section>
    </footer>
  )
}
