import { NavLink } from 'react-router-dom';

export function PageNav() {
  return (
    <nav className="page-nav" aria-label="Navegacao institucional">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Exclusao de conta
      </NavLink>
      <NavLink
        to="/politica-de-privacidade"
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Politica de Privacidade
      </NavLink>
    </nav>
  );
}
