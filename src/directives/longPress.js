import { noop } from "../utils/function";

export default {
    bind(el, { value = 1000 }, { data }) {
        const { on = {} } = data;
        const longpressStart = on['longpress-start'] || noop;
        const longpressEnd = on['longpress-end'] || noop;
        const longpressClick = on['longpress-click'] || noop;

        const start = e => {
            if (e.type === 'click' && e.button !== 0) {
                return;
            }

            if (el.$_timer === null) {
                longpressStart();
                el.$_timer = setTimeout(() => {
                    longpressEnd();
                    clearTimer();
                }, value);
            }
        };

        const cancel = (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (el.$_timer !== null) {
                longpressClick();
                clearTimer();
            }
        };

        const clearTimer = () => {
            clearTimeout(el.$_timer);
            el.$_timer = null;
        };

        el.$_timer = null;
        el.$_start_long_press = start;
        el.$_cancel_long_press = cancel;

        el.addEventListener('mousedown', start);
        el.addEventListener('touchstart', start, {passive: true});
        ['click', 'mouseout', 'touchend', 'touchcancel'].forEach(e => el.addEventListener(e, cancel));
        return false;
    },
    unbind(el) {
        clearTimeout(el.$_timer);
        el.removeEventListener('mousedown', el.$_start_long_press);
        el.removeEventListener('touchstart', el.$_start_long_press, {passive: true});
        ['click', 'mouseout', 'touchend', 'touchcancel'].forEach(e => el.removeEventListener(e, el.$_cancel_long_press));
    }
}
