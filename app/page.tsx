import "./index.scss";

const ComingSoon = () => (
  <div className="error">
    <div className="socials">
      <div className="socialBar" />
      {process.env.NEXT_PUBLIC_TELEGRAM_USERNAME && (
        <a
          href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}`}
          className="social"
          target="_blank"
        >
          <i className="ep-icon-social-telegram" />{" "}
        </a>
      )}
      {process.env.NEXT_PUBLIC_X_USERNAME && (
        <a
          href={`https://x.com/${process.env.NEXT_PUBLIC_X_USERNAME}`}
          className="social"
          target="_blank"
        >
          <i className="ep-icon-social-twitter" />{" "}
        </a>
      )}
      {process.env.NEXT_PUBLIC_DISCORD_USERNAME && (
        <a
          href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_USERNAME}`}
          className="social"
          target="_blank"
        >
          <i className="ep-icon-social-discord" />{" "}
        </a>
      )}
      {process.env.NEXT_PUBLIC_GITHUB_USERNAME && (
        <a
          href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
          className="social"
          target="_blank"
        >
          <i className="ep-icon-social-github" />{" "}
        </a>
      )}
    </div>
    <div className="contents">
      <div>
        <h1>&nbsp;</h1>
        <h2>{process.env.NEXT_PUBLIC_COMING_SOON_TEXT}</h2>
        <div>{process.env.NEXT_PUBLIC_DESCRIPTION}</div>
      </div>
      <div className="error-image error_coming" />
    </div>
  </div>
);

export default ComingSoon;
