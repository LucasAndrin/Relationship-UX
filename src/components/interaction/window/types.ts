import type { WindowPosition, WindowSize } from '../../../core/window-manager';

export type WindowBounds = {
    width: number
    height: number
}

export type WindowVariant =
    | 'filled'
    | 'outlined'
    | 'ghost';

export type WindowRounded =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'full';

export type WindowShadow =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl';

export type WindowProps = {
    title?: string
    position: WindowPosition
    size: WindowSize
    zIndex: number
    minimized?: boolean
    maximized?: boolean
    draggable?: boolean
    resizable?: boolean
    bounds: WindowBounds
    variant?: WindowVariant
    rounded?: WindowRounded
    shadow?: WindowShadow
    class?: string
}
