import { RuiThemeProvider } from './theme';
import { Page } from './example/Page';

export const App: React.FC = () => {
  return (
    <RuiThemeProvider>
      <Page />
    </RuiThemeProvider>
  );
};
