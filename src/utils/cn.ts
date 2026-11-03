export type ClassValue =
    | string
    | undefined
    | null
	| boolean

export function cn(...classes: ClassValue[]) {
    return classes.filter(Boolean).join(' ')
}
