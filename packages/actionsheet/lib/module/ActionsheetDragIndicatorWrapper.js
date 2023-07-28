function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';
import { mergeRefs } from '@crossed/utils';
import { useActionsheetContent } from './ActionsheetContentContext';
const windowHeight = Dimensions.get('window').height;
export function ActionsheetDragIndicatorWrapper(StyledActionsheetDragIndicatorWrapper) {
  return /*#__PURE__*/forwardRef((props, ref) => {
    const {
      pan,
      handleClose,
      handleCloseBackdrop,
      snapPoints
    } = useActionsheetContent('ActionsheetContentContext');
    const handleCloseRef = React.useRef(null);
    const panResponder = React.useRef(PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        return gestureState.dy > 15;
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, {
            dy: pan.y
          }], {
            useNativeDriver: false
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        const contentSheetHeight = windowHeight * (parseFloat(snapPoints[0]) * 0.01);
        if (contentSheetHeight / 4 < gestureState.dy) {
          handleCloseBackdrop();
          Animated.timing(pan, {
            toValue: {
              x: 0,
              y: contentSheetHeight
            },
            duration: 200,
            useNativeDriver: true
          }).start(handleClose);
        } else {
          Animated.spring(pan, {
            toValue: {
              x: 0,
              y: 0
            },
            overshootClamping: true,
            useNativeDriver: true
          }).start();
        }
      }
    })).current;
    const mergedRef = mergeRefs([ref, handleCloseRef]);
    return /*#__PURE__*/React.createElement(StyledActionsheetDragIndicatorWrapper, _extends({}, panResponder.panHandlers, props, {
      ref: mergedRef
    }));
  });
}
//# sourceMappingURL=ActionsheetDragIndicatorWrapper.js.map