<h1>Library Risks react UI Kit components</h1>

<h2>GET Starting</h2>


<ol>
    <li>npm i @sber-risks-ui</li>
    <li>
    <h3>
        Create theme
    </h3>
<pre><code>
import { ITheme } from '@sber-risks-ui/core/styles';

const default defaultTheme: ITheme = {
    palette: {
        primary: {
            main: 'rgb(8, 166, 82)',
            light: 'rgba(8, 166, 82, 0.6)',
            lighter: 'rgba(8, 166, 82, 0.3)',
            moreLighter: 'rgba(8, 166, 82, 0.15)',
            bestLighter: 'rgba(8, 166, 82, 0.05)',
        },
        secondary: {
            main: 'rgb(246, 101, 10)',
            light: 'rgba(246 ,101, 10, 0.6)',
            lighter: 'rgba(246, 101, 10, 0.3)',
            moreLighter: 'rgba(246, 101, 10, 0.15)',
            bestLighter: 'rgba(246, 101, 10, 0.05)',
        },
        baseButtonFontColor: '#ffffff',
        baseFontColor: '#333333',
        baseFontColorOpacity05: 'rgba(51, 51, 51, 0.5)',
        baseFontColorInverted: '#333333',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: 14,
    mainBlackColor: 'rgba(0,0,0,0.85)',
    mainGrayColor: '#e3e3e3',
    mainWhiteColor: '#ffffff',
    mainBackgroundColor: '#ffffff',
    mainOutlinedColor: 'rgba(0, 0, 0, 0.6)',
    mainOutlinedHoverColor: 'rgba(0, 0, 0, 0.4)',
    h1FontSize: 28,
    h2FontSize: 24,
    h3FontSize: 20,
};
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


