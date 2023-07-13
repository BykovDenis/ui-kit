import dayjs from "dayjs";
import type { Dayjs, PluginFunc } from "dayjs";

const REGEX_TIMEZONE_OFFSET_FORMAT = /^(.*)([+-])(\d{2}):(\d{2})|(Z)$/;

/**
 * @see https://github.com/iamkun/dayjs/issues/651#issuecomment-763033265
 * decorates dayjs in order to keep the utcOffset of the given date string
 * natively dayjs auto-converts to local time & losing utcOffset info.
 */
const pluginFunc: PluginFunc<unknown> = (
  option: unknown,
  dayjsClass: typeof Dayjs,
  dayjsFactory: typeof dayjs
) => {
  dayjsFactory.parseZone = function (
    date?: dayjs.ConfigType,
    format?: dayjs.OptionType,
    locale?: string,
    strict?: boolean
  ) {
    if (typeof format === "string") {
      format = { format: format };
    }
    if (typeof date !== "string") {
      return dayjs(date, format, locale, strict);
    }
    const match = date.match(REGEX_TIMEZONE_OFFSET_FORMAT);
    if (match === null) {
      return dayjs();
    }
    if (match[0] === "Z") {
      return dayjs(
        date,
        {
          utc: true,
          ...format,
        },
        locale,
        strict
      );
    }
    const [, dateTime, sign, tzHour, tzMinute] = match;
    const uOffset: number = parseInt(tzHour, 10) * 60 + parseInt(tzMinute, 10);
    const offset = sign === "+" ? uOffset : -uOffset;

    return dayjs(
      dateTime,
      {
        $offset: offset,
        ...format,
      } as unknown as dayjs.OptionType,
      locale,
      strict
    );
  };
};

export default pluginFunc;

declare module "dayjs" {
  function parseZone(
    date?: dayjs.ConfigType,
    format?: dayjs.OptionType,
    locale?: string,
    strict?: boolean
  ): dayjs.Dayjs;
}