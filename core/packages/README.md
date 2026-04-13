<h1>Library React UI Kit components</h1>

<h2>GET Starting</h2>


<ol>
    <li>npm i @dbykov-ui-kit/core</li>
    <li>
    <h3>
        Create theme
    </h3>
<pre><code>
import type { ITheme } from '@dbykov-ui-kit/core/styles';
</code></pre>
<pre><code>
const default defaultTheme: ITheme = {
    palette: {
    primary: {
      main: 'rgb(139, 88, 203)', 
      light: '#A47BE0',
      lighter: '#C8A9F0',
      moreLighter: '#E7D9FA',
      bestLighter: '#F4EEFD',
    },
    secondary: {
      main: '#E5484D', 
      light: '#F87171',
      lighter: '#FECACA', 
      moreLighter: '#FEE2E2', 
      bestLighter: '#FEF2F2', 
    },
      baseButtonFontColor: '#ffffff',
      baseFontColor: '#333333',
      baseFontColorOpacity05: 'rgba(51, 51, 51, 0.5)',
      baseFontColorInverted: '#333333',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: 14,
    baseFontWeight: 400,
    mainBlackColor: 'rgba(0,0,0,0.85)',
    mainGrayColor: '#e3e3e3',
    mainWhiteColor: '#ffffff',
    mainBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#e3e3e3',
    inactiveColor: '#b3b3b3',
    mainOutlinedColor: 'rgba(0, 0, 0, 0.6)',
    mainOutlinedHoverColor: 'rgba(0, 0, 0, 0.4)',
    h1FontSize: 28,
    h2FontSize: 24,
    h3FontSize: 20,
    h4FontSize: 18,
    h5FontSize: 16,
    h6FontSize: 14,
    components: {
      Select: {
        textAlign: 'center',
      },
      Datepicker: {
        isIconCanBeTodaySelected: false,
      },
    },
  };

export default defaultTheme;
</code></pre>
</li>
<li>
    <h3>
        Import theme and create context
    </h3>
<pre><code>
import defaultTheme from './themes/defaultTheme';

export const ReactThemeContext: { Consumer: any, Provider: any } = getNewReactThemeContext(defaultTheme);
</code></pre>
</li>
    <li>
        <h3>To wrap your root component by context provider</h3>
<pre><code>
&lt;ReactThemeContext.Provider value={actualTheme}&gt;
    &lt;SomeComponent /&gt;
&lt;/ReactThemeContext.Provider&gt;
</code></pre>
    </li>
</ol>


