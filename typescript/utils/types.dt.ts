import type { Options } from "../base/base-actions";

export type TestStep = {
    selector: string;
    action: 'fill' | 'type' | 'key' | 'ticBox' | 'selectOption' | 'click' | 'dblclick' | 'hover' | 'setInputFiles' | 'focus;',
    value?: string; // Optional, mainly used for typing text or assertions
    options?: Options
};
