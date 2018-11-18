(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/base/about.mdx":function(e,A,a){"use strict";a.r(A);var n=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("./node_modules/react/index.js"),t=a.n(o),s=a("./node_modules/@mdx-js/tag/dist/index.js"),m=a("./node_modules/docz/dist/index.m.js"),g=a("./node_modules/@exah/react-base-component/esm/base.js");A.default=function(e){var A=e.components,a=Object(n.a)(e,["components"]);return t.a.createElement(s.MDXTag,{name:"wrapper",components:A},t.a.createElement(s.MDXTag,{name:"h1",components:A,props:{id:"base-createbase"}},"Base, createBase"),t.a.createElement(s.MDXTag,{name:"h2",components:A,props:{id:"description"}},"Description"),t.a.createElement(s.MDXTag,{name:"p",components:A},"Component without any styles, that filters unkown props. Underlying component can be changed with ",t.a.createElement(s.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"comp")," prop. By default renders ",t.a.createElement(s.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"<div>"),"."),t.a.createElement(s.MDXTag,{name:"p",components:A},"For more info see ",t.a.createElement(s.MDXTag,{name:"a",components:A,parentName:"p",props:{href:"https://github.com/exah/react-base-component"}},"@exah/react-base-component")," docs."),t.a.createElement(s.MDXTag,{name:"h2",components:A,props:{id:"usage"}},"Usage"),t.a.createElement(s.MDXTag,{name:"pre",components:A},t.a.createElement(s.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-js",metastring:""}},"import { Base, createBase } from 'pss-components'\n")),t.a.createElement(s.MDXTag,{name:"pre",components:A},t.a.createElement(s.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-js",metastring:""}},"<Base>\n  {/* children */}\n</Base>\n")),t.a.createElement(s.MDXTag,{name:"pre",components:A},t.a.createElement(s.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-js",metastring:""}},"const Heading = createBase('h1')\n")),t.a.createElement(s.MDXTag,{name:"pre",components:A},t.a.createElement(s.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-js",metastring:""}},"<Heading>\n  {/* children */}\n</Heading>\n<Heading as='h2'>\n  {/* children */}\n</Heading>\n")),t.a.createElement(s.MDXTag,{name:"h2",components:A,props:{id:"examples"}},"Examples"),t.a.createElement(m.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9KXYeQ3RNdpPTgARyEkDxKUkVRsH9AV7U1c1ELlBVzXacFUF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ14gAWYT2AANmE0T1jAECADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFSazUmhnAgWjLnYABGGSxPkCiqKmABBOYWPYSNoPIGwoHQcN4M5FixFCmMZHYVEmJgbhgEPejGOxeRt1rYAIugaLggAMlK8ZEnmShmiKqKYu4Rr5TAUJKJ7VB2nYAB-DZivDSM4quOqStQXyaykGRq3fMxYQ1Y4YDAMIoCmAb4sS8agpXGtEyDKUcHUzIUmvAh8trOtYLgGAxAumApBu0660kXaCH2w7jvyqRNqmsxvxAVD0Mwy7sIjDQtAoED9AYfC5pupZwrNWgbvg4j5QAAW9PBJDNKULUBmALU-DcaHIgMXSwAi2PWWH1nIBGYBuswxt-uztlcNIALgaggN0UCDHA9ia34VAfSZJB2H4IFiSqbwMgtX9yVFsSLH4VgMnyah-Cufg-JwHW-Is9Z-HKWmIBmdrNfFkAApS_DYBhLAfQV-byUoRI8zyApJy1Aniyl0EBANwWQCiNALf4HDQcD5WQEweYI0oiB4AtgWzv4bHRDF_gAD0PIUnA8-TKPa34dGHcx9PccpH2M30MOQBznAACZdaL6OK-tOuc7zgv-HWMb5F-v3vA-ahIBSDmue0HnIf5_haF9LJNYlumLQr2YZn4Af5G3oA",__position:0,__code:"<Base>Base</Base>",__scope:{props:a,Base:g.a}},t.a.createElement(g.a,null,"Base")),t.a.createElement(s.MDXTag,{name:"p",components:A},"Filters any none-valid prop."),t.a.createElement(m.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9KXYeQ3RNdpPTgARyEkDxKUkVRsH9AV7U1c1ELlBVzXacFUF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ14gAWYT2AANmE0T1jAECADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFSazUmhnAgWjLnYABGGSxPkCiqKmABBOYWPYSNoPIGwoHQcN4M5FixFCmMZHYVEmJgbhgEPejGOxeRt1rYAIugaLggAMlK8ZEnmShmiKqKYu4Rr5TAUJKJ7VB2nYAB-DZivDSM4quOqStQXyaykGRq3fMxYQ1Y4YDAMIoCmAb4sS8agpXGtEyDKUcHUzIUmvAh8trOtYLgbpIGWjIAH1kVukYYAgAR0FugdKBmPgQFYeJGXEC6YCkQHTrrSRdoIfbDuO_KpE2qazG_EBUPQzDLuwiMNC0CgQP0Bh8LmwGlnCs1aEB-DiPlAABb08EkM0pQtNGYAtT4NxociAxdLACLY9YifWchSZgQGzDGpG7O2Vw0gAuBqCA3RQIMcD2JrfhUB9JkkHYfggWJKpvAyC1f3JLWxIsfhWAyfJqH4K5-D4nBHb4iz1n4cohYgGZ2rtnWQAClL8NgGEsB9U35vJShEjzPICknLVWeLfXQQEV21ZAKI0F9_gcKxtOLZATB5gjSiIHgX3VbO_gGdEbX-AAPQ8hScGb5N89rfgadDuma6ZylE4zfRs5ARucAAJid9uC9761h8b5vW_4dYxvkJHk-8D5qEgFJZfl7RFbxlX-FoX0sjt3XhYtXvZhmfhV_kB-gA",__position:1,__code:'<Base filter_any_weird_prop="value">Base</Base>',__scope:{props:a,Base:g.a}},t.a.createElement(g.a,{filter_any_weird_prop:"value"},"Base")),t.a.createElement(s.MDXTag,{name:"p",components:A},"Change underlying component with ",t.a.createElement(s.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"comp")," prop."),t.a.createElement(m.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9KXYeQ3RNdpPTgARyEkDxKUkVRsH9AV7U1c1ELlBVzXacFUF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ14gAWYT2AANmE0T1jAECADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFSazUmhnAgWjLnYABGGSxPkCiqKmABBOYWPYSNoPIGwoHQcN4M5FixFCmMZHYVEmJgbhgEPejGOxeRt1rYAIugaLggAMlK8ZEnmShmiKqKYu4Rr5TAUJKJ7VB2nYAB-DZivDSM4quOqStQXyaykGRq3fMxYQ1Y4YDAMIoCmAb4sS8agpXGtEyDKUcHUzIUmvAh8trOtYLgJE4D4EBbLWEAxGcCTUCkC6YFOutJF2gh9sO478qkTaprMb9brQjCsJwjQtAoED9AYfC5repZwrNWg3vg4j5QAAW9PBJDNKULUwy6LU-DcaHIgMXSwAi2PWZH1nINGYDeswxtBuztlcNIALgaggN0UCDHA9ia34VAfSZJB2H4IFiSqbwMgtX9yWlsSLH4VgMnyah-Cufg-JwI2-Is9Z-HKZmIBmdr9dlkAApS_DYBhLAfTV-byUoRI8zyApJy1MniwV0EBDN8WQCiNA7f4KG-fDzWQEweYI0oiB4DtsWzv4QnRBl_gAD0PIUnAS-TBPa34XG3fx3PicpIOM30GOQCLnAACZjYrxO6-tFui5Lsv-HWMb5FBkPvA-ahIBSPmBe0IX4dF_haF9LJ9bllmLTr2YZn4Mf5EPoA",__position:2,__code:'<Base as="span">Span</Base>',__scope:{props:a,Base:g.a}},t.a.createElement(g.a,{as:"span"},"Span")))}}}]);