import { cn, type ClassValue } from './cn'

type VariantValue = string | number | boolean

export type VariantSchema = Record<string, Record<string, ClassValue|ClassValue[]>>

export type MergeVariantSchemas<
    TBase extends VariantSchema,
    TExtension extends VariantSchema
> = {
    [K in keyof TBase | keyof TExtension]:
        K extends keyof TExtension
            ? K extends keyof TBase
                ? Omit<TBase[K], keyof TExtension[K]> & TExtension[K]
                : TExtension[K]
            : K extends keyof TBase
                ? TBase[K]
                : never
}

export type VariantProps<TVariants extends VariantSchema> = {
    [K in keyof TVariants]?: keyof TVariants[K] | VariantValue
} & {
    class?: ClassValue
}

export type VariantExtension<
    TBase extends VariantSchema,
    TExtension extends VariantSchema
> = {
    base?: ClassValue | ClassValue[]

    variants?: TExtension

    defaultVariants?: Partial<{
        [K in keyof MergeVariantSchemas<TBase, TExtension>]:
            keyof MergeVariantSchemas<TBase, TExtension>[K]
    }>

    compoundVariants?: CompoundVariant<
        MergeVariantSchemas<TBase, TExtension>
    >[]
}

export type CompoundVariant<TVariants extends VariantSchema> = {
	class: ClassValue
	variants: Partial<{
		[K in keyof TVariants]: keyof TVariants[K] | VariantValue
	}>
}

export type VariantDefinition<TVariants extends VariantSchema = VariantSchema> = {
	base?: ClassValue|ClassValue[]
	variants: TVariants
	defaultVariants?: Partial<{
		[K in keyof TVariants]: keyof TVariants[K]
	}>
	compoundVariants?: CompoundVariant<TVariants>[]
}

export type VariantComposer<TVariants extends VariantSchema> = {
	definition: VariantDefinition<TVariants>
	variants: TVariants
	defaultVariants: VariantDefinition<TVariants>['defaultVariants']
    compoundVariants?: CompoundVariant<TVariants>[]

	compose(
		props?: Record<string, VariantValue | undefined> & {
			class?: ClassValue
		},
	): string

	extend<TExtension extends VariantSchema>(
        extension: VariantExtension<TVariants, TExtension>
    ): VariantComposer<MergeVariantSchemas<TVariants, TExtension>>
}

export function createVariants<TVariants extends VariantSchema>(
	definition: VariantDefinition<TVariants>,
): VariantComposer<TVariants> {
	return {
		definition,

		variants: definition.variants,

		defaultVariants: definition.defaultVariants,

		compose(
			props: Record<string, VariantValue | undefined> & {
				class?: ClassValue
			} = {}
		) {
			const classes: ClassValue[] = []
			if (definition.base) {
				if (Array.isArray(definition.base)) {
					classes.push(...definition.base);
				} else {
					classes.push(definition.base)
				}
			}

			for (const variantName in definition.variants) {
				const variantGroup = definition.variants[variantName];

				const value = props[variantName] ?? definition.defaultVariants?.[variantName as keyof TVariants];
				if (value === undefined) {
					continue
				}

				const variantClass = variantGroup?.[String(value)];
				if (variantClass) {
					if (Array.isArray(variantClass)) {
						classes.push(...variantClass);
					} else {
						classes.push(variantClass)
					}
				}
			}

			for (const compound of definition.compoundVariants ?? []) {
				const matches = Object.entries(compound.variants).every(([key, value]) => {
					return (
						(props[key] ?? definition.defaultVariants?.[key as keyof TVariants]) === value
					)
				})

				if (matches) {
					classes.push(compound.class)
				}
			}

			if (props.class) {
				classes.push(props.class)
			}

			return cn(...classes)
		},

		extend<TExtension extends VariantSchema>(
			extension: VariantExtension<TVariants, TExtension>,
		): VariantComposer<MergeVariantSchemas<TVariants, TExtension>> {
			const mergedVariants = { ...definition.variants } as Record<string, Record<string, ClassValue | ClassValue[]>>

			for (const group in extension.variants ?? {}) {
				mergedVariants[group] = {
					...mergedVariants[group],
					...extension.variants![group],
				};
			}

			const mergedDefinition = {
				base: [
					...(definition.base ? Array.isArray(definition.base) ? definition.base : [definition.base] : []),
					...(extension.base ? Array.isArray(extension.base) ? extension.base : [extension.base] : []),
				],
				variants: mergedVariants,
				defaultVariants: {
					...definition.defaultVariants,
					...extension.defaultVariants,
				},
				compoundVariants: [
					...(definition.compoundVariants ?? []),
					...(extension.compoundVariants ?? []),
				],
			}

			return createVariants(mergedDefinition as VariantDefinition<MergeVariantSchemas<TVariants, TExtension>>);
		},
	}
}
