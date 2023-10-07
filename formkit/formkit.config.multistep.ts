// this is a litle crazy with the style differences
export default {
  // global: {
  //   outer: `[*.formkit-icon]:w-5  [&>.formkit-icon]:flex [&>.formkit-icon]:grow-0 [&>.formkit-icon]:shrink-0 [&>.formkit-icon]:self-stretch [&>.formkit-icon]:select-none`,
  // },
  'multi-step': {
    outer: 'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    wrapper: `group max-w-lg rounded-md shadow-lg
    data-[tab-style=progress]:shadow-none
    `,
    tabs: `flex overflow-auto items-center
    group-data-[tab-style=tab]:border-t group-data-[tab-style=tab]:border group-data-[tab-style=tab]:bg-[#eeeef4] group-data-[tab-style=tab]:border-[#ccccd7] group-data-[tab-style=tab]:rounded-t-md
    group-data-[tab-style=tab]:divide-x group-data-[tab-style=tab]:divide-solid group-data-[tab-style=tab]:divide-[#ccccd7]
    group-data-[tab-style=progress]:my-8 group-data-[tab-style=progress]:justify-around group-data-[tab-style=progress]:overflow-visible
    group-data-[tab-style=progress]:data-[hide-labels='true']:mb-4
    `,
    tab: `group cursor-pointer m-0 h-full border-none bg-none appearance-none
    data-[active=true]:font-bold
    group-data-[tab-style=tab]:text-sm group-data-[tab-style=tab]:text-[#767676] group-data-[tab-style=tab]:py-4 group-data-[tab-style=tab]:px-6 group-data-[tab-style=tab]:grow group-data-[tab-style=tab]:shrink group-data-[tab-style=tab]:relative group-data-[tab-style=tab]:text-center group-data-[tab-style=tab]:select-none
    group-data-[tab-style=tab]:data-[active=true]:bg-white group-data-[tab-style=tab]:data-[active=true]:text-black
    group-data-[tab-style=progress]:flex group-data-[tab-style=progress]:flex-col group-data-[tab-style=progress]:items-center group-data-[tab-style=progress]:grow group-data-[tab-style=progress]:shrink-0 group-data-[tab-style=progress]:relative
    group-data-[tab-style=progress]:[&>.formkit-tab-label]:absolute group-data-[tab-style=progress]:[&>.formkit-tab-label]:top-[100%] group-data-[tab-style=progress]:[&>.formkit-tab-label]:w-full group-data-[tab-style=progress]:[&>.formkit-tab-label]:text-sm group-data-[tab-style=progress]:[&>.formkit-tab-label]:whitespace-nowrap
    group-data-[tab-style=progress]:before:block group-data-[tab-style=progress]:before:border-[#ccccd7] group-data-[tab-style=progress]:before:border group-data-[tab-style=progress]:before:border-[5px] group-data-[tab-style=progress]:before:z-[2] group-data-[tab-style=progress]:before:border-solid group-data-[tab-style=progress]:before:rounded-full group-data-[tab-style=progress]:before:bg-white group-data-[tab-style=progress]:before:w-5 group-data-[tab-style=progress]:before:h-5 group-data-[tab-style=progress]:before:mb-2
    group-data-[tab-style=progress]:data-[active=true]:before:border-[#54a085]
    group-data-[tab-style=progress]:data-[valid=true]:data-[visited=true]:before:bg-[#54a085]
    group-data-[tab-style=progress]:after:block group-data-[tab-style=progress]:after:h-1 group-data-[tab-style=progress]:after:bg-[#ccccd7] group-data-[tab-style=progress]:after:absolute group-data-[tab-style=progress]:after:w-full group-data-[tab-style=progress]:after:top-2 group-data-[tab-style=progress]:after:left-[calc(50%+0.5em)]
    group-data-[tab-style=progress]:last:after:hidden
    group-data-[tab-style=progress]:data-[valid='true']:data-[visited='true']:after:bg-[#54a085]
    `,
    'tab-label': 'test',
    badge: `bg-[#ea0000] text-white z-[3] w-[1.33rem] h-[1.33rem] p-1 flex flex-col absolute rounded-full justify-center text-center text-[0.666rem]
    group-data-[valid='true']:bg-[#54a085]
    [&>span.formkit-icon]:h-full [&>span.formkit-icon]:w-full [&>span.formkit-icon>svg]:h-full [&>span.formkit-icon>svg]:w-full
    group-data-[tab-style=tab]:leading-[0] group-data-[tab-style=tab]:top-1 group-data-[tab-style=tab]:right-1
    `,
    steps: `border border-solid border-[#ccccd7] border-t-0 p-8 rounded-b-md
    group-data-[tab-style=progress]:rounded-md group-data-[tab-style=progress]:border-t group-data-[tab-style=progress]:shadow-lg
    `,
    step: 'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  },

  'multi-step-shuriken': {
    badge: `bg-[#ea0000] text-white z-[3] w-[1.33rem] h-[1.33rem] p-1 flex flex-col absolute rounded-full justify-center text-center text-[0.666rem] data-[valid='true']:bg-[#54a085]`,
    steps: 'nui-card nui-card-rounded nui-card-white p-6',
    tabs: `my-8 overflow-visible justify-around data-[hide-labels='true']:mb-4`,
    tab: `flex text-black dark:text-white
    before:block before:border-[#ccccd7] before:border before:border-[5px] before:z-[2] before:border-solid before:rounded-full before:bg-white before:w-5 before:h-5 before:mb-2
    data-[active='true']:before:border-[#54a085]
    after:block after:h-1 after:bg-[#ccccd7] after:absolute after:w-full after:top-2 after:left-[calc(50%+0.5em)]
    last:after:hidden
    data-[valid='true']:data-[visited='true']:after:bg-[#54a085]
    `,
    'step-actions': '-mb-4',
    'step-next': 'ml-auto',
  },
}

/* these are not available in the config yet
not sure how to do this in tailwind or if needed
.formkit-outer[data-type='multi-step'] > .formkit-wrapper .formkit-wrapper,
.formkit-outer[data-type='multi-step'] > .formkit-wrapper .formkit-fieldset {
  max-width: none;
}

.formkit-step[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.formkit-step-actions {
  margin-bottom: -1em;
  display: flex;
  justify-content: space-between;
}
.formkit-step-actions .formkit-step-next {
  margin-left: auto;

*/
