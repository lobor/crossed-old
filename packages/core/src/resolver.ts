// import { isWeb } from './isWeb';
import type {
  CSSObject,
  ITheme,
  OrderedSXResolved,
  Path,
  StyledResolved,
  StyledValue,
  SX,
  SXResolved,
  StyleIds,
} from './types';
import {
  resolvedTokenization,
  resolveTokensFromConfig,
  deepMergeArray,
} from './utils';

function getWeightBaseOnPath(path: Path) {
  const weightObject: {
    styled: Array<any>;
    sx: Array<any>;
    state: Array<any>;
  } = {
    styled: [],
    sx: [],
    state: [],
  };
  const STYLED_PRECENDENCE: any = {
    baseStyle: 1,
    variants: 2,
    compoundVariants: 3,
  };

  const SX_PRECEDENCE: any = {
    style: 1,
    platform: 2,
    colorMode: 3,
    queries: 4,
    state: 5,
    descendants: 6,
  };
  const STATE_PRECENDENCE: any = {
    indeterminate: 1,
    checked: 1,
    readOnly: 1,

    required: 2,
    invalid: 2,

    focus: 3,
    focusVisible: 4,
    hover: 5,
    pressed: 6,
    active: 6,
    loading: 7,

    disabled: 10,
  };

  const tempPath = [...path];

  for (let i = 0; i < tempPath.length; i++) {
    const currentValue = tempPath[i];

    let stateType: any = '';
    switch (currentValue) {
      case 'queries':
        i = i + 2;
        break;
      case 'state':
        stateType = tempPath[i + 1];
        i = i + 1;
        break;
      case 'descendants':
        break;
      default:
    }

    if (STYLED_PRECENDENCE[currentValue]) {
      weightObject.styled.push(STYLED_PRECENDENCE[currentValue]);
    }

    if (SX_PRECEDENCE[currentValue]) {
      weightObject.sx.push(SX_PRECEDENCE[currentValue]);
    }
    if (currentValue === 'state' && STATE_PRECENDENCE[stateType]) {
      weightObject.state.push(STATE_PRECENDENCE[stateType]);
    }
  }

  const weightObjectStyledValue = weightObject.styled.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectSxValue = weightObject.sx.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectStateValue = weightObject.state.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  // console.log(tempPath, weightObject, 'temp path here');

  let weightedStyleString = '';
  if (weightObjectStyledValue < 10) {
    weightedStyleString = '0' + weightObjectStyledValue;
  } else {
    weightedStyleString = '' + weightObjectStyledValue;
  }

  let weightedSxString = '';
  if (weightObjectSxValue < 10) {
    weightedSxString = '0' + weightObjectSxValue;
  } else {
    weightedSxString = '' + weightObjectSxValue;
  }

  let weightedStateString = '';
  if (weightObjectStateValue < 10) {
    weightedStateString = '0' + weightObjectStateValue;
  } else {
    weightedStateString = '' + weightObjectStateValue;
  }

  const weight = parseInt(
    weightedStateString + weightedStyleString + weightedSxString,
    10
  );

  return weight;
}

export function checkAndPush(item: any, ret: any, keyToCheck: any) {
  function getIndexes(array: any, str: any) {
    return array
      .map((item: any, index: number) => (item === str ? index : -1))
      .filter((i: any) => i !== -1);
  }

  function createNestedObject(arr: any) {
    let obj = {};
    arr.reduce((acc: any, curr: any) => {
      return (acc[curr] = {});
    }, obj);
    return obj;
  }

  function setNestedObjectValue(obj: any, keyPath: any, value: any) {
    // If the key path is empty, return the value
    if (keyPath.length === 0) return value;

    // Otherwise, set the value at the current key path and recurse
    const key = keyPath[0];
    obj[key] = obj[key] || {};
    obj[key] = setNestedObjectValue(obj[key], keyPath.slice(1), value);
    return obj;
  }
  // keyToCheck = "baseStyle" | "variants" | "sizes"
  if (item.meta.path.includes(keyToCheck)) {
    // if (!item.meta.path.includes('state')) {
    //   if (!ret.ids) {
    //     ret.ids = [];
    //   }
    //   ret.ids.push(item.meta.cssId);
    //   ret.props = item?.meta?.props;
    // } else
    if (
      !item.meta.path.includes('state') &&
      !item.meta.path.includes('colorMode')
    ) {
      if (!ret.ids) {
        ret.ids = [];
      }
      ret.ids.push(item.meta.cssId);
      ret.props = item?.meta?.props;

      // ret.default.push(item.meta.cssId);
    } else if (
      item.meta.path.includes('state') ||
      item.meta.path.includes('colorMode')
    ) {
      const allStates = getIndexes(item.meta.path, 'state');
      const allColorModes = getIndexes(item.meta.path, 'colorMode');

      // const allStatesAndColorMode = [...allStates, ...allColorModes];

      const mergeAllStateKey: any = [];

      allStates.forEach((statePath: any) => {
        const state = item.meta.path[statePath + 1];
        mergeAllStateKey.push('state');
        mergeAllStateKey.push(state);
      });

      allColorModes.forEach((colorModePath: any) => {
        const colorMode = item.meta.path[colorModePath + 1];
        mergeAllStateKey.push('colorMode');
        mergeAllStateKey.push(colorMode);
      });

      const stateObject = createNestedObject(mergeAllStateKey);

      setNestedObjectValue(stateObject, mergeAllStateKey, {
        ids: [item.meta.cssId],
        props: item?.meta?.props,
      });

      deepMergeArray(ret, stateObject);
    }
  }
}

