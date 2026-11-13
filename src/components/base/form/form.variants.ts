export const formControlBaseClasses = [
    'w-full',

    'font-normal',
    'outline-none',

    'transition-colors',
    'duration-150',

    'placeholder:text-slate-400',
    'dark:placeholder:text-slate-500',

    'focus:border-slate-400',
    'focus:ring-2',
    'focus:ring-slate-900/10',

    'dark:focus:border-slate-500',
    'dark:focus:ring-white/10',

    'disabled:cursor-not-allowed',
    'disabled:opacity-50',

    'read-only:cursor-default',
]

export const inputBaseClasses = [
    ...formControlBaseClasses,
    'block',
]

export const inputBaseInvalidClasses = [
    'border-red-500!',
    'focus-visible:border-red-500!',
    'focus-visible:ring-red-500/20!',
];

export const inputVariantFilledClasses = [
    'border',
    'border-slate-200',

    'bg-slate-100',
    'text-slate-900',

    'hover:bg-slate-50',
    'focus:bg-white',

    'dark:border-slate-800',
    'dark:bg-slate-800/60',
    'dark:text-slate-100',
    'dark:hover:bg-slate-800',
    'dark:focus:bg-slate-900',
]

export const inputVariantOutlinedClasses = [
    'border',
    'border-slate-300',

    'bg-white',
    'text-slate-900',

    'hover:border-slate-400',

    'dark:border-slate-700',
    'dark:bg-slate-900',
    'dark:text-slate-100',
    'dark:hover:border-slate-600',
]

export const inputVariantGhostClasses = [
    'border',
    'border-transparent',

    'bg-transparent',
    'text-slate-900',

    'hover:border-slate-200',
    'hover:bg-slate-100',

    'focus:border-slate-300',
    'focus:bg-white',

    'dark:text-slate-100',
    'dark:hover:border-slate-700',
    'dark:hover:bg-slate-800/60',
    'dark:focus:border-slate-600',
    'dark:focus:bg-slate-900',
]