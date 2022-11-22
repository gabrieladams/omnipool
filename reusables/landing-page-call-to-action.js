import LinkButton from "./link-button";

function LandingPageCallToAction({ className }) {
  if (className) {
    return (
      <LinkButton
        href="/sign-up"
        className={`btn-md btn-tertiary ${className}`}
      >
        Invest Now
      </LinkButton>
    );
  }

  return (
    <LinkButton href="/sign-up" className="btn-md btn-tertiary">
      Invest Now
    </LinkButton>
  );
}

export default LandingPageCallToAction;