export function getComponentResolved(orderedResolved: OrderedSXResolved) {
  return orderedResolved.filter(
    (item: any) => !item.meta.path?.includes('descendants')
  );
}

export function getDescendantResolved(orderedResolved: OrderedSXResolved) {
  return orderedResolved.filter((item: any) =>
    item.meta.path?.includes('descendants')
  );
}

export function getComponentResolvedBaseStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      !item.meta.path?.includes('descendants') &&
      !(
        item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants')
      )
  );
}

export function getComponentResolvedVariantStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      !item.meta.path?.includes('descendants') &&
      (item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants'))
  );
}

export function getDescendantResolvedBaseStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      item.meta.path?.includes('descendants') &&
      !(
        item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants')
      )
  );
}

export function getDescendantResolvedVariantStyle(
  orderedResolved: OrderedSXResolved
) {
  return orderedResolved.filter(
    (item: any) =>
      item.meta.path?.includes('descendants') &&
      (item.meta.path?.includes('variants') ||
        item.meta.path?.includes('compoundVariants'))
  );
}

export function getComponentStyleIds(arr: OrderedSXResolved): StyleIds {
  const ret: StyleIds = {
    baseStyle: {},
    variants: {},
    compoundVariants: [],
    // sizes: {},
  };
  for (let i in arr) {
    const item = arr[i];
    checkAndPush(item, ret.baseStyle, 'baseStyle');

    let variantType: string | number = '';
    let variantName: string | number = '';

    if (item?.meta?.path?.includes('variants')) {
      variantType = item.meta.path[item.meta.path.indexOf('variants') + 1];
      variantName = item.meta.path[item.meta.path.indexOf('variants') + 2];

      if (!ret.variants[variantType]) {
        ret.variants[variantType] = { [variantName]: { ids: [] } };
      } else if (
        ret.variants[variantType] &&
        !ret.variants[variantType][variantName]
      ) {
        ret.variants[variantType][variantName] = { ids: [] };
      }

      checkAndPush(item, ret.variants[variantType][variantName], 'variants');
      // console.log('styleids>>Var', ret);
    }

    // if (item?.meta?.path?.includes('variants')) {
    //   variantType = item.meta.path[item.meta.path.indexOf('variants') + 1];
    //   variantName = item.meta.path[item.meta.path.indexOf('variants') + 2];

    //   if (!ret.variants[variantType]) {
    //     ret.variants[variantType] = { [variantName]: { ids: [] } };
    //   } else if (
    //     ret.variants[variantType] &&
    //     !ret.variants[variantType][[variantName]]
    //   ) {
    //     ret.variants[variantType][variantName] = { ids: [] };
    //   }

    //   checkAndPush(item, ret.variants[variantType][variantName], 'variants');
    // }

    if (item?.meta?.path?.includes('compoundVariants')) {
      // let conditionStartIndex = item.meta.path.indexOf('compoundVariants');
      // let condition = {} as any;

      // for (let i = conditionStartIndex + 1; i < item.meta.path.length; i++) {
      //   if ((i - conditionStartIndex) % 2 !== 0) {
      //     condition[item.meta.path[i]] = item.meta.path[i + 1];
      //     i++;
      //   }
      // }

      // console.log(condition, item.meta, 'hello world');
      // console.log('styleids>>', ret.compoundVariants);

      // if (ret.compoundVariants.length === 0)
      //   ret.compoundVariants = [{ ids: [], n: 'alsjnf' }];

      const condition = item?.meta?.condition;
      let conditionIndex = ret.compoundVariants.findIndex(
        (item) => item.condition === condition
      );
      // if (
      //   ret.compoundVariants.findIndex((item) => item.condition === condition) >
      //   -1
      // ) {
      // }

      if (conditionIndex === -1) {
        ret.compoundVariants.push({ condition: item?.meta?.condition });
        conditionIndex = ret.compoundVariants.length - 1;
      }
      // console.log('>>>><<<<<', conditionIndex);

      checkAndPush(
        item,
        ret.compoundVariants[conditionIndex],
        'compoundVariants'
      );

      // checkAndPush(item, ret.compoundVariants, 'compoundVariants');
      // console.log('styleids>>', ret.compoundVariants);
    }
  }

  return ret;
}

