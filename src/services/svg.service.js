function getSvg(iconName) {
  return svgIcon[iconName]
}

export const svgService = { getSvg }

// in template
// <div className="icon" v-html="getSvg('bars')"></div>
// <img style="width:24px; height:24px" :src="getSvg('add')" alt="" />

// in methodes
// function getSvg(iconName) {
//     return svgService.getSvg(iconName)
//   }

const svgIcon = {
  globe:
    '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 976q-84 0-157-31.5T196 859q-54-54-85-127.5T80 574q0-84 31-156.5T196 291q54-54 127-84.5T480 176q84 0 157 30.5T764 291q54 54 85 126.5T880 574q0 84-31 157.5T764 859q-54 54-127 85.5T480 976Zm0-58q35-36 58.5-82.5T577 725H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395 906Zm171-1q72-23 129.5-69T788 725H639q-13 54-30.5 98T566 905ZM152 665h159q-3-27-3.5-48.5T307 574q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152 665Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820 574q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648 665Zm-10-239h150q-33-69-90.5-115T565 246q25 37 42.5 80T638 426Zm-254 0h194q-11-53-37-102.5T480 236q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z"/></svg>',
  checkMark:
    '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>',
  cupAndPencil:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;:stroke-width2px}</style></defs><g style="isolation:isolate"><g id="white"><path fill="#fff" d="M18 30l2 21h-1v5h28v-5h-2l2-21H18z"/><path fill="#dee0e2" d="M47 30H18l.2 3H44l-2 19h2v4h3v-5h-2l2-21z"/></g><g id="stroke"><path class="cls-4" d="M39.5 29.7L49.7 9.8l5.4 2.8-8.9 17.1"/><path class="cls-4" d="M51 29.2l5.3-10.4-8.9-4.6m-32.5 7.7l4.5 7.8m8.4 0l-6.7-11.8m-.1.9l-5.8 3.7m8.4 7.2l-4.9-9.2m17.8 9.2l.1-12.5-3.4-7.3-3.2 7.6v12.2m6.1-11.9l-6.1.3m3.3 11.6l-.2-10.8m12.5 31.9L47.3 30H18.2l1.6 20.8m-1.4 5.4h28.7v-5H18.4v5zM11.7 8.3a14.7 14.7 0 00-.2 8.9c1.5 4.1 5.1 5 7.9 1.7a2.4 2.4 0 00.7-2.4c-1.1-3.2-4.3-2.2-8.4-8.2z"/></g><path d="M15 23l5 7h8l-6-11-7 4zM11.7 8.3a14.7 14.7 0 00-.2 8.9c1.5 4.1 5.1 5 7.9 1.7a2.4 2.4 0 00.7-2.4c-1.1-3.2-4.3-2.2-8.4-8.2zM39 30l11-20 5 3-9 17h-7zm-9 0h7l-1-12-3-8-3 8v12z" style="mix-blend-mode:darken" fill="#a1f4c0" id="flah"/></g></svg>',
  tv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g style="isolation:isolate"><path fill="#fff" d="M11 15h42v29H11z"/><path fill="#dee0e2" d="M11 15v3h39v26h3V15H11z"/><path d="M9.7 11.3h44.6a2.5 2.5 0 012.5 2.5v30.7a2.6 2.6 0 01-2.5 2.6H9.7a2.6 2.6 0 01-2.5-2.6V13.8a2.5 2.5 0 012.5-2.5zm1.1 3.5h42.4v28.7H10.8V14.8zM29 35.7a.9.9 0 011 1 1 1 0 01-1 1 1.1 1.1 0 01-1-1 1 1 0 011-1zm6.4 0a.9.9 0 011 1 1 1 0 01-2 0 .9.9 0 011-1zM20.9 21.9h3.4l3.1 10.2h10.4m-11-3.1h12.1M26 25.9h13.6m-3.1 21.5v6.9m-9 0v-6.9m-8.4 7.3h25.8" fill="none" stroke="#4d535b" stroke-miterlimit="10" stroke-width="2"/><path style="mix-blend-mode:darken" fill="#a1f4c0" d="M27 47h10v7H27z"/></g></svg>',
  paperAndPen:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-5{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v39.4a1.6 1.6 0 001.6 1.6h26.5a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6z" fill="#fff"/><path d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v1.4h25.1a1.6 1.6 0 011.6 1.6v38h1.4a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6z" fill="#dee0e2"/></g><g id="flah"><path d="M47 16h5v32.3a1.7 1.7 0 01-1.7 1.7 3.3 3.3 0 01-3.3-3.3V16z" style="mix-blend-mode:darken" fill="#a1f4c0"/><path class="cls-5" d="M39.7 10.8H13.2a1.6 1.6 0 00-1.6 1.6v39.4a1.6 1.6 0 001.6 1.6h26.5a1.6 1.6 0 001.6-1.6V12.4a1.6 1.6 0 00-1.6-1.6zm7.2 5.3h5.7v29.7c0 5.9-5.7 5.9-5.7 0V16.1z"/><path class="cls-5" d="M56.3 31.9l.1-11.1h-9.5m2.8 32.6v-3.2M18 19.4h8.4M18 27.3h16.9M18 32h16.9M18 36.6h16.9M18 41.3h8.4"/></g></g></svg>',
  animation:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g style="isolation:isolate"><path fill="#fff" d="M15 17h34v30H15z"/><path fill="#dee0e2" d="M15 17v3h32v27h2V17H15z"/><path d="M8 10.9v42.2m6.5-42.2v42.2M8.2 13.5h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1M8.2 32h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1m-6.1 6.2h6.1m35.2-39.6v42.2M56 10.9v42.2m-6.3-39.6h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1M49.7 32h6.1m-6.1 6.2h6.1m-6.1 6.1h6.1m-6.1 6.2h6.1m-40.2-3.8h33.9M15.6 17.3h33.9m-22.2 6.6a9.4 9.4 0 11-3.4 12.8 9.3 9.3 0 013.4-12.8z" fill="none" stroke="#4d535b" stroke-miterlimit="10" stroke-width="2"/><path fill="#4d535b" d="M29.3 27.9v8.8l3.9-2.2 3.8-2.2-3.8-2.2-3.9-2.2z"/><path d="M8 14h6v36H8zm42 0h6v36h-6z" style="mix-blend-mode:darken" fill="#a1f4c0"/></g></svg>',
  music:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path d="M29 9.2a8.6 8.6 0 018.5 8.6v13.9a8.5 8.5 0 01-8.5 8.5 8.5 8.5 0 01-8.5-8.5V17.8A8.6 8.6 0 0129 9.2z" fill="#fff"/><path d="M28.5 10.2a8.5 8.5 0 00-6.9 3.6 8.4 8.4 0 014.9-1.6c4.7 0 7.5 3.9 7.5 8.6v13.9a8 8 0 01-1.6 4.9c2.2-1.5 4.6-4 4.6-6.9V18.8a8.6 8.6 0 00-8.5-8.6z" fill="#dee0e2"/></g><g id="stroke"><path class="cls-4" d="M42.3 29.3v3.2A13.4 13.4 0 0129 45.8a13.4 13.4 0 01-13.3-13.3v-3.2M29 45.8v10.5m-10.9.5h21.8"/><path class="cls-4" d="M29 9.2a8.6 8.6 0 018.5 8.6v13.9a8.5 8.5 0 01-8.5 8.5 8.5 8.5 0 01-8.5-8.5V17.8A8.6 8.6 0 0129 9.2zm-8.1 8.3h4.8m-4.8 4.8h4.8m-4.8 4.9h4.8M20.9 32h4.8m6.6-14.5h4.8m-4.8 4.8h4.8m-4.8 4.9h4.8M32.3 32h4.8m10.7-14.1a2.3 2.3 0 013.1 2.1 3.7 3.7 0 01-3.1 3.4c-1.7.3-3.1-.6-3.1-2.2a3.7 3.7 0 013.1-3.3z"/><path class="cls-4" d="M50.8 10.5l7.3 2.6V8.6L50.8 6v14.7"/></g><path d="M47.8 17.9a2.3 2.3 0 013.1 2.1 3.7 3.7 0 01-3.1 3.4c-1.7.3-3.1-.6-3.1-2.2a3.7 3.7 0 013.1-3.3zm2.9-7.4l7.3 2.6V8.6L50.7 6" style="mix-blend-mode:darken" fill="#a1f4c0" id="flah"/></g></svg>',
  tech: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10;stroke-width:2px}</style></defs><g style="isolation:isolate"><g id="white"><path fill="#fff" d="M8 21h48v32H8z"/><path fill="#dee0e2" d="M8 21v3h44v29h4V21H8z"/></g><g id="stroke"><path class="cls-4" d="M25.1 30.9l-7.6 6.2 7.6 6.1m13.8-12.3l7.6 6.2-7.6 6.1m-4.5-15.3l-3.9 18.3"/><path class="cls-4" d="M55.5 11.3h-47v41.4h47V11.3zm0 9.4h-47"/><path class="cls-4" d="M49.6 15.4a.9.9 0 00-1 1 1 1 0 001 1 1.1 1.1 0 001-1 1 1 0 00-1-1zm-6.7 0a.9.9 0 00-1 1 1 1 0 001 1 1.1 1.1 0 001-1 1 1 0 00-1-1z"/></g><path style="mix-blend-mode:darken" fill="#a1f4c0" d="M8 11h48v10H8z" id="flah"/></g></svg>',
  business:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-2{fill:#fff}</style></defs><g style="isolation:isolate"><g id="stroke"><path class="cls-2" d="M44.9 44.2a1.8 1.8 0 01-2.3 1.2h-.1a1.9 1.9 0 01-1-1h-.1l-3.8-6.2a1.2 1.2 0 00-1.6-.4 1.4 1.4 0 00-.4 1.7l3.8 6.1.6.9-.2.4a1.8 1.8 0 01-.8.7 1.4 1.4 0 01-1.4.1 1.8 1.8 0 01-1-.9h-.1l-3.8-6.3a1.2 1.2 0 10-2 1.2l3.7 6.3.3.5v.4a2.7 2.7 0 01-.8.7 1.9 1.9 0 01-2.5-.9l-3.6-6a1.2 1.2 0 00-2.1 1.1l3.5 5.8-.2.4a1.8 1.8 0 01-2.6.6 1.8 1.8 0 01-.7-.8h-.1l-6.2-10.5a1.3 1.3 0 00-1.1-.6h-4.8V22.8h12.1l-4.8 4.7a2.1 2.1 0 00-.1 3l.4.3.7.4a6 6 0 006.8 0l6.7-4.3 9.5 15.9a1.7 1.7 0 01.1 1.4z"/><path class="cls-2" d="M45.1 39l-8.5-14.1a1.1 1.1 0 00-.7-.6 1.2 1.2 0 00-1 .2l-7.8 5a4.2 4.2 0 01-4.3 0l-.5-.3 8.6-8.3a3.4 3.4 0 012.3-1h8.6a3.1 3.1 0 011.3.3l7.5 3.1V39z"/><path d="M3 18h10v24H3zm48 0h10v24H51z" style="mix-blend-mode:darken" fill="#a1f4c0"/><path d="M44.8 42.8l-9.5-15.9-6.7 4.3a6 6 0 01-6.8 0l-.7-.4-.4-.3a2.1 2.1 0 01.1-3l4.8-4.7H13.5v2h9.1l3.4.2c-.8.8-1.7-.5-5 4a28.4 28.4 0 003.1 1.8v.2c2.1 1.3 3.4-.2 4 0l5-4 9.8 17.8c.1.1.1.1.1.2l.6.4h.1c1 .3 1-.2 1.3-1.2a1.7 1.7 0 00-.2-1.4z" fill="#dee0e2"/><path d="M60.8 17.4h-9.5a1.2 1.2 0 00-1.2 1.2V21l-6.4-2.6a4.9 4.9 0 00-2.1-.4h-8.2a5.4 5.4 0 00-3.9 1.5l-1.4 1.4H13.9v-2.3a1.2 1.2 0 00-1.2-1.2H3.2A1.2 1.2 0 002 18.6v23.3a1.2 1.2 0 001.2 1.2h9.5a1.2 1.2 0 001.2-1.2V41H18l5.6 9.4a4.5 4.5 0 003.7 2.2 4.2 4.2 0 003.3-1.7l.9.4 1.4.2a4.2 4.2 0 003.5-2h.2l1.3.2a4.1 4.1 0 003.6-2h.1v-.3l1.1.2a4.1 4.1 0 004.1-4.2 3.9 3.9 0 00-.4-1.8l-.3-.5H50v.9a1.2 1.2 0 001.2 1.2h9.5a1.2 1.2 0 001.3-1.3V18.6a1.2 1.2 0 00-1.2-1.2zM11.7 41H4V19.4h7.7zm33.2 3.2a1.8 1.8 0 01-2.3 1.2h-.1a1.9 1.9 0 01-1-1h-.1l-3.8-6.2a1.2 1.2 0 00-1.6-.4 1.4 1.4 0 00-.4 1.7l3.8 6.1.6.9-.2.4a1.8 1.8 0 01-.8.7 1.4 1.4 0 01-1.4.1 1.8 1.8 0 01-1-.9h-.1l-3.8-6.3a1.2 1.2 0 10-2 1.2l3.7 6.3.3.5v.4a2.7 2.7 0 01-.8.7 1.9 1.9 0 01-2.5-.9l-3.6-6a1.2 1.2 0 00-2.1 1.1l3.5 5.8-.2.4a1.8 1.8 0 01-2.6.6 1.8 1.8 0 01-.7-.8h-.1l-6.2-10.5a1.3 1.3 0 00-1.1-.6h-4.8V22.8h12.1l-4.8 4.7a2.1 2.1 0 00-.1 3l.4.3.7.4a6 6 0 006.8 0l6.7-4.3 9.5 15.9a1.7 1.7 0 01.1 1.4zm.2-5.2l-8.5-14.1a1.1 1.1 0 00-.7-.6 1.2 1.2 0 00-1 .2l-7.8 5a4.2 4.2 0 01-4.3 0l-.5-.3 8.6-8.3a3.4 3.4 0 012.3-1h8.6a3.1 3.1 0 011.3.3l7.5 3.1V39zM60 41h-7.7V19.4H60z" fill="#4d535b"/></g></g></svg>',
  lifestyle:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10}.cls-4{stroke-width:2.1px}</style></defs><g style="isolation:isolate"><g id="stroke"><path d="M12 20.2h34.7V53a4 4 0 01-4 4H16a4 4 0 01-4-4V20.2z" fill="#fff"/><path d="M12 20.2v4.2h30.5v31.5c0 .4-.1.7-.1 1 1.8-.4 4.3-2.1 4.3-4.1V20.2z" fill="#dee0e2"/><path class="cls-4" d="M13 20.2h32.7a1 1 0 011 1V52a5 5 0 01-5 5H17a5 5 0 01-5-5V21.2a1 1 0 011-1zm8.5 0v8.4"/><rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" stroke-width="2.23" fill="none" stroke="#4d535b" stroke-miterlimit="10"/><rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" style="mix-blend-mode:darken" fill="#a1f4c0"/><path class="cls-4" d="M46.7 28.6a9.5 9.5 0 010 18.9m-16.8-42V16"/><path d="M36.2 7.6V16M23.6 7.6V16" stroke-width="1.88" fill="none" stroke="#4d535b" stroke-miterlimit="10"/></g></g></svg>',
  data: '<svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 9.457V7.343H49.63v2.114H11.57zm39.115-5.286V2.057h3.171A3.171 3.171 0 0157.03 5.23v26.957h-2.643v-25.9a2.114 2.114 0 00-2.114-2.115h-1.586z" fill="#DEE0E2"/><path d="M57.543 35.543A4.456 4.456 0 0153.086 40H11.57V6.571h8.986" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M50.857 32.2c.468-.791 1.415-1.114 2.229-1.114a4.456 4.456 0 014.457 4.457V5.457A4.456 4.456 0 0053.086 1c-.814 0-1.85.19-2.229 1.114V32.2z" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M3.786 6.171C2.248 6.171 1 7.174 1 8.4v25.5l2.786 5.572L6.57 33.9V8.4c0-1.226-1.248-2.229-2.785-2.229z" fill="#A1F4C0" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M1 12.857h5.571m13.086-6.286h31.2m-24.485 4.886h-8.458v9.514h8.457v-9.514zm5.285 0H45.93m-14.273 4.457H45.93m-14.273 4.458h10.929" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M39.057 35.772h7.4v-7.4h-7.4v7.4zm-6.343-8.458h-7.4v8.458h7.4v-8.458zm6.343-2.114h-6.343v10.572h6.343V25.2zM17.914 35.772h7.4v-4.23h-7.4v4.23z" stroke="#4D535B" stroke-width="2" stroke-miterlimit="10"/></svg>',
  photography:
    '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58.703 18.723h-14l-7-9h-17l-7 9h-7c-1.7 0-3 1.3-3 3v27c0 1.7 1.3 3 3 3h52c1.7 0 3-1.3 3-3v-27c0-1.7-1.3-3-3-3z" fill="#fff" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M50.703 15.723v-2h7v2" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M29.703 46.723c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z" fill="#D0F7E6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M29.703 42.723c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" fill="#fff" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M24.103 30.723c.8-2.3 3-4 5.7-4m-5.3 9c-.5-.9-.8-1.9-.8-3m-16-9h6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M58.703 51.723h-9v-33h9c1.7 0 3 1.3 3 3v27c0 1.6-1.3 3-3 3z" fill="#D0F7E6" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/><path d="M42.703 44.723h2" stroke="#404145" stroke-width="2" stroke-miterlimit="10"/></svg>',
  search:
    '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg>',
  heart:
    '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/></svg>',
  heartFill:
    '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z"/></svg>',
  bell: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 20.167h5M4.295 11.87l-1.562 1.563a3.07 3.07 0 00-.9 2.171v0c0 .678.55 1.228 1.229 1.228h15.877c.678 0 1.228-.55 1.228-1.228v0a3.07 3.07 0 00-.9-2.171l-1.562-1.563a2.975 2.975 0 01-.872-2.104v-2.1A5.833 5.833 0 0011 1.833v0a5.833 5.833 0 00-5.833 5.834v2.1c0 .79-.314 1.546-.872 2.104z" stroke="#74767e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  letters:
    '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.833 9.834v5A1.667 1.667 0 002.5 16.5h15a1.666 1.666 0 001.667-1.666v-5" stroke="#74767e" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/><path d="M19.167 5.667v-2.5A1.667 1.667 0 0017.5 1.5h-15A1.667 1.667 0 00.833 3.167v2.5l9.167 5 9.167-5z" stroke="#74767e" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>',
}
