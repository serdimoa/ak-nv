/**
 * Created by serdimoa on 16.03.16.
 */

declare namespace __React {

    namespace __Motion {
        // === basic reused types ===
        // type of the second parameter of `spring(val, config)` all fields are optional
        interface SpringHelperConfig {
            stiffness?: number;
            damping?: number;
            precision?: number;
            // TODO: add onRest. Not public yet
        }

        // the object returned by `spring(value, yourConfig)`. Used internally only!
        interface OpaqueConfig {
            val: number;
            stiffness: number;
            damping: number;
            precision: number;
            // TODO: add onRest. Not public yet
        }
        // your typical style object given in props. Maps to a number or a spring config
        interface Style {
            [key: string]: number | OpaqueConfig;
        }
        // the interpolating style object, with the same keys as the above Style object,
        // with the values mapped to numbers, naturally
        type PlainStyle = {
            [key: string]: number
        };
        // internal velocity object. Similar to PlainStyle, but whose numbers represent
        // speed. Might be exposed one day.
        type Velocity = {
            [key: string]: number
        };

        // your typical style object given in props. Maps to a number or a spring config
        interface Style {
            [key: string]: number | OpaqueConfig;
        }
        // the interpolating style object, with the same keys as the above Style object,
        // with the values mapped to numbers, naturally
        interface PlainStyle {
            [key: string]: number;
        }
        // internal velocity object. Similar to PlainStyle, but whose numbers represent
        // speed. Might be exposed one day.
        interface Velocity {
            [key: string]: number;
        }

        // your typical style object given in props. Maps to a number or a spring config
        interface Style {
            [key: string]: number | OpaqueConfig;
        }
        // the interpolating style object, with the same keys as the above Style object,
        // with the values mapped to numbers, naturally
        interface PlainStyle {
            [key: string]: number;
        }
        // internal velocity object. Similar to PlainStyle, but whose numbers represent
        // speed. Might be exposed one day.
        interface Velocity {
            [key: string]: number;
        }

        type MotionProps = {
            defaultStyle?: PlainStyle;
            style: Style;
            children: (interpolatedStyle: PlainStyle) => ReactElement;
        };

        // === Motion ===
        type MotionProps = {
            defaultStyle? : PlainStyle;
            style: Style;
            children: (interpolatedStyle: PlainStyle) => ReactElement;
        };

// === StaggeredMotion ===
        interface StaggeredProps {
            defaultStyles? : Array <PlainStyle>;
            styles: (previousInterpolatedStyles: Array<PlainStyle>) => Array<Style>;
            children: (interpolatedStyles: Array<PlainStyle>) => ReactElement;
        }

// === TransitionMotion ===
        interface TransitionStyle {
            key: string; // unique ID to identify component across render animations
            data? : any; // optional data you want to carry along the style, e.g. itemText
            style: Style; // actual style you're passing
        }

        interface TransitionPlainStyle {
            key: string;
            data? : any;
            // same as TransitionStyle, passed as argument to style/children function
            style: PlainStyle;
        }

        // === Motion ===
        interface MotionProps {
            defaultStyle? : PlainStyle;
            style: Style;
            children: (interpolatedStyle: PlainStyle) => ReactElement;
        }

        // === StaggeredMotion ===
        interface StaggeredProps {
            defaultStyles? : Array <PlainStyle>;
            styles: (previousInterpolatedStyles: Array <PlainStyle>) => Array < Style >;
            children: (interpolatedStyles: Array <PlainStyle>) => ReactElement;
        }

        // === TransitionMotion ===
        interface TransitionStyle {
            key: string; // unique ID to identify component across render animations
            data? : any; // optional data you want to carry along the style, e.g. itemText
            style: Style; // actual style you're passing
        }
        type TransitionPlainStyle = {
            key: string,
            data? : any,
            // same as TransitionStyle, passed as argument to style/children function
            style: PlainStyle
        };
        function WillEnter(styleThatEntered: TransitionStyle): PlainStyle;

        function WillLeave(styleThatLeft: TransitionStyle): Style;

        interface TransitionProps {
            defaultStyles? : Array < TransitionPlainStyle >;
            styles: Array < TransitionStyle > | (previousInterpolatedStyles : Array<TransitionPlainStyle>) => Array < TransitionStyle >;
            children: (interpolatedStyles: Array<TransitionPlainStyle>) => ReactElement;
            willEnter ? : WillEnter;
            willLeave ? : WillLeave;
        }
    }
}
