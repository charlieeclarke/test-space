const ordinalSuffixes = {
  en: {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  },
};

export class OrdinalFormat {
  #rules;
  #suffixes;

  constructor(locale) {
    if (!(locale in ordinalSuffixes)) throw new Error(`Unhandled locale: ${locale}`);
    this.#suffixes = ordinalSuffixes[locale];
    this.#rules = new Intl.PluralRules(locale, { type: 'ordinal' });
  }

  withOrdinalSuffix(x) {
    if (typeof x != 'number') throw new TypeError(`Expected Number but received ${typeof x}`);
    if (x < 1) throw new RangeError(`Expected a number > 0 but received ${x}`);
    const ordinal = this.#rules.select(x);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!ordinal in this.#suffixes) throw new Error(`Unexpected ordinal ${ordinal}`);
    const suffix = this.#suffixes[ordinal];
    return `${x}${suffix}`;
  }
}

export const ordinalDateString = (date: string, locale = 'en', withDay = false) => {
  if (!date || !locale) return '';

  const now = new Date(date);

  const fullFormat = new Intl.DateTimeFormat('en', { dateStyle: 'full' });
  const parts = fullFormat.formatToParts(now);

  const weekDayName = parts.find((p) => p.type === 'weekday').value;
  const dayName = parts.find((p) => p.type === 'day').value;
  const yearName = parts.find((p) => p.type === 'year').value;
  const monthName = parts.find((p) => p.type === 'month').value;

  const dayWithSuffix = new OrdinalFormat('en').withOrdinalSuffix(Number(dayName));

  return `${monthName} ${withDay ? weekDayName : ''} ${dayWithSuffix}, ${yearName}`;
};
