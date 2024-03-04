import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1 style={{ marginTop: '50px', marginBottom: '50px' }}>Sorry, this page is not found :(</h1>
      <NavLink to="/">Back to homepage</NavLink>
    </div>
  );
}
