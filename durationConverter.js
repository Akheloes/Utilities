/**
 * An enum showin hom many milliseconds in a given time unit
 */
const MillisecondsInTimeUnit = Object.freeze({
    MILLISECOND: 1,
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000
});

/**
 * Converts a time duration expressed in a 'from'-time's-unit to a destination's 'to'-time-unit
 * @param {the starting time unit, is of type MillisecondsInTimeUnit} from
 * @param {the goal time unit, is of type MillisecondsInTimeUnit} to 
 */
function durationConvertion(duration, from, to) {
    const ratio = from/to;
    return ratio * duration;
}

// Exemple of use
// let duration = 2;
// let convertedDuration = durationConvertion(duration, MillisecondsInTimeUnit.MILLISECOND, MillisecondsInTimeUnit.SECOND);
// console.log(convertedDuration); // 0.002