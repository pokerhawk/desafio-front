import 'styled-components';
import type { DS } from './styled-theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    ds: DS;
  }
}
