import dayjs from 'dayjs';
import {escape as escapeHtml} from 'he';
import durationPlagin from "dayjs/plugin/duration.js"

dayjs.extend(durationPlagin);

/**
 *
 * @param {string} dateTime
 * @return {string}
 */
function formatDate(dateTime) {
  return dayjs(dateTime).format('MMM DD');
}

function formatTime(dateTime) {
  return dayjs(dateTime).format('HH:mm');
}


/**
 *
 * @param {string} startDateTime
 * @param {string} endDateTime
 * @return {string}
 */
function formatDuration(startDateTime, endDateTime) {
  const ms = dayjs(endDateTime).diff(startDateTime);
  return dayjs.duration(ms).format('HH[h] mm[m]');
}

class SafeHtml extends String {}

/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @return {SafeHtml}
 */
function html(strings, ...values) {
  const result = strings.reduce((before, after, index) => {
    const value = values[index - 1];

    if (Array.isArray(value) && value.every((it) => it instanceof SafeHtml)) {
      return before + value.join('') + after;
    }

    if (!(value instanceof SafeHtml)) {
      return before + escapeHtml(String(value)) + after;
    }

    return before + value + after;
  });

  return new SafeHtml(result);
}


export {formatDate, formatTime, formatDuration, SafeHtml, html};
