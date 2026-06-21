tailwind.config = {
    theme: {
        extend: {
            colors: {
                base: '#FDFBF7',
                surface: '#FFFFFF',
                textMain: '#2D2727',
                textMuted: '#5A5252',
                textInverse: '#FBF1EC',
                accentPink: '#F8E8EE',
                accentLilac: '#EFE9F4',
                accentPeach: '#FDECE4',
                borderSoft: '#F0EBE1',
                /* Tonos saturados de la misma familia, para dar contraste sin romper la armonía */
                rose: '#E2799F',
                lilacBold: '#9B7FC7',
                peachBold: '#E8965E',
                borderRose: '#E9AFC7',
                borderLilac: '#C3AEE0',
                borderPeach: '#F0BD92',
                /* Tono profundo para los bloques de alto contraste */
                plum: '#341F30',
                plumSoft: '#4F2E48'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['"Fraunces"', 'serif']
            }
        }
    }
}
