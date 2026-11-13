import type { WindowId, WindowState } from '@lib/core/window-manager';

type UseWindowManagerReturn = {
    windows: WindowState[],
    activeWindowId: WindowId
    activeWindow: WindowState,
    windowCount: computed(() => store.windowCount),

    find: (id: WindowId): WindowState,
    open: (options: WindowOptions) => service.open(options),
    close: (id: WindowId) => service.close(id),
    focus: (id: WindowId) => service.focus(id),
    minimize: (id: WindowId) => service.minimize(id),
    maximize: (id: WindowId) => service.maximize(id),
    restore: (id: WindowId) => service.restore(id),
    move: (id: WindowId, position: Partial<WindowPosition>) => service.move(id, position),
    resize: (id: WindowId, size: Partial<WindowSize>, position?: Partial<WindowPosition>): void;
}