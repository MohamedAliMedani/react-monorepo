// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import Product from "apps/react-monorepo/src/app/product"

export function AppI() {
  return (
    <div>
      <NxWelcome title="inventory" />
      {/* <Product /> */}
    </div>
  );
}

export default AppI;