export function getDescendantStyleIds(
  arr: any,
  descendantStyle: any = []
): StyleIds {
  const ret: any = {};
  // return ret;
  descendantStyle.forEach((style: any) => {
    const filteredOrderListByDescendant = arr.filter(
      (item: any) =>
        item.meta.path[item.meta.path.lastIndexOf('descendants') + 1] === style
    );

    ret[style] = getComponentStyleIds(filteredOrderListByDescendant);
  });

  return ret;
}

export function sxToSXResolved(
  sx: SX,
  path: Path = [],
  meta: any,
  CONFIG: any
): SXResolved {
  const resolvedCSSStyle = StyledValueToCSSObject(sx?.style, CONFIG);

  // console.log('hello here ***', sx?.style, resolvedCSSStyle);
  const styledValueResolvedWithMeta = {
    original: sx?.style ?? {},
    resolved: resolvedCSSStyle,
    meta: {
      ...meta,
      path,
      weight: getWeightBaseOnPath([...path, 'style']),
      // @ts-ignore
      props: sx?.props,
      // cssId: ,
      // cssRuleset: ,
    },
  };

  // console.log('sx !@#!@#!@#!@#', sx);
  // console.log(sx, '********');
  const ret: SXResolved = {
    //@ts-ignore
    styledValueResolvedWithMeta: styledValueResolvedWithMeta,
    //@ts-ignore
    queriesResolved: sx?.queries
      ? sx.queries.map((query: any, index: any) => {
          const resolvedCondition = resolveTokensFromConfig(CONFIG, {
            condition: query.condition,
          }).condition;

          const sxResolvedValue = sxToSXResolved(
            query.value,
            [...path, 'queries', index, query.condition],
            { queryCondition: resolvedCondition },
            CONFIG
          );

          if (sxResolvedValue?.styledValueResolvedWithMeta) {
            sxResolvedValue.styledValueResolvedWithMeta.meta.queryCondition =
              resolvedCondition;
          }

          return {
            original: {
              condition: query.condition,
              value: query.value,
            },
            resolved: {
              condition: resolvedCondition,
              value: {
                ...sxResolvedValue,
              },
            },
          };
        })
      : undefined,
    platform: sx?.platform
      ? Object.keys(sx.platform).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.platform[key],
              [...path, 'platform', key],
              meta,
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
    colorMode: sx?.colorMode
      ? Object.keys(sx.colorMode).reduce((acc, key) => {
          const sxResolved = sxToSXResolved(
            //@ts-ignore
            sx.colorMode[key],
            [...path, 'colorMode', key],
            { colorMode: key, ...meta },
            CONFIG
          );

          if (sxResolved?.styledValueResolvedWithMeta) {
            sxResolved.styledValueResolvedWithMeta.meta.colorMode = key;
          }
          return {
            ...acc,
            [key]: sxResolved,
          };
        }, {})
      : undefined,
    state: sx?.state
      ? Object.keys(sx.state).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.state[key],
              [...path, 'state', key],
              meta,
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
    descendants: sx?.descendants
      ? Object.keys(sx.descendants).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.descendants[key],
              [...path, 'descendants', key],
              meta,
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
  };

  // CSS computation based on Meta data
  // const { cssId, cssRuleset } = getCSSIdAndRuleset(
  //   ret.styledValueResolvedWithMeta,
  //   path
  // );

  // if(ret.queriesResolved) {
  //   // access the ret.queriesResolved[i].resolved.condition
  // }

  // console.log(ret.queriesResolved, 'ret ****');
  // console.log(ret.colorMode, 'colorMode ret ****');
  // ret.styledValueResolvedWithMeta.meta.cssId = cssId;
  // ret.styledValueResolvedWithMeta.meta.cssRuleset = cssRuleset;

  return ret;
}
export function StyledValueToCSSObject(
  input: StyledValue | undefined,
  CONFIG: any
): CSSObject {
  if (!input) {
    return {};
  }
  // return input;
  return resolvedTokenization(input, CONFIG);
}
export function SXResolvedToOrderedSXResolved(
  sxResolved: SXResolved
): OrderedSXResolved {
  let orderedSXResolved: any = [];
  if (sxResolved?.styledValueResolvedWithMeta?.original) {
    orderedSXResolved = [sxResolved.styledValueResolvedWithMeta];
  }

  if (sxResolved?.platform) {
    Object.keys(sxResolved.platform).forEach((key) => {
      //@ts-ignore
      const platformSXResolved = sxResolved?.platform[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(platformSXResolved)
      );
    });
  }
  if (sxResolved?.colorMode) {
    Object.keys(sxResolved.colorMode).forEach((key) => {
      //@ts-ignore
      const colorModeSXResolved = sxResolved.colorMode[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(colorModeSXResolved)
      );
    });
  }
  if (sxResolved?.queriesResolved) {
    sxResolved.queriesResolved.forEach((queryResolved) => {
      orderedSXResolved.push(
        //@ts-ignore

        ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
      );
    });
  }
  if (sxResolved?.state) {
    Object.keys(sxResolved.state).forEach((key) => {
      //@ts-ignore
      const stateSXResolved = sxResolved.state[key];
      // stateSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.state + (STATE_PRECENDENCE[key] || 0) / 100;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(stateSXResolved));
      // orderedSXResolved.push(stateSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved?.descendants) {
    Object.keys(sxResolved.descendants).forEach((key) => {
      //@ts-ignore
      const descendantSXResolved = sxResolved.descendants[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(descendantSXResolved)
      );
    });
  }
  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}
function reduceAndResolveCompoundVariants(
  compoundVariants: any,
  path: Array<string | number>,
  CONFIG: any
) {
  const compoundVariantsResolved = compoundVariants?.map(
    (compoundVariant: any, index: number) => {
      const { value, ...condition } = compoundVariant;
      // let conditionPath: Array<string> = [];
      // Object.keys(condition).map((key) => {
      //   conditionPath.push(key);
      //   conditionPath.push(condition[key]);
      // });
      return sxToSXResolved(
        //@ts-ignore

        value,
        [...path, 'compoundVariants', index],
        {
          condition,
        },
        CONFIG
      );
    }
  );
  // console.log(compoundVariantsResolved, 'compoundVariantsResolved');

  return compoundVariantsResolved;
}
export function styledToStyledResolved<Variants, P>(
  styled: ITheme<Variants, P>,
  path: Path = [],
  CONFIG: any
): StyledResolved {
  // console.log(
  //   'styled.compoundVariants',
  //   reduceAndResolveCompoundVariants(styled.compoundVariants, path, CONFIG)
  // );

  return {
    baseStyle: styled?.baseStyle
      ? //@ts-ignore
        sxToSXResolved(styled.baseStyle, [...path, 'baseStyle'], {}, CONFIG)
      : undefined,
    variants: styled?.variants
      ? Object.keys(styled.variants).reduce(
          (acc, key1) => ({
            ...acc,
            // @ts-ignore
            [key1]: Object.keys(styled?.variants?.[key1]).reduce(
              (acc, key) => ({
                ...acc,
                [key]: sxToSXResolved(
                  //@ts-ignore
                  styled.variants[key1][key],
                  [...path, 'variants', key1, key],
                  {},
                  CONFIG
                ),
              }),
              {}
            ),

            // sxToSXResolved(
            //   //@ts-ignore
            //   styled.variants[key],
            //   [...path, 'variants', key],
            //   {},
            //   CONFIG
            // ),
          }),
          {}
        )
      : undefined,
    // @ts-ignore
    compoundVariants: styled?.compoundVariants
      ? // @ts-ignore
        reduceAndResolveCompoundVariants(styled.compoundVariants, path, CONFIG)
      : undefined,
  };
}

export function styledResolvedToOrderedSXResolved(
  styledResolved: StyledResolved
): OrderedSXResolved {
  const orderedSXResolved: OrderedSXResolved = [
    //@ts-ignore
    ...SXResolvedToOrderedSXResolved(styledResolved?.baseStyle),
  ];

  if (styledResolved.variants) {
    Object.keys(styledResolved.variants).forEach((key) => {
      //@ts-ignore
      const variantSXResolved = styledResolved?.variants[key];
      // variantSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.variants;
      Object.keys(variantSXResolved).forEach((variantKey) => {
        // @ts-ignore
        const variantValueSXResolved = variantSXResolved[variantKey];

        orderedSXResolved.push(
          ...SXResolvedToOrderedSXResolved(variantValueSXResolved)
        );
      });
    });
  }

  if (styledResolved.compoundVariants) {
    styledResolved.compoundVariants.forEach((compoundVariant: any) => {
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(compoundVariant));
    });
  }

  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}
export function getStyleIds(
  orderedResolved: OrderedSXResolved,
  componentStyleConfig: any
): {
  component: StyleIds;
  descendant: StyleIds;
} {
  const componentOrderResolved = getComponentResolved(orderedResolved);
  const descendantOrderResolved = getDescendantResolved(orderedResolved);

  const component = getComponentStyleIds(componentOrderResolved);
  const descendant = getDescendantStyleIds(
    descendantOrderResolved,
    componentStyleConfig.descendantStyle
  );

  return {
    component,
    descendant,
  };
}
