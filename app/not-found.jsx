import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-heading">Not Found</h2>
      <p className="not-found-description">Could not find requested resource</p>
      <Link href="/" className="go-home-link">Go Home</Link>
    </div>
  );
};

export default NotFound;
