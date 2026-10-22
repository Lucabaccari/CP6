const paths = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  external: <path d="M15 4h5v5m0-5-9 9M18 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 3 5.1 5.1 0 0 0 19.1 0S18 0 15 1.7a15.4 15.4 0 0 0-8 0C4 0 2.9 0 2.9 0a5.1 5.1 0 0 0-.2 3A5.5 5.5 0 0 0 1.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 7 18v4m0-3c-3 .9-3-1.5-4-2" />,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 7L2 7" /></>,
  school: <><path d="m3 10 9-5 9 5-9 5-9-5Z" /><path d="M7 12v5c3 2 7 2 10 0v-5M21 10v6" /></>,
  briefcase: <><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01M2 12a18 18 0 0 0 20 0" /></>,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-3-8-2 10" />,
  location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}
