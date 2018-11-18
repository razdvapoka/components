(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/text/about.mdx":function(e,A,a){"use strict";a.r(A);var o=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=a("./node_modules/react/index.js"),s=a.n(t),n=a("./node_modules/@mdx-js/tag/dist/index.js"),g=a("./node_modules/docz/dist/index.m.js"),m=a("./node_modules/emotion-theming/dist/index.esm.js"),r=a("./src/theme.js"),p=a("./node_modules/pss/esm/prop-styles/base.js"),i=a("./node_modules/pss/esm/prop-styles/typography.js"),c=a("./node_modules/react-emotion/dist/index.esm.js"),d=a("./node_modules/@exah/react-base-component/esm/base.js"),E=Object(c.default)(d.a,{target:"es769ng0"})(p.a,i.a);A.default=function(e){var A=e.components,a=Object(o.a)(e,["components"]);return s.a.createElement(n.MDXTag,{name:"wrapper",components:A},s.a.createElement(n.MDXTag,{name:"h1",components:A,props:{id:"text"}},"Text"),s.a.createElement(n.MDXTag,{name:"h2",components:A,props:{id:"description"}},"Description"),s.a.createElement(n.MDXTag,{name:"p",components:A},"Text component, that renders as ",s.a.createElement(n.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"<div>")," with ",s.a.createElement(n.MDXTag,{name:"a",components:A,parentName:"p",props:{href:"https://github.com/exah/pss/blob/master/docs/api.md#typography"}},"typography prop styles")," and ",s.a.createElement(n.MDXTag,{name:"a",components:A,parentName:"p",props:{href:"https://github.com/exah/pss/blob/master/docs/api.md#base"}},"base prop styles"),". Component inside can be changed with ",s.a.createElement(n.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"comp")," prop."),s.a.createElement(n.MDXTag,{name:"h2",components:A,props:{id:"usage"}},"Usage"),s.a.createElement(n.MDXTag,{name:"h3",components:A,props:{id:"basic"}},"Basic"),s.a.createElement(n.MDXTag,{name:"pre",components:A},s.a.createElement(n.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-js",metastring:""}},"import { Text } from 'pss-components'\n")),s.a.createElement(n.MDXTag,{name:"pre",components:A},s.a.createElement(n.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-js",metastring:""}},"<Text as='p' align='center'>\n  Text\n</Text>\n")),s.a.createElement(n.MDXTag,{name:"h3",components:A,props:{id:"provide-global-text-styles"}},"Provide Global Text Styles"),s.a.createElement(n.MDXTag,{name:"p",components:A},"See ",s.a.createElement(n.MDXTag,{name:"a",components:A,parentName:"p",props:{href:"https://github.com/exah/pss/blob/master/docs/api.md#textstyle"}},"textStyle")," docs."),s.a.createElement(n.MDXTag,{name:"pre",components:A},s.a.createElement(n.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-js",metastring:""}},"const theme = {\n  font: {\n    default: 'Helvetica, system-ui, sans-serif',\n    serif: 'Times New Roman, serif'\n  },\n  textStyle: {\n    root: {\n      fontFamily: 'Helvetica, system-ui, sans-serif',\n      fontSize: 16,\n      lineHeight: 1.2\n    },\n    default: {\n      fontSize: '1rem'\n    },\n    heading: {\n      fontSize: '1.5rem',\n      fontWeight: 'bold'\n    }\n  }\n}\n")),s.a.createElement(n.MDXTag,{name:"h2",components:A,props:{id:"examples"}},"Examples"),s.a.createElement(g.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgCsTZjwABSEP5p3YeQ3RNdoYCIEQBlQC0Jkwgp_QFe0oIJTDulQ405XaT04AEchJHw48iMg9hoMsbApko90aMkOiGNoLACEkVRsBYkj2CDKU0Oos0lXBVBdFRY5TgAL2cAhEmxdhuDY9YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnEyABYrPYAA2KybPWMAQIAMR9aBEhM_hnEORFHUwdgEMofgliwn44HsxFvJrXyaGcCBVMudgAEZnNs-QFKUqYAEE5h09hI2g8gbCgdBwxQzkdLEKqYxkdhUS0mBuGAQ91M07F5G3WtgFq6AGuCAAyKbxkSeZKGacb6sa7g1vlMBQkUntUHadgAH4Ngm8NI2aq5lsm1AiprKQZGrd8zFhDVjhgMAwigKZTpatqbvKlca0TKSCBwPzMhSa8CBG2s6w4oSQjgPgQBmfgQigCAUlQRHET0ARxFXaHYdEAHaykQmobrSQgZBsGIZGqQ_vusxvxAfjGNg_9AO0XRQIMcDiOemqzVoS9yKzbj0Lk187QFmDyJipCMhQmT5Uw7DqDw2DCOK6hlKY7pdOAdYUn6dArlygAmWyLGPFhXCuQ3if1EzIyiLALVxdAJiudzTNMqzOVSgnnaINB3a4L2PNM3L_ZCDAqtdsPPbwM3TPN1ysADq3a21YPQ49iPctTgBWf32nWJR1iSyUcod6HMDe0IPquABtdhTKWAAOJZcvcpZk0tjznPYABdcus6oKBhXt1cPCgSVthMgBiX3TMD2tjdcYL2Fb9pF6CGAbPlReu3QQ_d_IC-z8Xjwb6v1x7724es4sEYbFoJewE_suawruz4jHd-elib13egQaexMLAeBSB_L-z9axgGgUfFe39oa_2hhvLetdobsCgUvfea9oYIKXsg1caDaxoFYBkWgpsgHYJwYg3eyC4EWCIUfT-YAUG1muhYMh6UwG0NrCAxu_D2gAAkFyUJiHEJYcBEiokwhaUIEAZHuDgBaOAGQIAcLgRo_oYATKWAFPAdgAA5GAYxRSRHcDIzRHCx7rEEgQDS3VwHQyECIVx2C-EBRDkkEy4ioCSNiK4GRcjaBEEUcozqqj1G2IIfAkCmVspm17vjdgaMXTiPRoQM2OBzakLgUIpuAjCGJKyjldouUug2gKauTYnYCieNKRlcpJlco4CLtU-JLCQIAHUYDZJEV4eqnCeHlzMNdR6WAJJYL1hMhST0HRFM-jVOql0motXWOQIWMARYQ0jNYOWiEuAZCWNBPWKElgXXDO-ZmrNHEiQjBoLQFAQL6AYPzB00EPCUiWJpIUG8Zh4GSOLaidw4Df0-VMLqsAchUVNFqC0qsdqQtYtBG8lIlbwpop6H5Gjv5mBKlYTilUYXZEjBijRnJIx4pgH8-alBAXAoei6aZAt1iE3magO59FJC0seWoACLzgJ6DAhBCSlK6VsR6DsyVWKeIAAFvR4EkJLC0tKLSfA3DQAlrKZnrElePWVlIuXM2StsVwaQhXUCAtzd54EsH8FQD6JkSB2D8CBMSKo3gMhIqwD6ckrqs78EoQIfI1B-BXH4KZHAMbTJxXWPwco2yIAzB2pG91IBSqdWIrAGE_q_wvXJJQRIeY8gFEnIiz1IIfW4xAMGkAUQ0AZv4KJZ5CaaxJpgPMCMikIDwAzVgiw_BkU4RbSAAAegATjyR26GI6sI7Q1gRWc47p2zvraufgks109xwO5HAyY521n4OCtd5sOmxuPcOwQiLR0Rrdfwdd-TN3E34Eq_1Kq1Uaq1dQfQu68lXtffO295orSRF3Qeg9R6QDjKuncmtuBdCQBSNa7lXM3lisNiAcJ5IsiRo9Tsi0arZjIwUAoeQ8ggA",__position:0,__code:'<Text as="p" align="center">\n  Text\n</Text>',__scope:{props:a,ThemeProvider:m.ThemeProvider,theme:r.b,Text:E}},s.a.createElement(E,{as:"p",align:"center"},"Text")),s.a.createElement(g.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgCsTZjwABSEP5p3YeQ3RNdoYCIEQBlQC0Jkwgp_QFe0oIJTDulQ405XaT04AEchJHw48iMg9hoMsbApko90aMkOiGNoLACEkVRsBYkj2CDKU0Oos0lXBVBdFRY5TgAL2cAhEmxdhuDY9YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnEyABYrPYAA2KybPWMAQIAMR9aBEhM_hnEORFHUwdgEMofgliwn44HsxFvJrXyaGcCBVMudgAEZnNs-QFKUqYAEE5h09hI2g8gbCgdBwxQzkdLEKqYxkdhUS0mBuGAQ91M07F5G3WtgFq6AGuCAAyKbxkSeZKGacb6sa7g1vlMBQkUntUHadgAH4Ngm8NI2aq5lsm1AiprKQZGrd8zFhDVjhgMAwigKZTpatqbvKlca0TKSCBwPzMhSa8CBG2s62sciYqQjIyOPXqmJgYbV2hxgOKEkI4D4EA8Fy_hxk4jTuvxzZOwKYn4ggFJUHxxE9AEcQMehqxOLZndschtmpFh-DEK4DIobrSQgZBsGIZGqQ_vusxvxAfjGNg_9AO0XRQIMcDiOemqzVoS9yKzbj0Lk187T1mC4aF5DTeozDsOoPDYMI4rqGU1HKuAdYUn6dArlygAmWyLGPFhXCuH2AfYfUTMjKIsAtXF0AmK53NM0yrM5VLocseOiDQZOuDTjzTNy7OQgwKrE-L1O8ED0yg9crAc9D2ttQLouU9L3Km4AVmz9p1iUdYkslHLo-hzA3tCD6rgAbXYUylgADiWXL3KWZMQ485z2AAXRH9uqCgYUo9XDwoElbYTIAYkz0zc9rP3XGC9gl_aO-ghgGz5Tvrs6A_5f3IKA4Bd8PCQPAa4GBe0D7twsCMGwtB75gDQcPGso87LxDHCgvSMcZ7vQIBfGOFgPApFQeghBtYwAUP_o_DB0MsHQ1fu_Ke7NyH3x_s_aGtD74MNXMw2saBWAZFoAHfB7N2CcPoZnHhNC6FfzQWARhtZroWCEelYhkjayELnto9oAAJBcoiYhxCWHARIqJMIWlCBACx7g4AWjgBkCAKjqEuP6GAEylgBTwHYAAORgGMUUkR3AWNcSo4-6xBIEDJrAEh0MhAiESezLRAVC5JBMsYqApjYiuAsVY2gRBbH2M6o45xkT5EWC0ZlbKgct5sygGgGAxi6aEEDjgIOgjqF6Pnjo3hIE6k5XaLlLoNoemrkpo5Oh7DBkZSyiM3KOB-7jOqUaECAB1GA7SDFeHqqojRI8zDXUelgCS7DUYnIUk9B0fTPo1TqpdJqLV1jkANjAI2ENIwCxgPDYWAgljQS9koI6K06DvkVsrWJIkIwaC0BQEC-gGC6wdNBDwlIliaSFK_GYeBkj23lHcOAGDUVTC6rAHIVFTRagtI7HapLWLQRvJSFCMkPSegxS4jBZgSocxxrpCl2RIwspcZySMXKYBYvmpQXF-KHounOXrdYPNrmoChfRSQkrYVqAAgi4CegwIQQkqKqVbEegfNNWy6l7QAAC3o8CSHNhaSVFpPgbhoDyxVFz1impPpaykarFbJW2K4NIerqBAU1si8C7D-CoB9EyJA7B-BAmJFUbwGQ6VYB9OSJN7d-CiIEPkag_Arj8FMjgStpk4rrH4OUd5EAZg7TLSmkApVOrEVgDCHNf4XrkkoIkPMeQCiTlpWmkEmaWYgALSAKIaBW38FEvC2tNZ60wHmBGRSEB4CtrmW2-lOFF0gAAHoAE4umruhvwQ9zsmLU2Tfwc9l6Z2rn4ObY9J7N44HcjgZMV7az8GJZ-oOKyq0AYsO-2lt6AyPtPRe7pr6Y78HtTmx1zrXXuuoPoT9yzQM1qQ9ewQtLrS4d_b-_9IBjlXShZO3AuhIApAjeqjWSKjU-xAMU8kWQy2po-RaZ1swZj8HkAoeQ8ggA",__position:1,__code:'<ThemeProvider theme={theme}>\n  <Text as="h1" textStyle="heading" align="center">\n    Text\n  </Text>\n</ThemeProvider>',__scope:{props:a,ThemeProvider:m.ThemeProvider,theme:r.b,Text:E}},s.a.createElement(m.ThemeProvider,{theme:r.b},s.a.createElement(E,{as:"h1",textStyle:"heading",align:"center"},"Text"))))}}}]);