const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"/></svg>';
const settingsIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.82 22h-3.64a1 1 0 0 1-.977-.786l-.407-1.884a8.002 8.002 0 0 1-1.535-.887l-1.837.585a1 1 0 0 1-1.17-.453L2.43 15.424a1.006 1.006 0 0 1 .193-1.239l1.425-1.3a8.1 8.1 0 0 1 0-1.772L2.623 9.816a1.006 1.006 0 0 1-.193-1.24l1.82-3.153a1 1 0 0 1 1.17-.453l1.837.585c.244-.18.498-.348.76-.5c.253-.142.513-.271.779-.386l.408-1.882A1 1 0 0 1 10.18 2h3.64a1 1 0 0 1 .976.787l.412 1.883a8.192 8.192 0 0 1 1.535.887l1.838-.585a1 1 0 0 1 1.169.453l1.82 3.153c.232.407.152.922-.193 1.239l-1.425 1.3a8.1 8.1 0 0 1 0 1.772l1.425 1.3c.345.318.425.832.193 1.239l-1.82 3.153a1 1 0 0 1-1.17.453l-1.837-.585a7.98 7.98 0 0 1-1.534.886l-.413 1.879a1 1 0 0 1-.976.786ZM11.996 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"/></svg>'; 
const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96zm246.4 80.5l-94.7-47.3l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5l-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4l-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3l-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5l47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7l100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4l94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0c-49.9-49.9-49.9-131.1 0-181c49.9-49.9 131.1-49.9 181 0c49.9 49.9 49.9 131.1 0 181z"/></svg>'; 
const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 8c0 3.45 2.8 6.25 6.25 6.25c3.41-.003 6.25-3 6.25-6c-1 .5-4 1.5-6-.5s-1-5-.5-6c-3 0-6 2.84-6 6.25z"/></svg>'; 

//used from css
const downArrowIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"/></svg>';

const doubleLeftArrow = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11h-5.66l1.25-1.31a1 1 0 0 0-1.45-1.38l-2.86 3a1 1 0 0 0-.09.13a.72.72 0 0 0-.11.19a.88.88 0 0 0-.06.28S7 12 7 12a1 1 0 0 0 .08.38a1 1 0 0 0 .21.32l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L10.41 13H16a1 1 0 0 0 0-2Z"/><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"/></svg>';

interface IconsType {
    [key: string]: string,
}

export const Icons: IconsType = {
    menuIcon,
    settingsIcon,
    sunIcon,
    moonIcon,
    downArrowIcon,
    doubleLeftArrow
}