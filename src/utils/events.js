const events = new Map();

export default {
    $on(eventName, fn) {
        if (!events.has(eventName)) {
            events.set(eventName, [])
        }

        events.get(eventName).push(fn)
    },

    $off(eventName, fn) {
        throw { message: 'not implentented'}
    },

    $emit(eventName, data) {
        if (events.has(eventName)) {
            events.get(eventName).array.forEach(fn => fn(data));
        }
    }

}