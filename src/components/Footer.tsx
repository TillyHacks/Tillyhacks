import { Wordmark } from "./Wordmark";

type SocialLink = { label: string; href: string };

type Props = {
  eventDates: string;
  socials: SocialLink[];
  email: string;
};

export function Footer({ eventDates, socials, email }: Props) {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10">
          <div>
            <Wordmark size="lg" light />
            <p className="mt-6 text-white/70 max-w-md">
              A 48-hour hackathon for builders, dreamers, and
              first-timers. Run by students, for students.
            </p>
            <p className="mt-4 text-sm text-white/50 tracking-widest uppercase">
              {eventDates}
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              Connect
            </div>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B024F9] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              Contact
            </div>
            <a
              href={email}
              className="hover:text-[#B024F9] transition-colors break-all"
            >
              {email.replace(/^mailto:/, "")}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} TillyHacks. Built with too much
            coffee.
          </span>
          <span>Brand Standards v1.0</span>
        </div>
      </div>
    </footer>
  );
}
