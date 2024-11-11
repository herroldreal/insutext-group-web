declare module './components/Header'

declare module 'react-rev-slider';

declare module '../assets/js/wow.min.js'

declare namespace JSX {
    interface IntrinsicElements {
        'rs-layer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'rs-module-wrap': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'rs-module': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'rs-slides': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'rs-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
}