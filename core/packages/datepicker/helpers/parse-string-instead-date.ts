import DatepickerMask from '../enums/datepicker-mask';

function parseStringInsteadDate(dateValue: string, mask: DatepickerMask): string {
  if (dateValue) {
    return mask === DatepickerMask.DottedDDMMYYYY
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
  if (dateParsedElements.length === 1) {
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
          if (dateParsedElementsFiltered.length < 3) {
            dateParsedResultElements.push(dateParsedElement.substring(0, 4));
            dateParsedResultElements.push(dateParsedElement.substring(4, 6));
          } else {
            dateParsedResultElements.push(`${dateParsedElement.substring(0, 3)}${dateParsedElement.substring(4, 5)}`);
          }
        } else {
          if (!dateParsedElements[i]) {
            dateParsedResultElements.push('');
          }
          dateParsedResultElements.push(dateParsedElement);
          if (!dateParsedElements[i + 1]) {
            dateParsedResultElements.push('');
          }
        }
      } else if (i === 1) {
        if (dateParsedElements.length === 2 && dateParsedElement.length > 2) {
          dateParsedResultElements.push(dateParsedElement.substring(0, 2));
          dateParsedResultElements.push(dateParsedElement.substring(2, 4));
        } else if (dateParsedElementsFiltered.length === 3 && dateParsedElement.length > 2) {
          dateParsedResultElements.push(`${dateParsedElement.substring(0, 1)}${dateParsedElement.substring(2)}`);
        } else {
          dateParsedResultElements.push(dateParsedElement);
        }
      } else if (i === 2) {
        if (dateParsedElementsFiltered.length === 3 && dateParsedElement.length > 2) {
          dateParsedResultElements.push(`${dateParsedElement.substring(0, 1)}${dateParsedElement.substring(2, 3)}`);
        } else {
          dateParsedResultElements.push(dateParsedElement.substring(0, 2));
        }
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
  if (dateParsedElements.length === 1) {
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
          if (!dateParsedElements[i + 1]) {
            dateParsedResultElements.push('');
          }
        } else if (dateParsedElement?.length < 5 && dateParsedElements?.length === 1) {
          dateParsedResultElements.push(dateParsedElement?.substring(0, 2));
          dateParsedResultElements.push(dateParsedElement?.substring(2, 4));
        } else if (dateParsedElementsFiltered.length === 3) {
          dateParsedResultElements.push(`${dateParsedElement.substring(0, 1)}${dateParsedElement.substring(2)}`);
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
        } else if (dateParsedElement?.length && dateParsedElement?.length >= 3 && dateParsedElement?.length < 5) {
          if (dateParsedElementsFiltered.length === 3 && dateParsedElement.length > 2) {
            dateParsedResultElements.push(`${dateParsedElement.substring(0, 1)}${dateParsedElement.substring(2)}`);
          } else {
            const middleValue: number = Number(dateParsedElement?.substring(0, 2));
            if (middleValue > 19) {
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
              dateParsedResultElements.push(dateParsedElement?.substring(2));
            }
          }
        }
      } else if (i === 2 && dateParsedElement && dateParsedElements[i - 1].length < 5) {
        if (dateParsedElement?.length > 4) {
          dateParsedResultElements.push(`${dateParsedElement.substring(0, 3)}${dateParsedElement.substring(4, 5)}`);
        } else {
          dateParsedResultElements.push(dateParsedElement.substring(0, 4));
        }
      }
    }
  }
  return dateParsedResultElements.join('.');
}

export default parseStringInsteadDate;
