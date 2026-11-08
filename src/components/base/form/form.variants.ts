export const inputBaseClasses = [
	'block',
	'w-full',

	'font-normal',
	'outline-none',

	'transition-colors',

	'placeholder:text-slate-400',

	'focus-visible:ring-2',
	'focus-visible:ring-slate-900/20',
	'focus-visible:border-slate-500',

	'disabled:cursor-not-allowed',
	'disabled:opacity-50',

	'read-only:cursor-default',
]

export const inputVariantFillledClasses = [
	'border',
	'border-slate-200',

	'bg-slate-100',
	'text-slate-900',

	'hover:bg-slate-50',
	'focus:bg-white',

	'dark:border-slate-800',
]

export const inputVariantOutlinedClasses = [
	'border',
	'border-slate-300',

	'bg-slate-200',
	'bg-opacity-20',

	'text-slate-900',
	'dark:text-slate-200',

	'hover:border-slate-400',

	'dark:border-slate-700',
	'dark:hover:border-slate-600',
]

export const inputVariantGhostClasses = [
	'border',
	'border-transparent',

	'bg-transparent',
	'text-slate-900',
	'dark:text-slate-200',

	'hover:bg-slate-100',
	'hover:text-slate-900',

	'focus:bg-white',
	'focus:text-slate-900',
]
