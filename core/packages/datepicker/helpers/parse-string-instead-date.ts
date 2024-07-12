import DatepickerMask from '../enums/datepicker-mask';

function parseStringInsteadDate(dateValue: string, mask: DatepickerMask): string {
  if (dateValue) {
    return mask === DatepickerMask.DDMMYYYY
      ? parseStringInsteadDateDDMMYYYY(dateValue)
      : parseStringInsteadDateYYYYMMDD(dateValue);
  }
  return '';
}

function parseStringInsteadDateYYYYMMDD(dateValue: string): string {
  const dateValueParsed: string = dateValue;
  const dateParsedResultElements: Array<string> = [];
  const dateParsedElements: Array<string> = dateValueParsed.split('-');
  const dateParsedElementsFiltered: Array<string> = dateParsedElements?.filter(
    (dateParsedElement: string) => dateParsedElement
  );
  const stringLength = dateParsedElementsFiltered?.length > 3 ? 3 : dateParsedElementsFiltered?.length;
  if (stringLength === 1) {
    dateParsedResultElements.push(dateValueParsed.substring(0, 4));
    if (dateValueParsed?.length >= 5) {
      dateParsedResultElements.push(dateValueParsed.substring(4, 6));
    }
    if (dateValueParsed?.length >= 7) {
      dateParsedResultElements.push(dateValueParsed.substring(6, 8));
    }
  } else {
    for (let i = 0; i < stringLength; i++) {
      let dateParsedElement: string = dateParsedElementsFiltered[i];
      if (i === 0 && dateParsedElement) {
        if (dateParsedElement?.length > 4) {
          dateParsedResultElements.push(dateParsedElement.substring(0, 4));
          dateParsedResultElements.push(dateParsedElement.substring(4, 6));
        } else {
          dateParsedResultElements.push(dateParsedElement);
        }
      } else if (i === 1) {
        if (dateParsedElements.length === 2 && dateParsedElement.length > 2) {
          dateParsedResultElements.push(dateParsedElement.substring(0, 2));
          dateParsedResultElements.push(dateParsedElement.substring(2, 4));
        } else {
          if (dateParsedElements[1] === '') {
            dateParsedResultElements.push('');
          }
          dateParsedResultElements.push(dateParsedElement);
        }
      } else if (i === 2) {
        dateParsedResultElements.push(dateParsedElement.substring(0, 2));
      }
    }
  }
  return dateParsedResultElements.join('-');
}

function parseStringInsteadDateDDMMYYYY(dateValue: string): string {
  const dateValueParsed: string = dateValue;
  const dateParsedResultElements: Array<string> = [];
  const dateParsedElements: Array<string> = dateValueParsed.split('.');
  const dateParsedElementsFiltered: Array<string> = dateParsedElements?.filter(
    (dateParsedElement: string) => dateParsedElement
  );
  const stringLength = dateParsedElementsFiltered?.length > 3 ? 3 : dateParsedElementsFiltered?.length;
  if (stringLength === 1) {
    dateParsedResultElements.push(dateValueParsed?.substring(0, 2));
    if (dateValueParsed?.length >= 3) {
      dateParsedResultElements.push(dateValueParsed?.substring(2, 4));
    }
    if (dateValueParsed?.length >= 5) {
      dateParsedResultElements.push(dateValueParsed?.substring(4));
    }
  } else {
    for (let i = 0; i < stringLength; i++) {
      let dateParsedElement: string = dateParsedElementsFiltered[i];
      if (i === 0 && dateParsedElement) {
        if (dateParsedElement?.length < 3) {
          if (!dateParsedElements[i]) {
            dateParsedResultElements.push('');
          }
          dateParsedResultElements.push(dateParsedElement);
        } else if (dateParsedElement?.length < 5 && dateParsedElements?.length === 1) {
          dateParsedResultElements.push(dateParsedElement?.substring(0, 2));
          dateParsedResultElements.push(dateParsedElement?.substring(2, 4));
        } else if (dateParsedElement?.length < 9 && dateParsedElements?.length === 1) {
          dateParsedResultElements.push(dateParsedElement?.substring(0, 2));
          dateParsedResultElements.push(dateParsedElement?.substring(2, 4));
          dateParsedResultElements.push(dateParsedElement?.substring(4));
        } else if (
          dateParsedElements?.length === 2 &&
          (dateParsedElement?.length === 3 || dateParsedElement?.length === 4)
        ) {
          dateParsedResultElements.push(dateParsedElement?.substring(0, 2));
          dateParsedResultElements.push(dateParsedElement?.substring(2, 4));
        }
      } else if (i === 1 && dateParsedElement) {
        if (dateParsedElement?.length && dateParsedElement?.length < 3) {
          // if first element of date is empty
          if (dateParsedElements[i] === '') {
            dateParsedResultElements.push('');
          }
          dateParsedResultElements.push(dateParsedElement);
        } else if (dateParsedElement?.length && (dateParsedElement?.length === 3 || dateParsedElement?.length === 4)) {
          const middleValue: number = Number(dateParsedElement?.substring(0, 2));
          if (middleValue > 12) {
            // if first element of date is empty and dateParsedResultElements consist of one element
            if (
              (dateParsedElements[i] === '' || dateParsedElements.length === 2) &&
              dateParsedResultElements.length === 1
            ) {
              dateParsedResultElements.push('');
            }
            dateParsedResultElements.push(dateParsedElement);
          } else {
            dateParsedResultElements.push(dateParsedElement?.substring(0, 2));
            dateParsedResultElements.push(dateParsedElement?.substring(2, 4));
          }
        }
      } else if (i === 2 && dateParsedElement) {
        dateParsedResultElements.push(dateParsedElement.substring(0, 4));
      }
    }
  }
  return dateParsedResultElements.join('.');
}

export default parseStringInsteadDate;
