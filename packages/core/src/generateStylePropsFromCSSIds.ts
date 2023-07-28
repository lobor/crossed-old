import { Dimensions, Platform } from 'react-native';

export function getClosestBreakpoint(
  values: Record<string, any>,
  point: number
) {
  const dimValues = Object.values(values);
  let index = -1;
  let breakpointsObj: any = {};
  for (let i = 0; i < dimValues.length; i++) {
    breakpointsObj[dimValues[i]] = i;
  }
  const breakpoints = Object.keys(breakpointsObj);

  for (let i = 0; i < breakpoints.length; i++) {
    if (parseInt(breakpoints[i]) === point) {
      index = breakpointsObj[breakpoints[i]];
      break;
    } else if (parseInt(breakpoints[i]) > point && i !== 0) {
      index = breakpointsObj[breakpoints[i - 1]];
      break;
    }
    // If windowWidth is greater than last available breakpoint clamp it to last index
    else if (parseInt(breakpoints[i]) < point && i === dimValues.length - 1) {
      index = breakpointsObj[breakpoints[i]];
      break;
    }
  }
  return breakpoints[index];
}

function getMinWidthFromMediaQuery(mediaQuery: string) {
  const regex = /\(\s*min-width:\s*(\d+)px\s*\)/;
  const matches = regex.exec(mediaQuery);
  if (matches) {
    return parseInt(matches[1], 10);
  }
  return 0;
}

export function getClosestBreakpointValue(
  mediaQueries: Record<string, any>,
  value: number
) {
  if (!mediaQueries) return;

  const dimValues = Object.values(mediaQueries);
  let index: any = -1;

  let breakpointsObj: any = {};
  for (let i = 0; i < dimValues.length; i++) {
    const minWidth = getMinWidthFromMediaQuery(dimValues[i]);
    breakpointsObj[minWidth] = dimValues[i];
  }

  const breakpoints = Object.keys(breakpointsObj);
  for (let i = 0; i < breakpoints.length; i++) {
    if (parseInt(breakpoints[i]) === value) {
      index = breakpoints[i];
      break;
    } else if (parseInt(breakpoints[i]) > value && i !== 0) {
      index = breakpoints[i - 1];
      break;
    }
    // If windowWidth is greater than last available breakpoint clamp it to last index
    else if (parseInt(breakpoints[i]) < value && i === dimValues.length - 1) {
      index = breakpoints[i];
      break;
    }
  }

  return index;
}

function getWidthFromMediaQuery(condition: string) {
  var match = condition.match(/\(min-width:\s*(\d+)px\)/);
  if (match) {
    return parseInt(match[1]);
  } else {
    return null;
  }
}

function isValidBreakpoint(config: any, queryCondition: any) {
  const windowWidth = Dimensions.get('window')?.width;

  const currentBreakpointValue = getClosestBreakpointValue(
    config.tokens.mediaQueries,
    windowWidth
  );

  if (
    getWidthFromMediaQuery(queryCondition) !== null &&
    // @ts-ignore
    getWidthFromMediaQuery(queryCondition) <= currentBreakpointValue
  ) {
    return true;
  }

  return false;
}
export function generateStylePropsFromCSSIds(
  props: any,
  styleCSSIds: any,
  globalStyleMap: any,
  config: any
) {
  // for RN
  const styleObj: any = [];
  let styleCSSIdsString: any = '';

  if (Platform.OS !== 'web') {
    styleCSSIds.forEach((cssId: any) => {
      if (globalStyleMap.get(cssId)) {
        // check for queryCondtion
        if (globalStyleMap.get(cssId).meta.queryCondition) {
          if (
            isValidBreakpoint(
              config,
              globalStyleMap.get(cssId).meta.queryCondition
            )
          ) {
            styleObj.push(globalStyleMap.get(cssId).resolved);
          }
        } else {
          styleObj.push(globalStyleMap.get(cssId).resolved);
        }
        //
      }
    });
  } else {
    styleCSSIdsString = styleCSSIds.join(' ');
  }

  return {
    'dataSet': {
      ...props.dataSet,
      style: props?.dataSet?.style
        ? props.dataSet.style + ' ' + styleCSSIdsString
        : styleCSSIdsString,
    },
    'data-style': props?.dataSet?.style
      ? props.dataSet.style + ' ' + styleCSSIdsString
      : styleCSSIdsString,
    'style': props.style ? [...styleObj, props.style] : styleObj,
  };
}
